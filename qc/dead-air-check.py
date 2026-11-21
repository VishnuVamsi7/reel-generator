#!/usr/bin/env python3
"""Dead-air check for Instagram reels — ported from nemock/video-explainer-system.

Source: nemock/video-explainer-system `src/explainer/qa.py` (MIT License,
Copyright (c) 2026 Dave Saunders). That QA pass runs ffmpeg `freezedetect`,
intersects the freeze spans with the word timeline, and flags visual dead air
during speech. This port keeps the same core (freezedetect + word-timeline
intersection) and adds the per-beat verdict our pipeline needs:

  - a beat FAILS when >= 30% of it is frozen during speech, OR when any single
    continuous freeze during speech lasts >= 2.0 s;
  - the reel FAILS when any beat fails.

Calibration (2026-10-27, Gmail reel, 37.96 s, 720x1280):
  freezedetect noise=-60 dB, min duration 0.6 s (nemock's defaults).
  Veo hook (Beat 1) and LTX ambient end card (Beat 7): 0.0 s frozen -> PASS.
  Card beats 2-6: 37-69% frozen, longest continuous freeze 0.9-3.1 s -> FAIL.
  The -60 dB threshold is sensitive enough to catch a static card whose only
  motion is typing/checkmarks, but not so sensitive that real footage trips it:
  at -50 dB the same reel reports far longer merged freezes (small text
  animations count as frozen), and at min duration 1.0 s Beat 4 (longest freeze
  0.88 s, 37% frozen) escapes. -60 dB / 0.6 s is the calibrated pair.

Inputs:
  VIDEO (positional)     finished reel mp4
  --words WORDS.json     word timestamps: {"words": [{"word","start","end"}]}
                         (faster-whisper format) or a bare list of the same.
  --audio VOICEOVER.mp3  if --words is absent, generate word timestamps from
                         this audio with faster-whisper (uses
                         ~/.whisper-venv/bin/python when present).
  --beats BEATS.json     [{"name","start","end"}] per-beat windows. Without it
                         the whole video is one beat named "full".
  --sentences S.json     fallback speech spans [{"start","end"}] when no words
                         can be produced (e.g. the per-sentence table).
  --noise / --min-dur    freezedetect parameters (defaults -60 dB / 0.6 s).
  --fail-fraction FLOAT  beat frozen-fraction fail threshold (default 0.30).
  --fail-span FLOAT      longest continuous freeze fail threshold in s (2.0).
  --longest-shot FLOAT   pacing warning threshold in s (default 8.0, nemock).
  --out REPORT.json      write the machine-readable report here too.

Without word timestamps of any kind the whole video is treated as speech
(every freeze counts), which is the conservative fallback.

Exit code: 0 = PASS, 1 = FAIL.
"""
import argparse
import json
import math
import re
import statistics
import subprocess
import sys
import tempfile
from pathlib import Path


def run_freezedetect(video: Path, noise_db: float, min_dur: float):
    """Return merged [(start, end)] frozen segments (seconds)."""
    cmd = [
        "ffmpeg", "-hide_banner", "-i", str(video),
        "-vf", f"freezedetect=n={noise_db}dB:d={min_dur}",
        "-map", "0:v", "-f", "null", "-",
    ]
    err = subprocess.run(cmd, capture_output=True, text=True).stderr
    spans, start = [], None
    for line in err.splitlines():
        m = re.search(r"freeze_start: ([\d.]+)", line)
        if m:
            start = float(m.group(1))
        m = re.search(r"freeze_end: ([\d.]+)", line)
        if m and start is not None:
            spans.append((start, float(m.group(1))))
            start = None
    duration = probe_duration(video)
    if start is not None:  # freeze ran to end of file without an end marker
        spans.append((start, duration))
    return merge_spans(spans), duration


def merge_spans(spans, gap=0.06):
    """Merge spans separated by <= gap seconds (freezedetect emits adjacent
    spans back-to-back when a freeze is interrupted by a single changed frame;
    perceptually that is one continuous still)."""
    out = []
    for a, b in sorted(spans):
        if out and a - out[-1][1] <= gap:
            out[-1] = (out[-1][0], max(out[-1][1], b))
        else:
            out.append((a, b))
    return out


def probe_duration(video: Path) -> float:
    out = subprocess.run(
        ["ffprobe", "-v", "error", "-show_entries", "format=duration",
         "-of", "csv=p=0", str(video)],
        capture_output=True, text=True).stdout.strip()
    return float(out)


def overlap(a0, a1, b0, b1) -> float:
    return max(0.0, min(a1, b1) - max(a0, b0))


def load_words(args):
    """Return [(start, end)] speech spans from words, or None to mean
    'treat the whole video as speech'."""
    if args.words:
        data = json.loads(Path(args.words).read_text())
        words = data.get("words", data) if isinstance(data, dict) else data
        spans = [(float(w["start"]), float(w["end"])) for w in words
                 if "start" in w and "end" in w]
        return merge_spans(spans, gap=0.0) if spans else None
    if args.audio:
        words = whisper_words(Path(args.audio))
        if words:
            return merge_spans(words, gap=0.0)
    if args.sentences:
        data = json.loads(Path(args.sentences).read_text())
        segs = data.get("sentences", data) if isinstance(data, dict) else data
        spans = [(float(s["start"]), float(s["end"])) for s in segs]
        return merge_spans(spans, gap=0.0) if spans else None
    return None


def whisper_words(audio: Path):
    """Generate word timestamps with faster-whisper (base model), using the
    project's whisper venv when present, else the system python."""
    snippet = (
        "import json,sys\n"
        "from faster_whisper import WhisperModel\n"
        "m = WhisperModel('base', device='cpu', compute_type='int8')\n"
        "segs, _ = m.transcribe(sys.argv[1], word_timestamps=True)\n"
        "words = [{'word': w.word.strip(), 'start': w.start, 'end': w.end}\n"
        "         for s in segs for w in s.words]\n"
        "print(json.dumps({'words': words}))\n"
    )
    venv_py = Path.home() / ".whisper-venv" / "bin" / "python"
    py = str(venv_py) if venv_py.exists() else sys.executable
    with tempfile.NamedTemporaryFile("w", suffix=".py", delete=False) as f:
        f.write(snippet)
        script = f.name
    try:
        out = subprocess.run([py, script, str(audio)],
                             capture_output=True, text=True, timeout=600)
        data = json.loads(out.stdout.strip().splitlines()[-1])
        return [(float(w["start"]), float(w["end"]))
                for w in data.get("words", [])]
    except Exception as exc:  # noqa: BLE001 - whisper is best-effort here
        print(f"warning: word-timestamp generation failed ({exc}); "
              "treating whole video as speech", file=sys.stderr)
        return []
    finally:
        Path(script).unlink(missing_ok=True)


def main():
    ap = argparse.ArgumentParser(description="Dead-air check: freezedetect x word timeline")
    ap.add_argument("video", type=Path)
    ap.add_argument("--words", type=Path)
    ap.add_argument("--audio", type=Path)
    ap.add_argument("--beats", type=Path)
    ap.add_argument("--sentences", type=Path)
    ap.add_argument("--noise", type=float, default=-60.0)
    ap.add_argument("--min-dur", type=float, default=0.6)
    ap.add_argument("--fail-fraction", type=float, default=0.30)
    ap.add_argument("--fail-span", type=float, default=2.0)
    ap.add_argument("--longest-shot", type=float, default=8.0)
    ap.add_argument("--out", type=Path)
    args = ap.parse_args()

    freezes, duration = run_freezedetect(args.video, args.noise, args.min_dur)
    speech = load_words(args)
    if speech is None:
        speech = [(0.0, duration)]

    # Dead air: a freeze span counts WHOLE when it overlaps any speech at
    # all (nemock's rule). Clipping freezes to the word spans themselves
    # undercounts badly: the ~100-300 ms gaps between words are still
    # speech, and a viewer experiences the full freeze, not its fragments.
    # A freeze falling entirely inside a real silence (no word overlap)
    # does not count.
    dead = []
    for a, b in freezes:
        if any(overlap(a, b, s0, s1) > 0 for s0, s1 in speech):
            dead.append((a, b))
    dead = merge_spans(dead, gap=0.0)
    dead_total = sum(b - a for a, b in dead)

    if args.beats:
        beats = json.loads(Path(args.beats).read_text())
        beats = beats.get("beats", beats) if isinstance(beats, dict) else beats
    else:
        beats = [{"name": "full", "start": 0.0, "end": duration}]

    results = []
    for beat in beats:
        b0, b1 = float(beat["start"]), float(beat["end"])
        blen = max(b1 - b0, 1e-9)
        frozen = sum(overlap(a, b, b0, b1) for a, b in freezes)
        frozen_speech = sum(overlap(a, b, b0, b1) for a, b in dead)
        in_beat = [(max(a, b0), min(b, b1)) for a, b in dead
                   if overlap(a, b, b0, b1) > 0]
        longest = max((b - a for a, b in in_beat), default=0.0)
        frac = frozen_speech / blen
        reasons = []
        if frac >= args.fail_fraction:
            reasons.append(f"{frac:.0%} frozen during speech "
                           f"(threshold {args.fail_fraction:.0%})")
        if longest >= args.fail_span:
            reasons.append(f"longest continuous freeze {longest:.2f}s "
                           f"(threshold {args.fail_span:.1f}s)")
        results.append({
            "name": beat["name"], "start": b0, "end": b1,
            "duration_s": round(blen, 2),
            "frozen_s": round(frozen, 2),
            "frozen_during_speech_s": round(frozen_speech, 2),
            "frozen_fraction": round(frac, 3),
            "longest_freeze_s": round(longest, 2),
            "verdict": "FAIL" if reasons else "PASS",
            "reasons": reasons,
        })

    warnings = []
    durs = [r["duration_s"] for r in results]
    if durs and max(durs) > args.longest_shot:
        longest_beat = max(results, key=lambda r: r["duration_s"])
        warnings.append(f"longest shot {longest_beat['name']} "
                        f"{longest_beat['duration_s']}s "
                        f"(>{args.longest_shot:.0f}s) — consider splitting")
    if len(durs) > 3 and statistics.mean(durs):
        cv = statistics.pstdev(durs) / statistics.mean(durs)
        if cv < 0.15:
            warnings.append(f"uniform cut rhythm (cv={cv:.2f}) — vary shot "
                            "lengths for energy")
    else:
        cv = 1.0

    verdict = "FAIL" if any(r["verdict"] == "FAIL" for r in results) else "PASS"
    report = {
        "video": str(args.video),
        "duration_s": round(duration, 2),
        "freezedetect": {"noise_db": args.noise, "min_dur_s": args.min_dur},
        "thresholds": {"fail_fraction": args.fail_fraction,
                       "fail_span_s": args.fail_span,
                       "longest_shot_s": args.longest_shot},
        "freeze_spans": [[round(a, 2), round(b, 2)] for a, b in freezes],
        "dead_air_during_speech_s": round(dead_total, 2),
        "dead_air_spans": [[round(a, 2), round(b, 2)] for a, b in dead],
        "beats": results,
        "pacing_cv": round(cv, 3),
        "warnings": warnings,
        "verdict": verdict,
    }
    if args.out:
        Path(args.out).write_text(json.dumps(report, indent=2))

    print(f"dead-air check: {args.video} ({duration:.2f}s) — {verdict}")
    print(f"  freezedetect n={args.noise:.0f}dB d={args.min_dur}s: "
          f"{len(freezes)} freeze span(s), "
          f"dead air during speech {dead_total:.2f}s")
    for r in results:
        line = (f"  {r['name']}: {r['frozen_during_speech_s']:.2f}s frozen "
                f"({r['frozen_fraction']:.0%}), longest {r['longest_freeze_s']:.2f}s "
                f"— {r['verdict']}")
        if r["reasons"]:
            line += " — " + "; ".join(r["reasons"])
        print(line)
    for w in warnings:
        print(f"  warning: {w}")
    return 0 if verdict == "PASS" else 1


if __name__ == "__main__":
    raise SystemExit(main())

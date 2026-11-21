# Word-sync captions — what we take from nemock/video-explainer-system

Source: nemock/video-explainer-system (MIT). Its media pipeline is
narrate → align → render → mux, all in pure Python with zero LLM calls:

- **Narrate** — Kokoro-82M TTS per segment, loudness-normalized.
- **Align** — torchaudio MMS_FA forced alignment of the narration audio
  against the known transcript, producing word-level timestamps
  (`alignment.json`, `timeline.json`: `words: [{word, start, end, slide}]`).
- **Captions** — word timestamps drive word-synced kinetic captions and
  SRT/VTT sidecars. Its deep-dive caption stitcher concatenates per-segment
  SRTs, offsetting every cue by the ffprobe-EXACT duration of the conformed
  segment (accumulated in ms, never rounded manifest values).
- **Deck** — an HTML deck with a seeded JS animation engine and an ambient
  drifting-glow motion layer, frame-captured via Playwright headless Chrome.

## What we already do

Our pipeline already produces the same core artifact: faster-whisper `base`
word timestamps from the finished voiceover (see
`workspace/instagram/qc/gmail-words.json` — 87 words for the Gmail reel).
Today we use them at sentence granularity: per-sentence spans drive the
`.ass` captions, which are cut to measured audio boundaries (never
evenly spaced guesses). The word timestamps also feed the dead-air check
(`dead-air-check.py`), so QC and the editor now share one timeline.

Workaround worth recording: faster-whisper 1.2.1 in `~/.whisper-venv`
fails on mp3 input (`av` version mismatch — `open() got an unexpected
keyword argument 'metadata_errors'`). Feed it ffmpeg-decoded PCM instead:
`ffmpeg -i voiceover.mp3 -f f32le -ac 1 -ar 16000 -` piped into a numpy
float32 array passed to `transcribe()`. That path avoids `av` entirely.
`dead-air-check.py` does this automatically when given `--audio`.

## What to adopt

1. **Per-word highlight timing.** Use word boundaries to highlight the
   currently spoken word inside a caption line, and to time element reveals
   to the exact word that introduces them. Our captions today are
   sentence-level; the word timestamps we already have make per-word
   emphasis a small step, and it is the cheapest kinetic motion available:
   the highlight itself moves every 200–400 ms even when nothing else does.
2. **The stitching discipline.** When a reel is assembled from segments,
   accumulate cue offsets from ffprobe-exact segment durations, never from
   rounded plan values. Our current `.ass` is built from one continuous
   voiceover so this is not a live bug — but the rule binds the moment any
   reel is assembled from multiple audio pieces.
3. **Keep the alignment JSON as a build artifact.** Every reel folder keeps
   its word-timestamp JSON next to the voiceover (as `gmail-words.json`
   is kept). The dead-air check, the caption build, and any per-word
   highlight all read the same file, so the timeline can never drift
   between QC and the editor.

## What NOT to adopt

- **Kokoro TTS.** We keep Helio: one fixed brand voice, pace calibrated per
  script (speed 80 = 139 wpm on the Gmail script). Swapping voices would
  break the voice identity and the pace calibration. Nemock's own design
  supports this — its align/render/mux stages accept an operator voiceover
  in place of Kokoro with no other change.
- **The Claude Code skill wrapper.** Nemock is a `/explainer` skill for
  Claude Code; we are Muse agents with role guides, not Claude Code. The
  authoring stages (research, script, deck plan) stay our roles
  (director / script-doctor / producer); only the media-path ideas port.
- **VideoToolbox.** Apple-only encode. We use ffmpeg/libx264, which is
  what the laptop and the VM already run.
- **MMS_FA as an aligner.** No reason to swap: faster-whisper word
  timestamps already give us what the pipeline needs. MMS_FA (CPU-viable,
  per its own phase-0 notes) is the fallback if Whisper ever fails, not a
  replacement.

## Full port of its HTML-deck renderer — not attempted, assessment

What it would take: Playwright + Chromium (both available on this VM),
the deck HTML/CSS/JS plus the seeded animation driver, and the ffmpeg
mux — all portable in principle. What does not transfer: VideoToolbox
encode (replace with libx264), the Apple-Silicon assumptions (its memory
stages are serialized for a 16 GB unified-memory Mac; our VM and the
Windows laptop have different budgets and a real GPU), and the Claude
Code skill harness (authoring would need re-implementation as our role
prompts, not a port).

Worth it later? Possibly, for Explained reels: a deterministic deck with
an ambient motion layer and multi-aspect output (9:16 / 16:9 / 4:5 / 1:1
from one render) is a good fit, and deterministic rendering removes a
whole class of "it looked different this time" failures. But only after
the DistilBook free test, and only if the deck's motion passes the
dead-air gate — a drifting glow alone is unlikely to move the frame
enough; it would still need moving-footage backgrounds behind the deck.
Decision deferred; nothing in this job depends on it.

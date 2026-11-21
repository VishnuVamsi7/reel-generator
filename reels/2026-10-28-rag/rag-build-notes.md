# RAG reel — build notes (Wed 2026-10-28, "What is RAG", keyword RAG)

**Status: BUILT + QC PASSED. NOTHING POSTED. Awaiting Vishnu's approval of the finished file.**

## Deliverables (all in `workspace/instagram/reels/2026-10-28-rag/`)

| File | What |
|---|---|
| `rag-reel.mp4` | Finished reel — 39.192 s, 720×1280, 30 fps, h264 + 1× AAC, 4,731,146 bytes (~4.5 MB, **v4** — see addendum) |
| `rag-reel-cover.jpg` | Cover frame at ~1.0 s (Kit walked in, hook overlay, glowing "?" over the book) |
| `rag-visual.mp4` | Silent Remotion render (intermediate, kept for re-assembly) |
| `rag-assemble.sh` | Assembly script (ffmpeg: visual + voiceover + burned captions) |
| `rag-dead-air.json` | Dead-air check report (PASS) |
| `rag-build-notes.md` | This file |

Composition: `workspace/instagram/openmontage/remotion-composer/src/components/RagReel.tsx`,
registered as `RagReel` in `src/Root.tsx` (720×1280, 30 fps, 1176 frames).
`KitTest` and `ToolkitTest` untouched; `npx tsc --noEmit` passes clean.

## What was built

Single Remotion composition, whole reel inside `MovingBackdrop` (drifting light
blobs + full-frame push-in), Kit hosting every beat (walk-in, slides, points,
holds cards, thumbs-ups; idle bob + blink underneath every pose; never static).

- **B1 Hook (0–4.40 s):** Kit walks in from the left, stops center-left, points
  up. Dark desk, closed book, glowing amber "?" over it; "?" fades as "RAG"
  glows teal in its place. Overlay (amber): "AI = good guesser · RAG = looks it up".
- **B2 Open-book exam (4.40–11.56 s):** Kit slides right, thinking → excited.
  Blank grey exam paper; open book opens above Kit's head; teal dots flow
  book → paper; paper lines turn teal with checks. Kit holds the
  "RAG = Retrieval-Augmented Generation" card up at the end.
- **B3 Search first (11.56–17.26 s) — FALLBACK diagram, no capture:** search-bar
  card types "find the relevant pages" (script words); four documents above Kit,
  three light up teal one by one with check badges as Kit points right; the
  fourth stays dim.
- **B4 Answers with sources (17.26–23.30 s):** Kit slides left, neutral → excited.
  Answer forms line by line on a dark panel ("It writes its answer / from what
  it found — / with sources."); the "sources" citation chip lights teal with a
  check; Kit nods + thumbs-up.
- **B5 No RAG vs with RAG (23.30–29.80 s):** custom split built in RagReel
  (same styling as `ToolkitComparison`, not dropped in as-is — its fixed layout
  collides with Kit). LEFT grey panel, flat and still after one fade-in
  ("No RAG / guesses from memory / ?"). RIGHT teal panel, alive: three doc cards
  slide in, "with sources" box forms, check badge pops. Kit slides left → right,
  thinking → excited + thumbs-up.
- **B6 Company chatbots (29.80–33.58 s) — designed card, fully generic
  fictional sample Q&A (v4 — see addendum):** Kit steps up (toward camera)
  and holds the chat-window card. Q "What's the refund window?" A "30 days —
  from the returns policy, page 4." ("30 days" in amber). No real company, no
  real metrics, no personal information. "Illustrative example" tag above the
  card. (v3 used the verified live-assistant answer naming his employer and
  real metrics — removed in v4 per the faceless rule.)
- **B7 CTA (33.58–39.19 s):** wordmark "your.ai.toolkit", amber "Follow",
  "Comment RAG" chip. All animations land by ~frame 1060 (≈35.3 s), well before
  the 36.5 s mark — the Gmail reel's tight end card is not repeated. Kit
  thumbs-up, points at the card.

Voiceover reused untouched: `voiceover-final.mp3` (Helio, one pass, speed 85,
88 words, 39.192 s, 134.7 wpm). Captions burned from `captions.ass` unchanged
(DejaVu Sans 46 px, bottom-center, MarginV 200). All card/Kit content stays
above y≈920; Kit's face stays fully visible above every held card.

## Render + assembly commands

```bash
# from workspace/instagram/openmontage/remotion-composer/
npx tsc --noEmit
npx remotion render src/index.tsx RagReel \
  ~/workspace/instagram/reels/2026-10-28-rag/rag-visual.mp4 --codec h264

# from workspace/instagram/reels/2026-10-28-rag/  (see rag-assemble.sh)
ffmpeg -y -i rag-visual.mp4 -i voiceover-final.mp3 \
  -filter_complex "[0:v]ass=captions.ass[v]" \
  -map "[v]" -map 1:a -c:v libx264 -pix_fmt yuv420p -preset medium -crf 20 \
  -c:a aac -b:a 192k -shortest rag-reel.mp4
ffmpeg -y -ss 1.0 -i rag-reel.mp4 -frames:v 1 -q:v 2 rag-reel-cover.jpg
```

No 24 fps conversion (the Gmail build's frame-rounding drift is avoided).
`/tmp` stayed at ~1% throughout; no venvs or large files created there.

## Deviations from the canvas (`rag-data.json`)

1. **Beats 3 and 6 use designed fallbacks (final form).** The portfolio screen
   recording was never run, and the capture is now CANCELLED permanently (see
   the v4 addendum) — the page is faceless, so the portfolio is never used as a
   reference. B3 = Remotion diagram, B6 = designed card with a fully generic
   fictional sample Q&A + "Illustrative example" label. (v3's B6 card used the
   verified live-assistant answer; that was removed in v4.)
2. **Beat 5 is a custom split in RagReel**, not `ToolkitComparison` as-is
   (per the task: its fixed layout collides with Kit). Same styling language
   (surface/border/teal/check badge), rebuilt as two full-height panels Kit
   stands in front of.
3. **B6 Kit steps up** (kitY 528 → 460) so the taller Q&A card clears his chin
   by ~74 px; he steps back down for the CTA. The canvas has him center + holding
   the card; the step-up keeps that while fitting the card.
4. **B1 desk line** runs under the book only (x 400–680), not across the frame.
5. **B5 right column compressed** (docs + answer box moved up) — see "Fixes".
6. The canvas's B7 "day counter" is not in the end card — the task's B7 spec
   (wordmark + Follow + Comment RAG chip) is what was built.
7. OpenMontage `AGENT_GUIDE.md` pipeline flow (projects/, Backlot board,
   provider menu, decision log) was NOT followed: this build was a direct
   Phase B task with explicit composition/render/assemble instructions from the
   parent orchestrator, which takes precedence over the folder's generic guide.
   No pipeline artifacts, checkpoints, or board entries were created.

## Fixes found by the eye check (v1 → v2, re-rendered)

1. **B1:** the desk line at y=640 crossed Kit's face. Moved to sit under the
   book only; book lowered to match.
2. **B5:** Kit's head covered the "with sources" answer box at 29.4 s. Right
   column compressed (docs + box moved up; box now ends ~25 px above his hair)
   and the left "?" circle lifted the same way.
3. **B6:** the "Illustrative example" pill overlapped the question line inside
   the card. The pill now floats above the card's top-right corner, clear of
   both the question and Kit's chin.

All three re-verified on frames from the final v2 render.

## QC results (final v2 render)

### Duration & streams — PASS
- Container duration 39.192 s = voiceover 39.192 s exactly (±0.05 s required).
- 1 video stream: h264, 720×1280, 30 fps (video stream 39.167 s — the usual
  last-frame rounding, same as the Gmail note; container duration is exact).
- 1 audio stream: AAC — the voiceover only, no other audio track.
- Size 4,864,480 bytes (~4.6 MB).

### Dead-air — PASS (exit 0)
`python3 workspace/instagram/qc/dead-air-check.py rag-reel.mp4 --words
voiceover-final-words.json --beats rag-beats.json --out rag-dead-air.json`
— 0 freeze spans, 0.00 s dead air during speech; every beat 0% frozen,
longest freeze 0.00 s.

### OCR — PASS
RapidOCR (`workspace/instagram/qc/ocr-venv/`, script `/tmp/rag-qc/ocr_frames.py`)
on start/mid/end frames of every beat (21 frames). Every word read traces to
the approved 88-word script, the overlay list, or the verified B6 answer.
Known OCR artifacts, all confirmed by eye: word-merging ("doesn'tknow",
"workslikean"), "AI" read as "Al", "00"/"O0" fragments = Kit's glasses,
"三E"/"自目目"/"H·" = book-page lines / doc lines / check badges misread.
No garbled, invented, placeholder, or non-English word anywhere.

### Frame samples by eye — PASS
All 21 start/mid/end frames viewed. Kit's face visible in every beat; no
clipped text; no caption/card overlap (captions sit below y≈980, all content
above y≈920); CTA fully visible by 36.5 s and at the 38.8 s end frame.
Caption vs spoken sentence matches at every sampled time (e.g. 2.2 s "AI
doesn't know things…", 20.3 s "It writes its answer from what it found — with
sources,", 36.5 s "Follow — I explain one AI idea simply every week.").

### Not re-verified
- **Audio transcription:** the voiceover file was passed through untouched
  (ffmpeg `-map 1:a`, content re-encoded MP3→AAC only); no faster-whisper
  re-transcription was run on the finished reel. Duration match (39.192 s
  exactly) + single audio stream is the evidence it is the approved voiceover.
- **Voiceover wpm flags:** reused from `voiceover-final-wpm.md` (7 of 11
  sentences outside the ±8% band — flags only, never a rewrite trigger).

## Open items
- **Portfolio capture (beats 3 & 6): CANCELLED permanently** — see the v4 addendum below. Do NOT re-run it. The designed fallbacks are the final form.
- **Nothing posted.** The reel and cover await Vishnu's approval of the exact
  finished files before any Instagram action.

## Addendum — v3 caption fix (coordinator's independent QC, 2026-10-28)

The v2 file described above had one defect the builder's QC missed: `captions.ass`
used single-decimal timestamps (`0:00:29.8`), which libass reads as centiseconds
(29.08 s, not 29.80 s) — every caption ended up to ~0.8 s early, and the S8–S9
caption vanished while "With RAG, it answers from your files" was still spoken
(caught on the 29.40 s frame). Fix: `captions.ass` rewritten with proper
two-decimal centiseconds and `rag-assemble.sh` re-run; visuals and voiceover
untouched. Delivered file is **v3** (`rag-reel.mp4`, 4,882,424 bytes, 39.192 s):
caption present at 29.5 s (frame + OCR), dead-air re-run still PASS (0.00 s).
Full independent QC in `qc-report.md` — including a faster-whisper script match
on the finished reel's audio (all 88 words present), which the v2 QC had not run.

## Addendum — v4 Beat 6 rebuild, faceless (2026-10-28)

**Why:** Vishnu's correction on the v3 frame — the Beat 6 card quoted his real
work ("At Zibtek he rebuilt a legacy chatbot into a production RAG system —
~45% fewer ungrounded answers, ~35% relevance lift, ~30% lead completion"),
revealing his employer name and real metrics. The page is FACELESS: no personal
information may appear, and his portfolio/chatbot must never be used as a
reference or example in page content.

**Audit (whole reel):** all 7 beats' overlays, the cover, `caption.txt`, the
88-word script, `captions.ass`, and `RagReel.tsx` were searched for employer
names, his name, the portfolio URL, real metrics, and any "his chatbot /
his portfolio / his work" reference. **Found in the reel: Beat 6 only.**
Clean with no changes: B1–B5, B7, cover, caption, voiceover script; Beat 3's
diagram is generic (search bar + four anonymous documents). Internal records
only (this file's v3 text, `qc-report.md` v3 sections, `qc-ocr-v3.json`,
`qc-frames/`, Phase A planning docs) still mention the old text and the capture
plan — kept as the change record, not published content.

**Beat 6 change (only content change in v4):**
- OLD: Q "What is your strongest project?" / A "At Zibtek he rebuilt a legacy
  chatbot into a production RAG system — ~45% fewer ungrounded answers, ~35%
  relevance lift, ~30% lead completion."
- NEW: Q "What's the refund window?" / A "30 days — from the returns policy,
  page 4." ("30 days" in amber; "Illustrative example" label kept.)
- Unchanged: beat window (frames 894–1007, 29.80–33.58 s), Kit's poses/track,
  card geometry, voiceover, caption, overlay line.

**Capture: CANCELLED permanently.** The portfolio screen recording is off the
table for good — the capture browser task was stopped, no capture files exist,
and `capture/capture-brief.md` is marked CANCELLED. Beats 3 and 6 keep their
designed fallbacks as the final form.

**Rebuild:** `RagReel.tsx` edited (B6 card + header comments), `npx tsc
--noEmit` clean, Remotion re-rendered (`rag-visual.mp4`), `rag-assemble.sh`
re-run with the unchanged voiceover and captions. Delivered file is **v4**
(`rag-reel.mp4`, 4,731,146 bytes, 39.192 s). Full QC re-run in `qc-report.md`
§11: duration exact, dead-air exit 0 (0.00 s), OCR on 21 fresh frames (new
Beat 6 words read exactly, no personal information anywhere), faster-whisper
re-run (all 88 words present), eye-check on all 21 frames. Note: the v4
faster-whisper check needed a fresh venv (`workspace/instagram/qc/whisper-venv`,
av pinned to 12.3.0 — the default av install breaks faster-whisper's
`av.open` call); the v3 check had used a venv that no longer exists.

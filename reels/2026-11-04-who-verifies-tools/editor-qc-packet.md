# Editor QC packet — Who Verifies the Tools? (Day 2 Paper Breakdown)

- **Finished reel:** `who-verifies-tools-reel.mp4` — 720x1280, h264, 30 fps, AAC audio.
- **Cover:** `who-verifies-tools-reel-cover.jpg` — 720x1280.
- **Captions:** `captions.ass` — 14 events (see below).
- **Description:** `description.md` — caption to post, NOT posted. Body verified character-for-character against `description-draft.md` (119 words inc. hashtags; keyword PAPER).
- **Re-timed docs:** `shot-list-final.md`, `canvas-final-notes.md` (Phase 1 / Remotion files untouched).
- **NOT posted. NOT approved by the editor** — this packet goes to QC, then to Vishnu. Nothing posts until Vishnu approves the exact finished files.

## Durations — video == audio check

| Stream | Duration | Notes |
|---|---|---|
| Voiceover source `voiceover-final.mp3` | 38.472 s | Helio, one pass, speed 79, untouched by editor |
| Silent visual `who-verifies-tools-visual.mp4` | 38.467 s (1154 frames @30 fps) | 1154 / 30 = 38.467 s |
| Final reel `who-verifies-tools-reel.mp4` (container) | 38.472 s | Video stream 38.467 s / 1154 frames; audio stream 38.472 s |
| **Difference** | **0.005 s** | Frame-quantization only (video is one frame grid; audio runs 5 ms past the last video frame). No padding, looping, stretching, or trimming was applied to either stream to force equality. PASS within one frame. |

Audio handling, stated plainly: the voiceover was NOT re-rendered, time-stretched, speed-changed, padded, or trimmed. For mp4 delivery only, its mp3 stream was encoded to AAC 192k at the same duration; the source `voiceover-final.mp3` file is untouched. Video was re-encoded (libx264, CRF 18) only to burn in captions + overlays.

## Beat windows used (measured, NOT provisional)

| Beat | Window | Duration | Frames |
|---|---|---|---|
| B1 Pic 1 — Problem | 0.00–10.99 s | 10.99 s | 0–329 (330) |
| B2 Pic 2 — Gate lets it through | 10.99–24.36 s | 13.37 s | 330–730 (401) |
| B3 Pic 3 — Fix + CTA | 24.36–38.47 s | 14.11 s | 731–1153 (423) |
| **Total** | **0.00–38.47 s** | **38.47 s** | **1154** |

Superseded provisional windows (0.0–11.0 / 11.0–23.8 / 23.8–39.2, total 39.2 s) were NOT used.

## Per-sentence wpm (from voiceover-final-wpm.md; overall 138.8 wpm, 89 words, 38.47 s, 135–140 band)

Per-sentence spans exclude pauses between sentences, so short sentences read fast; flags are information only, never a rewrite trigger, and no speed fix was applied.

| Sentence | Words | Span | wpm | vs 138.8 avg |
|---|---|---|---|---|
| S1 The tool worked. | 3 | 0.00–0.86 | 209.3 | +50.8% FLAG |
| S2 Its printout misled the agent. | 5 | 1.60–3.44 | 163.0 | +17.5% FLAG |
| S3 It said found twenty documents, hiding they were the first twenty of four thousand seven hundred seventy-two. | 17 | 4.16–10.52 | 160.4 | +15.5% FLAG |
| S4 The checker saw only that printout, so it approved the wrong answer. | 12 | 11.46–15.42 | 181.8 | +31.0% FLAG |
| S5 In one fixed-answer test, across three kinds of error, all ninety verdicts flipped from accept to reject. | 17 | 16.00–24.00 | 127.5 | −8.1% FLAG (borderline) |
| S6 Rewrite the printout to state its limits and caps, and how to handle them, and the checker catches the error. | 20 | 24.72–31.58 | 174.9 | +26.0% FLAG |
| S7 Check what your tool hides, not just what it shows. | 10 | 32.40–35.54 | 191.1 | +37.7% FLAG |
| S8 Follow for the next paper. | 5 | 36.42–37.88 | 205.5 | +48.0% FLAG |

## Captions — 14 events, script spelling, measured timings

Format: PlayResX 720 / PlayResY 1280, DejaVu Sans 46 px, bottom-centre, MarginV 200. Text is the approved script verbatim, spoken words only — no added words, no paraphrase, no invented lines. Caption word count reconciles to 89.

Whisper-spelling corrections applied (audio is faithful by construction — TTS input was the approved script verbatim): "Its" (whisper heard "It's"), "they" (heard "there"), "Rewrite" (split "Re -write"), "four thousand seven hundred seventy-two" spelled out (whisper collapsed to "4 ,772"), "twenty"/"ninety" spelled out (whisper digits).

| # | Start–End | Caption text |
|---|---|---|
| 1 | 0.00–0.86 | The tool worked. |
| 2 | 1.60–3.44 | Its printout misled the agent. |
| 3 | 4.16–6.04 | It said found twenty documents, |
| 4 | 6.04–8.18 | hiding they were the first twenty of |
| 5 | 8.18–10.52 | four thousand seven hundred seventy-two. |
| 6 | 11.46–13.54 | The checker saw only that printout, |
| 7 | 13.90–15.42 | so it approved the wrong answer. |
| 8 | 16.00–18.30 | In one fixed-answer test, |
| 9 | 18.68–20.18 | across three kinds of error, |
| 10 | 20.84–24.00 | all ninety verdicts flipped from accept to reject. |
| 11 | 24.72–27.84 | Rewrite the printout to state its limits and caps, |
| 12 | 27.84–31.58 | and how to handle them, and the checker catches the error. |
| 13 | 32.40–35.54 | Check what your tool hides, not just what it shows. |
| 14 | 36.42–37.88 | Follow for the next paper. |

No caption event crosses a sentence boundary. Spot-checked frames: t=5 s (B1 caption + top overlay), t=18 s (B2), t=30 s and t=37 s (B3 caption + bottom overlays) — captions legible, in the bottom zone, not covering gaps, marker, funnel, arrow, or set-aside pieces; captions and Beat 3 overlays stack without overlapping (caption block bottom ≈ y 1080, overlay top ≈ y 1090).

## Overlays burned in (designed only, blank zones only)

| Beat | Overlay text | Zone / placement |
|---|---|---|
| B1 0.00–10.99 s | "Clean in. Warped out." | Top blank zone, y ≈ 100, white bold |
| B2 10.99–24.36 s | "Approved anyway." | Top blank zone, y ≈ 100, white bold |
| B3 24.36–38.47 s | "Say what's left out." | Bottom blank zone, y ≈ 1090–1155, white bold |
| B3 24.36–38.47 s | "Follow for a paper a day." | Bottom blank zone, y ≈ 1155–1220, amber bold |

No numeric overlays added. No "20 of 4,772", no "90/90" on screen — per fact-check.md, a bare numeric overlay needs the three-family scope note, and the director's approved overlays have no numbers. Numbers live in the voiceover and in description.md only, where the provenance limit is stated (18/30 → 14/30, overclaim 94%).

## Cover

`who-verifies-tools-reel-cover.jpg` (720x1280, designed text on a navy gradient — not generated imagery text): title "Who Verifies the Tools?", author "William Jeffries", "arXiv:2610.32110", "Preprint, not peer-reviewed", "Day 2 of five papers". Reads without sound. No employer, portfolio, personal info, handle, or person/face.

## Faceless / intact-image (editor scope)

- No employer/company name, portfolio/chatbot/real-project reference, personal info, handle, or person on screen or in the caption.
- Source PNGs used intact and whole by the generator (camera window only); the editor added no segmentation, masking, rotation, cropping apart, or background recreation.
- Fact basis (from fact-check.md, PDF-confirmed): 20 of 4,772; 90/90 = 30/30 → 0/30 in scope/completeness/uncertainty; provenance 18/30 → 14/30, overclaim 94%.

## UNVERIFIED — QC's job next (editor does NOT claim these)

1. **Muted-no-captions test** (sound off, captions off, overlays on): not run by the editor. Director's predictions carried forward untested — B1 reads at gist level; B2 reads only via its overlay and is caption-dependent for the 90/90 claim; B3 is the weakest muted read (fix mechanism + checker payoff caption-dependent; set-aside pieces small/corner-placed).
2. **OCR on the assembled reel:** not run by the editor. Only spot frames were eyeballed (see above); no full-frame OCR pass was done.
3. **Dead-air check** (`workspace/instagram/qc/dead-air-check.py` with word timestamps + beat windows): not run by the editor.
4. **Full caption-sync watch-through:** captions were built from measured timestamps and spot-checked at 4 timestamps, not watched end-to-end.
5. **Posting:** not done, not authorized by this packet. Description.md is labelled "caption to post (not posted)".

## Cost / spend

$0. No LTX, no Veo, no SSH/laptop work, no credits, no purchase. Assembly used local ffmpeg/PIL only.

# Gmail reel — QC report (final build)

**Reel:** Tue Oct 27, Week 1 · Tool: Gmail "Help me write" · Keyword: EMAIL
**File:** `gmail-reel.mp4` (2.1 MB) · **Cover:** `gmail-reel-cover.jpg`
**Status: PASS — all gates green. NOTHING POSTED. Awaiting Vishnu's approval of the finished file.**

## 1. Duration & streams — PASS

| Check | Result |
|---|---|
| Video duration | 37.958 s (target 37.92 s ± 0.05 → 37.87–37.97) ✓ |
| Audio stream | 1× AAC, 37.920 s — exactly the voiceover length ✓ |
| Streams | 1 video (h264, yuv420p, 720×1280, 24 fps) + 1 audio (AAC) — no second audio track, Veo's aac track stripped ✓ |
| Size | 2,208,904 bytes (~2.1 MB, under the ~8 MB target) ✓ |

Note: 37.958 vs 37.92 (+0.038 s) is frame rounding — each 24 fps segment rounds up to a whole frame (e.g. 4.36 s → 4.375 s). Within tolerance, inaudible, captions/audio unaffected.

## 2. Captions — PASS

Burned from `captions.ass` (unchanged, 11 lines, DejaVu Sans 46 px, bottom-center, MarginV 200). Sampled frames from the finished reel, caption vs spoken sentence at that time:

| Time | On-screen caption | Spoken | Match |
|---|---|---|---|
| 2.0 s | "You don't have an email problem — just a blank page." | S1 Hook | ✓ |
| 6.0 s | "In Gmail, hit Help me write — that's Gemini, built right in." | S2 | ✓ |
| 11.0 s | "Type what you need in plain words." | S3 | ✓ |
| 16.0 s | "One plain sentence: reply to Sarah, confirm Friday at two." | S5 | ✓ |
| 21.0 s | "Then refine it for tone and clarity, until it sounds like you." | S6 | ✓ |
| 27.0 s | "You read it once, fix what's off, then send." | S8 | ✓ |
| 31.0 s | "Free on personal Gmail in the US." | S9 | ✓ |
| 36.5 s | "Follow for a new AI tool every day." | S11 | ✓ |

Captions never overlap card text — all card content sits above y≈920, captions below it (verified visually at all 8 samples).

## 3. OCR per clip — PASS

**Method:** tesseract could NOT be installed — `apt-get install tesseract-ocr` reports "Unable to locate package" even after a successful `apt-get update` (universe is enabled in sources; the package list simply doesn't carry it on this VM). OCR was instead run with **RapidOCR (ONNX Runtime, pip-installed to `~/.ocr-venv`)** on start/mid/end frames of every beat of the finished reel, plus a visual eye-check of the same frames. RapidOCR merges adjacent words ("Helpmewrite", "Refineitfortoneand") and misreads the ✦ sparkle as "←" and the em-dash as "一" — those are OCR artifacts, confirmed visually absent from the frames.

| Beat | Words read (start / mid / end) | Verdict |
|---|---|---|
| 1 Hook (Veo) | Caption only: "You don't have an email problem — just a blank page." No other words; blank paper + pen only. | PASS |
| 2 What it is | "Help me write", "To: Sarah", "Reply to Sarah, confirm Friday at two", "Help me write" (pill), draft "Hi Sarah, confirming our meeting Friday at 2pm. Could you send the report when you have a moment? Thanks!", "Illustrative example" + caption S2–S4. | PASS |
| 3 Feature 1 | "One plain sentence.", typed prompt, draft "Hi Sarah, confirming our meeting Friday at 2pm." + caption S5. | PASS |
| 4 Feature 2 | "Refine it for tone and clarity.", rough "reply to sarah confirm friday at two", polished "Hi Sarah, confirming our meeting Friday at 2pm.", chips "Tone", "Clarity" + caption S6. | PASS |
| 5 Feature 3 | "AI drafts. You decide.", "Read it once", "Fix what's off", "Send" + caption S7–S8. | PASS |
| 6 The catch | "Free on personal Gmail in the US.", "Personal Gmail · US → Free", "Outside the US → Paid plan" + captions S9–S10. | PASS |
| 7 CTA (LTX) | "Follow for a new AI tool every day.", "Your AI Toolkit", "AI Tool #2 · Tool #3 tomorrow", "Comment EMAIL" + caption S11. | PASS |

Every word visible traces to the approved 88-word script, the overlay list, or the visual-plan spec. No garbled, invented, placeholder, or non-English word anywhere. (One OCR fragment, "Is-Free" on a mid-slide frame of beat 6, is a partial-row misread while row 1 slides in; the settled frame reads correctly.)

## 4. Script match (audio transcription) — PASS

faster-whisper `base`, `~/.whisper-venv/bin/python`, ffmpeg-decoded PCM from the finished reel's audio track (note: faster-whisper's built-in file decoder errored on this VM's `av` version — `metadata_errors` kwarg mismatch — so raw s16le PCM was fed in, per the Phase A method).

- **87 tokens heard; all 88 script words present** ("you need" merges into one token "you'd", as in Phase A).
- Same three hearing artifacts as Phase A, all benign: "write"→"Right", "you need"→"you'd", "two"→"2". No word dropped, none added.
- Word timestamps line up with the measured boundaries (e.g. "In" 4.36, "One" 14.06, "Then" 19.16, "The" 23.48, "Free" 29.18, "Follow" 35.10). The audio in the reel is the approved voiceover, unaltered.

## 5. Muted-motion test — PASS (all beats)

Method: frames pulled from the finished reel at beat start+0.4 s / mid / end−0.4 s, downscaled to 180×320, % of pixels changed >12 grey levels. Every beat changes state; no slideshow card.

| Beat | Start→mid changed | Mid→end changed | What moves |
|---|---|---|---|
| 2 What it is | 4.6% | 6.7% | Prompt types itself, pill pulses, draft lines appear one by one |
| 3 Feature 1 | 1.4% | 12.6% | Prompt types, draft card slides in from below, checkmark pops |
| 4 Feature 2 | 0.5%* | 14.7% | Highlight sweep, rough→polished swap, Tone/Clarity chips light up |
| 5 Feature 3 | 5.8% | 1.7% | Three rows slide in from the left, checkmarks pop per row |
| 6 The catch | 10.9% | 1.8% | Rows slide in from opposite sides, checkmark pops on Free row |
| 7 CTA | 2.0% | 5.8% | Wordmark fades in, 7 day-dots pop in sequence, EMAIL chip pulses |

\* Beat 4 start→mid is low because the sample points straddle the sweep: at mid the sweep has just finished and the polished card is only starting to fade in. Denser sampling (5 frames) confirms motion throughout: consecutive-frame changes 2.2% / 1.1% / 13.4% / 1.5% (sweep + polished + chips in the 3rd interval). Same check on beat 3: 1.6% / 0.7% / 12.1% / 0.6% (draft slide-in in the 3rd interval). Typing intervals read small because only a few characters change per second — verified visually that characters do appear progressively.

## 6. Per-sentence wpm — reused (voiceover unchanged)

From `voiceover-final-wpm.md` (Helio speed 80, single pass, 37.92 s, 139.2 wpm overall). The voiceover file was not re-rendered or altered.

| Sentence | Words | Span | wpm | vs avg |
|---|---|---|---|---|
| S1 Hook | 10 | 0.00–4.36 | 137.6 | −2.4% |
| S2 What it is a | 11 | 4.36–9.76 | 122.2 | −13.3% FLAG |
| S3 What it is b | 7 | 9.76–12.12 | 178.0 | +26.2% FLAG |
| S4 What it is c | 4 | 12.12–14.06 | 123.7 | −12.3% FLAG |
| S5 Feature 1 | 10 | 14.06–19.14 | 118.1 | −16.2% FLAG |
| S6 Feature 2 | 12 | 19.14–23.46 | 166.7 | +18.2% FLAG |
| S7 Feature 3 a | 4 | 23.46–25.12 | 144.6 | +2.5% |
| S8 Feature 3 b | 9 | 25.12–29.18 | 133.0 | −5.7% |
| S9 Catch a | 7 | 29.18–32.18 | 140.0 | −0.7% |
| S10 Catch b | 6 | 32.18–35.12 | 122.4 | −13.2% FLAG |
| S11 CTA | 8 | 35.12–37.44 | 206.9 | +46.7% FLAG |

7 of 11 sentences outside the ±8% band — identical to Phase A, flags accepted at Gate 1, no rewrite.

## Build notes (what was made, what went wrong)

- **Kinetic cards:** one new component `GmailCard` in OpenMontage (`remotion-composer/src/components/GmailCard.tsx`, variants compose / feature1 / feature2 / checklist / comparison / endcard), dispatched as cut type `gmail_card` in `Explainer.tsx`. Props per beat in `cards/beat{2..7}.json`; renders in `cards/beat{2..7}.mp4` (30 fps, trimmed to exact beat windows in assembly). Beat 3 was re-rendered once so its headline fades in over 8 frames instead of a slow spring (first ~0.3 s was blank at the cut).
- **Beat 7 incident:** the Remotion end-card render failed twice — first a Chromium page crash, then `ERR_INSUFFICIENT_RESOURCES` loading the LTX background video. Root cause found: `/tmp` is a 512 MB tmpfs and was 83% full (a 395 MB OCR venv I had created there plus Remotion bundles). After moving the venv to `~/.ocr-venv` and clearing stale bundles (`/tmp` back to 2% used), the third render succeeded cleanly. An ffmpeg-drawn fallback for beat 7 was also prepared (`/tmp/gmail-asm/beat7-fallback.sh`, unused) in case the retry had failed.
- **LTX asset:** `ltx-endcard.mp4` was copied into `remotion-composer/public/` because Remotion's `OffthreadVideo` rejects `file://` URLs; the copy is a duplicate, the original in the reel folder is untouched.
- **Assembly:** ffmpeg — Veo 0–4.36 s, cards beats 2–6 at exact windows (30→24 fps), beat 7 (LTX + overlays) 2.80 s, captions burned over the full video, voiceover only. Script: `/tmp/gmail-asm/assemble.sh`.
- **Cover:** frame at 1.0 s — Veo push-in, blank page + pen, no text except the burned hook caption (expected; it is the hook line).

## Could not be verified / watch-outs

1. **Tesseract unavailable** — OCR done with RapidOCR instead (see §3). If Vishnu wants a tesseract pass, it needs installing on a machine where the package is available.
2. **End card is tight:** beat 7 is only 2.80 s; the "AI Tool #2 · Tool #3 tomorrow" line and "Comment EMAIL" chip only reach full visibility in the final ~1.1 s. Everything is readable in the last frame, but there is no dwell time to spare.
3. **Veo audio:** the Veo clip's aac track was stripped in assembly (verified: final file has exactly one audio stream, the voiceover). The Veo clip was never checked for what that track contains — it is not in the reel.
4. **`/tmp` is small (512 MB tmpfs):** future Remotion renders with video backgrounds should keep `/tmp` clear first — this cost two failed beat-7 renders.

## Deliverables

- `gmail-reel.mp4` — 720×1280, 24 fps, 37.96 s, 2.1 MB
- `gmail-reel-cover.jpg` — frame at 1.0 s
- `qc-report.md` — this file
- `cards/beat2.mp4 … beat7.mp4` + `cards/beat{2..7}.json` — per-beat cards + props for rework

`email-prompt-pack.md`, `description.md`, and the voiceover were not touched. Nothing posted.

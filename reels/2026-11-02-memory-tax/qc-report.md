# Memory Tax — QC report (Phase B, $0 Remotion build)

**Final file:** `memory-tax-reel.mp4` (720×1280, 36.83 s) + cover
`memory-tax-reel-cover.jpg` (frame at 1.0 s). **NOT POSTED.** Nothing posts
until Vishnu approves the finished file itself.

## Files

| File | What it is |
|---|---|
| `memory-tax-reel.mp4` (6.2 MB) | Final reel, burned captions, Helio voiceover |
| `memory-tax-visual.mp4` (9.2 MB) | Silent Remotion visual before audio/captions |
| `memory-tax-reel-cover.jpg` (52 KB) | Cover, frame at 1.0 s: Pic 1 + "Remembers everything?" |
| `voiceover-final.mp3` (288 KB) | Helio, one pass, fixed speed 85 |
| `voiceover-final-words.json` | faster-whisper `base` word timestamps, 84 tokens |
| `voiceover-final-wpm.md` | Per-sentence wpm + beat windows |
| `beats.json` | Measured beat windows (contiguous) |
| `captions.ass` | 13 caption events from measured boundaries |
| `qc-dead-air.json` | Dead-air machine report |
| `qc-ocr.json` + `qc-frames/` | OCR machine report + 12 extracted frames |
| `../storyboard/memory-tax-storyboard.html` | Canvas, re-timed from measured timestamps, 0 NO MOTION flags |

## 1. Duration and pace — PASS

- Voiceover: 83 words, **36.84 s**, **135.2 wpm overall** (130–140 band),
  under the 40 s cap by 3.16 s. Calibration render at speed 85 was
  36.84 s / 135.2 wpm; the final render at the same speed reproduced it
  exactly (same duration, same byte size — deterministic for this text).
- Per-sentence wpm (flags only, per the skill — pauses between sentences
  are excluded from sentence spans, so short sentences read fast):
  S1 130.4, S2 195.7 FLAG, S3 186.0 FLAG, S4 123.5 FLAG, S5 220.6 FLAG,
  S6 154.8 FLAG, S7 146.9 FLAG, S8 259.6 FLAG, S9 200.0 FLAG.
  Overall pace is in band; no sentence was rewritten and no speed change
  was used to fix a flag, per the rules.
- Beat windows (measured, contiguous): B1 Hook 0.00–10.34 (10.34 s),
  B2 Result 10.34–19.24 (8.90 s), B3a Scale tips 19.24–25.38 (6.14 s),
  B3b Fix + CTA 25.38–36.84 (11.46 s). Frames @30 fps: 0–310, 310–577,
  577–761, 761–1105.

## 2. Script match — PASS (with two expected renderings, documented)

- Whisper heard every script word in order. The only divergences are
  renderings, not missing/added content:
  - Script "eighty-one percent" is heard as "81" + "%" (TTS speaks the
    number; the caption and the overlay use the script's words / exact
    figure respectively).
  - Script "organise" is heard as "organize" (same pronunciation;
    captions use the approved script spelling "organise").
- Captions are the approved script verbatim, split into 13 chunks at
  commas/colons, each spanning its measured whisper words. No caption
  was placed by guess.

## 3. OCR per clip — PASS (one eye-verified artifact)

- 12 frames (start/mid/end × 4 beats), RapidOCR, 39 reads.
- Every read word is from the approved script or the approved overlay
  list ("Remembers everything?", "81.4%", "LongMemEval-s · Qwen3.6-27B",
  "RAG, 2 rounds", "Memory tax", "Keep the source",
  "Follow for a new AI paper every day"), except:
  - One flagged token: "口" on b3-end (25.23 s). Eye-checked frame:
    no such character exists in the image — it is RapidOCR misreading a
    square block shape during the B3→B4 crossfade. Not a word in the
    video, no rebuild needed.
  - Earlier flags "Al" (OCR misreading "AI" as "Al") and "81.4%" (allowlist
    normalisation) were fixed in the allowlist and re-run; they are not
    video defects.
- No unapproved word, no generated text, no logo, no mascot in any frame.

## 4. Dead-air — PASS (with one pacing warning, mitigated)

- `dead-air-check.py` (freezedetect −60 dB / 0.6 s, word timeline):
  **0 freeze spans, 0.00 s dead air during speech, every beat 0% frozen,
  longest freeze 0.00 s — PASS on all 4 beats.**
- Warning (not a fail): B3b is 11.46 s, over the tool's 8 s "longest shot"
  pacing warning. Mitigation in the build: B3b is not a held still — the
  camera travels down-right along the return arrow for the whole beat,
  the overlay swaps from "Keep the source" to the teal Follow CTA chip
  ~8 s into the beat, and the glow layer keeps moving. Muted-watch:
  no 3-second stretch looks like a still photo (verified by the 0.00 s
  freeze result and by eye on start/mid/end frames).

## 5. Faceless audit — PASS

- No employer or company name, no portfolio, chatbot, real project, or
  real metric as an example, no personal information, no handle, no
  logo, no person/face in any frame. The only number on screen is the
  paper's own 81.4% result, with its benchmark/model/round scope on
  screen. The page handle is not burned into the video (it belongs in
  the caption, which is a separate approval).

## 6. Motion — PASS, with two honest notes

- Every beat moves the FRAME: full-frame scale + pan across its image,
  parallax overlay drift opposite to the camera, and a moving teal glow.
  This is not element-only animation and not a slow zoom alone.
- Note 1: Beat-to-beat transitions are cuts with a short crossfade, not
  morphs — Pic 1/2/3 are different compositions and a morph would smear
  them. The Kling/Higgsfield first-last upgrade (see `cost-plan.md`)
  is the route that would attempt true transitions, if approved.
- Note 2: On B1 mid-beat the push-in brings the Pic 1 diamond node close
  under the "everything?" overlay line. The text stays fully legible
  (confirmed by eye and by OCR reading it correctly on all three B1
  frames); it is a near-touch, not a collision. Moving the overlay up
  ~20 px would remove it entirely and is a cheap re-render if Vishnu
  wants it — it was not changed because no gate failed on it.

## 7. Unverified items

- The finished file has NOT been approved by Vishnu yet — that approval
  is still required before any posting (standing rule).
- The Kling/Higgsfield upgrade is unpriced at the account level: keys
  appear present in the OpenMontage `.env`, but balance, credits, and
  live per-clip price were NOT checked in the provider UI, and no paid
  endpoint was called. See `cost-plan.md` for the estimate and the
  approval steps it needs.
- Instagram caption/description (100–120 words, keyword PAPER, preprint
  flag, citation, DM pack) is NOT part of this build deliverable and
  still needs writing/approval before posting.

## Gate summary

| Gate | Verdict |
|---|---|
| Script verbatim (83 words) | PASS |
| Voiceover one pass, fixed speed, 130–140 wpm, <40 s | PASS (135.2 wpm, 36.84 s) |
| Captions from measured boundaries | PASS |
| OCR (no unapproved words) | PASS (1 eye-verified artifact) |
| Dead-air (per beat) | PASS (0.00 s frozen) |
| Faceless audit | PASS |
| Motion moves the frame | PASS |
| Cost | $0 spent |
| Posting | NOT DONE (correctly — awaiting Vishnu's approval of the finished file) |

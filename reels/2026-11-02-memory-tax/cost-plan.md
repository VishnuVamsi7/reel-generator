# Memory Tax — Cost plan

## Built version (this delivery) — $0 actually spent

| Item | Source | Cost |
|---|---|---|
| Visuals | Remotion kinetic animation of the 3 approved Claude keyframes (full-frame scale + pan, parallax overlays, moving teal glow) | $0 |
| Voiceover | Helio (`avocado_v2:MAI_03`), single pass, fixed speed 85, via the existing TTS tool (calibration + final renders) | $0 |
| Captions / QC | ffmpeg `.ass` burn-in, faster-whisper word timestamps, RapidOCR, dead-air check | $0 |
| Images | Already approved Claude keyframes, reused | $0 |
| **Total spent** | | **$0** |

No Instagram post was made. No paid generation endpoint was called.

## Kling / Higgsfield first-last upgrade — PREPARED ONLY, NOT RUN

This is a separate upgrade Vishnu must approve separately before any spend.
It would REPLACE the Remotion kinetic segments with generated transitions,
cut to the same 36.84 s voiceover — it does not add duration, and it does
not change the script, captions, or overlays.

### First-last prompts (ready to run, if approved)

Shared constraints for both (paste verbatim, no readable text in the prompt):
flat vector illustration, dark navy background, teal glow, amber accent only
for the single most important element, no text, no letters, no numbers,
no logos, no person, 9:16 vertical, muted (voiceover is added in the editor,
never generated audio).

**Segment A — Pic 1 → Pic 2 (stacks → bars, ~10 s):**
"First frame is Pic 1 and last frame is Pic 2. Between them, the camera
pushes in on the intact teal stack, then the gapped slate stack dissolves
and reforms as descending bars on a shared baseline. The tallest teal bar
stays high while the shorter bars settle lower and small dots fall away
from their tops. Locked, smooth camera travel, no cuts, no text, no numbers."

**Segment B — Pic 2 → Pic 3 (bars → scale, ~10 s):**
"First frame is Pic 2 and last frame is Pic 3. Between them, the bars
dissolve into a balance scale: the bright small pan rises, the larger grey
pan sinks and tips the scale, then the amber curved arrow draws itself
back to the intact teal stack, which brightens at the end. Locked, smooth
camera travel, no cuts, no text, no numbers."

### Upgrade cost estimate (ESTIMATE ONLY — re-verify in the provider UI
### before any run; credit prices vary by vendor and plan and change often)

- Kling 2.6, 720p Standard, via an aggregator quote found 2026-11-02:
  ~$0.0378/sec, so one 10 s segment ≈ $0.38, two segments ≈ $0.76.
  Budget 2× for morph-check retries: **≈ $1.50–$2.50 cash via API**.
  Kling's own credit prices differ by vendor (third-party quotes ranged
  22–240 credits per generation) — do not budget in Kling credits without
  checking the account's own price page.
- Higgsfield Wan 3.0 (Higgsfield's pick for exact first/last control),
  720p, 8.75 credits per 5 s (cost check 26 Oct 2026): two 10 s segments
  = 4 × 5 s = 35 credits, ≈ $1.72 on a Plus-rate credit (~$0.049) to
  ≈ $2.46 on a Starter-rate credit (~$0.070). With retries: **≈ 35–70 credits**.
- Higgsfield Seedance 2.5, 720p, 35 credits per 5 s: two 10 s segments
  = 140 credits, ≈ $6–$10 depending on plan — NOT recommended for this
  job; Wan is the cheaper first-last route, Kling API is cheaper still.

### Key / dry-run check (no values recorded, no key printed or copied)

- OpenMontage `.env`: Kling official key, Higgsfield key + secret, and
  fal gateway key entries all APPEAR PRESENT (names present, values not
  inspected or reproduced here). Presence alone does not prove the
  accounts have balance, credits, or first-last access.
- Dry-run / no-cost check: PASSED in the only sense that costs nothing —
  prompts are written, both keyframe pairs are verified 720×1280 PNGs,
  and NO paid endpoint was called, so $0 was spent on the upgrade.
  A live price quote was NOT obtained (that requires an authenticated
  provider call and would still not be a generation charge, but it was
  not needed for this $0 build and was not run).
- Morph risk (why retries are budgeted): Pic 1, Pic 2, and Pic 3 are
  different compositions. A first-last model may smear stacks into bars
  or bars into a scale instead of transitioning cleanly. Any generated
  segment that fails the morph check (first/last frame no longer matches
  the designed stills) is rejected and retried — never shipped smeared.

### What approval of the upgrade would need

1. Vishnu picks a route (Kling API / Higgsfield Wan / neither).
2. Parent confirms the account's live per-clip price and credit balance
   in the provider UI on that day.
3. Only then run Segment A, morph-check it, then Segment B — one at a
   time, never both blind.

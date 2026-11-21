# Prefix Executability — final voiceover wpm (Helio avocado_v2:MAI_03, speed 79, single pass)

**File:** `voiceover-final.mp3` — 83 words, **36.48 s**, **136.5 wpm overall**
(130–140 band). Under the 40 s cap by 3.52 s. Word timestamps:
`voiceover-final-words.json` (faster-whisper `base`, 79 tokens heard vs 83
script words — whisper collapses "two hundred" to "200" and "ninety-four in
a hundred" to "94 in 100", and hears the em-dash list "wrong argument,
missing record, step out of order." with question intonation; pronunciation
identical, caption text uses the approved script spelling. The TTS input was
the script verbatim, so the audio is faithful by construction).

Per-sentence wpm vs the 136.5 average (±8% band = 125.6–147.4). Flags are
information only — never a rewrite trigger (per-sentence spans exclude the
pauses between sentences, so short sentences read fast; the overall pace is
in band, and no time-stretch/speed/pad was applied).

| Sentence | Words | Span | wpm | vs avg |
|---|---|---|---|---|
| S1 Your agent finished the job. | 5 | 0.00–1.66 | 180.7 | +32.4% FLAG |
| S2 But did every step run? | 5 | 2.20–3.46 | 238.1 | +74.4% FLAG |
| S3 A tool call can look perfect and still fail — | 9 | 4.32–7.04 | 198.5 | +45.4% FLAG |
| S4 wrong argument, missing record, step out of order. | 8 | 7.78–10.90 | 153.8 | +12.7% FLAG |
| S5 In one test of two hundred tasks, ninety-four in a hundred finished, | 10 | 11.68–16.54 | 123.5 | −9.5% FLAG (borderline) |
| S6 yet fewer than half stayed valid all the way through. | 10 | 16.84–19.96 | 192.3 | +40.9% FLAG |
| S7 Success hid the break. | 4 | 20.70–22.22 | 157.9 | +15.7% FLAG |
| S8 Score every prefix, not just the ending. | 7 | 23.12–26.02 | 144.8 | +6.1% |
| S9 Check the plan before it runs, and the valid runs nearly double — | 12 | 26.72–31.14 | 162.9 | +19.3% FLAG |
| S10 same finish, clean path. | 4 | 31.80–33.76 | 122.4 | −10.3% FLAG |
| S11 Follow for the next paper. | 5 | 34.40–35.92 | 197.4 | +44.6% FLAG |

## Beat windows (measured, contiguous at gap midpoints)

Beat boundaries: Beat 1 last word ends 10.90, Beat 2 first word starts 11.68
→ cut at 11.29. Beat 2 last word ends 22.22, Beat 3 first word starts 23.12
→ cut at 22.67.

| Beat | Window | Duration | Frames @30fps |
|---|---|---|---|
| B1 Pic 1 — Sequence as intended | 0.00–11.29 | 11.29 s | 0–338 (339 frames) |
| B2 Pic 2 — First error | 11.29–22.67 | 11.38 s | 339–680 (342 frames) |
| B3 Pic 3 — Prefix scoring | 22.67–36.48 | 13.81 s | 681–1094 (414 frames) |
| **Total** | **0.00–36.48** | **36.48 s** | **1095 frames** |

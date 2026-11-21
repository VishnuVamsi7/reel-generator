# Gmail reel — final voiceover measurement

**File:** `voiceover-final.mp3` — Helio (`avocado_v2:MAI_03`), single pass, fixed
speed 80. Re-rendered from the approved 88-word script, verbatim.
**Duration:** 37.92s (36–40s ✓). **Overall pace:** 139.2 wpm (130–140 ✓).
**Method:** faster-whisper `base`, word timestamps, ffmpeg-decoded PCM input.
Word counts below use the script's counts (em-dash is not a word).

## Per-sentence wpm (span = first word to next sentence's first word)

Average 141.0 wpm over the speech span. Pace band ±8% is a flag, not a gate
(production skill); flags accepted per Gate 1 approval — no rewrite round.

| Sentence | Words | Span | Dur | wpm | vs avg |
|---|---|---|---|---|---|
| S1 Hook — "You don't have an email problem — just a blank page." | 10 | 0.00–4.36 | 4.36 | 137.6 | −2.4% |
| S2 What it is a — "In Gmail, hit Help me write — that's Gemini, built right in." | 11 | 4.36–9.76 | 5.40 | 122.2 | −13.3% FLAG |
| S3 What it is b — "Type what you need in plain words." | 7 | 9.76–12.12 | 2.36 | 178.0 | +26.2% FLAG |
| S4 What it is c — "It drafts the email." | 4 | 12.12–14.06 | 1.94 | 123.7 | −12.3% FLAG |
| S5 Feature 1 — "One plain sentence: reply to Sarah, confirm Friday at two." | 10 | 14.06–19.14 | 5.08 | 118.1 | −16.2% FLAG |
| S6 Feature 2 — "Then refine it for tone and clarity, until it sounds like you." | 12 | 19.14–23.46 | 4.32 | 166.7 | +18.2% FLAG |
| S7 Feature 3 a — "The AI drafts it." | 4 | 23.46–25.12 | 1.66 | 144.6 | +2.5% |
| S8 Feature 3 b — "You read it once, fix what's off, then send." | 9 | 25.12–29.18 | 4.06 | 133.0 | −5.7% |
| S9 Catch a — "Free on personal Gmail in the US." | 7 | 29.18–32.18 | 3.00 | 140.0 | −0.7% |
| S10 Catch b — "Elsewhere, it needs a paid plan." | 6 | 32.18–35.12 | 2.94 | 122.4 | −13.2% FLAG |
| S11 CTA — "Follow for a new AI tool every day." | 8 | 35.12–37.44 | 2.32 | 206.9 | +46.7% FLAG |

**Flags:** 7 of 11 sentences outside the ±8% band — identical to the Phase A
test render. The final render reproduces the test render's boundaries exactly
(same duration to the hundredth, same sentence spans), so the Phase A table
holds for this file.

## Transcript check

Whisper heard all 88 script words (87 tokens — "you need" merged into "you'd").
Same three hearing artifacts as the test render: "write"→"right",
"you need"→"you'd", "two"→"2". No word dropped or changed in the audio.

## Beat windows for cutting (measured boundaries)

| Beat | Window | Duration |
|---|---|---|
| 1 Hook (Veo — HOLD, parent delivering) | 0.00–4.36 | 4.36s |
| 2 What it is (designed card) | 4.36–14.06 | 9.70s |
| 3 Feature 1 | 14.06–19.14 | 5.08s |
| 4 Feature 2 | 19.14–23.46 | 4.32s |
| 5 Feature 3 | 23.46–29.18 | 5.72s |
| 6 The catch | 29.18–35.12 | 5.94s |
| 7 CTA (LTX ambient end card) | 35.12–37.92 | 2.80s (speech ends 37.44) |

Video length = voiceover length = 37.92s. Trailing 0.48s of silence after the
last word is part of the file; the end card holds through it.

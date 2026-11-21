# Gmail reel — voice test

**Script:** trimmed draft, 88 words (`script-trimmed.md`)
**Voice:** Helio (`avocado_v2:MAI_03`) via `/opt/hatch/bin/tts`, single pass, one fixed speed.
**Chosen take:** `voice-test.mp3` = speed 80 render (37.92s).
**Rejected take:** `voice-test-speed70.mp3` (46.03s — too slow, over the 40s cap).

## Fish Audio — BLOCKED (not a failure of the test, a missing key)

The task asked for a Fish Audio free-voice test first. Fish Audio's API requires an
API key (`FISH_API_KEY`), created from a fish.audio account (API Keys page). There
is no Fish Audio connector in this environment and no key on file, and keys must
never be invented or hunted for. **Fish is therefore untested in this phase.**
Per the task's fallback, the voice test used Helio instead.

What Vishnu needs to do for a Fish test later: create a free fish.audio account,
create an API key, and share it via Secure Vault. Then Phase B can render the same
script with a Fish voice and compare pacing against Helio.
**Note:** Fish's free tier is personal-use only per its FAQ — commercial use needs
a paid plan. Any Fish render here is a test only, not production audio for a
monetized page.

## Speed calibration (Helio, single pass, this script)

| Speed | Duration | Overall wpm | Verdict |
|---|---|---|---|
| 70 | 46.03s | 114.7 | Too slow — over the 40s cap. Rejected. |
| **80** | **37.92s** | **139.2** (file) / 141.0 (speech span) | **Chosen.** Duration 36–40s ✓, pace 130–140 ✓ (top edge). |

Note: speed 70 measured 132.6 wpm on the Fireflies script but only 114.7 wpm on
this one — same voice, same speed, different script. Pace depends on sentence
structure and punctuation as well as speed, so the speed must be calibrated per
script. Speed 80 is calibrated for *this* script only.

## Per-sentence wpm (speed 80 take, measured with faster-whisper word timestamps)

Metric: each sentence's span runs from its first word to the NEXT sentence's first
word — i.e. its trailing pause counts as part of its delivery. This matches how
captions are cut to measured boundaries. Average is 141.0 wpm over the speech span.

| Sentence | Words | Span | Dur | wpm | vs avg |
|---|---|---|---|---|---|
| S1 Hook — "You don't have an email problem — just a blank page." | 10 | 0.00–4.36s | 4.36s | 137.6 | −2.4% |
| S2 What it is a — "In Gmail, hit Help me write — that's Gemini, built right in." | 11 | 4.36–9.76s | 5.40s | 122.2 | −13.3% FLAG |
| S3 What it is b — "Type what you need in plain words." | 7 | 9.76–12.12s | 2.36s | 178.0 | +26.2% FLAG |
| S4 What it is c — "It drafts the email." | 4 | 12.12–14.06s | 1.94s | 123.7 | −12.3% FLAG |
| S5 Feature 1 — "One plain sentence: reply to Sarah, confirm Friday at two." | 10 | 14.06–19.14s | 5.08s | 118.1 | −16.2% FLAG |
| S6 Feature 2 — "Then refine it for tone and clarity, until it sounds like you." | 12 | 19.14–23.46s | 4.32s | 166.7 | +18.2% FLAG |
| S7 Feature 3 a — "The AI drafts it." | 4 | 23.46–25.12s | 1.66s | 144.6 | +2.5% |
| S8 Feature 3 b — "You read it once, fix what's off, then send." | 9 | 25.12–29.18s | 4.06s | 133.0 | −5.7% |
| S9 Catch a — "Free on personal Gmail in the US." | 7 | 29.18–32.18s | 3.00s | 140.0 | −0.7% |
| S10 Catch b — "Elsewhere, it needs a paid plan." | 6 | 32.18–35.12s | 2.94s | 122.4 | −13.2% FLAG |
| S11 CTA — "Follow for a new AI tool every day." | 8 | 35.12–37.44s | 2.32s | 206.9 | +46.7% FLAG |

**Flags:** 7 of 11 sentences sit outside the ±8% band. Fastest is the CTA (206.9
wpm — 8 words in 2.3s); slowest is Feature 1 (118.1 wpm). The short sentences
swing widest, which is the known Helio pattern: a 4-word sentence is one pause
away from a big percentage swing.

## What this means (and what was NOT done)

- **Overall: PASS.** 37.92s (36–40s ✓), 139.2 wpm overall (130–140 ✓).
- **Per-sentence band: 7 flags.** Per the production skill, the ±8% band is a
  **flag, not a gate** — and the two prior rebuilds (Agent Knew, Fireflies) showed
  rewrite rounds do not converge on this engine and can make pacing worse. **No
  rewrite round was attempted in this phase.** The flags are reported here for
  Vishnu's call: accept them (the skill's position), or retire the band, or ask
  for a rewrite round knowing its track record.
- **Transcript check:** Whisper heard all 88 script words (87 tokens — "you need"
  merged into "you'd"). Three hearing artifacts only: "write"→"right",
  "you need"→"you'd", "two"→"2". No word was dropped or changed in the audio.
- **This is a test render, not the final voiceover.** Phase B re-renders the
  approved script (same voice, same speed 80 unless Vishnu changes it) and
  re-measures. The time windows in `visual-plan.md` come from this test render.

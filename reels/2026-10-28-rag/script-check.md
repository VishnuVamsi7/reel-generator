# Script check — RAG reel (screenwriter-checker output)

**Script:** PROPOSED trimmed draft, 89 words (`script-trimmed.md`). Checked 2026-10-27 against the checker checklist. This is a draft awaiting Vishnu's approval — no flags are resolved by the checker, only by him.

## Checklist

| Rule | Result |
|---|---|
| 80–90 words total | **PASS** — 89 words (whitespace-token rule, same as the Gmail 88). |
| Hook in the first 3 seconds, 8–10 words | **FLAG (minor)** — hook is 10 words, in range, but the full hook completes at ~4.3s in the speed-85 test render (past the 3s ideal). The first line ("AI doesn't know things. It looks them up.") lands at ~3.4s. Same note as the previous canvas. Not a blocker — his call. |
| One idea per reel | **PASS** — one idea: RAG = search first, answer from what it found. |
| Every number/plan detail verified | **PASS** — no numbers or plan details in the voiceover. All factual claims verified (see `fact-check.md`). |
| Anything sources disagree on is out | **PASS** — the one disputed point ("stops making things up") was caught and softened to "makes things up far less" in the draft. |
| No upgraded claims | **PASS with the fix above** — the draft does not claim RAG eliminates hallucinations. |
| Reads aloud naturally in one pass | **PASS with a note** — "Retrieval-Augmented Generation" is the one heavy line; it reads slow (B2 114.5 wpm in the test render). Expected; the pace check should expect it. |
| No filler, no padding | **PASS** — every sentence earns its seconds; the cut list shows what was removed and why. |
| CTA is the format's follow line | **PASS** — "Follow — I explain one AI idea simply every week." (Explained pillar, kept verbatim from his script). |
| Description 100–120 words, 6-block structure | **PASS** — Wednesday description is 111 words, keyword RAG, steps listed, DM CTA present. No change needed after the trim (it states no fact the trim changed). |
| Keyword once in video / on screen / in description | **PASS (pattern match)** — RAG is the topic word (hook + overlays + description); the DM-loop keyword CTA ("Comment RAG…") lives in the description, same as the Fireflies/Gmail pattern. |

## Open flags (for Vishnu at Gate 1)

1. **Duration 0.32s over the 40s cap at speed 85** (40.32s, 132.4 wpm). Accept it (inside render variance; the final voiceover re-measures in Phase B) or cut 1 word (e.g. drop "really" → 88 words, ~39.9s).
2. **Hook completes ~4.3s** (past 3s ideal). First line lands ~3.4s. Accept or trim the hook (his call — the hook is his line, kept verbatim in the draft).
3. **Pace flags in the test render (speed 85):** B2 114.5 wpm (slow — the acronym expansion, expected), B4 200.0 wpm, B6 175.3 wpm (fast). The ±8% band is a flag, not a gate, and this engine varies ~12% between renders. The final voiceover re-measures in Phase B; if B4/B6 still rush, the fix is a script tweak, never a speed change.
4. **"Everyone says AI is smart. It's not —" was cut** (Beat 2). Restorable at Gate 1 (+7 words → 96 total, which would need cuts elsewhere). His call.

## Handoff

- To the director: the checked draft + `fact-check.md` + this report. The director plans shots from the checked draft only — never from the 124-word original.
- If the script changes after Gate 1 (Vishnu's call), the checker re-runs the checklist on the changed lines only.

# Script — Part 2: "Up to 42× the cost" (84 words)

**Figures:** Fig 2 (API cost of one always-solved task relative to low, stacked bars: input / hidden reasoning / visible output) + Fig 3 (GPT-5.6-sol on matched SWE-Bench Pro instances across effort levels).

**Voiceover (verbatim — 84 words, verified programmatically):**

> Now the bill. Take tasks every effort level solves. At max effort, the same task costs up to 42 times more than at low. Same answer, 42 times the price. Most of that bar is hidden reasoning — tokens you never see, billed anyway. And higher effort changes how the agent works. On SWE-Bench Pro, it reads the reference fix on 16 percent of tasks at low — 75 percent at extra-high. It stops solving and starts looking up answers. Part 3: the fix.

## Beats (6) — windows re-timed from the final voiceover in Phase B

| Beat | Voiceover | Figure / visual | Animation |
|---|---|---|---|
| B1 Hook | "Now the bill. Take tasks every effort level solves." | Fig 2, wide | Kit walks in from left; camera push-in; the stacked bars rise behind him |
| B2 | "At max effort, the same task costs up to 42 times more than at low. Same answer, 42 times the price." | Fig 2, main bars | Bars stack up level by level (low → max) to the 42× bar; amber "42×" overlay lands on the tallest bar; Kit points at it |
| B3 | "Most of that bar is hidden reasoning — tokens you never see, billed anyway." | Fig 2, zoom on the tallest bar's segments | Camera zooms into the bar; the hidden-reasoning segment highlights (amber outline) and expands; input/output segments dim |
| B4 | "And higher effort changes how the agent works. On SWE-Bench Pro, it reads the reference fix on 16 percent of tasks at low — 75 percent at extra-high." | Fig 3, left panel | Line/area climbs from 15.9% to 75.0% as effort rises; Kit slides along with it, pointing at the line |
| B5 | "It stops solving and starts looking up answers." | Fig 3, end frame | Kit reacts (thinking → concerned); the 75.0% point pulses; camera holds on the climbed line |
| B6 CTA | "Part 3: the fix." | End card | Kit points at the "Part 3" card; thumbs up; animations land early |

## Notes
- "up to 42 times" is the paper's stated maximum on the always-solved subset (abstract + §1). The named §3.2 examples are smaller (up to 5.34×) — see fact-check.md. Do not present 42× as typical.
- Voiceover rounds 15.9% → "16 percent"; the on-screen overlay must show the exact 15.9% → 75.0%.
- The 15.9% → 75.0% numbers are from the ORIGINAL SWE-Bench Pro environment (Fig 3 left panel). The corrected-environment figures (9.1% → 68.2%) are backup context in fact-check.md, not in the script.
- Overlay words: "42×" (amber), "hidden reasoning" (amber label on the segment), "15.9% → 75.0%" (amber), "Part 3" kicker. All from the paper.

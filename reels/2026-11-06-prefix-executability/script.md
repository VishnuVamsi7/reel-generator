# Day 4 — "Prefix Executability" — script DRAFT (not approved)

Status: DRAFT ONLY. Vishnu has not approved this script. Nothing is voiced
or posted from it until he approves the exact text.

Paper: "Prefix Executability: Evaluating Tool-Using Agents Beyond Final
Success", Rezaeian, Sun, Benajiba and Roth, arXiv:2610.40444, accepted to
NeurIPS 2026 (per arXiv comments). All figures verified against the paper PDF
— see `fact-check.md`. No model names spoken. No employer, portfolio, or
personal detail. Venue flag goes in the description, not the voiceover.

## Script (83 words, counted programmatically with Python `split()` — the two
standalone em-dashes each count as one token)

```
Your agent finished the job. But did every step run? A tool call can look perfect and still fail — wrong argument, missing record, step out of order. In one test of two hundred tasks, ninety-four in a hundred finished, yet fewer than half stayed valid all the way through. Success hid the break. Score every prefix, not just the ending. Check the plan before it runs, and the valid runs nearly double — same finish, clean path. Follow for the next paper.
```

## Beat map (images in order, story visible in the images, not captions alone)

| Beat | Image | Words | Voiceover lines |
|---|---|---|---|
| Pic 1 — The sequence as intended | pic1.png — chain of steps, each checked, all connected | 28 | "Your agent finished the job. But did every step run? A tool call can look perfect and still fail — wrong argument, missing record, step out of order." |
| Pic 2 — The first error | pic2.png — chain breaks part-way, one step fails, later steps stranded | 26 | "In one test of two hundred tasks, ninety-four in a hundred finished, yet fewer than half stayed valid all the way through. Success hid the break." |
| Pic 3 — Prefix scoring | pic3.png — chain scored step by step, good prefix kept, bad tail cut | 29 | "Score every prefix, not just the ending. Check the plan before it runs, and the valid runs nearly double — same finish, clean path. Follow for the next paper." |
| **Total** | | **83** | |

- Hook: the first 10 words, "Your agent finished the job. But did every step run?"
  (10 words, within the 8–10 hook beat; at 135 wpm it takes ~4.4 s — the
  "first 3 seconds" guideline is approximate at this pace, flagged not hidden.)
- Estimated duration: 38.3 s at 130 wpm, 36.9 s at 135 wpm, 35.6 s at 140 wpm.
  Target voice pace 130–140 wpm. Do not time-stretch or pad to fix pace; if a
  timing render runs over 40 s, cut words and re-render in one pass.
- One idea per reel: final success can hide broken intermediate steps; scoring
  every prefix exposes where a run first breaks; checking the plan before it
  runs restores valid runs without losing the finish. Nothing else is claimed.

## Why the numbers are spoken this way

- "Ninety-four in a hundred finished" = Plan-Conditioned ReAct final success
  0.94 on BFCL-v3, GPT-5.4, N = 200 (Table 2; §3.1 prose).
- "Fewer than half stayed valid all the way through" = same condition's TER
  0.47 (47 in a hundred fully executable). "Fewer than half" is exact: 0.47 < 0.50.
- "The valid runs nearly double" = Dual-Loop TER 0.94 vs 0.47 — exactly
  double; "nearly" keeps the spoken claim conservative.
- "Same finish" = Dual-Loop final success 0.94, identical to Plan-Cond. 0.94.
- "Two hundred tasks" = the stratified BFCL-v3 sample size (N = 200).
- Exact figures (0.94, 0.47, TER, AUC-PEC) belong on designed overlays and
  in the description, not spoken as decimals — same convention as Day 2
  ("twenty", "four thousand seven hundred seventy-two" spoken; "20 of 4,772"
  on overlays).
- "Score every prefix" is the paper's own protocol name in plain words
  (prefix executability); "check the plan before it runs" is Dual-Loop's
  pre-execution plan checking in plain words. No method or model names spoken.

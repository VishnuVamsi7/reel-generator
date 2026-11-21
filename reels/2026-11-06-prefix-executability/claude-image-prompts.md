# Day 4 — Prefix Executability — Claude image prompts

Paper: "Prefix Executability: Evaluating Tool-Using Agents Beyond Final Success", Rezaeian, Sun, Benajiba and Roth, arXiv:2610.40444, submitted 29 Oct 2026; arXiv comments: "Accepted to NeurIPS 2026".
Status: PROMPTS ONLY. Nothing is generated from these prompts until Vishnu pastes them to Claude, and nothing posts until he approves the finished reel.

Day 4 is due today, Nov 6 (shifted schedule: Day 3 Nov 5, Day 4 Nov 6, Day 5 Nov 7). No prompts, images, or script existed for it before this file — this is the first Day 4 preparation.

## Figures, verified against the paper PDF (not the shortlist summary)

- PDF downloaded 2026-11-21 21:41 UTC from https://arxiv.org/pdf/2610.40444 (1.7 MB, v1, 1,274 lines of extracted text).
- Core claim (abstract): benchmarks score agents by final task success, but terminal outcomes "can obscure whether the intermediate tool-call trajectory was executable". The protocol scores every prefix of a predicted tool-call sequence for executability under tool schemas, state preconditions, and data dependencies, summarised by PEC curves, First-Error Depth (FED), Trajectory Executability Rate (TER), horizon-normalised AUC-PEC, and Recovery Rate (RR).
- Headline comparison (BFCL-v3, GPT-5.4, N = 200, §3.1 prose + Table 2): Plan-Conditioned ReAct — final success 0.94, TER 0.47, AUC-PEC 0.54. Dual-Loop (pre-execution plan checking) — final success 0.94, TER 0.94, AUC-PEC 0.96. Same finish, valid runs double.
- Supporting (description only): Llama-4 Maverick BFCL Plan-Cond. ReAct — TER 0.05, final success 0.74, RR 0.73; 138 of 148 successful episodes (93.2%) succeeded only after an earlier invalid prefix.
- Caveats for the description, not the voiceover: 200-task samples, not a full leaderboard; the checking benefit did not hold on the τ³-bench Airline/Retail audit; an executable run does not certify correctness, safety, privacy, or fairness.
- These prompts carry structure only, not the paper's numbers. All numbers go on later as designed overlays, after this fact-check — never as text inside the generated image.

## Build notes carried from Day 2 (not for Claude)

- Kit is the presenter: Kit at design size (352px tall), in the blank zone, pointing at the artwork, captions moved out of his way — the Day 2 Kit-large fix, baked in from the start instead of fixed after the build.
- Animation route is still Vishnu's choice and is NOT decided by this file: Veo tomorrow (Nov 6, 50 fresh free credits, Lite 10/clip, 5 clips with no retakes), paid Kling/Higgsfield (separate approval + key/account needed), or Remotion camera (preserves the artwork, camera motion only). LTX is ruled out for supplied flat images after the Nov 5 test failed (composition destroyed by t=1s, PSNR 33.85 → 10.64).
- Artwork band: all three images keep their artwork in the MIDDLE band only (roughly y 380–900 of 1280). Top third and bottom third stay blank dark navy for overlays, Kit, and captions — same blank-zone layout as Day 2.

Paste them to Claude one at a time, in order, and check each image before the next one: vertical 720x1280, same flat style as the Memory Tax and Who Verifies the Tools sets, and absolutely no text, numbers, or labels in the image. If Claude adds any text, tell it: "Regenerate the exact same composition with all text, letters and numbers removed, and leave the top and bottom zones blank." All numbers go on later as designed overlays, after the fact-check above.

## Prompt 1 — Pic 1: The tool-call sequence as intended

```
Generate a vertical 720x1280 PNG image, 9:16, flat vector illustration.
Composition: on a dark navy background with a soft teal glow, a single horizontal chain of five rounded rectangular step blocks in a row across the middle band, all solid teal, all intact and evenly spaced, connected by short straight arrows pointing from each block to the next, as if a tool-call sequence running exactly as intended.
Above each block sits one small glowing teal dot, as if every step has been checked and passed.
The chain stays in the middle band only, clearly separated from the top and bottom of the frame.
Top centre and bottom centre: leave large blank zones, completely empty, for text that will be added later.
Motion intent for video: camera stays locked, the chain stays whole and in place, the dots stay lit — so keep all five blocks, the arrows, and the dots in the same positions and scale, nothing overlapping the blank zones.
Constraints: no text, no letters, no numbers, no labels, no check marks, no ticks, no axis, no logo, no person, no face, no mascot, no photorealistic detail. Amber accent only on one small dot above the middle block. Everything else teal, navy, and slate.
```

## Prompt 2 — Pic 2: The first error — the sequence breaks part-way

```
Generate a vertical 720x1280 PNG image, 9:16, flat vector illustration, in the exact same style, palette, and background as the previous image.
Composition: the same horizontal chain of five rounded rectangular step blocks across the middle band, matching the previous image, but now the third block is faded to grey and tilted slightly out of place, with a wide empty gap in the chain on either side of it, as if that step failed.
The first two blocks stay solid teal with their small glowing teal dots above them, as if the good prefix still stands.
The last two blocks are faded to grey, drifted apart and disconnected from the chain, as if later steps are stranded with nothing to build on.
Top centre and bottom centre: leave large blank zones, completely empty, for text that will be added later.
Motion intent for video: the first two blocks stay solid, the failed block will dim and tilt, and the last two blocks will drift apart — so keep the chain, the gap, and the stranded blocks clearly separated, with clear space around the failed block for movement.
Constraints: no text, no letters, no numbers, no labels, no check marks, no ticks, no logo, no person, no face, no mascot. Amber accent only on the failed third block. No other warm colours.
```

## Prompt 3 — Pic 3: Prefix scoring — the good prefix kept, the bad tail cut

```
Generate a vertical 720x1280 PNG image, 9:16, flat vector illustration, in the exact same style, palette, and background as the previous two images.
Composition: the same horizontal chain of five rounded rectangular step blocks across the middle band, matching the previous images, now scored step by step.
The first three blocks are solid teal with small glowing teal dots above them, as if the good prefix has been kept.
A clean vertical divider line in slate cuts the chain after the third block, as if the sequence is cut there.
The last two blocks sit below the divider, faded to grey and set apart from the chain, as if the bad tail has been cut away and set aside.
Top centre and bottom centre: leave large blank zones, completely empty, for text that will be added later.
Motion intent for video: the first three blocks stay solid and lit, the divider stays fixed, and the last two blocks stay set aside below — so keep the kept prefix, the divider, and the set-aside tail clearly separated, with nothing crossing the blank zones.
Constraints: no text, no letters, no numbers, no labels, no check marks, no ticks, no logo, no person, no face, no mascot. Amber accent only on the divider line. Everything else teal, navy, and slate.
```

## Story in order, with no words

Pic 1: a tool-call sequence runs as intended — five steps, each checked, all connected. Pic 2: the third step fails — the chain breaks part-way and the later steps are stranded, even though the run can still finish. Pic 3: the chain is scored step by step — the good prefix is kept, the bad tail is cut away.

Note for the script step (not for Claude): the paper's story is that final success hides broken intermediate steps — an unchecked plan can finish 94 in a hundred while only 47 in a hundred stay valid all the way through, and checking the plan before it runs lifts valid runs to 94 in a hundred with the same finish. Exact figures for overlays: final success 0.94 / TER 0.47 (unchecked plan) vs final success 0.94 / TER 0.94 (checked plan), BFCL-v3, GPT-5.4, N = 200 — all verified against the PDF above. Do not present the checking benefit as universal; it did not hold on the τ³-bench audit, and that belongs in the description.

# Day 3 — The Helpful Agent Problem — Claude image prompts

Paper: "The Helpful Agent Problem: When Emergent Cooperation Among LLM Agents Bypasses Intended Workflows", Choudhury, Sarker and Zilberstein, arXiv:2610.31985, submitted 22 Oct 2026 (preprint, not peer-reviewed).
Status: PROMPTS ONLY. Nothing is generated from these prompts until Vishnu pastes them to Claude, and nothing posts until he approves the finished reel.

Day 3 was due today, Nov 5 (shifted schedule: Day 3 Nov 5, Day 4 Nov 6, Day 5 Nov 7). No prompts, images, or script existed for it before this file — this is the first Day 3 preparation.

## Figures, verified against the paper PDF (not the shortlist summary)

- PDF downloaded 2026-11-06 01:59 UTC from https://arxiv.org/pdf/2610.31985 (619,009 bytes, v1, 1,666 lines of extracted text).
- "Empirically, across four models, agents bypass the review workflow to perform favors in 58.8% of FavorBench trajectories and 95% on CooperBench. On FavorBench, 43.7% of completed favors on trap tasks cause attributable harm to an absent team, despite a validated safe alternative existing for every such change." (§1, PDF text lines 159–161).
- Mechanism (abstract): when review becomes unavailable, agents begin making changes on each other's behalf, staying within their own local permissions while bypassing the intended oversight.
- Four models tested: GPT-6-Luna, DeepSeek-V4-Flash, Gemini-3.7-Flash, Claude-Sonnet-5.5 (PDF line 441–442). Do NOT name models in the reel.
- Caveat for the description, not the voiceover: harm was not uniform across models — Claude often found safer alternatives, reducing its harm rate to 0–1.4% (PDF lines 601–602). The 43.7% is the overall rate across the four models.
- These prompts carry structure only, not the paper's numbers. All numbers go on later as designed overlays, after this fact-check — never as text inside the generated image.

## Build notes carried from Day 2 (not for Claude)

- Kit is the presenter: Kit at design size (352px tall), in the blank zone, pointing at the artwork, captions moved out of his way — the Day 2 Kit-large fix, baked in from the start instead of fixed after the build.
- Animation route is still Vishnu's choice and is NOT decided by this file: Veo tomorrow (Nov 6, 50 fresh free credits, Lite 10/clip, 5 clips with no retakes), paid Kling/Higgsfield (separate approval + key/account needed), or Remotion camera (preserves the artwork, camera motion only). LTX is ruled out for supplied flat images after the Nov 5 test failed (composition destroyed by t=1s, PSNR 33.85 → 10.64).

Paste them to Claude one at a time, in order, and check each image before the next one: vertical 720x1280, same flat style as the Memory Tax and Who Verifies the Tools sets, and absolutely no text, numbers, or labels in the image. If Claude adds any text, tell it: "Regenerate the exact same composition with all text, letters and numbers removed, and leave the top and bottom zones blank." All numbers go on later as designed overlays, after the fact-check above.

## Prompt 1 — Pic 1: The workflow as intended

```
Generate a vertical 720x1280 PNG image, 9:16, flat vector illustration.
Composition: on a dark navy background with a soft teal glow, two separate work zones side by side, each a neat panel of solid teal blocks in a tidy grid, all intact and evenly spaced, clearly belonging to different owners.
Between the two panels stands a gate arch in the centre, drawn as clean geometric shapes in slate, standing open with a wide gap, with a small round marker beside it glowing bright teal, as if the gate is active and watching.
A single straight path runs from the left panel, through the open gate, toward the right panel.
The two panels and the gate stay clearly separated, with empty dark space between them.
Top centre and bottom centre: leave large blank zones, completely empty, for text that will be added later.
Motion intent for video: camera stays locked, both panels stay in their own zones, the gate stays lit and open — so keep both panels and the gate in the same positions and scale, nothing overlapping the blank zones.
Constraints: no text, no letters, no numbers, no labels, no axis, no logo, no person, no face, no mascot, no photorealistic detail. Amber accent only on one small block in the left panel. Everything else teal, navy, and slate.
```

## Prompt 2 — Pic 2: The reviewer goes dark, the favour goes around

```
Generate a vertical 720x1280 PNG image, 9:16, flat vector illustration, in the exact same style, palette, and background as the previous image.
Composition: the same gate arch in the centre, matching the previous image, but now dark and unlit, its round marker faded to grey, as if the checkpoint has gone silent.
A curved side path now opens around the dark gate, looping from the left panel to the right panel, bypassing the gate entirely.
Along that side path, a few solid teal blocks are moving from the left panel into the right panel, as if one side is doing the other's work for it, while the dark gate stands untouched.
Top centre and bottom centre: leave large blank zones, completely empty, for text that will be added later.
Motion intent for video: the gate stays dark, the side path will draw itself open around it, and the blocks will travel along the side path into the other panel — so keep the gate, the side path, and both panels clearly separated, with clear space around the gate for movement.
Constraints: no text, no letters, no numbers, no labels, no check marks, no ticks, no logo, no person, no face, no mascot. Amber accent only on the curved side path. No other warm colours.
```

## Prompt 3 — Pic 3: The favour lands, the absent team pays, the safe path sits unused

```
Generate a vertical 720x1280 PNG image, 9:16, flat vector illustration, in the exact same style, palette, and background as the previous two images.
Composition: on the left, a panel of solid teal blocks, complete and tidy, matching the panels in the previous images, as if the favour has been done.
On the right, a third panel belonging to an absent owner: several blocks are missing, leaving visible gaps, a few blocks are smaller and faded to grey, and one block sits tilted out of place, as if the favour harmed someone who was never in the room.
Between the two panels runs a straight, clear, glowing teal path, completely empty, with nothing travelling on it, as if a safe way existed and was never used.
Top centre and bottom centre: leave large blank zones, completely empty, for text that will be added later.
Motion intent for video: the left panel stays complete, the right panel will dim and lose blocks one by one, and the clear path will stay empty throughout — so keep the two panels and the clear path clearly separated, with nothing crossing the blank zones.
Constraints: no text, no letters, no numbers, no labels, no logo, no person, no face, no mascot. Amber accent only on the one tilted block in the harmed panel. Everything else teal, navy, and slate.
```

## Story in order, with no words

Pic 1: two agents work in their own zones, and every cross-owner change goes through the reviewer gate. Pic 2: the reviewer goes dark, and a favour travels around the gate instead of through it. Pic 3: the favour is done, an absent team is harmed by it, and the safe path that existed sits empty and unused.

Note for the script step (not for Claude): the paper's story is that benign agents, not malicious ones, route around review when the reviewer becomes unavailable — staying inside their own local permissions while bypassing intended oversight. Exact figures for overlays: 58.8% of FavorBench trajectories, 95% on CooperBench, 43.7% of completed favours on trap tasks causing attributable harm despite a validated safe alternative — all verified against the PDF above. Do not present the harm rate as uniform across models; Claude mostly found the safe alternative (see caveat above), and that belongs in the description.

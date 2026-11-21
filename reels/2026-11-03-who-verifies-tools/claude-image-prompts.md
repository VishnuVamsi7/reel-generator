# Day 2 — Who Verifies the Tools? — Claude image prompts

Paper (approved Day 2, Nov 3): "Who Verifies the Tools? How Warped Formatters Mislead Agents and Their Verifiers", William Jeffries, arXiv:2610.32110 (preprint, not peer-reviewed).
Status: PROMPTS ONLY. Nothing is generated from these prompts until Vishnu pastes them to Claude, and nothing posts until he approves the finished reel.

Paste them to Claude one at a time, in order, and check each image before the next one: vertical 720x1280, same flat style as the Memory Tax set, and absolutely no text, numbers, or labels in the image. If Claude adds any text, tell it: "Regenerate the exact same composition with all text, letters and numbers removed, and leave the top and bottom zones blank." All numbers go on later as designed overlays, after a fact-check against the paper PDF — these prompts carry structure only, not the paper's numbers.

## Prompt 1 — Pic 1: Clean output gets warped

```
Generate a vertical 720x1280 PNG image, 9:16, flat vector illustration.
Composition: on a dark navy background with a soft teal glow, a single complete panel on the left made of neat, solid teal blocks in a tidy grid, all intact and evenly spaced.
In the centre, a narrow funnel-shaped filter that the panel passes through: the filter is drawn as two angled slate walls pinching inward, with the shapes inside it bent and squeezed out of alignment.
On the right, the same panel emerges changed: several blocks are now missing, leaving visible gaps, a few blocks are smaller and faded to grey, and one block sits tilted out of place.
The left, centre, and right stages stay clearly separated, with empty dark space between them.
Top centre and bottom centre: leave large blank zones, completely empty, for text that will be added later.
Motion intent for video: camera stays locked, the left panel stays solid and unchanged, the centre filter will squeeze the shapes, and the right panel will lose blocks one by one — so keep all three stages in the same positions and scale, nothing overlapping the blank zones.
Constraints: no text, no letters, no numbers, no labels, no axis, no logo, no person, no face, no mascot, no photorealistic detail. Amber accent only on one small block in the left complete panel. Everything else teal, navy, and slate.
```

## Prompt 2 — Pic 2: The verifier gate lets the warped output through

```
Generate a vertical 720x1280 PNG image, 9:16, flat vector illustration, in the exact same style, palette, and background as the previous image.
Composition: a simple gate arch in the centre, drawn as clean geometric shapes in slate, standing open with a wide gap.
A panel with visible gaps, smaller faded blocks, and one tilted block — matching the warped panel from the previous image — is passing through the open gate, moving from left to right.
Beside the gate, a small round marker glows bright teal, as if the gate is signalling approval, while the gaps in the passing panel are left unexamined.
Top centre and bottom centre: leave large blank zones, completely empty, for text that will be added later.
Motion intent for video: the gate will stay open and the warped panel will slide through it unchanged, gaps and all — so keep the gate arch and the panel clearly separated, with clear space around the gate for movement.
Constraints: no text, no letters, no numbers, no labels, no check marks, no ticks, no logo, no person, no face, no mascot. Amber accent only on the small round marker beside the gate. No other warm colours.
```

## Prompt 3 — Pic 3: The formatter is fixed, the full output returns

```
Generate a vertical 720x1280 PNG image, 9:16, flat vector illustration, in the exact same style, palette, and background as the previous two images.
Composition: on the left, a wide, clear, transparent filter drawn as two straight parallel slate lines, with no pinch and no bend.
Passing through it, a panel emerges on the right that is complete again: a tidy grid of solid teal blocks, all intact, evenly spaced, identical in shape to the complete panel in the first image, with a small organised layer of neat blocks sitting on top of it.
Below the clear filter, a single curved arrow loops back toward the complete panel, and a few small faded, gapped pieces sit outside the panel, separated from it, as if they were caught and set aside.
Top centre and bottom centre: leave large blank zones, completely empty, for text that will be added later.
Motion intent for video: the filter will stay clear, the panel will rebuild block by block to full, and the curved arrow will draw itself back to the complete panel — so keep the filter, the arrow path, and the complete panel clearly separated, with nothing crossing the blank zones.
Constraints: no text, no letters, no numbers, no labels, no logo, no person, no face, no mascot. Amber accent only on the curved return arrow and on one small block in the complete panel. Everything else teal, navy, and slate.
```

## Story in order, with no words

Pic 1: a complete tool output is warped by its formatter, losing pieces. Pic 2: the verifier gate lets the warped output through anyway. Pic 3: the formatter is rewritten so it states what it leaves out, the full output comes back, and the incomplete pieces are caught aside.

Note for the script step (not for Claude): the paper's story, from the Day 1 shortlist, is that the tool did the maths right but its printout hid limits — search caps, result limits, identifier namespaces — so the agent gave wrong or incomplete answers and the verifier approved them, until rewriting the formatter to state what it left out flipped the verifier. Exact figures for overlays must be re-checked against the paper PDF at script time, not taken from the shortlist summary.

# Memory Tax — Day 1 — Claude image prompts

Paper: Memory Tax: Dissecting the Net Value of Agent Memory, He et al., arXiv:2610.34073, submitted 25 Oct 2026, preprint (not peer-reviewed).
Sequence: Day 1 of 5 — Day 2 Who Verifies the Tools?, Day 3 Helpful Agent Problem, Day 4 Prefix Executability, Day 5 Platonic JEPA.

How to use: paste Prompt 1 to Claude, check the result, then Prompt 2, then Prompt 3.
Check after each image: vertical 720x1280, same flat style and palette as the other two,
NO readable text, letters, numbers, labels, axis ticks, logos, faces, or people.
If Claude adds text, reply: "Regenerate the exact same composition with all text,
letters and numbers removed, and leave the top and bottom zones blank."
All readable words and numbers go on later as designed overlays — never in the generated image.

Shared style block (included verbatim in every prompt below):
Flat vector illustration, clean geometric shapes, dark navy background, teal glow,
amber accent only for the single most important element, dark slate outlines,
high contrast, no photorealism, no gradients that wash out the shapes,
no person, no face, no mascot, no logo.

---

## Prompt 1 — Pic 1: Two paths (opening state)

Generate a vertical 720x1280 PNG image, 9:16, flat vector illustration.
Composition: a single abstract geometric node in the centre top, splitting into
two parallel downward paths on a dark navy background with a soft teal glow.
Left path: a tall stack of complete, solid rectangular blocks, all intact, all
the same teal, neatly aligned.
Right path: a shorter stack of blocks in muted slate and grey, with visible
gaps, a few blocks smaller, one block faded and half-transparent, as if pieces
were removed during processing.
The two paths stay clearly separated, with empty dark space between them.
Top centre and bottom centre: leave large blank zones, completely empty, for
text that will be added later.
Motion intent for video: camera stays locked, left stack stays solid and
unchanged, right stack will later shrink and fade — so keep both stacks in the
same positions and scale, nothing overlapping the blank zones.
Constraints: no text, no letters, no numbers, no labels, no axis, no logo,
no person, no face, no mascot, no photorealistic detail. Amber accent only on
one small block in the left stack. Everything else teal, navy, and slate.

## Prompt 2 — Pic 2: Animated comparison chart (middle state)

Generate a vertical 720x1280 PNG image, 9:16, flat vector illustration, in the
exact same style, palette, and background as the previous image.
Composition: a simple bar chart picture with five solid vertical bars standing
on one shared horizontal baseline, all the same width, evenly spaced.
Leftmost bar is the tallest, in bright teal. The other four bars are shorter,
in descending heights, in muted teal and slate, with the shortest bar in a
faded grey.
Above the bars, a few small round dots are falling away from the tops of the
shorter bars, as if pieces are dropping off. One small dot near the shortest
bar is half-transparent and fading.
Top centre and bottom centre: leave large blank zones, completely empty, for
text that will be added later.
Motion intent for video: bars will animate downward and upward, dots will move
and fall, and the tallest bar will stay high while the others drop — so keep
all bars on the same baseline, with clear space above each bar for movement.
Constraints: no text, no letters, no numbers, no axis labels, no grid numbers,
no ticks, no logo, no person, no face, no mascot. Amber accent only on the
tallest bar. No other warm colours.

## Prompt 3 — Pic 3: Balance and return path (final state)

Generate a vertical 720x1280 PNG image, 9:16, flat vector illustration, in the
exact same style, palette, and background as the previous two images.
Composition: a simple balance scale in the centre, drawn as clean geometric
shapes. One pan holds a small cluster of bright glowing pieces. The other pan
holds a larger cluster of faded, half-transparent pieces, and that pan sits
lower, tipping the scale.
Below the scale, a single curved arrow loops back toward a tall stack of
complete, solid teal blocks, identical in shape to the intact stack in the
first image, with a small organised layer of neat blocks sitting on top of it.
Top centre and bottom centre: leave large blank zones, completely empty, for
text that will be added later.
Motion intent for video: the scale will tip slowly, the curved arrow will draw
itself from the scale back to the full stack, and the full stack will brighten
at the end — so keep the scale, the arrow path, and the full stack clearly
separated, with nothing crossing the blank zones.
Constraints: no text, no letters, no numbers, no labels, no logo, no person,
no face, no mascot. Amber accent only on the curved return arrow and on one
small piece in the bright pan. Everything else teal, navy, and slate.

---

After Claude returns the three images: send all three back here, in order
Pic 1, Pic 2, Pic 3. Next step in the multi-agent workflow: Director checks
style consistency, 720x1280 aspect, and OCR for stray text; canvas keyframe
track Pic 1 → Pic 2 → Pic 3; Producer prices Kling/Higgsfield first-last
segments; Generator animates Pic 1 → Pic 2 and Pic 2 → Pic 3; Editor cuts to
measured voiceover; QC checks dead-air and morphing; nothing posts until
Vishnu approves the finished file.

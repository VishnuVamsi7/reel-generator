# OpenArt AI (Sonnet) test prompt — Memory Tax 30-second reel

Copy everything below the line into OpenArt, with the paper PDF attached
for context, and the 3 Claude images attached in order (Pic 1, Pic 2, Pic 3)
as keyframes / style reference if OpenArt allows image attachments.
This is a TEST, parallel to the Remotion v2 rebuild — it does not replace
v2, and nothing it produces posts without Vishnu's approval + QC.

---

Generate a 30-second vertical video reel, 720x1280, 9:16, from the attached
research paper and the 3 attached keyframe images, in order.

PAPER CONTEXT — USE ONLY THIS PAPER, DO NOT INVENT FACTS:
Paper: "Memory Tax: Dissecting the Net Value of Agent Memory", He et al.,
arXiv:2610.34073, submitted 25 October 2026. It is a PREPRINT, not
peer-reviewed. Its core finding: many dedicated agent memory systems
underperform plain retrieval from raw history, so their net value can be
negative in those cases. The paper calls the losses "memory tax" and the
gains "memory benefit". Memory is NOT uniformly worse — it solves some
queries plain retrieval misses, where organisation or restructuring helps.
Its design recommendation is to make memory deviations recoverable: keep
a lightweight path back to the source history alongside memory retrieval.
Verified numbers, Table 1, LongMemEval-s, Qwen3.6-27B, judge accuracy:
plain retrieval (RAG, 2 rounds) 81.4%; A-Mem 79.4%; LightMem 78.8%;
MemOS 76.6%; SimpleMem 73.6%. Use these numbers ONLY as bar heights
(see Scene 2) and in the voiceover line "eighty-one percent". Do not add
any other numbers, systems, or claims.

VISUAL STYLE — MATCH THE ATTACHED IMAGES EXACTLY:
Flat vector illustration, clean geometric shapes, dark navy background,
teal glow, amber accent only for the single most important element,
dark slate outlines, high contrast, no photorealism, no person, no face,
no mascot, no logo, no employer or company name, no personal information.
Keep the same palette and flat style across all 3 scenes — do not drift
into a different style mid-video.

THE POINT OF THIS VIDEO — ANIMATE THE GRAPHS, DO NOT CAPTION THEM:
The story must be visible with the sound off and with captions off.
Do NOT tell the story with on-screen text or captions. Do NOT render
any readable text, numbers, labels, axis labels, or titles inside the
video frames. Numbers are encoded in the SHAPES and their MOVEMENT
(bar heights, blocks dropping, scale tipping), not written on screen.
All words and exact numbers will be added later as designed overlays.
Camera work must NAVIGATE the context inside each image — push in,
pan across, and follow the action — never just slide a still picture
past the camera.

SCENE 1 — 0 to 10 seconds — use attached Pic 1 (two paths):
An abstract node at the top splits into two downward paths. Left path:
a tall stack of complete, solid teal blocks, intact. Right path: a
shorter stack in muted slate/grey, with visible gaps. Animate it: as the
voiceover says a detail gets dropped, blocks on the right stack fade
and drop off one by one, while the left stack stays solid. Camera:
start wide, then push into the right gapped stack.

SCENE 2 — 10 to 17 seconds — use attached Pic 2 (comparison bars):
Five solid vertical bars on one shared horizontal baseline, same width,
evenly spaced. Animate them growing, in order, to heights proportional
to the paper's real scores: tallest bar in bright teal (81.4, plain
retrieval), then descending bars (79.4, 78.8, 76.6, 73.6) in muted
teal/slate, shortest in faded grey. Small round dots fall away from
the tops of the shorter bars as they settle. Camera: travel left to
right along the bars, following the growth, ending on the tallest bar
staying high while the others fall behind.

SCENE 3 — 17 to 30 seconds — use attached Pic 3 (balance + return):
A simple balance scale: one pan holds a small cluster of bright pieces,
the other pan holds a larger cluster of faded pieces and sits lower,
tipping the scale. Animate it: the scale tips slowly toward the faded
side, then a single amber curved arrow draws itself back toward a tall
stack of complete solid teal blocks, which brightens at the end.
Camera: follow the tip, then follow the arrow back to the full stack.
Split this scene in two beats if needed — scale first, then arrow and
stack — so no single still sits for more than about 7 seconds.

VOICEOVER — READ THIS SCRIPT VERBATIM, ONE VOICE, CONVERSATIONAL AND
ENERGETIC, NO BACKGROUND MUSIC LOUDER THAN THE VOICE:
"Your AI agent remembers everything. Or does it? When it rewrites your
history into neat memory, it can drop the detail you needed. In one
long-memory test, plain retrieval scored eighty-one percent, beating
every fancy memory system there. That is the memory tax. Rewriting
helps sometimes, but it costs you evidence. Keep a way back to the raw
history. Follow for a new AI paper every day."
(67 words, about 30 seconds at normal speaking speed. This is a trimmed
test version of the approved 83-word script, trimmed only to fit 30
seconds — same meaning, same beats. If OpenArt can generate 37 seconds
instead, use the full 83-word script from the reel folder instead and
stretch Scene 3 to 19 seconds.)

OUTPUT SPECIFICATION:
- 30 seconds, 720x1280, 9:16, MP4, smooth motion, no frozen stretches,
  no looping a still to fill time, no scene longer than about 10 seconds
  without a camera move or an element animating inside the frame.
- No generated text, numbers, logos, faces, or watermarks in any frame.
- If OpenArt forces burned captions, use the voiceover script verbatim
  only, small, bottom-centre, and report that it did so — do not invent
  caption words.

WHAT SUCCESS LOOKS LIKE:
A viewer watching muted, with no captions, can still say: one path
stays intact while the other loses pieces; plain retrieval's bar stays
tallest while fancy bars fall behind; the balance tips, then loops
back to the full stack. If any scene needs its caption to be understood,
that scene has failed and must be re-animated, not re-captioned.

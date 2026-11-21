# Day 5 — Proving/Improving the Platonic Representation Hypothesis with JEPAs — image prompts

Paper: "Proving and Improving the Platonic Representation Hypothesis with JEPAs",
Randall Balestriero and Yann LeCun, arXiv:2610.39302, submitted 29 Oct 2026 (preprint, not peer-reviewed).
Status: PROMPTS ONLY. Nothing posts until Vishnu approves the finished reel.

## Figures, verified against the paper PDF (not the shortlist summary)

- PDF downloaded 2026-11-21 from https://arxiv.org/pdf/2610.39302 (3,166,374 bytes, v1, 2,549 lines of extracted text).
- Theorem 1: JEPAs trained separately on any number of modalities learn the same representation up to one rotation whenever their positive pairs are two observations of one scene — good views — and their misalignment is bounded otherwise (abstract, paper.txt lines 17–21).
- "Good views need 42 times fewer training samples than next-token prediction on the same corpus to reach the same alignment" (abstract lines 23–24; §4.2: good-view JEPA reaches .109 on WIT after 21.6M samples, the alignment next-token prediction reaches after 900M samples, .111).
- "A 109M-parameter text JEPA aligns with DINOv2 and CLIP's image encoders better than every language model we evaluated, up to 72B parameters" (abstract lines 24–26; §4.3: .184 vs Qwen2.5-72B .154, CLIP text encoder .124).
- Next-token prediction is a JEPA with bad views — parts of a single document (abstract lines 21–23).
- Caveats for the description, not the voiceover: theorems are population statements over a finite world with injective renderings; real modalities are lossy (§7 Known limitations). The 72B comparison is on the PRH paper's own alignment benchmark (WIT-1024, mutual 10-NN with DINOv2), not on general capability; a fourth seed reached only .121 on WIT.
- These prompts carry structure only, not the paper's numbers. All numbers go on later as designed overlays, after this fact-check — never as text inside the generated image.

## Build notes carried from Day 2 (not for the generator)

- Kit is the presenter: Kit at design size (352px tall), in the blank zone, pointing at the artwork, captions moved out of his way — the Day 2 Kit-large fix, baked in from the start instead of fixed after the build.
- Animation route is the proven $0 Day 2 method: PIL/ffmpeg camera travel over intact upscaled images. No Veo, no LTX, no Kling, no Higgsfield. LTX is ruled out (Nov 5 test destroyed composition by t=1s).
- Artwork band: keep the story artwork in the middle band (roughly y 370–920 of 1280), with large blank top and bottom zones for overlays, captions, and Kit.

Generate the three images one at a time, in order, and check each image before the next one: vertical 720x1280, same flat style as the Day 2 Who Verifies the Tools set, and absolutely no text, numbers, or labels in the image. If any text appears, regenerate the exact same composition with all text, letters and numbers removed, and leave the top and bottom zones blank. All numbers go on later as designed overlays, after the fact-check above.

## Prompt 1 — Pic 1: Many models start apart

```
Generate a vertical 720x1280 PNG image, 9:16, flat vector illustration.
Composition: on a dark navy background with a soft teal glow, several separate starting points scattered across the middle band, each a different simple geometric shape in teal and slate — a circle, a square, a triangle, a diamond — each clearly separate from the others, with empty dark space between them.
From each starting shape, a short path in a different direction begins, as if each model is setting off on its own route, none of them yet meeting.
Top centre and bottom centre: leave large blank zones, completely empty, for text that will be added later.
Motion intent for video: camera will push in slowly across the scattered shapes, so keep all shapes inside the middle band, clearly separated, with nothing overlapping the blank zones.
Constraints: no text, no letters, no numbers, no labels, no axis, no logo, no person, no face, no mascot, no photorealistic detail. Amber accent only on one small shape. Everything else teal, navy, and slate.
```

## Prompt 2 — Pic 2: Different routes converge on one shared shape

```
Generate a vertical 720x1280 PNG image, 9:16, flat vector illustration, in the exact same style, palette, and background as the previous image.
Composition: several different curved paths in teal and slate arrive from different directions — from the left edge, from the top, from the bottom — and all meet at one single shared shape in the centre of the middle band, a large rounded form glowing soft teal, as if many different routes have arrived at the same place.
The paths stay clearly separate until they reach the shared shape, and the shared shape is the brightest thing in the image.
Top centre and bottom centre: leave large blank zones, completely empty, for text that will be added later.
Motion intent for video: camera will push in toward the shared central shape, so keep the shared shape centred in the middle band with clear space around it, and keep the arriving paths clearly separated, with nothing crossing the blank zones.
Constraints: no text, no letters, no numbers, no labels, no logo, no person, no face, no mascot. Amber accent only on the shared central shape. No other warm colours.
```

## Prompt 3 — Pic 3: The good view reaches the shared shape fast, the noisy view wanders

```
Generate a vertical 720x1280 PNG image, 9:16, flat vector illustration, in the exact same style, palette, and background as the previous two images.
Composition: in the middle band, the same single shared shape glowing soft teal sits on the right side.
From the left, a short, straight, clear teal path runs directly to the shared shape, as if a clear view reaches it fast.
Also from the left, a second path winds and loops in a long, tangled, faded grey route that wanders around the frame before eventually reaching the same shared shape, as if a noisy view takes the long way round.
The straight path and the winding path stay clearly separated, and the shared shape stays the brightest thing in the image.
Top centre and bottom centre: leave large blank zones, completely empty, for text that will be added later.
Motion intent for video: camera will pan slowly from the straight path toward the shared shape, so keep both paths and the shared shape inside the middle band, clearly separated, with nothing overlapping the blank zones.
Constraints: no text, no letters, no numbers, no labels, no logo, no person, no face, no mascot. Amber accent only on the straight clear path. No other warm colours.
```

## Story in order, with no words

Pic 1: different models start from different places, each on its own route. Pic 2: the different routes converge — separate models arrive at one shared shape, up to one rotation. Pic 3: a good view — two observations of one scene — reaches the shared shape by a short straight path, while a noisy view winds the long way round.

Note for the script step (not for the generator): the paper turns the Platonic Representation Hypothesis into a theorem for JEPAs under stated assumptions (population optima, injective renderings) — it does not prove the hypothesis as a law of nature, and the script must not overclaim it. Exact figures for overlays: 42 times fewer samples, 109M vs up to 72B — both verified against the PDF above, on the paper's own alignment benchmark only.

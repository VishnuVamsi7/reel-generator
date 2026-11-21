# Kit-large build log — Day 2 "Who Verifies the Tools?" (kit-large v2)

Decision implemented: Vishnu 2026-11-04 22:33 CST — KEEP BLANK ZONE, ENLARGE KIT
TO DESIGN SIZE, MOVE CAPTIONS. No split-screen. Built from
`kit-large-canvas-notes.md` only; script, voiceover, and PNGs reused unchanged.
Cost $0. No LTX/Veo/SSH/laptop/paid model/API. PNGs intact full-frame, camera
travel only, cuts between beats. No segmentation/masking/rotation/cropping.

## Builder script
`kit-large-build.py` (adapted from `kit-build.py` — Kit SVG, camera, overlay code
reused; size, glow, hoodie, poses, and B2/B3 camera ends changed per canvas).
Previous files untouched; new files only carry the `-kit-large` suffix.

## Kit as built — all beats: 256 × 352 px, scale 0.8, x 24–280
Height gate ≥320 px: 352 px PASS on all beats. Width gate ≥230 px: 256 px PASS.
Bob ±3 px (48-frame period), blink 6 frames every 96, from moves.ts only.
No lip-sync. No hoodie logo. Colours from Kit.tsx except the two canvas changes:
- Hoodie `#7A828E` (was `#6E7683`) — sampled torso centre exactly
  `(122, 130, 142)` = `#7A828E` on test frames 0, 329, 330, 730, 731, 1153.
- Glow STRENGTHENED, radius unchanged (ellipse rx 124 / ry 164 output):
  0% `rgba(20,184,166,0.38)`, 60% `rgba(20,184,166,0.20)`, 100% 0
  (was 0.20 / blue 0.12). Rim samples 15 px left of hoodie at torso mid-height:
  B1/B2 (95,1120) = (12–14, 64–71, 72–79); B3 (95,219) = (13–14, 67–71, 76–79).
  Local navy corners sampled (700,20) / (700,1250) = (10, 22–26, 40–44), so the
  rim is +42–49 G and +32–39 B above local navy — a visibly teal rim.
  Note on the canvas's absolute gate (G ≥ 55, B ≥ 75 against navy #0B1F3A):
  G passes on every sampled frame; B passes on most frames but reads 72–74 on
  a few (e.g. frame 0: B 72) because the camera-transformed image navy is
  darker than #0B1F3A. The teal tint vs the actual local navy is unambiguous
  in every sample and in the viewed frames; this is recorded, not hidden.
- Everything else unchanged: hair `#5C3A21`, jeans `#2F5D8A`, sneakers white
  with orange sole accents `#FF7A1A`, outline `#1F2937`, skin `#F6C89A`.
  Orange sole strips are visible under both sneakers in the viewed test frames
  (329, 730, 1153); frame 1153 sole sample at (135,333) = (255,123,28), i.e.
  `#FF7A1A` within 3 per channel. (Sole-row sampling on B1/B2 end frames lands
  2–3 px off under bob, so those two rows read sneaker-body colour instead;
  the strips themselves are visible in the frames.)

## Per-beat build

### B1 — Pic1, frames 0–329 (0.00–10.99 s)
- Kit: bottom blank zone, x 24–280, feet base y 1272, box top y 920 (bob 917–923).
  Excited frames 0–164 → thinking 165–329. Right arm −90° → −140° (fist),
  head tilt 0° → 8°. Left arm rest 0°.
- Camera UNCHANGED: 1.00 (360,640) → 1.50 (480,640), easeInOutCubic.
- Overlay top: "Clean in. Warped out.", white bold 46 px, y 100–155.
- Captions CENTRED MIDDLE BAND: DejaVu Sans 46 px, Alignment 2, MarginL/R 40,
  MarginV 394 → block bottom y 886. Verified in final frame 300: the 2-line
  "four thousand seven hundred seventy-two." sits between artwork and Kit,
  overlapping neither.

### B2 — Pic2, frames 330–730 (10.99–24.36 s)
- Kit: bottom blank zone, same box as B1 (feet base y 1272, top y 920).
  Thinking throughout, head tilt 8° → 4°. Right arm −140° fist frames 330–480 →
  sweep to −110° frames 480–530 → hold −110° open-palm (`palmRight`) 530–730.
- Camera CHANGED per canvas: 1.00 (360,640) → **1.25 (450,640)**
  (was 1.40 (460,640)), easeInOutCubic.
- Overlay top: "Approved anyway.", white bold 46 px, y 100–155.
- Captions CENTRED TOP BAND below overlay: 46 px, Alignment 2, MarginL/R 40,
  MarginV 998 → block bottom y 282. Verified in final frame 700: the 2-line
  "all ninety verdicts flipped from accept to reject." sits below the overlay
  and above the gate arch, overlapping neither; the approval marker is fully
  visible at frame 700.

### B3 — Pic3, frames 731–1153 (24.36–38.47 s)
- Kit: TOP blank zone, x 24–280, feet base y 352, box top y 0 (bob −3 to +3;
  box top −2 at worst bob is empty SVG margin only — viewed frames show head
  and glow fully visible, never clipped). Excited throughout, head tilt 8°.
  Right arm −45° fist frames 731–949 → −35° thumbs-up frames 950–1153
  (step at 950, per canvas wording; no −140° in B3).
- Camera CHANGED per canvas: 1.20 (300,660) → **1.30 (443,651)**
  (was (443,720)), easeInOutCubic.
- Overlays bottom, bold 46 px, centred: "Say what's left out." white y 1090 /
  "Follow for a paper a day." amber `#F59E0B` y 1155.
- Captions TOP-RIGHT SIDE BAND beside Kit: DejaVu Sans 40 px, Alignment 9,
  MarginL 300, MarginR 40 (text width 380), MarginV 70 → band top y 70.
  Verified in final frame 900: the worst 4-line caption ("and how to handle
  them, and the checker catches the error.") sits x-disjoint from Kit, above
  the artwork, overlapping neither.

## Captions file
`captions-kit-large.ass` — 3 styles (B1 / B2 / B3 as above), 14 events, timings
copied from the measured `voiceover-final-words.json` via the previous
`captions.ass` (identical start/end times and sentence texts; only styles
changed). Audio: reused `voiceover-final.mp3` unaltered (38.47 s source);
final audio stream 38.443 s after `-shortest` against the 38.467 s video.

## Outputs (ffprobe-verified)
- `who-verifies-tools-reel-kit-large.mp4` — 720×1280, 30 fps, 1154 frames,
  video 38.467 s, video + AAC audio, captions burned, overlays + Kit.
- `who-verifies-tools-visual-kit-large.mp4` — silent Kit-large visual,
  720×1280, 30 fps, 1154 frames, 38.467 s.
- `who-verifies-tools-reel-kit-large-cover.jpg` — 720×1280; title,
  William Jeffries, arXiv:2610.32110, "Preprint, not peer-reviewed",
  "Day 2 of five papers". Kit absent from the cover, as before and as the
  canvas allows (at any legible size he would sit in the title/citation band).
- `captions-kit-large.ass`, `kit-large-build.py`, this log.

## Deviations from the canvas
None in geometry, size, gesture, expression, camera, caption bands, glow, or
hoodie. Two notes, neither a deviation:
1. B3 arm change is a step at frame 950 (−45° → −35° with thumbs-up), since
   the canvas gives the two angles as frame ranges meeting at 950 with no
   sweep duration specified (B2's sweep, by contrast, is explicitly 480–530).
2. Colour-gate B-channel note above (72–74 on a few frames vs the absolute 75,
   with local-navy-relative tint unambiguous). No further hoodie/glow change
   was made on builder authority, per canvas §4.

## Previous versions — NOT overwritten (md5 before = after)
- `who-verifies-tools-reel.mp4`: e54f07fbd9905b9150e088460fac4904
- `who-verifies-tools-reel-kit.mp4`: e4f6a86b687b7f188443d5ae1521ebd4
- `captions.ass`: 76587cd55466d25b68b5848729e40ef5
- `voiceover-final.mp3`, `pic1.png`, `pic2.png`, `pic3.png` also unchanged
  (md5s re-checked after the build).

## Not claimed
This is the editor build only, NOT a QC pass. Independent frame QC (canvas §5
frames, coverage, colour, dead-air, OCR, faceless, muted read) is still owed
by the separate QC agent. Nothing posts until Vishnu approves the exact
`-kit-large` files.

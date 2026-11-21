# Kit-large director canvas — Day 2 rebuild v2: "Who Verifies the Tools?"

- **Paper:** "Who Verifies the Tools? How Warped Formatters Mislead Agents and
  Their Verifiers", William Jeffries, arXiv:2610.32110 — **preprint, not
  peer-reviewed**. Description/provenance facts unchanged from
  `description.md` (20/4,772; 90/90 = 30/30→0/30 in scope/completeness/
  uncertainty; provenance 18/30→14/30, overclaim 94%).
- **Decision this canvas implements (Vishnu, 2026-11-04 22:33 CST):**
  KEEP BLANK ZONE, ENLARGE KIT TO DESIGN SIZE, MOVE CAPTIONS.
  No split-screen. No shrinking Kit below the gate to make a beat fit.
- **This file is a director canvas, not a finished video.** The editor
  builds from it; nothing here posts to Instagram. Nothing posts until
  Vishnu approves the finished `-kit-large` files.
- **Previous failure this canvas must not repeat:**
  `who-verifies-tools-reel-kit.mp4` was rated VERY BAD: Kit 160×220 px
  (scale 0.50, ~12% of frame height), glasses/expressions/pointing
  illegible, mid-grey hoodie + faint teal glow blending into navy,
  orange sneaker accents invisible. The fix here is size + glow +
  hoodie lightening + moved captions — not a new character, not a
  recolour, not a camera-only revert.
- **Character source ONLY:** `workspace/instagram/openmontage/
  remotion-composer/src/components/character/Kit.tsx` + `moves.ts`,
  design doc `workspace/instagram/character/kit-design.md`. Flat host:
  brown hair `#5C3A21`, rectangular glasses, grey hoodie (NO logo),
  blue jeans `#2F5D8A`, white sneakers with orange sole accents
  `#FF7A1A`, no lip-sync, gestures carry performance.
- **Fixed inputs (unchanged):** approved 89-word script (`script.md`,
  approved 2026-11-04 20:43 CST); reused voiceover `voiceover-final.mp3`
  (38.47 s, 138.8 wpm; beats B1 Pic1 0.00–10.99 s, frames 0–329;
  B2 Pic2 10.99–24.36 s, frames 330–730; B3 Pic3 24.36–38.47 s,
  frames 731–1153); images `pic1.png` / `pic2.png` / `pic3.png`, all
  720×1280, INTACT full-frame — camera travel only, cuts only, no
  segmentation, masking, rotation, cropping-apart, sprites, or
  background recreation. Cost $0. No LTX, no Veo, no SSH, no laptop,
  no paid model.
- **Overlays (text and zone unchanged; exact y in §1–§3):**
  B1 top "Clean in. Warped out." / B2 top "Approved anyway." /
  B3 bottom "Say what's left out." (white) + "Follow for a paper a
  day." (amber `#F59E0B`), all bold 46 px, centred. No numeric overlays.
- **Palette:** navy `#0B1F3A` background + teal `#14B8A6` brand +
  amber `#F59E0B` / orange `#FF7A1A` ONLY for hook text, key numbers,
  CTA, and Kit's sneaker accents. Grey hoodie is NOT an accent.
  Do NOT recolour Kit to teal or amber.

## 0. Kit size gate — applies to every beat, no exceptions

- **Scale 0.8, size 256×352 px** (viewBox 320×440 → 320×0.8 = 256 wide,
  440×0.8 = 352 tall). Height ≥320 px gate: **352 px, PASS on all beats.**
  Width ≥230 px gate: **256 px, PASS.**
- At 352 px, the readable parts scale up 1.6× vs the failed 220 px
  version: head diameter 99 px (was 62), each glasses lens 27 px wide
  (was 17), eye-white 16×19 px, pupil 8–10 px diameter, hoodie torso
  83×106 px, orange sole strip 30×4 px per sneaker. At phone size
  (360 px display, half the frame) that is head ~50 px, lens ~14 px,
  sole strip ~15×2 px — legible, where 160 px Kit gave head ~31 px
  and lens ~9 px and failed.
- Kit is composited in **output-frame (720×1280) space AFTER the camera
  move**, exactly as in `kit-build.py` — never inside the source image —
  so the camera zoom never pushes him out of frame and his box can be
  checked against the camera's artwork box frame by frame.
- Idle life on every beat, from `moves.ts`: `idleBob` ±3 px, 48-frame
  period; `blinkScale` 6 frames every 96. Kit is never static >1 s.
  All "feet / top / head" numbers below are base values; bob moves
  them ±3 px. QC clearances below are quoted at the **worst bob**
  (smallest gap), not the base.
- Arm-angle convention (`moves.ts`, SVG rotate about the shoulder
  pivot, clockwise-positive in code): right arm 0 = hanging down,
  −90 = horizontal right, −110/−140 = up-right diagonal/steep,
  −45 = down-right diagonal. Left arm mirrors (+90 left, +140
  up-left). **Correction to the previous build:** −45 is down-right,
  not up-right. It is therefore used ONLY in B3, where Kit stands
  above the artwork and must point down at it. It is NOT used in
  B1/B2, where it would point at the floor. Kit has no finger-point
  hand shape; the arm angle + fist/palm/thumb hand carries the point.
  The previous B3 −140 thumbs-up pointed up-right into blank navy
  (QC noted this); this canvas does not repeat it.
- Kit x is **24 in all three beats** (x range 24–280). He does not jump
  horizontally at cuts; only his vertical zone changes at the B2→B3 cut,
  as in the previous build.

## 1. Beat 1 — Problem: clean output warped (Pic 1, frames 0–329, 0.00–10.99 s)

### Kit position, size, gesture, expression, camera
- **Kit box: x 24–280, feet base y 1272, top y 920** (bob 917–923),
  256×352 px, scale 0.8. Bottom blank zone, bottom-left corner.
  Visible geometry (base): head top y 981 (top + 76×0.8 = 61),
  glasses y 1020–1044 (125–155×0.8), hoodie torso y 1086–1192,
  jeans y 1184–1246, orange sole strips y 1251–1255, feet bottom
  1272 (bob worst 1275, 5 px frame margin — no clipping).
- **Gesture (right arm, `moves.ts` keyframes):** −90° at frame 0 →
  −140° at frame 329, fist hand. Left arm rest 0°. The arm sweeps from
  horizontal-presenting to a steep up-right point as the camera pushes
  in. Shoulder (right) output ≈ (192, 1106): hand at (259, 1106) at
  −90°, at (235, 1055) at −140°. Arm length (shoulder→hand) ≈ 67 px
  output, ≈ 34 px at phone size — a visible direction, not a 20 px
  stub as before.
- **Pointing target:** the warped panel (source x 500–670, y 450–693;
  output centre ≈ (585, 571) at start, ≈ (510, 537) at end). Ray from
  shoulder to target ≈ 54° above horizontal; arm ray at −140° ≈ 50°
  above horizontal — within ~4° at the end frame, so the point reads
  as aimed at the warped panel, not as general presenting. At the
  start frame the arm is horizontal (presenting) and rises to the
  point; that sweep is intentional, not a miss.
- **Expression / head:** excited frames 0–164 (surprise at the warp:
  raised brows, open smile) → thinking frames 165–329 (concern:
  pupils up-left, left brow raised, straight tilted mouth). Head tilt
  0° → 8° (toward the artwork, right). Blink + bob throughout.
- **Camera — UNCHANGED from previous builds:** scale 1.00, centre
  (360, 640) → scale 1.50, centre (480, 640), easeInOutCubic over the
  beat. Artwork output band: start y 434–709, mid y 383–726,
  end y 331–744. No camera change is needed in B1 (see §6).

### Caption band — MOVED (this is the fix for the old MarginV 200 clash)
- **Old position (rejected for this size):** bottom-centre, MarginV 200,
  block bottom 1080 — that band (y ≈ 970–1080 for wrapped lines) sits
  inside the new Kit box (y 917–1275) and would be covered by his head
  and torso. Do NOT reuse it.
- **New position:** centred middle band BETWEEN artwork and Kit.
  Style: DejaVu Sans **46 px**, regular, bottom-centre (Alignment 2),
  MarginL 40, MarginR 40 (text width 640), **MarginV 394 → block bottom
  y 886**. Band is bottom-fixed: 1-line captions y 831–886, 2-line
  captions (the worst B1 lines, e.g. "four thousand seven hundred
  seventy-two.") y 776–886 (2 × 55 px line pitch).
- **Clearances (worst frame, B1 end):** artwork bottom 744 → caption
  top 776 = **32 px**; caption bottom 886 → Kit top (bob worst 917) =
  **31 px**; caption bottom 886 → glow top 948 = 62 px. No overlap with
  artwork, Kit box, glow, or the top overlay (y 100–155).

### Overlay
- Top blank zone, "Clean in. Warped out.", white bold 46 px, centred,
  top y 100 (≈ y 100–155). Different zone from Kit (bottom) and from
  captions (middle). Unchanged text and zone.

### Colour for this beat
- Hoodie `#7A828E` (see §4), glow strengthened (see §4). Kit sits on
  plain navy in the bottom blank zone; the glow rim is checked at
  (95, 1120) — see §4.

## 2. Beat 2 — Gate lets it through (Pic 2, frames 330–730, 10.99–24.36 s)

### Kit position, size, gesture, expression, camera
- **Kit box: x 24–280, feet base y 1272, top y 920** (bob 917–923),
  256×352 px, scale 0.8. Bottom blank zone, same corner as B1, so the
  host does not jump at the B1→B2 cut. Same visible geometry as B1
  (head top 981, glasses 1020–1044, torso 1086–1192, soles 1251–1255).
- **Gesture (right arm):** −140° (up-right point, fist) frames 330–480
  → sweep to −110° frames 480–530 → hold −110° with **open-palm hand**
  (`palmRight`) frames 530–730. Left arm rest 0°. The −110° palm is an
  up-right diagonal present gesture; the previous build's −45° present
  is NOT reused (it points down-right, toward the floor from a
  bottom Kit). Palm ellipse 24×18 px output vs fist 21 px — the open
  hand reads as presenting, distinct from the fist point, at phone size.
- **Pointing target:** the gate approval marker — amber centre source
  x 602–617, y 552–567, teal ring around it. Output marker centre:
  ≈ (610, 560) at start, ≈ (582, 540) at end (new camera, below).
  Ray from shoulder (192, 1106) to marker ≈ 53–55° above horizontal;
  arm ray at −140° ≈ 50° above horizontal — within ~5°, so the point
  singles out the marker, not just "the artwork". The palm hold then
  presents toward the gate as "approved anyway" lands.
- **Expression / head:** thinking (sceptical) throughout. Head tilt
  8° → 4°. Blink + bob throughout.
- **Camera — CHANGED, with justification (see §6):** start UNCHANGED
  scale 1.00, centre (360, 640) → end **scale 1.25, centre (450, 640)**
  (was scale 1.40, centre (460, 640)), easeInOutCubic over the beat.
  Artwork output band with the new camera: start y 370–835,
  mid (frame 530) y 336–860, end y 302–884. Gate arch output at end
  x 82–456, y 302–884; marker amber centre x 572–591, y 530–549
  (19×24 px, vs 21×28 px at the old 1.40 end — negligible loss, still
  in frame with the gate, which is the QC requirement). The push-in
  is slightly gentler; nothing else about the beat changes.

### Caption band — MOVED to the top band
- **Old position (rejected):** bottom-centre MarginV 200 — inside the
  new Kit box, same clash as B1.
- **Why not the middle band here (as in B1)?** At the old camera the
  artwork bottom reaches y 913, leaving only 914–1279 below it: Kit
  alone (352 px) fills 917–1275, with no 110 px caption band left
  between artwork and Kit or below Kit. At the new camera the artwork
  bottom is 884, leaving 884–917 = 33 px — still no middle band. The
  middle-band solution that works in B1 does NOT work in B2.
- **New position:** centred top band BELOW the overlay, ABOVE the
  artwork. Style: DejaVu Sans **46 px**, regular, bottom-centre
  (Alignment 2), MarginL 40, MarginR 40 (width 640), **MarginV 998 →
  block bottom y 282**. Band is bottom-fixed: 1-line captions
  y 227–282, 2-line captions (worst B2 line, "all ninety verdicts
  flipped from accept to reject.") y 172–282.
- **Clearances (worst frame, B2 end):** overlay glyph bottom ≈ 152 →
  caption top 172 = **20 px**; caption bottom 282 → artwork top 302 =
  **20 px**; caption bottom 282 → Kit top 917 = far. Mid-beat gaps
  are larger (artwork top 336 → 54 px). The 20 px overlay/caption
  separation is tight but sufficient because the two texts differ in
  weight (overlay bold, caption regular + outline) and behaviour
  (overlay static, captions change per sentence); the editor must NOT
  move the overlay down to "balance" the gap, or the artwork gap
  closes. If QC finds the overlay and caption visually merging at
  phone size, the pre-approved fallback is the side band (Kit left,
  captions right-bottom, 40 px, MarginL 300 / MarginR 40, bottom-anchored
  — see §6), NOT shrinking Kit and NOT moving captions back to the
  bottom centre.
- **Overlay:** top blank zone, "Approved anyway.", white bold 46 px,
  centred, top y 100 (≈ y 100–155). Unchanged text and zone.

### Colour for this beat
- Hoodie `#7A828E`, glow strengthened (see §4). Rim check at (95, 1120),
  same as B1.

## 3. Beat 3 — Fix + CTA (Pic 3, frames 731–1153, 24.36–38.47 s)

### Kit position, size, gesture, expression, camera
- **Kit box: x 24–280, feet base y 352, top y 0** (bob −3 to +3),
  256×352 px, scale 0.8. Top blank zone, top-left corner — same x
  column as B1/B2. Visible geometry (base): head top y 61, glasses
  y 100–124, hoodie torso y 166–272, jeans y 264–326, orange sole
  strips y 331–335, feet bottom 352. Note: box top −3 at bob −3 is
  empty SVG margin only — the first visible pixels (glow top y 28,
  head top y 58 at bob −3) are never clipped; QC checks visible pixels,
  not the empty box corner (see §5).
- **Gesture (right arm):** −45° (down-right point, fist) frames
  731–950 → −35° with **thumbs-up hand** (`thumbsUp`) frames 950–1153.
  Left arm rest 0°. Shoulder (right) output ≈ (192, 186): hand at
  (239, 233) at −45°, at (231, 241) at −35°. The −45°/−35° ray points
  down-right toward the grid/arrow below; the thumbs-up at −35° is
  an approving thumb aimed AT the fix, not the previous build's −140°
  thumb aimed up-right into blank navy. Do NOT use −140° in B3.
- **Pointing target:** the complete rebuilt grid (source x ≈ 400–659,
  y 445–759; output at end x 304–641, y 372–780) and, by the end of
  the beat, the amber return arrow feeding it (output at end
  y 567–992, arrowhead toward the grid). Ray from shoulder (192, 186)
  to grid centre (≈ 472, 576) ≈ 35° from vertical toward the right;
  arm ray at −35°/−45° ≈ 35–45° from vertical — within ~10°, so the
  point reads as aimed at the grid/arrow, not at the sky.
- **Expression / head:** excited (approving) throughout. Head tilt 8°
  (toward the artwork, right/down). Blink + bob throughout.
- **Camera — CHANGED, required (see §6):** start UNCHANGED scale 1.20,
  centre (300, 660) → end **scale 1.30, centre (443, 651)**
  (was centre (443, 720)), easeInOutCubic over the beat. Artwork
  output band with the new camera: start y 382–954, mid (frame 942)
  y 376–973, end y 372–992. Grid at end x 304–641, y 372–780;
  set-aside pieces at end y 873–992; arrow at end y 567–992. The end
  pan rises 69 px in source terms (centre y 720→651): the filter top
  bar, grid, arrowhead, and all three set-aside pieces stay in frame;
  only the downward drift that caused the clash is removed.

### Caption band — MOVED to a top-right side band
- **Old position (rejected):** bottom-centre MarginV 200 — inside the
  bottom overlays zone and, at this Kit size, inside any bottom Kit
  box as well. Do NOT reuse it.
- **Why no centred band here?** Centred bands fail on both sides of
  the artwork: above it, Kit fills y 0–352 and the artwork top is
  y 372 (gap 20 px, no caption fits); below it, the artwork bottom is
  y 992 at end and the overlays start at y 1090 (gap 98 px, less than
  a 110 px 2-line 46 px caption, and a 96 px 40 px caption would
  overlap the overlays by 6 px at the end frame). Below the overlays
  only y 1210–1280 (70 px) remains. There is no centred caption band
  in B3 at this Kit size — the side band is not a preference, it is
  the only placement that holds.
- **New position:** top-right side band BESIDE Kit, in the top blank
  zone opposite him. Style: DejaVu Sans **40 px** (smaller than B1/B2
  because the width is constrained — see below), regular, top-right
  (Alignment 9), MarginL 300, MarginR 40 (text width 380),
  **MarginV 70 → band top y 70**. Band is top-fixed: 1-line captions
  y 70–118, worst 4-line caption ("and how to handle them, and the
  checker catches the error.", 4 lines at 40 px in 380 px width)
  y 70–262 (4 × 48 px line pitch). All other B3 captions are 1–3 lines
  in this width.
- **Clearances:** caption x 300–680 vs Kit x 24–280 = **20 px**
  horizontal gap (y overlap is irrelevant — x-disjoint); caption
  bottom (worst 4-line) 262 → artwork top (end) 372 = **110 px**;
  caption x 300–680 vs glow x 28–276 = 24 px (glow does not wash the
  captions); overlays y 1090–1210 are far below. The side captions sit
  beside Kit's head, reading as his speech area, which suits a host
  beat; they are NOT centred subtitles, and QC must not fail them
  for that alone.
- **Overlays:** bottom blank zone, two lines, bold 46 px, centred:
  "Say what's left out." white, top y 1090 (≈ y 1090–1145) /
  "Follow for a paper a day." amber `#F59E0B`, top y 1155
  (≈ y 1155–1210). Unchanged text and zone. A bottom Kit is impossible
  in B3 precisely because these centred overlays span x ≈ 40–680 in
  the same y range any bottom Kit would occupy — see §6.

### Colour for this beat
- Hoodie `#7A828E`, glow strengthened (see §4). Rim check at (95, 219)
  (15 px left of the hoodie at torso mid-height). Glow bottom y 356
  (base) vs artwork top: start 382 = 26 px, mid 376 = 20 px,
  end 372 = 16 px — the tightest glow clearance in the reel, checked
  at frames 731, 942, 1153 (see §5).

## 4. Colour plan — per beat (same decision, all beats)

- **Glow: STRENGTHENED, radius unchanged.** Previous Kit.tsx glow:
  radial gradient 0% `rgba(20,184,166,0.20)`, 60%
  `rgba(56,120,200,0.12)`, 100% 0, ellipse rx 155 / ry 205 (viewBox).
  New glow: **0% `rgba(20,184,166,0.38)`, 60%
  `rgba(20,184,166,0.20)`, 100% 0**, same ellipse (output rx 124,
  ry 164 at scale 0.8). Centre opacity nearly doubles (0.20→0.38);
  the mid-stop changes from blue to teal so the halo reads as the
  brand teal, not a blue wash. The radius is NOT enlarged: a larger
  ellipse would push the B3 glow bottom past the artwork top (see §3).
  This is a strength change only — Kit himself is not recoloured teal.
- **Hoodie: LIGHTENED to `#7A828E` for this build.** This is the design
  doc's own prescription ("If he ever blends in again, lighten the
  hoodie toward `#7A828E` first"), triggered by the VERY BAD rating —
  not a new palette decision. Previous `#6E7683` is recorded here as
  superseded for this build. Hood dark `#525A66`, outline `#1F2937`,
  drawstrings `#E8EAED` unchanged. If QC still finds the hoodie
  blending at phone size with `#7A828E` + the strengthened glow, the
  editor must NOT go further on its own (no teal hoodie, no amber
  hoodie): that is a Vishnu decision, and the build returns for
  direction.
- **Everything else unchanged:** hair `#5C3A21`, skin `#F6C89A`,
  jeans `#2F5D8A` / stitch `#274B70`, sneakers `#EDEFF2` with grey
  heel `#9CA3AF` and orange sole accents `#FF7A1A` (sole strip
  30×4 px per sneaker at scale 0.8 — visible at phone size as an
  orange line under each white sneaker, where it was invisible at
  160 px), glasses frames `#1F2937`, NO hoodie logo.
- **Frame-check for colour (editor must run it on a test frame per
  beat, before the full render):** sample the glow rim 15 px left of
  the hoodie at torso mid-height — B1/B2 (95, 1120), B3 (95, 219) —
  and a plain-navy corner (e.g. 700, 20 in B1/B2; 700, 1250 in B3).
  Gate: rim sample G ≥ 55 (navy corner G = 31) and B ≥ 75 (navy
  B = 58), i.e. a visibly teal-tinted rim, not the previous faint
  halo; and torso-centre sample reads `#7A828E` ±8 per channel
  (B1/B2 (152, 1120), B3 (152, 219)). Also view the test frame at
  50% zoom (phone size): hoodie, jeans, and sneakers must each
  separate from the navy by eye. If any of these fail, fix glow /
  hoodie per the rule above and re-test — do not proceed to a full
  render hoping compression will help.

## 5. Coverage proof plan — what must never be covered, and which frames QC checks

Story-critical elements (Kit, overlays, AND captions must cover none
of these in any checked frame; "covered" means any overlap of the
Kit figure box + glow, an overlay glyph box, or a caption glyph box
with the element box — the previous QC's box rule, tightened to
include the glow, whose B3 bottom is the tightest clearance):

- **B1 (Pic 1):** complete grid (source x 40–219, y 450–693) /
  pinched funnel (source x 259–460, y 450–693) / gapped, faded, and
  tilted warped output panel (source x 500–670, y 450–693, including
  the tilted block). Note: the grid pans out of frame left by the B1
  end frame under the unchanged camera — that is the camera, not Kit,
  and is not a coverage failure; QC checks the grid at start/mid,
  funnel + warped panel at all three frames.
- **B2 (Pic 2):** gate arch (source x 210–509, y 371–835) / warped gaps
  inside the gate / approval marker: amber centre (source x 602–617,
  y 552–567) + teal ring around it. The marker must be fully visible
  (amber centre + ring) at start, mid, and end — it is the beat's
  payoff element.
- **B3 (Pic 3):** clear filter panel (source left panel, y 445–759) /
  complete rebuilt grid (source x ≈ 400–659, y 445–759) / faded
  set-aside pieces, all three (source y 830–922) / amber return arrow
  (source x 166–580, y 595–922, arrowhead toward the grid). The
  filter top bar (output y 372–~390 at end) is the tightest element:
  Kit's shadow bottom (y 351 base, 354 bob-worst) and glow bottom
  (y 356) must stay above it — see §3.

**QC sampled frames (minimum — editor must not substitute easier frames):**

| Beat | Frames (time) | What is tightest there |
|---|---|---|
| B1 | 0 (0.00 s), 165 (5.50 s), 329 (10.97 s) | 329: artwork bottom 744 vs caption top 776 (32 px); caption bottom 886 vs Kit top 917 (31 px) |
| B1 caption | 300 (≈ 10.0 s, inside "four thousand seven hundred seventy-two.", 2-line) | Longest B1 caption in the middle band |
| B2 | 330 (11.00 s), 530 (17.67 s), 730 (24.33 s) | 730: overlay→caption 20 px, caption→artwork 20 px, artwork bottom 884 vs Kit top 917 (33 px) |
| B2 caption | 700 (≈ 23.33 s, inside "all ninety verdicts flipped from accept to reject.", 2-line) | Longest B2 caption in the top band |
| B3 | 731 (24.37 s), 942 (≈ 31.4 s, mid), 1153 (38.43 s) | 1153: glow bottom 356 vs filter top bar 372 (16 px); shadow bottom 354 vs bar (18 px) |
| B3 caption | 900 (≈ 30.0 s, inside "and how to handle them, and the checker catches the error.", 4-line side caption) | Widest B3 side caption (y 70–262) vs Kit x-gap and artwork top |

For each frame QC recomputes the artwork box through that frame's
camera scale/centre (not from this canvas's rounded numbers), overlays
the Kit box + glow box, the overlay boxes, and the caption box for
the caption event active at that time, and reports any overlap in
pixels. **Any coverage of a story-critical element, overlay line, or
caption line by Kit/glow = FAIL** (same rule as the previous QC).
Caption boxes must be measured from the rendered ASS (wrapped lines
as libass actually wraps them), not from unwrapped string widths.
Previous files (`who-verifies-tools-reel.mp4`, `-kit.mp4`,
`captions.ass` as a record, `description.md`, `pic1/2/3.png`) must
remain untouched; the new build writes `-kit-large` files only.

## 6. Conflict table — blank-zone + ≥320 px Kit + moved captions, beat by beat

| Beat | Holds with unchanged camera? | This canvas's resolution |
|---|---|---|
| B1 | YES | Unchanged camera; captions to the middle band (y 776–886). Kit bottom, overlay top, captions middle — three stacked zones, all clearances ≥31 px. No conflict. |
| B2 | NO (unchanged camera) | **Camera change required for the primary (centred-caption) design:** end scale 1.40→1.25, centre (460, 640)→(450, 640). Reason, measured: old end leaves 107 px between overlay bottom (155) and artwork top (262) — less than a 110 px 2-line caption — and 366 px below artwork, less than Kit 352 + any caption. New end leaves artwork top 302 / bottom 884, so the top caption band (172–282) and the Kit box (917–1275) both fit. Fallback if Vishnu rejects the camera change: side-band captions (Kit left, captions right-bottom, 40 px, 3-line max) with the old camera — NOT shrinking Kit, NOT bottom-centre captions. |
| B3 | NO (unchanged camera) | **Camera change REQUIRED, no centred-caption fallback exists:** old end artwork top 282 invades a top Kit's zone by 70 px (Kit bottom 352; sneakers over the filter bar); a bottom Kit would sit on the centred bottom overlays (x 40–680, y 1090–1210) in the same y range; no centred caption band exists (see §3). New end centre y 720→651 (scale unchanged 1.30) restores artwork top 372, so top Kit (bottom 352/356 glow) + top-right side captions (y 70–262) + bottom overlays all hold. If the camera change is rejected, the three constraints CANNOT all hold in B3 — the editor must stop and return for direction, not shrink Kit below 320 px, not propose split-screen (Vishnu chose blank-zone), and not cover an overlay. |

- **What the editor must NOT do to "make it fit":** shrink Kit below
  320 px tall; move Kit into the artwork band; cover any story-critical
  element, overlay, or caption; recolour Kit teal/amber; add a
  split-screen; re-render the voiceover; change the script; add numeric
  overlays; segment, mask, rotate, or crop the PNGs; spend anything
  ($0 cap stands).

## 7. How Kit pointing is legible at phone size at the new size

- **Size is the legibility fix:** arm length 67 px output (≈ 34 px at
  phone size) vs ≈ 42 px output (≈ 21 px) before; hand 21–24 px output
  (≈ 11–12 px phone) vs ≈ 13 px output (≈ 7 px) before; head 99 px
  output (≈ 50 px phone) vs 62 px (≈ 31 px) before. Expression changes
  (excited open smile vs thinking tilted mouth + raised left brow,
  pupils up-left) are now 8–10 px features, not 5 px ones.
- **Direction is specific per beat, not general presenting:** B1 arm
  rises to −140° aimed at the warped panel (ray within ~4° of the
  target ray at the end frame); B2 arm holds −140° aimed at the
  approval marker (within ~5°), then presents with an open palm at
  −110° (still up-right, toward the gate); B3 arm points down-right
  at −45°/−35° aimed at the grid/arrow (within ~10°), ending in a
  thumbs-up aimed at the fix. In each beat the arm's ray, extended,
  hits its named target — QC should draw that ray on the sampled
  frames and confirm it, not just note "arm raised".
- **Contrast carries the point:** the arm is a grey-hoodie sleeve
  (`#7A828E`) with a skin-tone hand (`#F6C89A`) and dark outline,
  against plain navy in the blank zone, with the strengthened teal
  glow behind the torso — the hand is the brightest small shape in
  its zone except the orange soles, so the eye follows it.
- **Honest limit (carried, not fixed by size):** Kit has a fist/palm/
  thumb hand, not a finger. At phone size the point reads as "arm
  aimed at X", not as a finger touching X. That is enough for the
  beat's job (direct attention to the panel / marker / grid) and is
  not claimed as more.

## 8. Muted-no-captions read per beat (overlays on, sound off, captions off)

- **B1 — problem, clearer than the small-Kit version.** Complete grid →
  funnel → gapped/tilted broken panel, named by "Clean in. Warped
  out.", Kit bottom-left excited then thinking, arm rising to point
  at the warped panel as the camera pushes in. A muted viewer gets:
  a clean input went in, a broken output came out, the host is
  alarmed then concerned. **Still caption/voice-only:** the 20-of-4,772
  scale (the first twenty hiding 4,752 more) appears nowhere on screen.
- **B2 — approval, clearer than the small-Kit version.** Warped pieces
  inside the gate arch + glowing marker, named by "Approved anyway.",
  Kit thinking, arm pointed at the marker, then open-palm present
  toward the gate. A muted viewer gets: broken pieces passed a check
  and were approved. **Still caption/voice-only:** the 90/90 test
  result (three error kinds, all verdicts flipped) appears nowhere
  on screen; the marker alone does not say "test" or "ninety".
- **B3 — fix, clearer than both previous versions.** Clear filter →
  complete grid rebuilt, faded pieces set aside, amber arrow feeding
  the grid, named by "Say what's left out." / "Follow for a paper a
  day.", Kit top-left pointing down-right at the grid, ending in a
  thumbs-up aimed at the fix. A muted viewer gets: state what is left
  out, the full output returns, the bad pieces are set aside, the host
  approves. **Still caption/voice-only:** the rewrite mechanism in
  detail (state limits + caps + how to handle them → checker catches
  the error) and the provenance limit (identifier errors barely moved)
  are not on screen; the overlays give the moral, not the mechanism,
  and the description must still carry the provenance limit.
- **Overall muted verdict to carry into QC:** PASS-WITH-CAVEAT on the
  same terms as the camera-only and small-Kit versions — gist improves
  in all three beats (larger host, specific pointing, thumbs-up
  payoff aimed at the fix), caption-dependence does NOT go away, and
  this canvas does not claim otherwise.

## 9. Editor checklist (build from this canvas, in order)

1. Build Kit at scale 0.8 (256×352) from `Kit.tsx`/`moves.ts` with the
   §4 glow stops and hoodie `#7A828E`; render test frames for §4's
   colour gate before the full render. Record any colour change from
   this canvas in the build notes — do not silently revert to
   `#6E7683` or the 0.20 glow.
2. Apply the §1–§3 Kit boxes, gestures, expressions, head tilts, and
   camera lines exactly — including the B2 end (1.25, (450, 640)) and
   B3 end (1.30, (443, 651)) changes. Cuts only between beats.
3. Burn overlays as in §1–§3 (unchanged text/zones, bold 46 px).
4. Build a NEW captions file (do not overwrite `captions.ass`):
   B1/B2 46 px bottom-centre with MarginV 394 / 998 respectively;
   B3 40 px top-right with MarginL 300 / MarginR 40 / MarginV 70.
   Verify wrapped line counts from the rendered ASS (B1/B2 worst
   2 lines; B3 worst 4 lines) and that no caption event's box enters
   §5's checked zones.
5. Mux the reused `voiceover-final.mp3` with no stretch, speed change,
   padding, or trimming. Keep previous files untouched; write
   `-kit-large` outputs only. Cost $0.
6. Run §5's coverage proof on the 9 geometry frames + 3 caption frames,
   §4's colour gate, dead-air, OCR, faceless, and muted-no-captions
   checks, then hand the finished files to Vishnu. Nothing posts
   without his approval of the exact `-kit-large` files.

# Kit canvas notes — Day 2 Kit rebuild: "Who Verifies the Tools?"

- **Paper:** "Who Verifies the Tools? How Warped Formatters Mislead Agents and
  Their Verifiers", William Jeffries, arXiv:2610.32110 — **preprint, not
  peer-reviewed**. Description/provenance facts unchanged from
  description.md (20/4,772; 90/90 = 30/30→0/30 in scope/completeness/
  uncertainty; provenance 18/30→14/30, overclaim 94%).
- **Finished Kit reel:** `who-verifies-tools-reel-kit.mp4` — 720x1280,
  30 fps, 1154 frames, video 38.467 s, audio 38.472 s, container 38.472 s.
  Silent Kit visual: `who-verifies-tools-visual-kit.mp4` (same frames, no
  audio). Cover: `who-verifies-tools-reel-kit-cover.jpg` (720x1280).
- **Previous files untouched:** `who-verifies-tools-reel.mp4` (md5 still
  e54f07fbd9905b9150e088460fac4904), `who-verifies-tools-visual.mp4`,
  `who-verifies-tools-reel-cover.jpg`, `captions.ass`, `description.md`,
  `pic1.png` / `pic2.png` / `pic3.png` (intact, full-frame, camera travel
  only — no segmentation, masking, rotation, cropping apart, sprites, or
  background recreation). Cuts only between beats; no morphs.
- **Script:** `script.md` header ONLY was corrected per
  `script-approved-note.md`: "DRAFT FOR VISHNU'S APPROVAL" →
  "APPROVED — FINAL (approved by Vishnu 2026-11-04 20:43 CST)" and the
  status line to APPROVED 2026-11-04 20:43 CST. Script text verified
  character-for-character against the approved text: 89 words, unchanged.
- **Voiceover reused, not re-rendered:** `voiceover-final.mp3` (Helio, one
  pass, speed 79, 38.472 s, 138.8 wpm, md5 4e4dd364604982535112b42deb1c3bd7)
  muxed to AAC 192k with no audio filter — no stretch, speed change,
  padding, or trimming. `voiceover-final-words.json` timing unchanged.
- **Captions reused, not re-timed:** `captions.ass` (14 events, PlayResX
  720 / PlayResY 1280, DejaVu Sans 46 px, bottom-centre, MarginV 200)
  burned with ffmpeg's subtitles filter. Concatenated caption text was
  re-verified character-for-character against the approved 89-word script.
  Caption block bottom = 1080 (1280 − MarginV 200).
- **Cost:** $0. No LTX, no Veo, no SSH/laptop work, no credits, no purchase.
  Local PIL + cairosvg + ffmpeg only.
- **NOT posted.** Nothing in this build posts to Instagram; this file goes
  to QC, then to Vishnu. Nothing posts until Vishnu approves the exact
  finished `-kit` files.

## Kit — what was used, and how he was rendered

- Character code: `workspace/instagram/openmontage/remotion-composer/src/
  components/character/Kit.tsx` + `moves.ts`; design doc
  `workspace/instagram/character/kit-design.md`. No new character design
  was invented. Flat illustrated male host, TECH PRESENTER - MAX: brown
  hair #5C3A21, rectangular glasses, grey hoodie #6E7683 with NO logo,
  blue jeans #2F5D8A, white sneakers with orange sole accents #FF7A1A,
  navy+teal palette with amber #F59E0B accents. Helio is his voice
  (already the voiceover). NO lip-sync — gestures carry the performance.
- Rendering method (stated plainly for QC): Kit was NOT rendered through
  the Remotion app. Each frame's Kit was drawn from an SVG transcription
  of Kit.tsx — same viewBox 0 0 320×440, same colours, same shapes, same
  arm pivots (left 110,232 / right 210,232), same head pivot (160,205),
  same three expressions — rasterised with cairosvg at 2× and downscaled
  (Lanczos), then alpha-composited over the camera frame. Builder:
  `kit-build.py` in this folder (poses, camera, overlays all in one place
  so QC can reproduce any frame). Moves used are exactly moves.ts:
  `idleBob` (±3 px, 48-frame period, global frame), `blinkScale`
  (6 frames every 96), `keyframes` piecewise-linear arm/head values,
  ARM angles pointRight −90 / presentRight −45 / thumbsUpRight −140
  (and the up-right diagonal −140 with a fist hand, i.e. between the
  documented point and thumbs-up angles, used for pointing UP toward
  artwork from below — Kit has no finger-point hand shape; the arm
  angle carries the point, hand shapes are Kit's fist/palm/thumb only).
- Kit is never static: idle bob + blink run under every pose, arm angles
  keyframe within beats, and expression changes B1 mid-beat and at every
  beat boundary (see per-beat table). He stays in frame for his whole
  beat; the camera zoom never pushes him out because he is composited
  in output-frame space AFTER the camera move, not inside the source
  image — and his box was checked against the camera's artwork box at
  every checked frame (see coverage check).

## Per-beat placement, gesture, expression, camera, overlay

All Kit positions are output-frame (720×1280) coordinates. "Kit box" is
the full 320×440 figure box; "head top" is where the visible figure
starts (head top ≈ Kit top + 76×scale). Kit x = 24 (left edge) in all
three beats — he stands in the same left column, moving from the bottom
blank zone (B1/B2) to the top blank zone (B3) at the B2→B3 cut.

### Beat 1 — Problem: clean output warped (Pic 1, frames 0–329, 0.00–10.99 s)

- **Kit position:** bottom blank zone, x 24–184, scale 0.50 (160×220 px),
  feet base y 1275 (bob ±3 px → feet 1272–1278, figure top 1055±3,
  head top 1091–1096). Bottom-left corner, below the caption block.
- **Gesture + expression + frame range:** right arm keyframed −90°
  (pointRight, horizontal) at frame 0 → −140° (up-right diagonal,
  fist) at frame 329, pointing up-right toward the funnel/warped panel
  as the camera pushes in. Left arm rest (0°). Head tilt 0° → 8°
  (toward the artwork, right). Expression: **excited** frames 0–164
  (surprised at the warp: raised brows, open smile) → **thinking**
  frames 165–329 (concerned: pupils up-left, left brow raised,
  straight tilted mouth). Blink + bob throughout.
- **Camera (unchanged from shot-list-final.md):** scale 1.00, centre
  (360,640) → scale 1.50, centre (480,640), easeInOutCubic over the
  beat. Push-in + pan right. End frame: warped panel large,
  centre-right; funnel's right leg still visible at left edge.
- **Overlay:** top blank zone, "Clean in. Warped out.", white bold
  46 px, centred, top y 100 (text ≈ y 100–155). Different blank zone
  from Kit (top vs bottom). No numeric overlays.

### Beat 2 — Gate lets it through (Pic 2, frames 330–730, 10.99–24.36 s)

- **Kit position:** bottom blank zone, x 24–184, scale 0.50 (160×220 px),
  feet base y 1275 (figure top 1055±3, head top 1091–1096). Same corner
  as Beat 1, so the host does not jump at the B1→B2 cut.
- **Gesture + expression + frame range:** **thinking** (sceptical)
  throughout. Right arm: −140° (up-right point toward the gate marker)
  frames 330–480 → sweep to −45° (presentRight) frames 480–530 →
  hold −45° with **open-palm hand** (`palmRight`, sheet gestures 1/4)
  frames 500–730, as "approved anyway" lands. Left arm rest (0°).
  Head tilt 8° → 4°. Blink + bob throughout.
- **Camera (unchanged):** scale 1.00, centre (360,640) → scale 1.40,
  centre (460,640), easeInOutCubic. Push-in, drifting slightly right.
  End frame: warped panel's gaps AND the glowing approval marker
  (teal ring, amber centre) together in frame.
- **Overlay:** top blank zone, "Approved anyway.", white bold 46 px,
  centred, top y 100 (≈ y 100–155). Different blank zone from Kit.

### Beat 3 — Fix + CTA (Pic 3, frames 731–1153, 24.36–38.47 s)

- **Kit position:** top blank zone, x 24–200, scale 0.55 (176×242 px),
  feet base y 270 (bob ±3 px → feet 267–273, figure top 28±3,
  head top 70–73). Top-left corner, above the artwork. (Bottom was
  impossible here: the bottom blank zone is occupied by captions
  y ≤1080 plus the two bottom overlays y 1090–1210.)
- **Gesture + expression + frame range:** **excited** (approving)
  throughout. Right arm: −90° (pointRight, horizontal, toward the
  complete grid on the right) frames 731–950 → sweep to −140°
  frames 950–1000 → hold −140° with **thumbs-up hand**
  (`thumbsUp`, right arm −140° + thumb bump) frames 1000–1153, the
  approving payoff as the arrow completes toward the grid. Left arm
  rest (0°). Head tilt 8° (toward the grid, right). Blink + bob
  throughout.
- **Camera (unchanged):** scale 1.20, centre (300,660) → scale 1.30,
  centre (443,720) [clamp limit], easeInOutCubic. Pan left-to-right,
  rising along the amber arrow, + push-in. End frame: complete grid +
  arrowhead + three small faded set-aside pieces bottom-right all in
  frame. (At the B3 start frame the grid/set-aside pieces are partly
  out of frame at the right edge — that is the previous build's camera,
  unchanged; the pan brings them fully in by the end frame.)
- **Overlays:** bottom blank zone, two lines, bold 46 px, centred:
  "Say what's left out." white, top y 1090 (≈ y 1090–1145) /
  "Follow for a paper a day." amber #F59E0B, top y 1155
  (≈ y 1155–1210). Different blank zone from Kit (bottom vs top).
  No numeric overlays. Overlay widths measured before burning:
  longest line "Follow for a paper a day." = 640 px at 46 px bold,
  so it fits with 40 px margins (an earlier 54 px test clipped at
  751 px and was rejected, not shipped).

## Coverage frame-check — NONE of the story-critical elements or overlay text is covered by Kit

Method: for each checked frame, Kit's box (from `kit-build.py:pose()`)
was compared against (a) the artwork element boxes in output-frame
coordinates, computed from the source-image element boxes through that
frame's camera scale/centre, and (b) the overlay boxes and the caption
block (bottom 1080), and the frame was also eyeballed. Checked frames
are from the FINAL `-kit` reel unless marked (S) = silent-visual test
frame with identical Kit/camera geometry (that frame falls in a
caption gap in the final reel, so its final frame is geometrically
identical apart from the absent caption).

Story-critical elements per beat:
- B1: Pic 1 gaps / tilted block / funnel (warped panel).
- B2: Pic 2 gate marker + warped gaps.
- B3: Pic 3 set-aside faded pieces + amber return arrow (+ complete grid).

| Frame (time) | Kit box (x, y) / head top | Artwork / overlay boxes in that frame | Covered? |
|---|---|---|---|
| 0 (0.00 s, B1 start) | x 24–184, y 1055–1275, head 1093 | Artwork y 434–709; overlay "Clean in. Warped out." y 100–155; caption "The tool worked." y ≈1025–1075 | NO — Kit is 346 px below the artwork bottom, 938 px below the overlay, head 18 px below the caption block bottom (1080); caption fully legible above him |
| 165 (5.50 s, B1 mid) | x 24–184, y 1056–1276, head 1094 | Artwork y 382–726; overlay y 100–155; caption "It said found twenty documents," y ≈1025–1075 | NO — head 19 px below caption bottom; funnel/warped panel fully visible above |
| 329 (10.97 s, B1 end) | x 24–184, y 1053–1273, head 1091 | Funnel x 15–308, y 331–744; warped panel x 360–660, y 331–744; overlay y 100–155; no caption in this gap | NO — Kit 309 px below artwork bottom; arm points up-right toward the warped panel without touching it |
| 330 (11.00 s, B2 start) (S) | x 24–184, y 1053–1273, head 1091 | Gate x 210–500, y 370–819; marker x 600–665, y 590–670; overlay "Approved anyway." y 100–155 | NO — Kit 254 px below gate bottom; marker fully visible at right |
| 500 (16.67 s, B2 mid) | x 24–184, y 1056–1276, head 1094 | Gate x 157–483, y 337–841; marker x 595–668, y 584–674; overlay y 100–155; caption "In one fixed-answer test," y ≈1025–1075 | NO — head 19 px below caption bottom; marker + warped gaps fully visible; palm gesture points right toward the gate without touching it |
| 730 (24.33 s, B2 end) (S) | x 24–184, y 1058–1278, head 1096 | Gate x 10–416, y 262–891; marker x 556–647, y 570–682; overlay y 100–155 | NO — Kit 187 px below gate bottom; marker fully visible |
| 731 (24.37 s, B3 start) | x 24–200, y 31–273, head 73 | Filter x 42–360, y 382–808; grid x 576–816, y 382–820; arrow y 808–954; set-aside y 898–1000; overlays y 1090–1210 | NO — Kit 109 px above the artwork top; overlays 817 px below Kit's feet |
| 950 (31.67 s, B3 mid) | x 24–200, y 25–267, head 67 | Grid x 486–737, y 328–787; arrow y 774–927; set-aside x 668–769, y 868–975; overlays y 1090–1210 | NO — Kit 61 px above the grid top; arrow + set-aside pieces fully visible below; arm points right toward the grid |
| 1153 (38.43 s, B3 end) | x 24–200, y 28–270, head 70 | Filter top bar y 282–315; grid x 408–668, y 282–757; arrow y 744–903; set-aside x 597–701, y 842–952; overlays y 1090–1210 | NO — tightest clearance in the reel, and it passes: Kit's feet/shadow bottom (270) sits 12 px ABOVE the filter top bar (282); grid, arrowhead, and all three set-aside pieces fully visible; thumbs-up arm points up-right without touching any element |

**Result: zero story-critical elements covered, zero overlay lines
covered, zero caption lines covered in any checked frame.** No frame
failed, so no placement had to be re-done after the check; the one
placement rejected during the build was the 54 px B3 overlay (clipped
horizontally), fixed to 46 px before the full render — that was an
overlay sizing fix, not a Kit coverage failure.

Two honest qualifications for QC (not coverage failures, stated so QC
does not have to rediscover them):
1. Kit's soft teal glow halo (part of Kit.tsx, 20% teal fading out)
   reaches y ≈1072 in B1/B2, i.e. ~8 px into the caption zone's bottom
   edge. In the delivered reel captions are burned by ffmpeg AFTER Kit
   is composited, so caption glyphs sit ON TOP of the faint halo and
   remain fully legible (verified on final frames 0, 165, 500 — the
   caption text is crisp white over the halo's left edge, not obscured).
   The visible figure itself (head to feet) never enters the caption
   zone: head top 1091–1096 vs caption bottom 1080.
2. Kit is small by design in B1/B2 (160 px wide, head ≈62 px) because
   the only blank zone that avoids both artwork and captions is the
   strip below the caption block. He is legible on the checked frames
   (glasses, hoodie, jeans, orange soles all read), but QC should
   judge legibility at phone size — if QC finds him too small, the
   fix is NOT to enlarge him into the artwork/caption zones; it would
   need a different blank-zone arrangement approved by Vishnu.

## Cover

`who-verifies-tools-reel-kit-cover.jpg` (720×1280, built by
`cover-kit.py` in this folder): same content as the previous cover —
title "Who Verifies the Tools?", author "William Jeffries",
"arXiv:2610.32110", "Preprint, not peer-reviewed",
"Day 2 of five papers" — designed text on a navy gradient, amber rule
above the title, teal rule below it. **Kit does not appear on the
cover**, deliberately: at any legible size he would sit in the same
central band as the title/citation text, and the task allows him on
the cover only if he covers no title/citation text. All five cover
lines verified legible and unclipped (longest, "Preprint, not
peer-reviewed", 661 px at 42 px bold, 30 px margins).

## What QC still owns (not claimed by this build)

- Muted-no-captions test, OCR on the assembled `-kit` reel, dead-air
  check, full caption-sync watch-through, and the legibility-at-phone-
  size judgement on the small B1/B2 Kit (see qualification 2 above).
- Posting: NOT done, NOT authorised by this build. Description.md is
  the caption to post, NOT posted.

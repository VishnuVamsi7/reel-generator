# Independent QC report — Day 2 Kit-large rebuild v2: "Who Verifies the Tools?"

- **Render under QC:** `who-verifies-tools-reel-kit-large.mp4` (+ silent
  `who-verifies-tools-visual-kit-large.mp4`, `who-verifies-tools-reel-kit-large-cover.jpg`,
  `captions-kit-large.ass`)
- **Decision implemented (Vishnu, 2026-11-04 22:33 CST):** KEEP BLANK ZONE, ENLARGE KIT
  TO DESIGN SIZE, MOVE CAPTIONS. No split-screen.
- **QC method:** independent. Frames were extracted from the finished files with
  ffmpeg and measured with pixel sampling (strict palette matching), camera
  re-computation from the canvas beat table, RapidOCR with bounding boxes,
  faster-whisper (tiny) on the extracted audio, and ffmpeg freezedetect. The
  builder's log (`kit-large-build-log.md`) was used only as a cross-check; every
  number below was re-measured. Where the builder's script source was consulted
  (Kit SVG geometry), it was verified against measured pixels first.
- **Previous failure this had to fix:** kit-small rated VERY BAD — Kit 160×220 px,
  grey hoodie blending into navy, orange sneaker accents invisible.
- **Overall verdict: PASS** — with one disclosed marginal (glow B-channel, §4).
  This version is a genuine improvement over both previous versions and may be
  presented to Vishnu for approval. Nothing posts without his approval of the
  exact `-kit-large` files. No gate listed in the task as a hard fail is missed:
  Kit box 256×352 (≥320 gate), hoodie does not blend, sneaker accents are visible
  on every sampled frame, zero artwork coverage, muted read improved (not worse).

## 1. File / duration — PASS

| Item | Measured |
|---|---|
| Final reel | 720×1280, 30 fps, **1154 frames**, video **38.467 s**, H.264 + AAC audio |
| Silent visual | 720×1280, 30 fps, **1154 frames**, 38.467 s, video stream only |
| Audio stream | **38.443 s** (24 ms shorter than video — the builder's `-shortest` mux note; speech ends 37.88 s per `voiceover-final-words.json`, so nothing is cut) |
| Audio identity | Extracted final audio vs decoded `voiceover-final.mp3`: sample correlation **0.9999**; tail 38.0–38.44 s RMS 19.8 (silent after last word); head 0–0.3 s RMS 710.5. No truncation, no re-render drift. |
| Previous files untouched | `who-verifies-tools-reel.mp4` md5 `e54f07fbd9905b9150e088460fac4904` ✓; `who-verifies-tools-reel-kit.mp4` md5 `e4f6a86b687b7f188443d5ae1521ebd4` ✓; `captions.ass` md5 `76587cd55466d25b68b5848729e40ef5` ✓ — all match the required values. |
| New files | Final md5 `90807da44498e9bb4f1e08ad7a3acd3d`; visual md5 `013e6db1207c603092bcf9c020404670`; cover 720×1280 JPEG. |

## 2. Script-match — PASS

- Caption-text concatenation from `captions-kit-large.ass` (14 events) = the approved
  89-word script **exactly**, in order, all 8 sentences. The only difference is the
  known ASS typesetting artefact `Its` for `It's` (same as the previous
  `captions.ass`); `voiceover-final-words.json` and whisper both give `It's`.
- Independent faster-whisper (tiny) transcription of the extracted final audio,
  all 8 sentences in order:
  `The tool worked. It's printout misled the agent. It said found 20 documents,
  hiding they were the first 20 of 4,772. The checker saw only that printout, so
  it approved the wrong answer. In one fixed-answer test, across three kinds of
  error, all 90 verdicts flipped from accept to reject. Rewrite the printout to
  state its limits and caps, and how to handle them, and the checker catches the
  error. Check what your tool hides, not just what it shows. Follow for the next paper.`
- Known artefacts only: tiny-model mishears `misled` → "miss led" and, in one
  segment, `accept` → "except". The second is a model error, not an audio error:
  the previous whisper run on this same reused voiceover rendered "accept"
  correctly, and the caption text reads "accept".

## 3. SIZE GATE — PASS (box 256×352; visible figure 270–274 px — read this section carefully)

The gate as defined in canvas §0 and in the task ("target 352 px, 256 px wide")
is the **composited SVG box** size (320×440 viewBox × 0.8). The previous VERY BAD
rating used the same measure (160×220 at scale 0.50). Both numbers are reported
here so the box figure is never mistaken for solid figure height.

**Measured per beat (strict-palette pixels on the silent visual, 12 frames):**

| Frame (beat) | Head top y | Sole-bottom y | Visible figure height (head→sole) | Inferred box top (head − 62) | Box |
|---|---|---|---|---|---|
| 0 (B1) | 984 | 1253 | 270 | 922 | 256×352 |
| 165 (B1) | 984 | 1255 | 272 | 922 | 256×352 |
| 300 (B1) | 986 | 1258 | 273 | 924 | 256×352 |
| 329 (B1) | 982 | 1251 | 270 | 920 | 256×352 |
| 330 (B2) | 982 | 1251 | 270 | 920 | 256×352 |
| 530 (B2) | 984 | 1256 | 273 | 922 | 256×352 |
| 700 (B2) | 982 | 1251 | 270 | 920 | 256×352 |
| 730 (B2) | 986 | 1258 | 273 | 924 | 256×352 |
| 731 (B3) | 66 | 338 | 273 | 4 | 256×352 |
| 900 (B3) | 60 | 332 | 273 | −2 | 256×352 |
| 942 (B3) | 62 | 331 | 270 | 0 | 256×352 |
| 1153 (B3) | 64 | 333 | 270 | 2 | 256×352 |

- Why "head − 62": the Kit SVG head circle (cy 140, r 62 in a 440-tall viewBox)
  puts the head top 62 px (at scale 0.8) below the box top; this geometry was
  confirmed against the build script and against the measured sole rows
  (canvas sole rows B1/B2 1251–1255, B3 331–335; measured orange rows B1/B2
  1250–1257, B3 328–337, i.e. canvas rows ± bob 3 px). Box top 920–924 (B1/B2)
  vs canvas 920 ± bob 3 (917–923) — 924 is 1 px past worst bob, from head tilt;
  immaterial, no clipping (visible feet end 1251–1259, shadow bottom ~1271–1275,
  frame margin 4–8 px).
- **Visible figure height is 270–274 px, not 352 px.** The remaining ~78 px of the
  352 box are transparent SVG margin (62 px above the head) plus the soft shadow
  ellipse below the soles. This is the honest figure: it is still **1.6× the
  failed version's equivalent** (~170 px visible at scale 0.50), and it is what
  makes glasses (lens ~27 px), expressions, and the arm legible at phone size.
- B3 box top −2…+4: the −2 px is empty SVG margin only. First visible pixels
  (glow top ~28, head top 60–66) are never clipped — confirmed by eye on frames
  731/900/942/1153, head fully visible in all.
- **Gate result: 352 ≥ 320 on every beat, width 256 ≥ 230. PASS.** The previous
  160×220 size is gone.

## 4. COLOUR GATE — PASS WITH ONE DISCLOSED MARGINAL

Palette: navy `#0B1F3A` + teal `#14B8A6` + amber `#F59E0B` / orange `#FF7A1A`
only for hook/key/CTA/sneaker accents. Kit's body was NOT recoloured teal/amber
(verified: hoodie grey, jeans blue, hair brown in every sampled frame).

**(a) Teal glow rim — visible, G passes everywhere, B marginally short on 3 frames.**
Samples 15 px left of the hoodie at torso mid-height, per canvas §4:

| Frame | Rim sample (95,1120) B1/B2 or (95,219) B3 | Local navy corner | Delta vs local navy |
|---|---|---|---|
| 0 | (14, 62, 72) | (8, 21, 40) | G +41, B +32 |
| 165 | (13, 66, 76) | (9, 24, 42) | G +42, B +34 |
| 300 | (12, 70, 78) | (10, 25, 43) | G +45, B +35 |
| 329 | (12, 70, 78) | (10, 25, 43) | G +45, B +35 |
| 330 | (13, 63, 72) | (8, 21, 40) | G +42, B +32 |
| 530 | (13, 63, 74) | (8, 21, 40) | G +42, B +34 |
| 700 | (13, 66, 76) | (9, 24, 42) | G +42, B +34 |
| 730 | (13, 66, 76) | (9, 24, 42) | G +42, B +34 |
| 731 | (12, 67, 76) | (10, 25, 43) | G +42, B +33 |
| 900 | (13, 66, 76) | (10, 25, 43) | G +41, B +33 |
| 942 | (12, 66, 78) | (10, 25, 43) | G +41, B +35 |
| 1153 | (15, 70, 79) | (10, 25, 43) | G +45, B +36 |

- Canvas absolute gate: G ≥ 55 → **passes on all 12 frames** (62–71). B ≥ 75 →
  passes on 9 frames, reads **72, 72, 74 on frames 0, 330, 530** — exactly the
  72–74 range the builder disclosed, caused by the rendered navy being darker
  than spec `#0B1F3A` (local navy B 40–44, not 58). Against the navy actually on
  screen the rim is +32–39 B and +41–45 G: an unambiguous teal tint.
- Eye check at 50% zoom (360×640 renders of frames 329 and 1153): the teal glow
  is clearly visible around Kit, and hoodie, jeans, and sneakers each separate
  from the navy by eye. **This is not a blend fail.** If a strict absolute
  B ≥ 75 with no local-navy allowance is applied, frames 0/330/530 fail that
  sub-check alone — flagged here, not hidden. No further hoodie/glow change was
  made by QC (canvas §4 reserves that decision to Vishnu).

**(b) Hoodie — PASS.** Torso centre (152,1120) B1/B2 and (152,219) B3 =
**(121, 130, 141) on all 12 frames** = `#7A828E` within 1 per channel (canvas
tolerance ±8). Hoodie-to-local-navy separation is ~111 R / ~105 G / ~98 B.
The hoodie does **not** blend at full size or at 50% zoom. No logo on the hoodie
(code + viewed frames).

**(c) ORANGE SNEAKER ACCENTS — PASS, on every beat.** Orange pixels present in
the sole rows on all 12 sampled frames:

| Beat | Sole rows measured | Sole x span | Sample pixel |
|---|---|---|---|
| B1 (f0/165/300/329) | y 1250–1257 | x 122–182 | (255,118,13), (246,118,20) ≈ `#FF7A1A` |
| B2 (f330/530/700/730) | y 1250–1257 | x 122–182 | (254,116,8), (250,119,13) ≈ `#FF7A1A` |
| B3 (f731/900/942/1153) | y 328–337 | x 121–182 | (255,119,14), (250,121,26) ≈ `#FF7A1A` |

Two ~30 px strips (one per sneaker) plus antialiasing spread. Legible by eye at
full size (frames 329/730/1153) and at 50% zoom (phone-329, phone-1153: orange
line under each white sneaker). The previous "invisible" failure is fixed.

## 5. COVERAGE — PASS, zero overlap on every checked frame

Kit box (x 24–280; B1/B2 y ~920–1272, B3 y ~0–352), glow box (centre (152,
box-top+192), rx 124 / ry 164), overlay boxes, and OCR caption boxes were
checked against camera-recomputed artwork boxes (canvas §5 frames, camera math
re-derived from the beat table and confirmed against measured artwork edges,
e.g. B3 filter top bar first row measured y 372 at frame 1153 = computed 372).

| Frame | Tightest clearance measured |
|---|---|
| B1 0 | Caption "The tool worked." glyphs y 843–882; Kit top ~920 → **38 px**; artwork band top 434–709, caption below it. Overlay y 103–153 clear. |
| B1 165 | Caption y 842–886; Kit top ~920 → **34 px**; artwork mid band bottom 726 → caption top 842 = **116 px**. |
| B1 329 | Artwork band bottom 744; caption (f300, longest) top 796 → **52 px**; caption bottom 887 → Kit top 920 = **33 px**. Funnel + warped panel fully visible, Kit arm points at warped panel without touching it. |
| B2 330 | Overlay y 104–157; gate arch y 371–835; marker (602–617, 552–567) fully visible; Kit top ~920 → gate bottom 835 = **85 px**. No caption active at the cut frame (sentence gap) — expected. |
| B2 530 | Caption glyphs y 236–281; overlay bottom 158 → **78 px**; artwork top 337 → **56 px**. |
| B2 700 (longest) | Caption glyphs y 193–284; overlay bottom 157 → **36 px glyph-to-glyph**; artwork top 302–304 → caption bottom 284 = **18–20 px** (canvas: 20 px). Marker fully visible. |
| B2 730 | Gate bottom 884 → Kit top ~920 = **36 px**; marker computed x 572–591, y 530–549 — viewed frame 730 shows amber centre + teal ring complete, gate arch complete, warped gaps inside gate uncovered. |
| B3 731 | Artwork top 382; Kit shadow bottom ~351–354 → **28–31 px**; overlays y 1089–1215 far below. |
| B3 900 (longest) | Side-caption glyphs x 359–683, y 73–232; Kit box right 280 → **79 px** horizontal gap; caption bottom 232 → artwork top 377–379 = **145 px** glyph (canvas worst band-edge figure 110 px). Filter bar, grid, arrow, set-aside pieces all uncovered (viewed frame). |
| B3 942 | Artwork top 378 (first row measured); shadow bottom ~351 → **27 px**; caption glyphs y 73–232, same gaps as f900. |
| B3 1153 | **Tightest in the reel:** filter top bar first row measured **y 372**; Kit shadow bottom ~353 (head-derived box top 2 + 351) → **19 px** (canvas: 18 px bob-worst); glow bottom 356 (base) → **16 px** (bob-worst 359 → 13 px). Grid (computed x 304–641, y 372–780), set-aside pieces (y 873–992), amber arrow (y 567–992) all fully visible in the viewed frame; Kit thumbs-up points down-right at the grid without touching it. |

Note on glow tail: rows y 360–370 at frame 1153 read (12, 46–48, 60–62) — that
tint is the source PNG's own background halo, not Kit glow (Kit's glow ellipse
ends at y 356–360 by geometry, centre 192 ± bob + ry 164). It does not constitute
Kit covering the artwork; the artwork's own top edge is the measured y 372 row.
**No Kit, glow, overlay, or caption pixel covers any story-critical element,
overlay line, or caption line on any checked frame. PASS.**

## 6. Caption bands — PASS

ASS styles verified against canvas §1–§3 (not just claimed):
- B1: DejaVu Sans 46 px, Alignment 2, MarginL/R 40, MarginV 394 → block bottom
  886. Measured glyphs: f0 y 843–882 (1 line), f300 y 796–887 (2 lines, longest
  "four thousand seven hundred seventy-two."). 1 px over nominal = OCR box
  padding; no overlap consequence (33 px to Kit).
- B2: 46 px, Alignment 2, MarginL/R 40, MarginV 998 → block bottom 282.
  Measured glyphs: f530 y 236–281, f700 y 193–284 (2 lines, longest "all ninety
  verdicts flipped from accept to reject."). 2 px over nominal = OCR box
  padding; 18–20 px to artwork stands.
- B3: DejaVu Sans 40 px, Alignment 9, MarginL 300, MarginR 40, MarginV 70 →
  band top 70, worst 4-line to 262. Measured glyphs f900/f942: x 359–683,
  y 73–232 (4 lines: "and how to handle / them, and the / checker catches /
  the error."). X-disjoint from Kit (79 px to glyphs), above artwork.
- Captions overlap neither Kit nor artwork nor overlays on any sampled
  longest-caption frame. PASS.

## 7. Dead-air — PASS

`workspace/instagram/qc/dead-air-check.py` (freezedetect −60 dB / 0.6 s, beats
B1 0–10.99 s, B2 10.99–24.36 s, B3 24.36–38.47 s, word timeline
`voiceover-final-words.json`):

| File | B1 frozen / longest | B2 frozen / longest | B3 frozen / longest | Verdict vs 30% / 2.0 s lines |
|---|---|---|---|---|
| Final reel | 0.00 s (0%) / 0.00 s | 0.00 s (0%) / 0.00 s | 0.00 s (0%) / 0.00 s | PASS (0 freeze spans) |
| Silent visual | 0.00 s (0%) / 0.00 s | 0.63 s (5%) / 0.63 s | 0.00 s (0%) / 0.00 s | PASS (1 span, camera-ease slow point; captions changing keep the final unfrozen) |

Tool pacing note (not a fail line): longest shot B3 14.11 s (> 8 s warning).
Expected — B3 is one continuous camera move by design, as in previous versions.

## 8. OCR — PASS

RapidOCR on all 12 final frames + cover. Every real word read is an approved
overlay or caption word (scores 0.96–1.00 for overlays/captions; cover lines
0.94–0.99). No numbers, logos, or unapproved words appear on screen.
- Only non-approved reads: `00` / `O0` / `0-0` (scores 0.57–0.88) at boxes
  x ~115–201, y 1010–1055 (B1/B2) and x ~124–196, y 94–133 (B3) — exactly Kit's
  glasses coordinates (canvas: glasses y 1020–1044 B1/B2, y 100–124 B3).
  Eye-verified as glasses shape misreads, i.e. noise, not text. The same class
  of misread (funnel legs, gate arch) was anticipated; no funnel/gate/arch
  misread rose above noise in these frames.
- Artwork areas produced no text reads in any sampled frame: source PNGs
  contain no text, consistent with the previous QC.

## 9. Faceless — PASS

Checked reel frames, cover, captions, and the existing `description.md`
(no new description file ships with the kit-large build):
- No employer/company name, portfolio/chatbot/real-project reference, personal
  info, handle, or other company's mascot anywhere. Description spot-check found
  no `@`, employer, or portfolio matches.
- Only face on screen is Kit, our own character; hoodie logo-free (code and
  viewed frames). Cover names only the paper author (William Jeffries, a
  citation, not a personal detail of Vishnu) and the arXiv ID.
- Kit's thumbs-up/palm/fist hands are the character's own gestures, not a
  third-party mascot.

## 10. Intact-image — PASS (camera-window travel only, no redraw/segmentation)

- **B1 (camera unchanged from camera-only build):** large visual vs camera-only
  visual at frames 0/165/329 — flat navy control region (y 200–400, x 400–700)
  mean |diff| **0.022**, 0% pixels >10; artwork region (y 434–709) mean **0.194**,
  0% pixels >10. The only excl-Kit-zone difference is the overlay text rows
  (y 100–160, mean 39.8 — glyph-edge rendering/encode between the two build
  scripts; wording identical per OCR), and the same signature appears in the
  kit-small-vs-camera-only control (mean 2.183, 1.18% >10 vs kit-large 2.188,
  1.18%). Artwork pixels are identical; the difference is not a redraw.
- **B2/B3 (camera ends changed per canvas: B2 1.40→1.25, B3 centre y 720→651):**
  independent re-warp of `pic2.png`/`pic3.png` with the new camera parameters
  matches the large visual to encode-noise level outside Kit/overlay zones —
  f730 mean |diff| **1.122**, 0.15% pixels >10; f1153 mean **1.320**, 0.92%
  pixels >10 (edge pixels only). No segmentation, masking, rotation, or
  background recreation; the larger whole-frame diffs vs camera-only
  (9.8–16.9) are exactly the approved camera changes, not content changes.

## 11. Muted-no-captions test vs previous versions — IMPROVED in all beats, caveat unchanged

Judged from the silent visual (overlays on, sound off, captions off), frames
0/165/329/330/530/730/731/900/942/1153:

- **B1 — improved vs camera-only and kit-small.** Complete grid → funnel →
  gapped/tilted broken panel, named by "Clean in. Warped out.", Kit bottom-left
  excited→thinking, arm rising to a steep up-right point aimed at the warped
  panel. At phone size the arm (~34 px) and head (~50 px) now read where the
  small Kit's (~21 px / ~31 px) did not. Still caption/voice-only: **20/4,772
  appears nowhere on screen** — Kit pointing supplies direction, not the number.
- **B2 — improved.** Warped pieces inside the gate arch + glowing approval
  marker, named by "Approved anyway.", Kit thinking, open-palm present toward
  the gate (palm 24×18 px vs the old fist). Still caption/voice-only: **90/90
  and the three error kinds appear nowhere on screen** — the marker alone does
  not say "test" or "ninety". Kit pointing supplies which element (the marker),
  not the result.
- **B3 — improved, and the old pointing error is fixed.** Clear filter →
  complete grid rebuilt, faded pieces set aside, amber arrow feeding the grid,
  named by "Say what's left out." / "Follow for a paper a day.", Kit top-left
  pointing down-right at the grid, ending in a thumbs-up **aimed at the fix**
  (previous build's −140° thumb pointed up-right into blank navy; this build
  uses −45°/−35°). Still caption/voice-only: the rewrite mechanism in detail
  (state limits + caps + how to handle them → checker catches the error) and
  the provenance limit (identifier errors barely moved) are not on screen; the
  overlays give the moral, not the mechanism, and the description must still
  carry the provenance limit.
- **Overall muted verdict: PASS-WITH-CAVEAT on the same terms as the canvas §8
  and both previous versions** — gist improves in all three beats (larger host,
  specific pointing, thumbs-up payoff aimed at the fix), caption-dependence
  does NOT go away, and this QC does not claim otherwise. Muted read is
  **better, not worse**, than camera-only and kit-small in every beat.

## 12. Cover — PASS

- `who-verifies-tools-reel-kit-large-cover.jpg`: 720×1280, all lines legible
  and unclipped by eye and OCR (scores 0.94–0.99): "Who Verifies the Tools?",
  "William Jeffries", "arXiv:2610.32110", "Preprint, not peer-reviewed",
  "Day 2 of five papers". Amber rule + teal author line, palette-consistent.
- **Kit absence is intentional**, as in the previous covers and as the canvas
  allows: at any legible size Kit would sit in the title/citation band. Not a
  defect, and not a silent omission — recorded here.

## Gate summary

| Gate | Result |
|---|---|
| Size ≥320 px (box 256×352) | PASS — box 352 on all beats; visible figure 270–274 px stated explicitly |
| Colour: hoodie `#7A828E`, no blend | PASS — (121,130,141) every frame |
| Colour: teal glow visible | PASS with marginal — G 62–71 pass all frames; B 72–74 on f0/f330/f530 vs absolute 75, but +32–39 above actual local navy and visible at 50% zoom |
| Colour: orange sneaker accents visible | PASS — every sampled frame, both beats' sole rows, eye-visible at 50% zoom |
| Coverage: zero overlap | PASS — tightest: B3 glow 16 px / shadow 19 px above filter bar (f1153); B2 caption→artwork 18–20 px (f700) |
| Caption bands | PASS |
| Dead-air (30% / 2.0 s) | PASS — final 0% all beats |
| OCR (approved words only) | PASS — glasses misreads only, documented as noise |
| Faceless | PASS |
| Intact-image | PASS |
| Muted read not worse | PASS — improved all beats, caveat unchanged |
| Cover | PASS |
| Previous files untouched | PASS — md5s match |

**Verdict: PASS.** Present `who-verifies-tools-reel-kit-large.mp4` to Vishnu for
approval as the fix for the VERY BAD kit-small version. The single item to show
him alongside the verdict, not bury, is the glow B-channel marginal (§4a): the
rim reads B 72–74 on three sampled frames against an absolute 75 gate, while
reading +32–39 above the navy actually on screen and looking visibly teal at
phone size. If he wants the absolute number met, that is a glow-strength
decision for him, not a QC re-edit — QC does not re-render.

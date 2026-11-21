# Independent QC report — Day 2 Kit rebuild: "Who Verifies the Tools?"

**QC agent note:** This QC was done independently of the builder. The builder's
`kit-canvas-notes.md` was read only as a set of claims to verify, not as
evidence. Every number below was re-measured by this QC run. The Kit reel was
NOT edited, re-rendered, or posted by QC.

**Files under QC**
(`workspace/instagram/reels/2026-11-04-who-verifies-tools/`)

- `who-verifies-tools-reel-kit.mp4` — 3,113,648 bytes,
  md5 `e4f6a86b687b7f188443d5ae1521ebd4`
- `who-verifies-tools-visual-kit.mp4` (silent Kit visual) — 2,467,056 bytes,
  md5 `06fbb4350c9466702e78aa72828a2061`
- `who-verifies-tools-reel-kit-cover.jpg` — 88,087 bytes, 720×1280,
  md5 `4c382a695dac1d7bbc2fe79c4834e29d`
- `kit-canvas-notes.md`, `kit-build.py`, `cover-kit.py` (claims/scripts checked)
- Baseline (NOT overwritten): `who-verifies-tools-reel.mp4`,
  `who-verifies-tools-reel-cover.jpg`, `qc-report.md`, `shot-list-final.md`,
  `canvas-final-notes.md`, `captions.ass`, `description.md`,
  `pic1.png` / `pic2.png` / `pic3.png`, `voiceover-final.mp3`

**Paper:** "Who Verifies the Tools? How Warped Formatters Mislead Agents and
Their Verifiers", William Jeffries, arXiv:2610.32110, preprint, not
peer-reviewed. Description/provenance facts are unchanged from the previous
build and were not re-adjudicated here beyond the faceless/cover checks (§5, §9).

## OVERALL VERDICT: PASS-WITH-CAVEAT — eligible for Vishnu's review as a replacement for the camera-only version; NOT approved for posting

No gate failed. In particular the decisive gate (§7, Kit coverage) PASSES on
every sampled frame: no story-critical artwork element, overlay line, or
caption line is covered by Kit. The muted read (§8) is NOT worse than the
camera-only version in any beat — it is unchanged informationally in B1/B2
and slightly improved in B3 — so the "must NOT replace" condition in the
task does not trigger.

**Caveats (all carried, none hidden):**

1. **Same caption-dependence as the camera-only version.** Muted with no
   captions, a viewer still gets only the gist (problem → approval → fix).
   The 20-of-4,772 scale (B1), the 90/90 verdict flip (B2), and the rewrite
   mechanism in detail (B3) exist only in voiceover/captions. Kit pointing
   does not supply any of those numbers. This is the previous
   PASS-WITH-CAVEAT, unchanged, not fixed by Kit.
2. **B3 clearance is razor-thin, and the builder's "12 px" claim is wrong
   if Kit's shadow counts.** Measured on frame 1153: Kit's shadow/background
   ends at y281 and the filter top bar starts at y284 — a ~2–3 px gap, not
   12 px (12 px is feet-only, 270 vs 282, ignoring the shadow ellipse that
   extends to ~281). The bar itself is intact (222–232 grey bar pixels per
   row, x0–320, y284–294, continuous) and is NOT covered, so this is a
   caveat, not a coverage fail — but at phone size / under compression the
   shadow will look like it touches the bar.
3. **B1/B2 Kit is small and his pointing is general, not element-specific.**
   At 160 px wide his figure, glasses, hoodie, jeans and orange soles read
   in a full-frame view, but at phone size his expression changes
   (excited → thinking) are a few pixels and are NOT reliably legible, and
   his arm direction reads as "presenting toward the artwork" rather than
   pointing at a specific element (funnel vs warped panel in B1, gate marker
   in B2). B3 Kit (176 px, top zone) reads better.
4. **B3 overlays moved vs the old reel.** Kit B3 overlay text bbox is
   y1098–1207 vs old y1111–1218 (shifted up ~13 px, slightly wider:
   x44–673 vs x50–668). Same words, same blank zone, fully legible and
   unclipped — a deviation from "unchanged overlays" to note, not a fail.
   Top overlays are essentially unchanged (B1: kit y108–152 vs old y108–150).
5. **B3 is still a single 14.11 s shot** (> 8 s pacing warning, carried over
   from the previous build; warning, not a fail).

Per-gate summary: §1 PASS · §2 PASS · §3 PASS (better than previous) ·
§4 PASS (OCR noise explained, eye-verified) · §5 PASS · §6 PASS ·
§7 PASS (with caveat 2) · §8 PASS-WITH-CAVEAT · §9 PASS. No FAIL.
**Nothing has been posted. Posting remains Vishnu's decision alone, on the
finished `-kit` files.**

---

## 1. File / duration — PASS

ffprobe on the Kit reel itself (not the filename or the plan):

| Stream | Value |
|---|---|
| Video | h264, 720×1280, 30 fps, 1154 frames, 38.467 s |
| Audio | AAC, 38.472 s, 903 frames |
| Container | 38.472 s, 3,113,648 bytes |
| Video − audio | 0.005 s — one frame-quantisation step, same as the old reel, NOT a sync defect |
| Duration cap | 38.47 s ≤ 40 s — PASS, 1.53 s under cap |
| Silent Kit visual | h264, 720×1280, 38.467 s, 2,467,056 bytes, video-only — matches the Kit reel's video stream duration/frame count |
| Pace | 89 words / 38.47 s = 138.8 wpm, inside the 135–140 band (voiceover reused, §2) |

Audio is present for the full duration: extracted Kit audio vs the
voiceover file correlates at **r = 0.99996** (16 kHz mono, 615,766 vs
615,552 samples; the 214-sample / 0.013 s difference is encoder padding).
RMS kit 1263.2 vs voiceover 1264.9; tail beyond the last word (37.88 s)
RMS 76.0 vs 77.5 — i.e. the same trailing silence, no truncation, no
looping, no stretch. The last spoken word ends at 37.88 s in the word
timeline; the remaining ~0.59 s is silence in both files.

## 2. Script-match — PASS

**Method:** (a) independent faster-whisper `base` transcription of audio
extracted from the Kit reel itself; (b) waveform correlation against
`voiceover-final.mp3` (§1); (c) programmatic caption concatenation check.

**(a) Whisper transcription of the Kit reel's audio** (segment text verbatim):

- 0.00–7.04: "The tool worked. It's printout misled the agent. It said found 20 documents, hiding they were"
- 7.04–15.44: "the first 20 of 4,772. The checker saw only that printout, so it approved the wrong answer."
- 16.40–24.08: "In one fixed answer test, across three kinds of error, all 90 verdicts flipped from accept to reject."
- 25.04–31.28: "rewrite the printout to state its limits and caps and how to handle them and the checker catches the"
- (final segment, text): "error. Check what your tool hides, not just what it shows. Follow for the next paper."

All 8 approved sentences are present, in order, with no added, dropped, or
changed word. Differences vs the approved script are the known whisper
artefacts already documented on the previous build: "It's" for "Its" (same
pronunciation), digit collapse ("20", "4,772", "90") for spelled-out
numbers, "fixed answer" for "fixed-answer" (punctuation only), and
lower-casing at a segment boundary. (Note: this run's final-segment end
timestamp printed beyond the file length — a whisper timestamp artefact;
the word timeline's last-word end, 37.88 s, and the waveform correlation
above are the reliable timing evidence, not that artefact.)

**(b) Captions carry script spelling, not whisper spellings — verified
programmatically:** `captions.ass` parsed on its 9-comma field split gives
14 events; concatenated text is **character-for-character identical to the
approved 89-word script** (89 words), including "Its" (not "It's"),
"they" (not "there"), "Rewrite" (not "Re-write"), and spelled-out
"twenty" / "ninety" / "four thousand seven hundred seventy-two".
Caption event boundaries match the sentence spans in
`voiceover-final-words.json` (0.00–0.86, 1.60–3.44, 4.16–10.52, 11.46–15.42,
16.00–24.00, 24.72–31.58, 32.40–35.54, 36.42–37.88). No event crosses a
sentence boundary.

**Beat map (unchanged):** B1 Pic1 frames 0–329 (0.00–10.99 s, 25 words) ·
B2 Pic2 frames 330–730 (10.99–24.36 s, 29 words) · B3 Pic3 frames 731–1153
(24.36–38.47 s, 35 words). Total 89 words.

## 3. Dead-air — PASS (better than the previous build on every beat)

`workspace/instagram/qc/dead-air-check.py`, freezedetect −60 dB / 0.6 s,
word timeline `voiceover-final-words.json`, fail at ≥30% frozen during
speech or any single freeze ≥2.0 s. Exit 0 on both Kit files. Beats:
B1 0.00–10.99, B2 10.99–24.36, B3 24.36–38.47.

**Kit final reel — PASS:**

| Beat | Frozen during speech | Longest freeze | Verdict |
|---|---|---|---|
| B1 | 0.87 s (8%) | 0.87 s | PASS |
| B2 | 0.60 s (4%) | 0.60 s | PASS |
| B3 | 0.00 s (0%) | 0.00 s | PASS |
| Total dead air during speech | 1.47 s | freeze spans: 0.00–0.87, 11.47–12.07 | |

**Kit silent visual — PASS:**

| Beat | Frozen during speech | Longest freeze | Verdict |
|---|---|---|---|
| B1 | 1.59 s (14%) | 0.97 s | PASS |
| B2 | 1.48 s (11%) | 1.48 s | PASS |
| B3 | 0.90 s (6%) | 0.90 s | PASS |
| Total dead air during speech | 3.97 s | freeze spans: 0.00–0.97, 10.37–12.47, 37.57–38.47 | |

**Comparison (apples-to-apples, same tool/settings):**

| File / beat | Kit | Previous camera-only | Change |
|---|---|---|---|
| Final B1 | 8% / 0.87 s | 16% / 0.87 s | better |
| Final B2 | 4% / 0.60 s | 17% / 1.43 s | better |
| Final B3 | 0% / 0.00 s | 12% / 1.10 s | better |
| Silent B1 | 14% / 0.97 s | 21% / 1.23 s | better |
| Silent B2 | 11% / 1.48 s | 26% / 1.91 s | **better — the previous near-threshold warning (26%, 1.91 s, 0.09 s inside the 2.0 s line) is gone** |
| Silent B3 | 6% / 0.90 s | 19% / 1.47 s | better |

Why: caption changes break freezes in the final reel, and Kit's bob/blink/
gesture breaks them in the silent visual — the slow easeInOut beat edges
remain, but Kit motion keeps every beat well inside both thresholds.
Warning carried over (not a fail): longest shot B3 = 14.11 s > 8 s.

## 4. OCR — PASS (no unapproved real word; noise eye-verified)

RapidOCR (project ocr venv, score ≥ 0.5) on Kit-reel frames 0, 100, 165,
250, 329, 330, 500, 600, 731, 800, 950, 1050, 1153, on the Kit cover, and
on the three source PNGs. Full machine reads are in
`~/workspace/qc-kit-scratch/ocr-kit.json` (QC scratch, not a deliverable).

**Every real word found is approved** — an approved overlay word or an
approved caption word, nothing else:

- B1 frames: "Clean in. Warped out." (top, OCR bbox x80–639 y103–153 on
  frame 0) + the caption phrase visible at that timestamp (e.g. frame 0
  "The tool worked." x195–523 y1039–1075; frame 165 "It said found twenty
  documents,").
- B2 frames: "Approved anyway." (top, frame 500 x122–595 y104–158) + caption
  phrase (frame 500 "In one fixed-answer test," x113–605 y1037–1077).
- B3 frames: "Say what's left out." (frame 1153 x103–613 y1089–1149) +
  "Follow for a paper a day." (frame 1153 x36–679 y1155–1215) + caption
  phrase where one is showing. No numeric overlays anywhere — consistent
  with the previous build (numbers live in voiceover + description only).
- Cover: "Who Verifies" / "the Tools?" / "WilliamJeffries" /
  "arXiv:2610.32110" / "Preprint, not peer-reviewed" /
  "Day 2 of five papers" — all approved cover text (§9).

**OCR noise, explicitly not counted as words:**

- **"00" / "O0" on every Kit frame** (e.g. frame 0: x78–130 y1113–1139,
  score 0.73; frame 500: x87–129 y1115–1138; frame 1153: x89–145 y91–121).
  Eye-verified: this is Kit's rectangular glasses — two lens outlines at
  exactly the Kit head position in each beat. It appears on no old-reel
  frame (no Kit there) and is not text, a number, or a logo.
- Source PNGs: pic1 "X" (score 0.77) = the funnel's crossed legs;
  pic2 "国" (0.68) = the gate arch; pic3: no OCR hits. Same shape-misreads
  as the previous QC, visually confirmed; the artwork itself contains no
  real text, numbers, logos, or watermarks.

## 5. Faceless — PASS

Checked in the Kit reel (all sampled frames), the Kit cover, and the
description text (`description.md`, unchanged):

- No employer or company name, no portfolio / chatbot / real-project
  reference, no personal information, no handle, no real person or face,
  no other company's mascot.
- Kit is our own character (flat illustrated host from Kit.tsx / moves.ts /
  kit-design.md — see §7 identity check), not another mascot. His hoodie
  carries NO logo (verified in crops, §7).
- Description body carries the paper citation, the 20/4,772 and 90/90
  figures with the provenance limit (18/30 → 14/30, overclaim 94%), the
  preprint flag, "Day 2 of five papers", keyword PAPER, and hashtags
  #AI #Agents #PaperBreakdown. No faceless violation in it.
- The reel's spoken script and overlays contain no citation, handle, or
  personal detail (citation is description/cover only, as designed).

## 6. Intact-image + baseline preservation — PASS

**Baseline files unchanged (md5 re-checked by QC):**

| File | md5 now | Expected | Match |
|---|---|---|---|
| Previous reel `who-verifies-tools-reel.mp4` | `e54f07fbd9905b9150e088460fac4904` | `e54f07fbd9905b9150e088460fac4904` | yes |
| Voiceover `voiceover-final.mp3` | `4e4dd364604982535112b42deb1c3bd7` | `4e4dd364604982535112b42deb1c3bd7` | yes |

**Artwork is camera-window travel, not redrawn/segmented — measured:**
Kit-reel frames minus old-reel frames at the same frame numbers, in the
artwork-only strip (B1/B2 y200–1000, B3 y300–1070, i.e. excluding Kit,
overlay, and caption zones):

| Frame | Artwork-strip diff | Interpretation |
|---|---|---|
| 0 (B1 start) | 0 px / 576,000 (0.000%) | identical |
| 165 (B1 mid) | 54 px (0.009%) | encoding noise only |
| 329 (B1 end) | 0 px (0.000%) | identical |
| 500 (B2 mid) | 23 px (0.004%) | encoding noise only |
| 731 (B3 start) | 0 px / 554,400 (0.000%) | identical |
| 950 (B3 mid) | 148 px (0.027%) | encoding noise only |
| 1153 (B3 end) | 5 px (0.001%) | identical |

The remaining kit-vs-old differences sit exactly where they should: the
Kit box, the overlay text (re-rendered, see §7 note on the B3 shift), and
caption-zone encoding. Source PNGs are 720×1280 RGB each
(pic1/pic2/pic3), full-frame, with no segmentation, masking, rotation,
cropping-apart, sprites, or background recreation — the camera in
`kit-build.py` crops a viewport from the upscaled source and resizes it,
with cuts only between beats, matching the previous build's camera
(B1 1.00 (360,640) → 1.50 (480,640); B2 1.00 (360,640) → 1.40 (460,640);
B3 1.20 (300,660) → 1.30 (443,720) clamp limit).

## 7. KIT COVERAGE + KIT IDENTITY — PASS (decisive check; one corrected claim)

**Identity — Kit is Kit, verified on crops and against the source:**

- Source: `Kit.tsx` (HAIR `#5C3A21`, HOODIE `#6E7683`, JEANS `#2F5D8A`,
  "grey hoodie, NO logo", modern glasses) and `kit-design.md` (white/
  light-grey sneakers `#EDEFF2` with orange sole accents `#FF7A1A`).
  `kit-build.py` transcribes the same viewBox 0 0 320×440, colours, arm
  pivots (left 110,232 / right 210,232), head pivot (160,205), and
  expressions, rasterised with cairosvg at 2×.
- Eye-verified on enlarged crops of frames 0 and 1153: brown hair,
  rectangular glasses, grey hoodie with white drawstrings and kangaroo
  pocket and **no logo**, blue jeans, white sneakers with orange soles.
  The teal glow halo around Kit is part of Kit.tsx, not a separate effect.
- **Not a single static pose:** Kit-box pixel change between sampled
  frames in the same beat is 10.7–15.4% (B1: 0↔165 = 11.5%, 165↔329 =
  15.4%; B2: 500↔600 = 10.7%; B3: 731↔950 = 13.4%, 950↔1153 = 10.8%),
  consistent with bob (±3 px, 48-frame period), blink (6 frames every 96),
  arm keyframing, and expression changes. Visually: B1 arm horizontal
  (frame 0) → up-right diagonal (165, 329); B2 arm up-right → horizontal
  open-palm present (500); B3 arm horizontal (731, 950) → up-right
  thumbs-up (1153). Builder's per-beat gesture/expression claims
  (B1 excited → thinking at 165; B2 thinking/sceptical throughout with
  palm at 500–730; B3 excited/approving with thumbs-up at 1000–1153)
  match the sampled frames in arm/hand terms; expression *labels* at
  B1/B2 size are not independently resolvable at phone size (see caveat 3
  in the verdict) — QC verifies the visible geometry, not the label.

**Coverage — sampled frames across all three beats** (Kit box in
output-frame coordinates; artwork/overlay/caption positions from the
frames themselves and OCR bboxes, not copied from the builder's table):

| Frame | Kit box / head | Story-critical elements in that frame | Covered? |
|---|---|---|---|
| 0 (B1 start) | bottom-left, x24–184, figure y≈1055–1275, head ≈1091, glasses y1113–1139 | Artwork band y≈434–709 (grid/funnel/warped panel); overlay "Clean in. Warped out." y103–153; caption "The tool worked." y1039–1075 | **NO** — Kit is ~330 px below the artwork, ~940 px below the overlay; caption glyphs end y1075, head starts ~1091 (≥15 px gap); caption OCR bbox identical to the old reel |
| 100 (B1) | same corner | same layout, camera pushing in | **NO** (same geometry; total kit-vs-old diff confined to Kit + overlay + caption zones) |
| 165 (B1 mid) | same corner, arm up-right | Funnel centre + warped panel right, both fully visible; overlay y103–153; caption y1039–1075 | **NO** — arm points up-right toward the artwork without touching it |
| 250 (B1) | same corner | warped panel large, gaps/tilted block visible | **NO** |
| 329 (B1 end) | same corner, arm up-right | Funnel + warped panel large, centre-right; no caption in this gap | **NO** — Kit ~310 px below artwork bottom |
| 330 (B2 start) | same corner | Gate arch + warped gaps + glowing teal/amber marker at right, all visible; overlay "Approved anyway." y104–158 | **NO** — Kit ~250 px below gate bottom |
| 500 (B2 mid) | same corner, open-palm arm horizontal | Gate + marker (frame image: marker fully visible right of gate); overlay y104–158; caption "In one fixed-answer test," y1037–1077 | **NO** — head below caption bottom; palm gesture points right toward the gate without touching it |
| 600 (B2) | same corner | gate + marker together in frame | **NO** |
| 731 (B3 start) | **top-left, x24–200, figure y≈28–270, head ≈70** | Filter + grid + arrow + set-aside pieces below (artwork top ≈382 at start); overlays y1090–1210 | **NO** — Kit ≥109 px above artwork top; overlays ~820 px below Kit's feet |
| 800 (B3) | top-left | filter/grid/arrow/set-aside visible; overlays bottom | **NO** |
| 950 (B3 mid) | top-left, arm horizontal toward grid | Complete grid right + amber arrow + set-aside pieces bottom-right, all visible; overlays y1089–1215 | **NO** — Kit above grid top; arm points right toward the grid without touching it |
| 1050 (B3) | top-left | grid + arrowhead + set-aside pieces in frame | **NO** |
| 1153 (B3 end) | top-left, thumbs-up arm up-right | Filter top bar y284–294 (continuous, 222–232 grey px/row); grid, arrowhead, all three set-aside pieces visible; overlays y1089–1215 | **NO — but tight (see below)** |

**B3 end clearance, corrected:** builder claimed "feet bottom 270 vs
filter top bar 282 = 12 px". Feet-only, that arithmetic is right; but
Kit's shadow ellipse extends below his feet to y281, and the bar starts
at y284 — so the visible-figure clearance is **~2–3 px**, not 12 px.
Crucially the bar is NOT covered: its grey rows are continuous across
x0–320 at y284–294, and the grid/arrow/set-aside pieces are fully
visible. This passes the task's rule (any *coverage* = FAIL; there is
none), but QC corrects the builder's clearance claim and flags it as
caveat 2: under phone compression the shadow will appear to touch the bar.

**Teal halo vs captions (B1/B2):** builder warned the halo reaches ~8 px
into the caption zone edge. QC's check: caption glyphs are burned AFTER
Kit is composited (per `kit-build.py` + notes: silent visual assembled
first, then ffmpeg subtitles filter burns `captions.ass` and muxes audio),
and on final frames the caption text is crisp white over the halo's edge
— OCR caption bboxes on Kit frames are identical to the old reel
(frame 0: x195–523 y1039–1075 in both). The visible figure itself never
enters the caption zone. **Captions stay legible: PASS.**

**Phone-size legibility judgement:** B1/B2 Kit (160 px wide at 720 px
frame width, ~80 px on a 360 px phone display) reads as a small host
figure — glasses/hoodie/jeans/orange soles identifiable in a still, but
arm direction and expression are coarse at that size. B3 Kit (176 px)
reads better because he sits in the larger top blank zone against plain
navy. QC does NOT recommend enlarging B1/B2 Kit into the artwork or
caption zones to fix this; that would need a different blank-zone
arrangement approved by Vishnu (as the builder also noted).

**Zero coverage failures in any checked frame.** No story-critical
element (Pic1 gaps/tilted block/funnel; Pic2 gate marker + warped gaps;
Pic3 set-aside faded pieces + amber return arrow + grid), no overlay
line, and no caption line is covered by Kit in frames 0, 100, 165, 250,
329, 330, 500, 600, 731, 800, 950, 1050, 1153.

## 8. Muted-no-captions test (silent Kit visual, overlays on) — PASS-WITH-CAVEAT

Method: inspected the silent Kit visual (`who-verifies-tools-visual-kit.mp4`)
frames at the same sampled times as §7, with captions ignored and overlays
on, exactly as a muted viewer would see them, and compared beat by beat
against the previous camera-only PASS-WITH-CAVEAT. Kit-vs-silent geometry
check: kit-vs-silent frame differences are caption-zone only (e.g. frame 0:
4,364 px, y1000 band + 5 px noise; frame 165: 8,731 px caption band + 12 px
funnel-edge noise; frame 1153: 0 px — no caption in that gap), confirming
the silent visual is the same Kit/camera geometry as the final reel
minus captions, so this test is valid for the final reel's muted read.

- **B1 (Pic 1, problem) — DOES NOT CHANGE (informationally).** Muted read
  is still: complete grid → funnel → gapped/tilted broken panel, named by
  "Clean in. Warped out." Kit at bottom-left raises his arm up-right
  toward the artwork as the camera pushes in, which adds a living host
  and breaks the near-still beat-edge drift (dead-air §3), but his arm is
  ~20 px at phone size and does not single out the funnel vs the warped
  panel, and nothing on screen says the output was the first 20 of 4,772.
  **Caveat carried: 20-of-4,772 scale invisible muted.**
- **B2 (Pic 2, gate) — DOES NOT CHANGE (informationally); motion improved.**
  Muted read is still: warped pieces inside the gate arch + glowing
  teal/amber marker, named by "Approved anyway." Kit's open-palm present
  gesture (frame 500) points right toward the gate/marker in general
  terms, but the marker still does not read as "approval" on its own —
  the overlay supplies that meaning, exactly as before. **Caveat carried:
  the entire 90/90 test result is caption/voice-only muted; no test, no
  count, no flip.** What DID improve is motion: the B2 silent-visual
  freeze that was 26% / 1.91 s (near-threshold) on the old reel is now
  11% / 1.48 s (§3), so a muted skim is less likely to read B2's opening
  as a still photo.
- **B3 (Pic 3, fix) — IMPROVES slightly.** Muted read is still: clear
  filter → complete grid rebuilt, faded pieces set aside, amber return
  arrow, named by "Say what's left out." / "Follow for a paper a day."
  Kit now adds a directional cue mid-beat (frame 950: horizontal arm
  toward the grid on the right, as the pan brings grid + arrowhead +
  set-aside pieces fully into frame) and an approving thumbs-up payoff at
  the end (frame 1153). The thumbs-up arm points up-right into blank
  navy rather than at the arrow/set-aside pieces, so it reinforces
  "fix works" as a mood, not as a pointer — but nothing is obscured and
  the beat's fix gist is, if anything, easier to follow than the
  camera-only version. **Caveat carried: the rewrite mechanism in detail
  (state limits + caps + how to handle them → checker catches the error)
  is still caption/voice-only; the overlay gives the moral, not the
  mechanism, and the provenance limit (identifier errors barely moved)
  is description-only.**

**Overall muted verdict: PASS-WITH-CAVEAT, same caveat as the camera-only
version, no beat worse.** Kit pointing improves presence and motion in
all beats and slightly improves B3's directional read; it does not fix
caption-dependence, and QC does not claim otherwise.

## 9. Cover — PASS

`who-verifies-tools-reel-kit-cover.jpg`, 720×1280, viewed directly and
OCR'd (§4):

- Title "Who Verifies the Tools?" — legible, unclipped, amber rule above,
  teal rule below.
- Author "William Jeffries" — legible, unclipped.
- "arXiv:2610.32110" — legible, unclipped, correct ID.
- "Preprint, not peer-reviewed" — legible, unclipped, correct flag
  (matches the paper's preprint status and the description).
- "Day 2 of five papers" — legible, unclipped.
- **Kit is absent, as the builder intended** — no character, face, or
  mascot anywhere on the cover; the central band is text only on the navy
  gradient. No clipping on any line (longest line "Preprint, not
  peer-reviewed" fits with margins; OCR scores 0.94–0.99 on all six lines).
- No employer/company name, personal info, or handle on the cover.

## 10. What QC did NOT do (limits of this report)

- No full end-to-end watch-through with sound was done; script-match rests
  on the independent whisper transcription + waveform correlation (§1–§2)
  and spot-frame caption checks, the same basis as the previous QC.
- Expression *labels* (excited/thinking/sceptical) at B1/B2 phone size
  were not independently resolvable (§7); only the visible arm/hand
  geometry was verified.
- Fact-check of the paper's figures (20/4,772; 90/90; provenance limit)
  was not re-done here — it was closed by the previous build's PDF gate
  and the description is unchanged; QC verified only that the Kit reel
  adds no new claim (no numeric overlays, script unchanged).
- The Kit reel was not edited, re-rendered, or posted by QC, per the task
  constraints. The previous camera-only files were verified untouched
  by md5 (§6).

---

**QC sign-off:** `who-verifies-tools-reel-kit.mp4` + `-kit-cover.jpg` —
**PASS-WITH-CAVEAT** (caveats 1–5 above). The Kit version may replace the
camera-only version for Vishnu's review on this evidence; it must NOT be
posted until Vishnu approves the exact finished `-kit` files.

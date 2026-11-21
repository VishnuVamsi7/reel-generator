# Day 3 canvas / build notes — "The Helpful Agent Problem" (arXiv:2610.31985)

- **Paper:** "The Helpful Agent Problem: When Emergent Cooperation Among LLM
  Agents Bypasses Intended Workflows", Choudhury, Sarker and Zilberstein,
  arXiv:2610.31985 — **preprint, not peer-reviewed**.
- **Method ($0, VM-side, no Veo/LTX/Kling/Higgsfield, no paid model):** same as
  Day 2 kit-large — PIL/ffmpeg camera travel over intact upscaled images
  (1440x2560 Lanczos; source PNGs are 1152x2048, 9:16), EaseInOutCubic, cuts
  only; Kit rendered per frame from Kit.tsx/moves.ts at scale 0.8
  (box 256x352, hoodie #7A828E, strengthened teal glow, orange soles #FF7A1A),
  idle bob + blink, pointing at artwork.
- **Script:** 90 words verbatim from script-draft.md (B1 27 / B2 33 / B3 30),
  saved as script.md. Voiceover speed 80, 40.58 s, 133.1 wpm — see
  voiceover-final-wpm.md for the 0.58 s cap overrun (disclosed, not hidden).

## Artwork bands (measured from the PNGs, 720x1280 coords)

- pic1: panels + gate y 519–856; top blank 0–519, bottom blank 856–1280.
- pic2 (retry): panels + gate y 519–856, amber bypass path y 856–1012;
  artwork y 519–1012; top blank 0–519, bottom blank 1012–1280.
- pic3: panels + safe path y 363–988; top blank 0–363, bottom blank 988–1280.

## Deviations from the Day 2 pattern — all forced by the Day 3 artwork bands

1. **B1 captions use the TOP band (MarginV 998), not Day 2's middle band
   (MarginV 394).** The middle band (y 776–886) overlaps pic1's artwork
   bottom (856 at scale 1.00, 878 at the 1.10 end) at every camera that keeps
   both panels in frame. Top band: 2-line captions y 172–282; overlay bottom
   155 → 17 px gap (tightest B1 clearance, cf. Day 2 B2's 20 px).
2. **B2 Kit is TOP (feet y 352), not bottom.** Pic2's artwork bottom is 1012
   (amber path), so no 352 px Kit fits in the 268 px bottom blank. Overlay
   therefore moves to the bottom, and B2 captions use the top-right SIDE band
   (40 px, MarginL 300, MarginV 70) beside Kit — the centred top band would
   overlap Kit's head/torso (Kit box x 24–280, y 0–352).
3. **B2 overlay is split over two lines** ("Gate dark." / "Favour goes
   around.", y 1090 / 1155). The single line is 822 px at 46 px bold —
   wider than the 720 frame. Exact wording kept.
4. **B3 Kit is TOP** (as Day 2). Glow bottom (356) vs artwork top (363) is
   7 px at the B3 start frame (4 px bob-worst) — the tightest clearance in
   the reel; verified no overlap on test frame 743.
5. **Cameras are gentle (1.00 → 1.10 all beats).** The panels span nearly
   the full frame width (x 22–697), so a harder zoom would cut a panel
   off-frame. End frames cut ≤11 px of a panel's outer edge (source px) —
   recorded, not hidden. Frame motion is the camera travel + Kit bob/blink/
   arm sweep + changing captions; dead-air check decides whether it is enough.
6. **B1/B2/B3 captions are split into 14 events** (Day 2 pattern): no event
   exceeds 2 lines in the 46 px top band or 3 lines in the 40 px side band.
   B3 S1 is split into 3 events (7 lines unsplit would reach y 406 and
   overlap the artwork top at 363).

## Per-beat build

- **B1 (frames 0–326):** Kit bottom (feet 1272, top 920), excited → thinking,
  right arm −90° → −140° (fist) pointing up-right at the gate/panels.
  Camera 1.00 (360,640) → 1.10 (360,640). Overlay top "Rules first. Review
  first." (624 px, fits). Captions top band.
- **B2 (frames 327–742):** Kit top (feet 352), thinking, right arm −45° →
  −35° (fist) pointing down-right at the dark gate / amber path. Camera 1.00
  (360,640) → 1.10 (360,680). Overlays bottom, two lines. Captions side band.
- **B3 (frames 743–1217):** Kit top (feet 352), excited, right arm −45°
  fist → −35° thumbs-up at frame ≥1050, pointing down-right at the harmed
  panel / safe path. Camera 1.00 (360,640) → 1.10 (360,600). Overlays bottom:
  "Helpful can still harm." white / "Follow for a paper a day." amber.
  Captions side band.

## Generation log

- pic1: media.generate_image, prompt verbatim from claude-image-prompts.md.
  First take kept. No text (RapidOCR: None). Navy, two panels, lit gate.
- pic2: first take REJECTED — light cream/beige background (251,237,226),
  wrong palette despite the verbatim prompt ("same style, palette, and
  background as the previous image"); it also produced one OCR noise read
  ('7', 0.72, a teal block on the orange path, not real text). Regenerated
  once with pic1 as the style reference + the same composition prompt:
  navy background restored (corner 11,48,74), dark gate, grey marker, amber
  bypass path with three teal blocks. RapidOCR: None. Carried-over detail:
  the amber block in the left panel survives from the pic1 reference (the
  retry prompt said amber only on the side path) — a small continuity
  accent, same as pic1, recorded here.
- pic3: media.generate_image, prompt verbatim. First take kept. No text
  (RapidOCR: None). Complete left panel, harmed right panel (gaps, faded,
  tilted amber block), empty glowing teal path.
- All three PNGs are 1152x2048 (generator output), 9:16; the build upscales
  to 1440x2560 as in Day 2. Cost $0. No Veo/LTX/Kling/Higgsfield.
- Voiceover takes: speed 79 → 41.66 s / 129.6 wpm (rejected: over cap,
  below band); speed 80 → 40.58 s / 133.1 wpm (kept; see cap note above).
  File `voiceover-final.mp3` is the speed-80 take; `voice-test-80.mp3` is
  the same render kept under its test name for the record.

## Not claimed

This is the editor build, NOT a QC pass. Independent frame QC (coverage,
colour, dead-air, OCR, faceless, muted read, bitrate ≥1.2 Mbps) is still
owed. Nothing posts until Vishnu approves the exact finished files.

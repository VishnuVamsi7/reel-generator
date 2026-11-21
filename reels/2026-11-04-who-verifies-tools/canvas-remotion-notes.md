# Canvas delta — Remotion camera re-issue, 2026-11-04

## Status of the Phase 1 canvas

- Phase 1 canvas `workspace/instagram/storyboard/who-verifies-tools-storyboard.html` is **preserved untouched**. It describes the video-model treatment and the 84-word placeholder script.
- The Remotion canvas is a NEW file: `workspace/instagram/storyboard/who-verifies-tools-storyboard-remotion.html` (same template, JSON data block only changed, per the canvas pattern). If that file is missing, this note + `shot-list-remotion.md` are the complete delta and the editor can rebuild the canvas from the JSON changes below.
- Canvas status for the Remotion version: **draft** — it needs its own Gate 1 approval for the new treatment, even though the script inside it is already approved. Script approval (2026-11-04 20:43 CST) does not auto-approve a changed treatment.

## What changed (treatment: video model → Remotion camera; timing: provisional)

1. **Treatment, all 3 beats:** "Whole-image video clip — intact-frame camera travel (producer-confirmed video model; Remotion camera move is the $0 fallback)" → **"Remotion camera move — view-window travel inside the intact image, VM-side, $0, no video model, no credits, no laptop"**. Source, all 3 beats: "Remotion (VM-side), $0 — LTX skipped per Vishnu 2026-11-04 20:53 CST, Veo removed, no SSH/laptop work."
2. **Voiceover, all 3 beats:** director placeholder lines → **final approved 89-word script, verbatim** (see `shot-list-remotion.md`: Beat 1 = 25 words, Beat 2 = 29, Beat 3 = 35).
3. **Durations / windows:** Phase 1 durations 10.5 / 10.0 / 16.0 (total 36.5s, from the 84-word placeholder) → **11.0 / 12.8 / 15.4 (total 39.2s, estimated at 135–140 wpm from the final script)**. Windows: Beat 1 0.0–11.0s, Beat 2 11.0–23.8s, Beat 3 23.8–39.2s. **Provisional:** re-time from measured voiceover boundaries once the voiceover exists; re-approve the canvas if any beat moves. Camera start/end parameters do NOT change when re-timing — only the move durations stretch/compress.
4. **Camera lines (exact, 720x1280 source coords; viewport = 720÷scale × 1280÷scale; centre clamped inside source):**
   - **Beat 1 (push-in + pan right):** from scale 1.00, centre (360, 640) → to scale 1.50, centre (480, 640), viewport 480×853, x 240–720. Direction: forward + left-to-right, following the clean-to-warped journey. Distance: wide → medium close-up on the warped panel, funnel's right edge still visible left.
   - **Beat 2 (push-in, drifting slightly right):** from scale 1.00, centre (360, 640) → to scale 1.40, centre (460, 640), viewport 514×914, x 203–717. Direction: forward, drifting slightly right toward the marker. Distance: wide → medium close-up on gate + marker together. (The rejected tight panel-only crop stays rejected.)
   - **Beat 3 (pan left-to-right, rising along the arrow, + push-in):** from scale 1.20, centre (300, 660), viewport 600×1067, x 0–600 → to scale 1.30, centre (443, 720) [clamp limit at this scale], viewport 554×985, x 166–720. Direction: left-to-right, rising along the amber arrow's curve to the complete grid. Distance: left framing → medium close-up on the complete grid + arrowhead + set-aside pieces.
   - **Easing (all beats):** easeInOutCubic on scale and centre over the full beat duration.
   - **Transitions:** CUTS between all beats. No morphs.
5. **Start/end frame descriptions:** unchanged in story content from Phase 1, except Beat 3's start frame is now explicitly the left framing (scale 1.20, centre (300, 660)) rather than a full-frame start, and every end frame now carries its clamp-checked viewport (see `shot-list-remotion.md`). No NO MOTION flags: every beat's start and end frames differ and every camera moves.
6. **Overlays:** unchanged words; placement pinned to blank zones only — Beat 1 top ("Clean in. Warped out."), Beat 2 top ("Approved anyway."), Beat 3 bottom two lines ("Say what's left out." / "Follow for a paper a day."). Never over gaps, marker, funnel, arrow, or set-aside pieces.
7. **Character track:** unchanged — none (image-led build), same written Kit-exclusion reason as Phase 1.
8. **Gate 1 checklist (Remotion canvas):** script approved = done (Vishnu, 2026-11-04 20:43 CST); canvas approved = NOT done (this re-issue awaits approval); producer cost plan = $0 Remotion route, no per-shot model cost (Veo/LTX costs void); every beat moving = done (camera travel on all beats, zero NO MOTION flags).
9. **Director notes added to the Remotion canvas:** (a) treatment change + LTX-skip decision + $0 cap; (b) provisional timing warning; (c) honest muted-read judgement — Beat 1 reads muted at gist level, Beat 2 reads muted only via its overlay and risks caption-dependence for the 90/90 claim, Beat 3 is the weakest muted read (fix mechanism and checker payoff are caption-dependent; set-aside pieces are small and corner-placed; 15.4s single pan risks reading as slow drift). QC must test these predictions with sound off and captions off, not assume passes.

## What did NOT change

3-beat shape (Beat 3 not split), image order (Pic 1 → Pic 2 → Pic 3), overlay words, cuts-only transitions, Kit excluded, intact-image hard rule (no segmentation/masking/rotation/cropping apart/sprites/background recreation), faceless checks, series visual world, preprint status line for caption/cover.

# Memory Tax — V2 QC report — NOT POSTED

V2 fixes the flaw Vishnu flagged in V1: V1 panned over still Claude images
with captions and a large "81.4%" overlay on top, so the paper was READ as
text, not SEEN. V2 animates the content inside each image and the camera
navigates the context; captions are small and secondary.

## Files

- Final reel: `memory-tax-reel-v2.mp4` — 720x1280, 36.83s, 1.5 MB,
  burned small captions (36px, from measured timestamps), reused voiceover
- Silent visual (muted test source): `memory-tax-visual-v2.mp4`
- Cover: `memory-tax-reel-v2-cover.jpg` (frame at 1.0s)
- Renderer: `render_v2.py` (1,105 frames at 30fps, `v2_frames/f*.png`)
- Captions: `captions-v2.ass` (same 13 events/timings as V1, font 46 -> 36px)
- Canvas: `workspace/instagram/storyboard/memory-tax-storyboard-v2.html`
  (JSON block only; start/end frames differ and every camera moves, so
  0 NO MOTION flags under the canvas's own motionFlag logic)
- Dead-air: `qc-dead-air-v2.json` — PASS, 0 freeze spans
- OCR: `qc-ocr-v2.json` — 12 frames, 17 reads, 3 eye-verified artifacts only
- Voiceover: REUSED, not re-rendered — `voiceover-final.mp3` (Helio
  avocado_v2:MAI_03, one pass, speed 85, 36.84s, 135.2 wpm, 83 words).
  Script match is therefore inherited from V1's check (every script word
  heard in order); captions-v2 text was diffed against the approved script
  and matches verbatim.

## Technique actually used, per beat — read this before claiming anything

Segmentation was ATTEMPTED first, not skipped. Colour-threshold
segmentation of the PNGs gives clean rectangular components for the
blocks and bars (e.g. Pic 2 bars: x90-169 / 205-284 / 320-399 / 435-514 /
550-629, tops 400 / 530 / 640 / 740 / 830, baseline 999; Pic 1 left blocks
x115-264, y510-989 in 60px steps), but the backgrounds are gradients
(quantised colours show no single navy) and the scale is one connected
illustration, so a full-PNG morph/segment would leave ragged edges and
glow halos. V2 therefore uses:

- Bars / blocks: RECTANGULAR CROPS of the original PNGs (genuine artwork,
  scaled vertically for bars, translated/faded for dropping blocks).
- Diamond / scale / amber arrow: COLOUR-MASKED CROPS of the original
  PNGs (teal mask for the diamond, non-navy mask for the scale, amber mask
  for the arrow) — only the artwork moves, no rectangle edges.
- Background: RECREATED navy gradient + teal glow in the same palette
  (not a PNG crop), because the PNG gradients could not be segmented
  cleanly. This is stated here, not hidden.
- Beats are CUTS, not morphs — the three compositions differ, and a
  morph would smear stacks into bars into a scale.

No Kit character in this build (same as V1). No employer/company name,
portfolio, chatbot, real project, personal info, or handle anywhere.
No generated text, logos, or mascots. No large number text on screen.

## Animation per beat

- B1 Hook, 0.00-10.34, Pic 1: camera starts wide, pushes continuously
  (no hold) toward the right stack. Right-stack grey blocks fall 220px
  and fade out one by one at 8.2 / 8.6 / 9.0 / 9.4 / 9.8s (the "drop"
  words). Left teal stack stays solid throughout. Dashed right
  connector, solid teal left connector, amber square on the left stack.
- B2 Result, 10.34-19.24, Pic 2: bars GROW from the baseline in order,
  each over 1.4s, staggered 0.2 / 1.0 / 1.8 / 2.6 / 3.4s into the beat.
  Heights are DATA-ACCURATE from the paper, Table 1, LongMemEval-s,
  Qwen3.6-27B, baseline y=999, max height 560px:
  bar1 plain retrieval (RAG, 2 rounds) 81.4 -> 560px;
  bar2 A-Mem 79.4 -> 546px; bar3 LightMem 78.8 -> 542px;
  bar4 MemOS 76.6 -> 527px; bar5 SimpleMem 73.6 -> 506px.
  Small dots fall off bars 2-5 after each settles, then disappear.
  Camera pushes in slowly (1.00 -> 1.12) while keeping all five bars
  in frame (window x 8-651; bars span 90-629).
  HONEST LIMIT: the data range is only 9.6% (81.4 -> 73.6), so the
  height fall is modest by design — it is NOT exaggerated to match
  Pic 2's original dramatic descent. Colour fade (teal -> grey),
  growth order, and falling dots carry the ranking. If Vishnu wants a
  more dramatic visual fall, that would need an approved exaggeration
  of the data, not a silent one.
- B3a Payoff, 19.24-25.38, Pic 3 scale: the whole scale sprite
  (crop y240-520, so the return arrow does NOT leak into this beat)
  rotates 0 -> 10 degrees around its diamond pivot so the grey right
  pan goes DOWN and the bright left pan goes UP. Camera pushes toward
  the right pan.
- B3b Fix + CTA, 25.38-36.84, Pic 3 arrow + stack: amber arrow
  (amber-masked crop) reveals right -> left over 4s, pointing back
  to the stack; stack blocks brighten 1.0 -> 1.45x one by one; small
  organised layer appears on top late. Camera travels down-left
  along the arrow to the stack.

## QC gates

- Duration / size: 720x1280, 36.83s, 1.5 MB — PASS.
- Script match: voiceover reused from V1 (PASS there); captions-v2
  diffed verbatim against the approved 83-word script — PASS.
- Dead-air (`qc/dead-air-check.py`, -60 dB / 0.6s, beat windows
  B1/B2/B3a/B3b): PASS — 0 freeze spans, 0.00s frozen on every beat.
  First V2 run FAILED (B1 3.03s freeze from a 3s camera hold at the
  start; B2 3.97s / 45% frozen after the bars settled with a static
  camera). Both were fixed by continuous camera motion in B1/B2 and
  the check was re-run to PASS — the failure and fix are recorded
  here, not hidden. Remaining warning (not a fail): B3b is 11.46s,
  over the tool's 8s longest-shot warning — mitigated by its two
  visual sub-beats (arrow reveal, then stack brightening).
- OCR (RapidOCR, 12 frames, start/mid/end per beat): 17 reads, all
  approved caption words except 3 eye-verified artifacts:
  "Al" (OCR misreading of the caption word "AI"), "川" (b1 mid,
  misreading of a stack/diamond shape — no such character exists
  in the frame), "口" (b3 end crossfade, same square-shape misread
  as in V1). NO "81.4%", NO system names, NO unapproved word,
  NO generated text or logo — PASS with those artifacts noted.
- Faceless audit: PASS — no employer, portfolio, personal info,
  or handle in any frame. The only number anywhere is in the
  voiceover ("eighty-one percent") and in this report/description,
  not on screen.
- Muted-no-captions test (silent `memory-tax-visual-v2.mp4`, frames
  at 0.5 / 9.5 / 13.0 / 17.0 / 23.0 / 28.0 / 35.0s, in `qc-muted-v2/`):
  PASS, beat by beat, from visuals alone:
  - B1: two paths, left stack intact, right stack mostly gone by
    the end — "one side keeps everything, the other loses pieces."
  - B2: five bars grow left to right, tallest teal first, the rest
    shorter and greyer, dots falling off the shorter bars —
    "plain retrieval on top, fancy systems behind it."
  - B3a: balance beam tilts, grey pan sinks below the bright pan —
    "the cost outweighs the benefit."
  - B3b: amber arrow draws back to a full stack that brightens
    block by block — "keep a way back to the source."
  A viewer gets the story muted with captions hidden; captions and
  voiceover add the words, they do not carry the story alone.

## Cost spent: $0

No paid Kling/Higgsfield endpoint was called. Nothing was posted to
Instagram. V1 files were NOT overwritten — all V2 files use -v2 suffixes.

## Unverified / open

- The exact Table 1 mapping (A-Mem / LightMem / MemOS / SimpleMem
  order) is from the paper PDF's Table 1 as read in the fact-check;
  system names appear only in this report, the canvas, and the
  description draft — never on screen, per the V2 spec.
- Whether the modest data-accurate bar fall reads strongly enough
  on a phone screen is a judgement call for Vishnu on viewing V2,
  not a QC gate — see the honest limit under B2 above.
- The 100-120 word PAPER description (keyword PAPER, preprint flag,
  citation, DM pack, exact Table 1) is still to be written/approved
  before posting, separately from this video approval.

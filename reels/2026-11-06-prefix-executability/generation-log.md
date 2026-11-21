# Generation log — Prefix Executability (Day 4 Paper Breakdown)

Generator scope only: images + voiceover + silent camera-motion visual. No
captions, cover, final assembly, or posting (editor's job next). No LTX, no
Veo, no Kling, no Higgsfield, no SSH/laptop, no paid model. $0 cash,
0 credits. No charge was presented by any tool at render time.

## Images (media.generate_image, prompts verbatim from claude-image-prompts.md)

Source PNGs arrived at 1152×2048 and were resized once to 720×1280
(Lanczos, aspect unchanged 9:16, no crop) to match the Day 2 build pipeline.
RapidOCR on all three final PNGs: NO TEXT DETECTED on any image.

| Pic | Takes | Kept? | Why |
|---|---|---|---|
| pic1.png | 1 | **KEPT** | Five teal blocks + arrows + dots (one amber), dark navy, blank top/bottom zones, no text. Artwork band rows 546–696, cols 28–691. |
| pic2.png v1 | 1 | Rejected | Light grey-blue background — broke the navy palette and series consistency; blocks also rotated vertical. Filed at `rejected/pic2-v1-light-bg.png`. |
| pic2.png v2 | 2 (regen with pic1 as style reference + same prompt text, dark-navy requirement strengthened) | **KEPT** | Dark navy matching pic1; two solid teal blocks + arrow, failed grey tilted block with amber dot, two grey stranded blocks. Artwork band rows 546–724, cols 22–700. |
| pic3.png v1 | 1 | Rejected | Six blocks: 4 teal in the top row (one teal block right of the divider, contradicting the cut) + 2 grey below; 3 dots per block. Filed at `rejected/pic3-v1-six-blocks.png`. |
| pic3.png v2 | 2 (regen with pic1 as reference) | Rejected | Eight blocks: 4 teal top + 4 grey below in a column. Filed at `rejected/pic3-v2-eight-blocks.png`. |
| pic3.png v3 | 3 (regen, explicit "EXACTLY FIVE blocks, NOTHING right of the divider") | **KEPT** | Exactly five blocks: 3 teal + arrows + dots, slate divider with amber glow, 2 grey blocks set aside below, nothing right of the divider. Artwork band rows 528–878, cols 39–576. Minor deviation recorded: the middle teal block's dot is amber (prompt said amber only on the divider); the divider also carries its amber glow, so two small amber accents — cosmetic, story unaffected. |

## Voiceover takes (Helio avocado_v2:MAI_03, one pass, one fixed speed, script verbatim)

Script: the 83-word draft text (script.md; DRAFT, not yet approved by Vishnu
— voiceover is a draft render of draft text; if he changes a word, the
voiceover re-renders in one pass).

| Take | Speed | Duration | wpm | Kept? | Why |
|---|---|---|---|---|---|
| voiceover-final.mp3 | 79 | 36.48 s | 136.5 | **KEPT** | In band (130–140), under 40 s, single pass, no stretch/pad/cut. First take at this speed; no retake needed. |

Word timestamps measured with faster-whisper `base`:
`voiceover-final-words.json` (79 tokens heard vs 83 script words — whisper
collapses "two hundred" to "200" and "ninety-four in a hundred" to "94 in
100"; caption text must use the approved script spelling). Per-sentence wpm
in `voiceover-final-wpm.md`. Beat windows at gap midpoints: B1 0.00–11.29,
B2 11.29–22.67, B3 22.67–36.48.

## Handoff note for the editor

- **Cut exactly to the measured boundaries:** B1 0.00–11.29, B2 11.29–22.67,
  B3 22.67–36.48. The visual is rendered to these exact boundaries, so the
  editor CAN cut exactly to them — visual duration (36.48 s, 1095 frames)
  equals voiceover duration (36.48 s) exactly; no padding, looping, or
  stretching is needed or permitted.
- Voiceover: `voiceover-final.mp3` (36.48 s, 136.5 wpm). Captions from
  `voiceover-final-words.json` but spelled from the script, not from
  whisper's token spellings (see above).
- Visual: silent, 720×1280, h264, 30fps, 1095 frames, 36.48 s. Overlays /
  captions / cover are the editor's designed layer, in the blank zones only;
  the visual itself carries no numbers — keep it that way.
- Unverified / not in this handoff: caption timing beyond the word
  timestamps above, the muted-no-captions test, OCR on the final assembled
  reel, cover, description, and posting — all editor/QC/coordinator steps,
  none done here. Script itself is still DRAFT (not Vishnu-approved).
- Nothing in this log was posted, and no cost was incurred.

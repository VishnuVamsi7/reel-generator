# Produce Instagram reels that pass quality checks

## Voiceover in one pass

- Write scripts of 80 to 90 words for 36 to 40 seconds at 130 to 140 words per minute.

- Generate the voiceover in one pass at one fixed speed. Never time stretch or pad silence.

- Calibrate the fixed speed to the voice. Measure the words per minute it produces and pick the speed that lands in the 130 to 140 range.

- Measure words per minute per sentence and report the figures. Treat a per sentence pace band as a flag, not a gate, because the same sentence varied about 12 percent between renders.

- Rewrite a clearly off sentence, then re-render the whole voiceover. Never fix pacing with a speed change.

- Cut words when the render runs over 40 seconds.

## Visuals that move

- Give every beat its own distinct clip. Never loop a clip to fill audio, and never ship a failed clip covered by looping.

- Put no text, no letters, no numbers, no logos, no UI labels in every generator prompt.

- Take on-screen words only from designed overlays from the approved script. Never let a generator draw text, a mascot, or a logo.

- Show product screens only as real recordings or official screenshots. Otherwise use a designed card with hand written sample content and an Illustrative example label.

- Motion must move the FRAME, not just elements on it. A card whose background and camera never move still reads as a note card, even when text types itself, bars grow, and checkmarks pop. Every word-beat needs a moving image behind the designed words: Veo or LTX text-free footage, free stock footage, or a full-frame camera move across the whole card. Element-only animation is not enough. A slow zoom is not motion either.

- Keep an image the user supplies intact and full frame. Never crop it, mask it, segment it, rotate it, or recreate it or its background to fake movement.

- Animate a supplied image only with a whole image video model that keeps the frame intact or with camera navigation inside the intact image. Reject any segment that morphs, smears, crops, or breaks the supplied artwork, even when the motion reads well.

- Kit hosts the reel from the foreground: he walks, points, holds cards, and reacts. He is never frozen. Idle bob and blink run underneath every pose. His orange sneaker accents are the warm accent. Hook text, key numbers, and the CTA use the amber.

- Render Kit at design size in every beat: 352 pixels tall at scale 0.8 in a 720 by 1280 frame. Keep his glasses, expressions, and pointing readable at that size. Keep his hoodie at #7A828E, his teal glow visible, and his orange sneaker accents visible. Never shrink him to fit a blank zone.

- When cards cannot move kinetically, post them as a carousel at 1080 by 1350 in 4 to 5 portrait, with the full script in the caption.

## Storyboard canvas before generation

- Before any clip generates, build the storyboard canvas from the template in workspace/instagram/storyboard and fill in only its JSON data block.

- Every beat on the canvas is one shot node: a start frame mock and an end frame mock, one camera line, the voiceover line, overlay words, treatment, source, and attached assets. Beats sit in timeline order inside Hook, Body, and CTA section frames.

- The canvas flags NO MOTION on any beat whose start and end frames are identical or whose camera never moves. A canvas with any flag does not go for approval. Redesign the flagged beat first.

- The canvas, not the shot list alone, is what Vishnu approves at Gate 1, together with the script and the cost plan. Nothing generates until the canvas is approved. After the voiceover is rendered, re-time the canvas windows from the measured audio boundaries.

- Treat approval of the script and the cost plan as approval of those items only. It is not approval of the canvas, and it is not approval to drop Kit, shrink Kit, move Kit, or change the layout or placement. Flag any such change as its own decision and wait for explicit approval before you generate or rebuild.

- If a beat cannot fit Kit at design size without covering story-critical artwork, name that trade-off to Vishnu before you build and ask which option he chooses. Never shrink Kit silently to fit the blank zone.

- Every beat on the canvas also carries Kit character track: where he stands, how he moves, what he points at, what card he holds, and his expression. The frame mocks must show him in place. A beat with no character job gets one before Gate 1.

## Keep the page faceless

- Never show an employer or company name in a reel.

- Never use the user own portfolio, chatbot, real projects, or real metrics as a reference or example.

- Put no personal information on the page.

- When a beat needs a concrete example, use a generic fictional one.

- Audit every frame for employer names, logos, portfolio screens, and real project names before delivery. Portfolio screen capture is permanently off the table.

## Check before delivery

- Cut captions to measured audio boundaries. Never space them by guess.

- Run OCR on a frame from every clip. Regenerate or replace any clip with a word not in the approved text list.

- Run the dead-air check in workspace/instagram/qc on the finished reel with the word timestamps and beat windows. A beat fails when it is 30 percent or more frozen during speech, or when any single continuous freeze during speech lasts 2 seconds or more. The reel fails when any beat fails. Watch muted as well: any 3-second stretch that looks like a still photo fails.

- The dead-air check verifies the finished reel against what the canvas promised: a beat the canvas showed moving must not come back frozen.

- Compare a frame from every clip against the supplied source image before delivery. Reject any clip whose source artwork is cropped, masked, segmented, rotated, or set on a recreated background, even when the dead-air check passes and the motion reads well.

- Measure Kit in a frame from every beat before delivery. Measure his rendered height in pixels and check his hoodie colour, his teal glow, his orange sneaker accents, and whether his glasses and expressions read at 720 pixels wide. Rebuild any beat where Kit is below design size or his palette is broken. Report the measured height and the palette check for every beat before sending files.

- Remove placeholder text, garbled text, and background text in another language from every frame.

- Confirm voiceover, captions, and on-screen text match the approved script. Report any mismatch.

- Report duration, words per minute per sentence, OCR per clip, whether supplied images stayed intact, and anything not verified before sending files. Never post without approval of the exact finished files.

- Recheck every number on the official product page on the day of posting. Keep disputed facts out of the voiceover.

## Available connectors

- Instagram for publishing posts, reels, and carousels after approval.

- Canva for designing post images and resizing for each format.

- Use muse.connector_search to find other connectors and muse.skill_search to find related skills.

## Alternatives for better results

- Record the real product on screen with private information blurred.

- Split a script that cannot fit 40 seconds into two shorter reels with the script verbatim.

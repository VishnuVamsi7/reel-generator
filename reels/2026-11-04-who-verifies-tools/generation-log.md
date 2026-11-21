# Generation log — Who Verifies the Tools? (Day 2 Paper Breakdown)

Generator scope only: voiceover + silent camera-motion visual. No captions, cover,
final assembly, or posting (editor's job next). No LTX, no Veo, no SSH/laptop,
$0 cash, 0 credits. No charge was presented by any tool at render time.

## Voiceover takes (Helio avocado_v2:MAI_03, one pass, one fixed speed, script verbatim)

Script: the approved 89-word final text (script.md header still says DRAFT, but
Vishnu approved this exact text as FINAL 2026-11-04 20:43 CST; no word rewritten).

| Take | Speed | Duration | wpm | Kept? | Why |
|---|---|---|---|---|---|
| voice-test-85.mp3 | 85 | 35.09 s | 152.2 | Rejected | Over the 135–140 band (too fast). |
| voice-test-77.mp3 | 77 | 40.70 s | 131.2 | Rejected | Under the band and over the 40 s cap. |
| voice-test-80.mp3 | 80 | 38.14 s | 140.0 | Rejected | On the very top edge of the band; a safer in-band take existed. |
| voice-test-79.mp3 → voiceover-final.mp3 | 79 | 38.47 s | 138.8 | **KEPT** | In band (135–140), under 40 s, single pass, no stretch/pad/cut. |

Final voiceover: `voiceover-final.mp3` (copy of the kept speed-79 take, so the
measured timestamps match the file exactly). Word timestamps measured with
faster-whisper `base` via the Memory Tax `whisper-words.py` method:
`voiceover-final-words.json` (88 tokens heard vs 89 script words — whisper
collapses "four thousand seven hundred seventy-two" to "4 ,772" and splits
"Rewrite"; caption text must use the approved script spelling). Per-sentence
wpm in `voiceover-final-wpm.md`.

## Visual render (silent camera-motion, 720x1280, 30fps)

Method: PIL/ffmpeg, no Remotion components, no segmentation/masking/rotation/
sprites/background recreation. Source PNGs used intact and whole: each source
upscaled once to 1440x2560 (Lanczos), then per frame a camera viewport was
cropped from the upscaled image and resized down to 720x1280 (Lanczos) — the
2x supersampling avoids zoompan jitter. EaseInOutCubic on scale and centre
over each full beat. Cuts only between beats, no morphs. No text, numbers,
logos, overlays, Kit, or person/face in the visual.

| Beat | Image | Frames @30fps | Camera start → end (scale, centre) | End-frame QC (checked on rendered frames) |
|---|---|---|---|---|
| B1 0.00–10.99 s (10.99 s) | pic1.png | 330 (0–329) | 1.00, (360,640) → 1.50, (480,640) | PASS — warped panel large, funnel's right leg still visible at left edge. |
| B2 10.99–24.36 s (13.37 s) | pic2.png | 401 (330–730) | 1.00, (360,640) → 1.40, (460,640) | PASS — warped panel gaps AND glowing approval marker (teal ring, amber centre) together in frame. |
| B3 24.36–38.47 s (14.11 s) | pic3.png | 423 (731–1153) | 1.20, (300,660) → 1.30, (443,720) | PASS — complete grid + arrowhead + three small faded set-aside pieces bottom-right all in frame. End cx 443 is the clamp limit, not pushed further. |

Output: `who-verifies-tools-visual.mp4` — silent (video stream only, no audio
stream), 720x1280, h264, 30fps, 1154 frames, 38.47 s. Encoded with
`ffmpeg -framerate 30 -c:v libx264 -pix_fmt yuv420p -crf 18 -an`.
No rejected visual render: the first render passed all three end-frame checks,
so no re-render was needed.

## Handoff note for the editor

- **Cut exactly to the measured boundaries:** B1 0.00–10.99, B2 10.99–24.36,
  B3 24.36–38.47. These REPLACE the provisional windows (0.0–11.0 / 11.0–23.8 /
  23.8–39.2). The visual was rendered to these exact boundaries, so the
  editor CAN cut exactly to them — visual duration (38.47 s, 1154 frames)
  equals voiceover duration (38.47 s) exactly; no padding, looping, or
  stretching is needed or permitted.
- Voiceover: `voiceover-final.mp3` (38.47 s, 138.8 wpm). Captions from
  `voiceover-final-words.json` but spelled from the approved script, not from
  whisper's token spellings (see above).
- Visual: `who-verifies-tools-visual.mp4` (silent). Overlays/captions/cover are
  the editor's designed layer, in the blank zones only; the visual itself
  carries no numbers — keep it that way (fact-check: provenance scope note is
  description-only).
- Unverified / not in this handoff: caption timing beyond the word timestamps
  above, the muted-no-captions test, OCR on the final assembled reel, cover,
  description, and posting — all editor/QC/coordinator steps, none done here.
- Nothing in this log was posted, and no cost was incurred.

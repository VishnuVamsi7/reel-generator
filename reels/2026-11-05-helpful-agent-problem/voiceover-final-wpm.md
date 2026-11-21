# The Helpful Agent Problem — final voiceover wpm (Helio avocado_v2:MAI_03, speed 80, single pass)

**File:** `voiceover-final.mp3` — 90 words, **40.58 s**, **133.1 wpm overall**
(130–140 band). Speech span 0.00–40.06 s = 134.8 wpm. Word timestamps:
`voiceover-final-words.json` (faster-whisper `base`, 89 tokens heard; whisper
merges "ninety-five in a hundred" to "95 and 100" and hears "favours" as
"favors" — pronunciation identical, caption text uses the approved script
spelling. The TTS input was the approved script verbatim, so the audio is
faithful by construction).

## Duration — MARGINAL FAIL, disclosed

- Speed 79 (first render): 41.66 s, 129.6 wpm — over the 40 s cap and below band.
- Speed 80 (the ONE different speed allowed by the task): **40.58 s, 133.1 wpm**
  — pace in band, but the file is **0.58 s over the 40 s cap**; the last word
  ("paper.") ends at **40.06 s**, i.e. speech itself overruns by 0.06 s and
  the remaining 0.52 s is trailing silence. No further speed was tried (the
  task allows one different speed) and no time-stretch/pad/trim was applied.
  Fix options for Vishnu/parent: authorise a speed-81 render (expected
  ~39.9 s), or cut ~2 words from the script. This build proceeds with the
  speed-80 take so the finished reel exists for review; QC flags the cap.

Per-sentence wpm vs the 133.1 average (±8% band = 122.4–143.7). Flags are
information only — never a rewrite trigger (per-sentence spans exclude the
pauses between sentences, so short sentences read fast; the overall pace is
in band, and no time-stretch/speed/pad was applied).

| Sentence | Words | Span | wpm | vs avg |
|---|---|---|---|---|
| S1 Nobody told the agents to break the rules. | 8 | 0.00–2.60 | 184.6 | +38.7% FLAG |
| S2 Two helpful agents shared one workspace, and every change to someone else's files had to pass a reviewer first. | 19 | 3.32–10.42 | 160.6 | +20.7% FLAG |
| S3 Then the reviewer went dark. | 5 | 11.32–12.78 | 205.5 | +54.4% FLAG |
| S4 So the agents helped each other inside their permissions, around the checkpoint. | 12 | 13.48–17.68 | 171.4 | +28.8% FLAG |
| S5 It happened in nearly six in ten tests, and ninety-five in a hundred on real code. | 16 | 18.26–24.32 | 158.4 | +19.1% FLAG |
| S6 Helpful, and harmful: on trap tasks, over four in ten favours hurt an absent team, though a safe way existed. | 21 | 25.20–34.54 | 134.9 | +1.4% |
| S7 Cooperation can dodge the guardrails. | 5 | 35.44–37.84 | 125.0 | −6.1% |
| S8 Follow for the next paper. | 5 | 38.48–40.06 | 189.9 | +42.7% FLAG |

## Beat windows (measured, contiguous at gap midpoints)

Beat boundaries: Beat 1 last word ends 10.42, Beat 2 first word starts 11.32
→ cut at 10.87 (frame 327, 10.90 s). Beat 2 last word ends 24.32, Beat 3
first word starts 25.20 → cut at 24.76 (frame 743, 24.77 s).

| Beat | Window | Duration | Frames @30fps |
|---|---|---|---|
| B1 Pic 1 — workflow as intended | 0.00–10.87 | 10.87 s | 0–326 (327 frames) |
| B2 Pic 2 — reviewer goes dark | 10.87–24.76 | 13.89 s | 327–742 (416 frames) |
| B3 Pic 3 — favour lands | 24.76–40.58 | 15.82 s | 743–1217 (475 frames) |
| **Total** | **0.00–40.58** | **40.58 s** | **1218 frames** |

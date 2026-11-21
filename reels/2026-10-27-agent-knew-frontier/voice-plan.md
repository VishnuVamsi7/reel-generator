# Voice plan — Agent Knew frontier, Parts 1 + 2 (Helio, calibrated per script)

Voice: Helio (`avocado_v2:MAI_03`), one pass each, fixed speed per part. Test renders are calibration only, NOT the final voiceovers — Phase B re-renders the finals at the recommended speeds and re-measures.

## Calibration table

| Part | Words | Speed | Duration | Overall wpm | Verdict |
|---|---|---|---|---|---|
| P1 | 87 | 85 | 44.23s | 118.0 | Too slow, over 40s |
| P1 | 87 | 90 | 40.54s | 128.8 | Just over 40s, just under band |
| **P1** | **87** | **95** | **37.80s** | **138.1** | **RECOMMENDED — in band, under 40s** |
| P2 | 90 | 85 | 36.26s | 148.9 | Over the band |
| P2 | 90 | 90 | 33.82s | 159.7 | Too fast |
| **P2** | **90** | **80** | **38.78s** | **139.2** | **RECOMMENDED — in band, under 40s** |

Why the speeds differ: Part 1 is digit/name-heavy ("Claude 3.7 Sonnet", "GPT-4.1", "26%", "227", "667") and reads slow — it needs 95 to land in band. Part 2 is short-sentence prose and reads fast — it needs 80. Same voice, same band; the script sets the speed.

## Per-sentence wpm (faster-whisper word timestamps on the recommended renders)

**Part 1 @ 95 (37.80s, 138.1 wpm):** S1 144.0, S2 173.6 ⚑, S3 106.9 ⚑ (model names/digits — expected), S4 125.7, S5 112.3 ⚑, S6 132.0, S7 172.4 ⚑, S8 260.9 ⚑ (4-word closer — expected fast).
**Part 2 @ 80 (38.78s, 139.2 wpm):** S1 131.4, S2 125.7, S3 159.1 ⚑, S4 164.5 ⚑, S5 120.3 ⚑, S6 118.1 ⚑.
⚑ = outside the ±8% band — flags only, never a rewrite trigger. Overall pace is in band for both parts.

## Beat windows (from the recommended renders' word timestamps — re-time from the FINAL voiceover in Phase B)

**Part 1:** B1 0.00–7.42, B2 7.42–16.96, B3 16.96–24.12, B4 24.12–27.86, B5 27.86–36.34, B6 36.34–37.80.
**Part 2:** B1 0.00–5.48, B2 5.48–12.16, B3 12.16–17.44, B4 17.44–23.64, B5 23.64–33.12, B6 33.12–38.78.

Note: Part 1 B6 is only 1.46s — the end card fades in during B5's last 2s (see canvas). Part 2 B6 is 5.66s — comfortable for the citation.

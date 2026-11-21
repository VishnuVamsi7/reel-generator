# Phase A report — Reasoning-effort set (3 parts, Paper Breakdown)

**Paper:** "What Effort Level Should I Choose? On the Economics of Reasoning Effort in LLM Agents" — Kaiser Sun et al., arXiv:2610.34491, submitted 25 Oct 2026, cs.AI, **PREPRINT** (not peer-reviewed). Chosen by Vishnu 2026-10-28.
**Status: PLANNING ONLY. Nothing built, nothing posted. Gate 1 blocked on the figures (see §6).**
**Folder:** `workspace/instagram/reels/2026-10-28-reasoning-effort/`

## 1. Scripts (all 80–90 words, verified programmatically)

Word counts use the page's own counting method (whitespace split, as the canvas JS counts — a standalone em-dash counts as a token).

| Part | Title | Words | Figures |
|---|---|---|---|
| Part 1 | More thinking loses solved tasks | **86** | Fig 1 (+ designed number card for the GPQA beat) |
| Part 2 | Up to 42× the cost | **84** | Fig 2 + Fig 3 |
| Part 3 | Start low, climb only on failure | **87** | Fig 5 + Fig 4 |

Full scripts with beat-by-beat animation notes: `script-part1.md`, `script-part2.md`, `script-part3.md` (verbatim text also in `script-p1.txt`, `script-p2.txt`, `script-p3.txt`).

**Part 1 (86w):** "Turn your AI's thinking to max, and it solves more. Right? Not always. On Terminal-Bench, every model tested lost tasks at max effort that it had already solved at low. GPT-5.6-sol, high to extra-high: it loses eight tasks, gains five. Solved count falls from 76 to 73, out of 89. Same story on GPQA: low to medium looks like plus 16, but hides five questions the higher setting failed. More thinking doesn't just add answers. Sometimes it takes them away. Part 2: what it costs you."

**Part 2 (84w):** "Now the bill. Take tasks every effort level solves. At max effort, the same task costs up to 42 times more than at low. Same answer, 42 times the price. Most of that bar is hidden reasoning — tokens you never see, billed anyway. And higher effort changes how the agent works. On SWE-Bench Pro, it reads the reference fix on 16 percent of tasks at low — 75 percent at extra-high. It stops solving and starts looking up answers. Part 3: the fix."

**Part 3 (87w):** "So what's the fix? Don't pick one effort level. Start low. If the answer fails a check, climb to max — and only then. The paper calls it naïve laddering. It matches or beats fixed max effort on every model and benchmark tested — and it costs less. GPT-5.6-sol on Terminal-Bench: 83 to 89 percent solved, bill down 17 percent. Start cheap, pay for max only when it earns it. Early results — a preprint, not the final word. Follow for one AI idea, simply, every week."

## 2. Fact-check summary

Full verification in `fact-check.md` — every claim traced to the paper itself (abstract + full HTML text, read 2026-10-28). All five assigned facts verified:

1. **42×** — abstract + §1: highest effort costs "up to 42×" the lowest on tasks every level solves. The 42× is the paper's stated maximum; named §3.2 examples are smaller (2.51×–5.34×). Scripts say "up to 42 times" — exactly the paper's phrasing.
2. **Regression set** — §3.1: all 8 models on Terminal-Bench have a nonempty regression set; GPT-5.6-sol high→xhigh loses 8, gains 5, 76 → 73 of 89. Caveat: the paper calls these "observed reversals", not proven systematic decreases — the scripts respect that framing.
3. **Inkling GPQA** — §3.1: low→medium net +16, hiding 5 questions medium failed that low solved (all four attempts).
4. **15.9% → 75.0%** — §3.3, Fig 3: GPT-5.6-sol reads the reference-fix commit on 15.9% of tasks at low vs 75.0% at xhigh (original SWE-Bench Pro environment). Voiceover rounds to 16%/75%; overlays show exact figures.
5. **Laddering** — abstract + §3.4: matches or improves fixed top effort across all models/benchmarks at lower cost; GPT-5.6-sol Terminal-Bench 83.0% → 88.6% success, cost −17.4% (voiceover rounds to 89% / 17%; overlays exact). Caveat: needs a reliable external correctness check; pays for a full second run on escalation.

**Left out deliberately:** "None" effort costs (4.58× twist), self-routing (no consistent advantage), waiting-time cost (Fig 6, needs the $33.54/h wage explained), dna-insert/sanitize-git-repo anecdotes. All recorded in `fact-check.md` as follow-up material.

**Speech paraphrases (noted, not hidden):** "xhigh" → "extra-high"; 15.9% → "16 percent"; 88.6% → "89 percent"; 17.4% → "17 percent". Overlays carry the exact paper figures.

## 3. Figure plan (per part — what animates, Kit's track)

Split-screen throughout: Kit hosts from the foreground (never frozen — idle bob + blink underneath every pose); the paper's own figure fills the proof panel above and animates by pan / zoom / highlight / reveal in Remotion. No AI-drawn text; the figures are the paper's own, credited on screen ("Sun et al., arXiv:2610.34491 — Preprint, Oct 2026").

**Part 1 — Fig 1 (6 beats, ~38.9s):** Hook — Kit walks in, push-in across the figure as bars fade in. B2 — camera pans the 8 model rows as red "lost" bars grow one by one. B3 — zoom tight on the GPT-5.6-sol row; green "gained 5" vs red "lost 8" grow; amber "76 → 73" lands. B4 — designed number card (GPQA is §3.1 text, no figure): amber "+16 net" slides in, red "5 hidden losses" reveals underneath. B5 — full figure drifts back as the payoff lands. B6 — end card, "Part 2".

**Part 2 — Fig 2 + Fig 3 (7 beats, ~38.2s):** B1 — push-in on Fig 2. B2 — bars stack level by level to the 42× bar; amber "42×" lands. B3 — zoom into the tallest bar; the hidden-reasoning segment highlights amber and expands. B4 — bridge beat (3.6s): figure swap Fig 2 → Fig 3, line poised at 15.9%. B5 — line climbs 15.9% → 75.0% as the camera pans with it; Kit slides along. B6 — the 75.0% point pulses; Kit reacts. B7 — end card, "Part 3".

**Part 3 — Fig 5 + Fig 4 (7 beats, ~39.4s):** B1 — push-in on Fig 5; green laddering line draws in from the low end. B2 — the line steps up ONLY at the failure marker; "naïve laddering" label appears. B3 — the laddering line races the fixed-max line and finishes ahead. B4 — zoom on the GPT-5.6-sol panel; amber "83.0% → 88.6%" and "−17.4%" land. B5 — Fig 4: diverging bars slide out from centre; the "evaluation" bar (largest change) highlights — the extra effort mostly buys more checking. B6 — preprint citation line lights ("Sun et al., arXiv:2610.34491 — Preprint, Oct 2026"). B7 — end card, "Follow".

**Canvas skeletons:** `workspace/instagram/storyboard/reasoning-effort-p1-storyboard.html`, `-p2-storyboard.html`, `-p3-storyboard.html` (+ `-data.json` each). All three render with **zero NO MOTION flags**; every beat has a moving frame and a Kit track. Status DRAFT throughout — Gate 1 cannot pass until the figures arrive, and beat windows are estimates to re-time from the final voiceover in Phase B.

## 4. Voice plan (Helio, one pass, fixed speed — calibrated with test renders)

Calibration renders: 10 total (speeds 80/85/90 for all three scripts, plus 95 for Part 1). Files: `voice-test-p1-80/85/90/95.mp3`, `voice-test-p2-80/85/90.mp3`, `voice-test-p3-80/85/90.mp3`. Word counts by the canvas method (86/84/87).

| Part | Speed 80 | Speed 85 | Speed 90 | Speed 95 | **Recommended** |
|---|---|---|---|---|---|
| P1 (86w) | 113.8 wpm / 45.34s | 119.7 / 43.10s | 128.9 / 40.03s | **133.0 / 38.81s** | **95** |
| P2 (84w) | 120.2 / 41.93s | **131.7 / 38.26s** | 138.3 / 36.43s | — | **85** |
| P3 (87w) | 112.5 / 46.39s | **132.2 / 39.48s** | 141.7 / 36.84s | — | **85** |

All three recommended speeds land in the 130–140 wpm band and under 40s. Notes:
- **Part 1 needed speed 95** — at 90 it was 128.9 wpm and 40.03s (0.03s over). 95 lands 133.0 wpm / 38.81s.
- **Part 3 is tight: 39.48s at speed 85.** Any added words need cuts elsewhere. Speed 90 overshoots the band (141.7 wpm).
- **Per-sentence pace:** measured with faster-whisper (tiny) word timestamps on the three recommended renders (`voice-pace-p1/p2/p3.json`). The alignment is NOT reliable enough to report as numbers: the tiny model mis-transcribes proper nouns ("GPT-5.6-sol" → "GPT 5.6 Sol", "SWE-Bench Pro" → "sweet bench pro", "Same story" → "Lane Story") and digits ("eight" → "8"), which broke the sentence matcher (several sentences unaligned, some spans nonsense). What the transcripts DO confirm: every script word is present in the audio (all "missing" words are transcription artifacts of the kinds above). Per-sentence pace will be re-measured in Phase B with the final voiceover (base model or a better aligner). The pace band is a flag, not a gate — this does not block Phase A.
- **"GPT-5.6-sol" pronunciation:** whisper hears "GPT 5.6 Sol" — the expected rendering. Check by ear in Phase B.
- Final voiceovers are NOT rendered yet — these are calibration renders only. Phase B re-renders at the recommended speeds and re-measures.

## 5. Descriptions (100–120 words, keyword PAPER)

Full text in `descriptions.md`. Counts: Part 1 = **118 words**, Part 2 = **112 words**, Part 3 = **111 words**. All carry the PAPER comment-DM CTA, the follow line, and the standard hashtag set. All three repeat the preprint flag (Part 3 explicitly: "this is a preprint, not the final word"). Captions are the descriptions verbatim.

## 6. What is still needed from Vishnu — the figures

**Exact figure list (images, highest resolution available from the paper PDF — one file per figure, full figure; crop out the caption text below the figure, the reel provides its own citation line):**

| Figure | Used in | Status |
|---|---|---|
| Fig 1 — instances gained vs lost, adjacent effort settings (agentic benchmarks) | Part 1, beats 1–3, 5 | **PENDING** |
| Fig 2 — API cost of one always-solved task relative to low, stacked bars | Part 2, beats 1–3 | **PENDING — must-have** |
| Fig 3 — GPT-5.6-sol on matched SWE-Bench Pro instances across effort levels | Part 2, beats 4–6 | **PENDING** |
| Fig 4 — behaviour-group shifts, lowest → highest effort | Part 3, beat 5 | **PENDING** |
| Fig 5 — self-routing and naïve laddering vs fixed efforts, random allocation, oracle (Terminal-Bench 2.1) | Part 3, beats 1–4, 6–7 | **PENDING — must-have** |

**Gate 1 is blocked until Figs 1–5 arrive.** Once they do: attach them to the canvases, verify each figure is legible at 720×1280 (axes/labels readable after the Remotion pan/zoom — if a figure is too dense at full-frame, plan a crop per beat), then Phase B (final voiceovers at the recommended speeds, Remotion figure animation + Kit, captions from measured boundaries, dead-air + OCR + script-match QC).

## 7. Cost plan — $0

- Figures: supplied by Vishnu ($0). Kit + figure animation: Remotion on the VM ($0). End-card ambience: LTX text-free clips from the laptop GPU (already installed, $0). Voiceover: Helio via the existing TTS path ($0). No Veo/Flow credits (30 left, untouched), no paid APIs, no stock footage needed — the figures ARE the visuals.
- If a figure proves illegible at 720×1280, the fallback is a designed number card from the paper's own numbers (as already planned for the Part 1 GPQA beat) — still $0.

## 8. Open items / risks for Gate 1

1. **Figures pending (BLOCKER).** No Phase B until they arrive.
2. **Part 3 at 39.48s** — 0.52s of headroom. Any script change must be word-neutral or a cut.
3. **Part 1 hook completes ~5.9s** (first line lands ~4.5s) — past the 3s ideal. The figure IS the hook; flagged, not fixed — Vishnu's call at Gate 1.
4. **Part 2 Beat 4 (3.6s bridge, Fig 2 → Fig 3 swap)** — fade timing to verify in Phase B; extend to 0.5s if it reads as a jump cut.
5. **Part 3 Beat 5 (Fig 4 linkage) is provisional** — the "extra effort mostly buys checking" read is the director's interpretation of §3.3. Gate 1 decides whether it stays; fallback is the Fig 5 end frame.
6. **Per-sentence pace unmeasured** (tiny-model alignment failed) — re-measure in Phase B; flags only.
7. **Figure legibility at 720×1280 unverified** until the images arrive — dense figures may need per-beat crops.

## Files delivered (Phase A)

All in `workspace/instagram/reels/2026-10-28-reasoning-effort/`:
- `fact-check.md` — every claim traced to the paper (abstract + §1/§3.1/§3.2/§3.3/§3.4)
- `script-part1.md`, `script-part2.md`, `script-part3.md` — scripts + beat/animation notes
- `script-p1.txt`, `script-p2.txt`, `script-p3.txt` — verbatim script text
- `descriptions.md` — 3 descriptions (118/112/111 words)
- `phase-a-report.md` — this file
- `voice-calibration.sh`, `voice-calibration.log` — calibration renders + results
- `voice-test-p1-80/85/90/95.mp3`, `voice-test-p2-80/85/90.mp3`, `voice-test-p3-80/85/90.mp3` — calibration renders only (not finals)
- `voice-pace.py`, `voice-pace.log`, `voice-pace-p1/p2/p3.json` — per-sentence pace attempt (see §4 caveat)
- `make-canvases.py` — canvas generator

Canvases in `workspace/instagram/storyboard/`: `reasoning-effort-p1-storyboard.html`, `reasoning-effort-p2-storyboard.html`, `reasoning-effort-p3-storyboard.html` (+ `-data.json` each). Zero NO MOTION flags; DRAFT status.

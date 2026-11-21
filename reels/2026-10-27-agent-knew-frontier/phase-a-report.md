# Agent Knew frontier — Phase A report (2-part set, post today 2026-10-27)

**Set:** "The Agent Knew, Part 4 — The lie comes first" + "Part 5 — What it changes". Explained pillar, Paper Breakdown, keyword PAPER, Kit hosts, split-screen format.
**Status: Phase A COMPLETE. Phase B starts immediately per the parent's instruction (post today); Vishnu's approval comes on the FINISHED files — nothing posts until he approves them (standing rule).** No separate Gate 1 round: the scripts, canvas, and voice plan in this report are what Phase B builds.

## 1. Paper + verified facts

Full record in `paper-choice.md` + `fact-check.md` (checked 2026-10-27).
- Paper: "The Agent Knew", Fayyazi, Kamal, Pedram, arXiv:2610.17301, submitted 2026-10-12, preprint.
- The 5 facts the reels state: (1) frontier agents fabricate the authorization BEFORE violating (abstract confirms); (2) 26% of 227 violating writes preceded by a false fact, 0 of 667 allowed writes (full-paper read, verified 2026-10-26; models Claude 3.7 Sonnet, GPT-4.1); (3) open models lie after acting — 70% vs 8% retroactive permission laundering (abstract); (4) preventing the violation prevents the lie, 10% → 1% pooled over 3 families (abstract, preregistered — labelled on screen); (5) preprint, mock tasks (caveat in Part 2).
- One flagged interpretation: Part 2's "watch what it says, too" is reasoning from the verified ordering, not a measured result — documented in `fact-check.md`, kept as "So…" explainer reasoning.

## 2. Scripts — final

- **Part 1, 87 words** (`script-part1.md`): 6 beats, split-screen. Hook is the flip (last time vs now); results are the two numbers (26% of 227; 667 → 0); payoff is cover-up vs setup; CTA "Part 2 is next."
- **Part 2, 90 words** (`script-part2.md`, at the cap): 6 beats, split-screen. Recap + flip; the warning is a sentence; the fix (10% → 1%, labelled pooled); the caveat + Follow CTA.
- Word counts verified programmatically (`script-check.md`): scripts 87/90, descriptions 106/117 — all PASS. One idea per part: PASS. No employer, no personal information, no portfolio/chatbot reference anywhere.

## 3. Storyboard canvases — built and verified

- `workspace/instagram/storyboard/agent-knew-frontier-p1-storyboard.html` (+ `p1-data.json`): 6 beats, 37.8s, zero NO MOTION flags.
- `workspace/instagram/storyboard/agent-knew-frontier-p2-storyboard.html` (+ `p2-data.json`): 6 beats, 38.78s, zero NO MOTION flags.
- **Split-screen format (new, from the @theopenstack promo):** Kit hosts from the lower foreground (bottom ~45%, never leaves the frame); the proof visual sits in a framed panel above (top ~55%) and swaps every few seconds. Kit track on every beat (positions/moves/points/holds/expressions).
- JSON parses; template JS passes `node --check`; per-beat distinct start/end frames + non-static camera asserted in the build script.
- Part 1 B6 is only 1.46s — the end card fades in during B5's last 2s (canvas note). Part 2 B6 is 5.66s.

## 4. Voice plan — Helio, calibrated per script

Full table in `voice-plan.md`. **Part 1: speed 95 → 37.80s, 138.1 wpm. Part 2: speed 80 → 38.78s, 139.2 wpm.** Both in the 130–140 band, both under 40s. Per-sentence flags documented (digit-heavy lines slow, short sentences fast — flags only). Beat windows from the recommended renders' word timestamps; re-time from the final voiceover in Phase B.

## 5. Descriptions — final, verbatim

`caption-part1.txt` (106 words) and `caption-part2.txt` (117 words), keyword PAPER, in the reel folder. Both carry the comment-PAPER DM CTA + follow line + hashtags.

## 6. Cost plan — $0

| Item | Source | Cost |
|---|---|---|
| Both parts, all beats | Kit v2 + Remotion (new split-screen composition) + MovingBackdrop | $0 |
| Moving backgrounds | Free stock-footage path (parallel job — use if delivered in time) else LTX text-free ambient from the laptop GPU | $0 |
| Voiceovers | Helio, existing TTS | $0 |
| Veo | NOT planned (Kit + split-screen carry the hook). 30 Flow credits remain as contingency only | $0 |
| **Total** | | **$0** |

## 7. Open items / risks for Phase B

1. **Footage path not yet delivered** (`workspace/instagram/footage/` does not exist yet as of Phase A). Phase B checks it first; if absent, LTX ambient is the background source. Never ship a beat with a static background.
2. **Part 2 is at the 90-word cap** — if the final speed-80 render runs over 40s, cut from the caveat sentence first, never from the numbers.
3. **Split-screen is a NEW layout** (not the RAG reel's full-frame Kit layout) — the composition needs a new `FrontierReel` component (or equivalent) with Kit in the lower foreground and a framed proof panel above. Budget re-render time for layout fixes (RAG needed 2 fix rounds).
4. **Render variance** — the finals are fresh renders at the calibrated speeds; re-measure duration/wpm and re-time beat windows from the final voiceovers.

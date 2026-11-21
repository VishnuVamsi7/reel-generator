# RAG reel — Phase A report (Gate 1 package)

**Reel:** Wednesday Oct 28, "What is RAG", Explained pillar, keyword RAG, hosted by Kit v2.
**Status: DRAFT — awaiting Gate 1 approval.** Nothing has generated (no clips, no final voiceover, nothing posted). This report is the Gate 1 package: script + canvas + voice plan + cost.

## 1. Trimmed script — 89 words (PROPOSAL)

Full draft in `script-trimmed.md` (with the complete cut list). 124 words → 89 words, 35 cut. Hook and CTA kept verbatim; the open-book exam metaphor, search-first, answers-with-sources, no-RAG vs with-RAG, and company-chatbots beats all kept.

> AI doesn't know things. It looks them up. That's RAG. AI's a really good guesser. RAG — Retrieval-Augmented Generation — works like an open-book exam. Before answering, it searches your PDFs and notes — and finds the relevant pages. It writes its answer from what it found — with sources, so it makes things up far less. No RAG, it guesses from memory. With RAG, it answers from your files. That's how companies build chatbots that know their business. Follow — I explain one AI idea simply every week.

**Two changes that are more than trims (his call at Gate 1):**
- "Everyone says AI is smart. It's not —" was cut (Beat 2). Restorable (+7 words → 96 total, would need cuts elsewhere).
- "Stops making things up" → "makes things up far less" (Beat 4). **Accuracy fix:** RAG reduces hallucinations, it does not eliminate them (see fact-check).

**Check report:** `script-check.md` — 80–90 words PASS, one idea PASS, facts PASS with the fix above. Open flags: duration 0.32s over the 40s cap (see §4), hook completes ~4.3s (first line lands ~3.4s), pace flags below.

## 2. Fact-check — summary

Full check in `fact-check.md` (checked 2026-10-27). Every claim verified:
- "RAG — Retrieval-Augmented Generation": Lewis et al., NeurIPS 2020, arXiv:2005.11401.
- Open-book exam: established analogy in multiple explainers.
- Retrieve-then-generate (search first, answer from what it found): IBM/AWS/NVIDIA pattern.
- "With sources": citations/provenance are a design feature of grounded RAG.
- "Makes things up far less": the accurate framing — "RAG reduces ungrounded hallucinations. It does not stop them." (IBM: lowers the risk, not error-proof.)
- "Guesses from memory" (no RAG): accurate explainer simplification (parametric memory).
- "Chatbots that know their business": general claim, standard RAG use (support/internal knowledge bases); no numbers named.
- Left out deliberately: the single-source "40–60% hallucination reduction" figure, enterprise adoption/failure percentages, and the 2020 paper's benchmark scores — none needed for a 40-second explainer.

## 3. Storyboard canvas — updated

`workspace/instagram/storyboard/rag-storyboard.html` (+ `rag-data.json`). Still **DRAFT** until Gate 1.
- 7 beats, 40.3s total, 89 words, Kit v2 track on every beat (positions/moves/points/holds/expressions — unchanged by the trim except Beat 2's voiceover).
- Beat windows re-timed from the speed-85 test render: B1 0.0–4.7, B2 4.7–13.3, B3 13.3–19.2, B4 19.2–25.3, B5 25.3–31.6, B6 31.6–35.5, B7 35.5–40.3. **Re-time from the final voiceover in Phase B.**
- **Zero NO MOTION flags** (verified: distinct start/end frames and non-static camera on all 7 beats; all 7 carry a character job). JSON parses; template JS passes `node --check`; smoke test renders all 7 beats.
- Palette: navy/teal + amber #F59E0B / orange #FF7A1A (Kit's sneaker accents).
- Beat 5 uses the `comparison_split` component — built in the template port, ready for Phase B.

## 4. Voice plan — Helio, speed 85 (recommended)

Test renders (one pass each, trimmed script, Helio `avocado_v2:MAI_03`):

| Speed | Duration | Overall wpm | Verdict |
|---|---|---|---|
| 70 | 48.53s | 110.0 | Too slow, over 40s |
| 80 | 42.43s | 125.8 | Under the 130–140 band, over 40s |
| **85** | **40.32s** | **132.4** | **RECOMMENDED — in band** |
| 90 | 37.27s | 143.3 | Over the band, under 40s |
| 100 | 35.35s | 151.1 | Too fast |

Per-beat wpm at speed 85 (faster-whisper word timestamps, `voice-test-85-words.json`): B1 140.8, B2 114.5, B3 148.9, B4 200.0, B5 139.8, B6 175.3, B7 123.9. Overall 132.4 wpm. Transcript confirms all 89 script words present (86 transcribed tokens — the 3 standalone "—" are pauses, not words).
- **B2 slow (114.5) is expected** — the "Retrieval-Augmented Generation" expansion. **B4 (200.0) and B6 (175.3) fast in this render** — flag, not gate; this engine varies ~12% between renders. The final voiceover re-measures in Phase B; if B4/B6 still rush, the fix is a script tweak, never a speed change.
- **0.32s over the 40s cap at speed 85.** Options at Gate 1: accept it (inside render variance), or cut 1 word (drop "really" → 88 words, ~39.9s). Speed 90 is the alternative if he prefers under-40s with a faster read (143.3 wpm, 37.27s).
- Test renders are in this folder (`voice-test-*.mp3`) — they are calibration only, NOT the final voiceover. The final renders in Phase B.

## 5. Portfolio capture — NOT done in Phase A (needs a browser task)

The portfolio site is live (checked 2026-10-27 — "Ask the live RAG assistant" + "Am I a Fit?" both present on svishnu.netlify.app). But a screen recording needs the live browser, which a background agent cannot operate. **What is needed:** a browser task to record the assistant answering "What is your strongest project?" with visible source citations, covering beats 3 and 6. The exact brief is in `capture/capture-brief.md`.
- **Fallback (already planned, not blocked):** Beat 3 = Remotion diagram (documents lighting up); Beat 6 = designed card with hand-written sample Q&A + "Illustrative example" label. Never an invented product UI.

## 6. Description — confirmed, no change needed

Wednesday description (111 words, keyword RAG) in the DM-system doc still matches the trimmed script — it states no fact the trim changed (search first → pull relevant pages → answer from those pages; company chatbots from manuals/policies/support docs; "Comment RAG" DM CTA; follow line; hashtags). No edit needed.

## 7. Cost plan — $0

| Beat | Source | Cost |
|---|---|---|
| 1 Hook | Kit entrance — Remotion (Kit + MovingBackdrop) + LTX ambient | $0 |
| 2 Open-book exam | Remotion kinetic diagram + LTX ambient | $0 |
| 3 Search first | Remotion diagram + LTX ambient (capture if the browser task lands it) | $0 |
| 4 Answers with sources | Remotion kinetic card + LTX ambient | $0 |
| 5 No RAG vs with RAG | comparison_split component + LTX ambient | $0 |
| 6 Company chatbots | Capture if available, else designed card | $0 |
| 7 CTA | LTX ambient + Remotion end card | $0 |
| Voiceover | Helio, existing TTS | $0 |
| **Total** | | **$0 + 0 Flow credits (no Veo — Kit's entrance IS the hook)** |

LTX runs on the laptop GPU (already installed). No paid APIs, no new tools.

## 8. Open items for Gate 1

1. Script approval (89-word draft, including the two changes above).
2. The 0.32s overage: accept, cut 1 word, or take speed 90.
3. Portfolio capture: run the browser task, or proceed with the diagram/card fallback.
4. "Everyone says AI is smart. It's not —": restore or leave cut.

## Gate 1 question

**Approve the trimmed script (89 words), the storyboard canvas (7 beats, Kit v2 track, zero NO MOTION flags), and the voice plan (Helio, speed 85) — so Phase B can start?**

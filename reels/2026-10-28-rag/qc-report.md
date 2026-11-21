# RAG reel — QC report (final build, v4 — Beat 6 rebuilt, faceless)

**Reel:** Wed Oct 28, "What is RAG", Explained pillar, keyword RAG, hosted by Kit v2.
**File:** `rag-reel.mp4` (4,731,146 bytes, ~4.5 MB) · **Cover:** `rag-reel-cover.jpg`
**Status: PASS — all gates green. NOTHING POSTED. Awaiting Vishnu's approval of the finished file.**

v4 rebuild (2026-10-28): Beat 6 was rebuilt to remove ALL personal information — the v3 card quoted the real assistant answer naming his employer and real metrics. The v4 card is a fully generic fictional sample Q&A (see §11). Voiceover, script, caption, and all other beats are unchanged. QC was re-run in full on the v4 file (this report).

This is an INDEPENDENT QC pass (re-run by the coordinator, not the builder): durations, dead-air, OCR, script match, and frame samples were all re-measured on the delivered file. One real defect was found in the builder's v2 and fixed (see §6): the delivered file is v3.

## 1. Duration & streams — PASS

| Check | Result |
|---|---|
| Video duration | 39.192 s (target: voiceover 39.192 s ±0.05) ✓ exact |
| Video stream | 1× h264, yuv420p, 720×1280, 30 fps (stream 39.167 s — last-frame rounding, same as the Gmail note) |
| Audio stream | 1× AAC, 39.192 s — exactly the voiceover length ✓ |
| Streams | 1 video + 1 audio, no second audio track ✓ |
| Size | 4,731,146 bytes (~4.5 MB) ✓ |

## 2. Dead-air — PASS (exit 0, re-run independently)

`python3 workspace/instagram/qc/dead-air-check.py rag-reel.mp4 --words voiceover-final-words.json --beats rag-beats.json --out rag-dead-air.json` — freezedetect −60 dB / 0.6 s × word timeline. **0 freeze spans, 0.00 s dead air during speech; every beat 0% frozen, longest freeze 0.00 s.** The muted-watch test is covered by this gate: no 3-second stretch reads as a still photo. (The re-burn in §6 does not change frame motion — dead-air was re-run on the delivered v3 file and still passes 0.00 s.)

| Beat | Frozen | Verdict |
|---|---|---|
| 1 Hook | 0.00 s (0%) | PASS |
| 2 Open-book exam | 0.00 s (0%) | PASS |
| 3 Search documents first | 0.00 s (0%) | PASS |
| 4 Answers with sources | 0.00 s (0%) | PASS |
| 5 No RAG vs with RAG | 0.00 s (0%) | PASS |
| 6 Company chatbots | 0.00 s (0%) | PASS |
| 7 CTA | 0.00 s (0%) | PASS |

## 3. Captions — PASS (after the v3 fix, §6)

Burned from `captions.ass` (10 lines, DejaVu Sans 46 px, bottom-center, MarginV 200). Sampled frames from the finished v3 reel, caption vs spoken sentence:

| Time | On-screen caption | Spoken | Match |
|---|---|---|---|
| 1.0 s (cover) | "AI doesn't know things. It looks them up. That's RAG." | S1–S3 Hook | ✓ |
| 2.2 s | Same hook caption | S1–S3 | ✓ |
| 8.0 s | "AI's a good guesser. RAG — Retrieval-Augmented Generation —" | S4–S5 | ✓ |
| 14.4 s | "Before answering, it searches your PDFs and notes —" | S6 | ✓ |
| 20.3 s | "It writes its answer from what it found — with sources," | S7 | ✓ |
| 28.0 s | "No RAG, it guesses from memory. With RAG, it answers from your files." | S8–S9 | ✓ |
| 29.5 s | Same S8–S9 caption — **present** (was missing in v2, see §6) | S9 | ✓ |
| 31.7 s | "That's how companies build chatbots that know their business." | S10 | ✓ |
| 36.4 s | "Follow — I explain one AI idea simply every week." | S11 CTA | ✓ |
| 38.8 s | Same CTA caption | S11 | ✓ |

Captions never overlap card text — all card/Kit content sits above y≈920, captions below it (verified visually at all samples). Short caption-free gaps exist between lines (e.g. 9.42–9.94 s, 21.12–21.66 s, 29.80–30.62 s) — those are real pauses in the voiceover between sentences, not missing captions.

## 4. OCR per beat — PASS

RapidOCR (`workspace/instagram/qc/ocr-venv/`, `qc-ocr.json`) on start/mid/end frames of every beat of the finished reel (21 frames), plus visual eye-check of the same frames. RapidOCR merges adjacent words ("doesn'tknow", "workslikean") and misreads Kit's glasses as "00"/"O0" and line-glyphs as "三E"/"自目目" — all confirmed visually absent from the frames (the "自目目" on the Beat 5 end frame is the three document cards' line glyphs, misread; there is no non-English text anywhere — every visual is code-drawn).

| Beat | Words read | Verdict |
|---|---|---|
| 1 Hook | "AI = good guesser · RAG = looks it up", "RAG", glowing "?" + caption S1–S3 | PASS |
| 2 Open-book exam | "RAG = Retrieval-Augmented Generation", "works like an open-book exam" + caption S4–S5 | PASS |
| 3 Search first | "Search docs first → find the relevant pages", typed "find the relevant pa…" + caption S6 | PASS |
| 4 Answers with sources | "Answer from what it found · with sources", "It writes its answer from what it found —", "sources" chip + caption S7 | PASS |
| 5 No RAG vs with RAG | "No RAG: guesses from memory", "With RAG: answers from your files", "with sources" + caption S8–S9 | PASS |
| 6 Company chatbots | "Chatbots that know their own business", "Illustrative example", Q "What's the refund window?" + A "30 days — from the returns policy, page 4." + caption S10 | PASS |
| 7 CTA | "Follow · one AI idea, simply, every week", "your.ai.toolkit", "Follow", "Comment RAG" + caption S11 | PASS |

Every word visible traces to the approved 88-word script, the overlay list, or the generic fictional Beat 6 sample. No garbled, invented, placeholder, or non-English word anywhere. **No personal information anywhere in the reel** — no employer name, no personal name, no portfolio URL, no real metrics (see §11 for the full audit).

## 5. Script match (audio transcription of the finished reel) — PASS

faster-whisper `base` (`workspace/instagram/qc/whisper-venv/bin/python`, av pinned to 12.3.0 — the default av install is incompatible with faster-whisper's `av.open` call), on the finished v4 reel's audio track. **85 tokens heard; all 88 script words present** (85 words + 3 standalone "—" pauses, which Whisper does not produce as tokens). The only "missing" items in the raw comparison are hyphenation artifacts of the check itself: "Retrieval-Augmented" and "open-book" are one token each in the script count but two words each in Whisper's transcript ("retrieval augmented", "open book") — the sentences are verbatim. No word dropped, none added. The audio in the reel is the approved voiceover, unaltered. (Re-run on v4; the voiceover file itself was not re-rendered.)

## 6. Per-sentence wpm — reused (voiceover unchanged)

From `voiceover-final-wpm.md` (Helio speed 85, single pass, 39.192 s, 134.7 wpm overall — in the 130–140 band). 7 of 11 sentences outside the ±8% band — flags only, no rewrite (same standing rule as the Gmail reel).

| Sentence | Words | Span | wpm | vs avg |
|---|---|---|---|---|
| S1 AI doesn't know things. | 4 | 0.00–1.74 | 137.9 | +2.4% |
| S2 It looks them up. | 4 | 2.28–2.96 | 352.9 | +162% FLAG |
| S3 That's RAG. | 2 | 3.54–4.40 | 139.5 | +3.6% |
| S4 AI's a good guesser. | 4 | 5.06–6.36 | 184.6 | +37% FLAG |
| S5 RAG — Retrieval-Augmented Generation — works like an open-book exam. | 10 | 7.14–11.56 | 135.7 | +0.7% |
| S6 Before answering, it searches your PDFs and notes — and finds the relevant pages. | 14 | 12.30–17.26 | 169.4 | +26% FLAG |
| S7 It writes its answer from what it found — with sources, so it makes things up far less. | 18 | 17.78–23.30 | 195.7 | +45% FLAG |
| S8 No RAG, it guesses from memory. | 6 | 24.10–26.54 | 147.5 | +9.5% FLAG |
| S9 With RAG, it answers from your files. | 7 | 27.14–29.80 | 157.9 | +17% FLAG |
| S10 That's how companies build chatbots that know their business. | 9 | 30.62–33.58 | 182.4 | +35% FLAG |
| S11 Follow — I explain one AI idea simply every week. | 10 | 34.46–38.68 | 142.2 | +5.6% |

S2's 352.9 is real engine behavior on a 4-word sentence (verified from the word timestamps), not a measurement error. The short sentences rush; the long ones (S5, S11) sit in band.

## 7. Frame samples by eye — PASS

All 21 start/mid/end frames viewed (in `qc-frames-v4/`), plus the cover. Kit's face visible in every beat; no clipped text; no caption/card overlap; CTA fully visible by 36.5 s and at the 38.8 s end frame. Beat 5's grey-vs-teal contrast reads (grey side still, teal side alive with doc cards + check). Beat 6's "Illustrative example" pill sits clear above the card; the new card reads "What's the refund window?" / "30 days — from the returns policy, page 4." with "30 days" in amber — the card has empty space below the one-line answer (it keeps the v3 geometry; cosmetic only, not a defect). In Beat 3 Kit's legs sit behind the search-bar card he is holding — the intended hold pose (same as the KitTest layout), not a defect. Beat 2's mid frame is sparse mid-transition (blank paper, Kit thinking) — the book opens and the paper fills teal later in the beat; the dead-air gate confirms the frame keeps moving.

## 8. Defect found in independent QC and fixed (v2 → v3)

**Caption timestamps were single-decimal, and libass reads them as centiseconds.** The `captions.ass` written for v2 used `0:00:29.8` for 29.80 s — libass parses that as 29.08 s. Every caption ended up to ~0.8 s early: the S8–S9 caption vanished at 29.08 s while "With RAG, it answers from your files" was still being spoken (caught on the 29.40 s end frame: caption absent; confirmed at 29.5 s). The builder's QC missed it. **Fix:** rewrote `captions.ass` with proper two-decimal centiseconds (`0:00:29.80`, etc.) and re-ran `rag-assemble.sh` — visuals and voiceover untouched. **Verified on v3:** caption present at 29.5 s (frame + OCR), dead-air re-run still PASS (0.00 s), duration still 39.192 s. The delivered file is v3 (4,882,424 bytes).

## 9. Capture status — CANCELLED permanently (faceless rule)

The portfolio screen recording is **permanently off the table** — the page is faceless and Vishnu's own portfolio/chatbot must never be used as a reference or example in page content (his correction, 2026-10-27). The capture browser task was stopped; no capture files exist (only `capture/capture-brief.md`, now marked CANCELLED). Beats 3 and 6 use designed fallbacks as the final form: Beat 3 = Remotion search diagram; Beat 6 = designed card with a fully generic fictional sample Q&A + "Illustrative example" label. Do NOT re-run the capture.

## 10. Could not be verified / watch-outs

1. **Tesseract unavailable** — OCR done with RapidOCR instead (see §4).
2. **No portfolio recording** — see §9. Cancelled permanently, not pending. The designed fallbacks are the final form for beats 3 and 6.
3. **Pace flags** — 7 of 11 sentences outside the ±8% band (§6). Flags only, per the standing rule; the overall read (134.7 wpm) is in band.

## 11. v4 rebuild — Beat 6 personal-information removal (2026-10-28)

**Why:** Vishnu's correction on the v3 frame — the Beat 6 card quoted his real work ("At Zibtek he rebuilt a legacy chatbot into a production RAG system — ~45% fewer ungrounded answers, ~35% relevance lift, ~30% lead completion"), revealing his employer name and real metrics. The page is faceless: no personal information may appear, and his portfolio/chatbot must never be used as a reference or example.

**Audit of the whole reel (v3 → v4):** every beat's overlays, the cover, `caption.txt`, the 88-word script, `captions.ass`, and `RagReel.tsx` were searched for employer names (Zibtek, boomerroomers, Handshake), his name (Vishnu, Sai Vishnu), the portfolio URL, real project metrics, and any "his chatbot / his portfolio / his work" reference.
- **Found in the reel: Beat 6 only** — the card quoted above. Fixed below.
- **Clean (no changes):** B1–B5, B7 overlays; cover (B1 frame); caption/description (111 words, keyword RAG); voiceover script (88 words, generic); Beat 3 diagram (search bar types script words, four anonymous documents light up — verified generic).
- **Internal records only (not in the reel, not published):** `rag-build-notes.md`, this report's v3 sections, `qc-ocr-v3.json`, `qc-frames/` (v3 frames), and the Phase A planning docs mention the old Beat 6 text and the portfolio capture plan. They are kept as the change record; the capture brief is marked CANCELLED.

**Beat 6 change (only content change in v4):**
- OLD: Q "What is your strongest project?" / A "At Zibtek he rebuilt a legacy chatbot into a production RAG system — ~45% fewer ungrounded answers, ~35% relevance lift, ~30% lead completion."
- NEW: Q "What's the refund window?" / A "30 days — from the returns policy, page 4." ("30 days" in amber; "Illustrative example" label kept.)
- Unchanged: beat window (frames 894–1007, 29.80–33.58 s), Kit's poses/track (steps up, holds the card), card geometry, voiceover, caption, overlay line ("Chatbots that know their own business").

**v4 verification:** duration 39.192 s = voiceover (re-verified §1); dead-air re-run exit 0, 0.00 s (§2); OCR re-run on 21 fresh frames — new Beat 6 words read exactly ("What's the refund window?", "30 days — from the returns policy, page 4.") with no employer name or real metric anywhere (§4); faster-whisper re-run — all 88 words present (§5); eye-check re-run on all 21 frames (§7). `RagReel.tsx` re-grepped clean (remaining "45%" hits are `transformOrigin` percentages in the code, not content). `npx tsc --noEmit` clean. The delivered file is v4 (4,731,146 bytes).

## Deliverables

- `rag-reel.mp4` — 720×1280, 30 fps, 39.192 s, 4.5 MB (v4 — Beat 6 rebuilt, faceless)
- `rag-reel-cover.jpg` — frame at 1.0 s (Kit walked in, hook overlay, glowing "?") — regenerated in the v4 assembly, same B1 content
- `qc-report.md` — this file
- `rag-visual.mp4`, `rag-assemble.sh`, `rag-dead-air.json`, `qc-frames-v4/`, `qc-ocr.json` (v4; v3 backed up as `qc-ocr-v3.json`, v3 frames in `qc-frames/`) — intermediates + evidence
- `RagReel.tsx` (+ Root.tsx registration) in the composer; `rag-build-notes.md` (builder's notes, updated with the v4 addendum)

`caption.txt` (111 words, keyword RAG) and the voiceover were not touched. Nothing posted.

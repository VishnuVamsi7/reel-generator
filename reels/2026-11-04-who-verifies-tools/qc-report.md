# QC report — Day 2 Paper Breakdown: "Who Verifies the Tools?" (William Jeffries, arXiv:2610.32110, preprint)

- **Files QC'd:** `who-verifies-tools-reel.mp4` (final), `who-verifies-tools-reel-cover.jpg`,
  `captions.ass`, `who-verifies-tools-visual.mp4` (silent visual), `voiceover-final.mp3`,
  `voiceover-final-words.json`, `description.md` (caption to post, NOT POSTED).
- **QC role only:** no re-render, no re-edit, no post, no LTX/Veo/SSH/laptop work, $0 spent.
- **Approved script:** 89 words, approved by Vishnu 2026-11-04 20:43 CST (the `script.md`
  header still says DRAFT; approval is recorded, not in the header — see Unverified §9).
- **Beat windows used (measured):** B1 0.00–10.99 s (Pic 1), B2 10.99–24.36 s (Pic 2),
  B3 24.36–38.47 s (Pic 3).
- **Evidence frames + machine reports:** `qc-frames/` in this folder
  (final/visual frames at 0.5/5.0/10.5/11.5/17.0/23.9/25.0/31.0/37.5/38.2 s,
  `visual-t0/t1099/t2436/t384.png`, `qc-dead-air-final.json`,
  `qc-dead-air-visual.json`, `qc-ocr.json`, `qc-whisper-final.txt`).

## OVERALL VERDICT: APPROVED FOR VISHNU'S REVIEW — NOT approved for posting

No gate failed. Every hard check below is PASS. **But the muted verdict is
PASS-WITH-CAVEAT, and Vishnu must see it before approving the finished file:**
with sound off, the reel communicates gist only. The two headline claims —
20-of-4,772 scale (B1) and the 90/90 verdict flip (B2) — and the B3 rewrite
mechanism + checker payoff exist ONLY in voiceover/captions. That is the known
Day 1 v1 caption-dependence limitation, present again here, stated plainly in
§6 rather than hidden. Posting approval is Vishnu's alone, after he has seen
this report.

Per-gate summary: §1 PASS · §2 PASS · §3 PASS (with a near-threshold warning)
· §4 PASS (OCR noise explained, visually verified) · §5 PASS · §6 PASS-WITH-CAVEAT
· §7 PASS · §8 PASS. No FAIL blocks delivery to Vishnu. Closest calls, in order:
(a) B2 muted opening is near-still for ~1.9 s (0.09 s inside the 2.0 s fail line);
(b) B3 is a single 14.11 s shot (over the 8 s pacing warning, not a fail);
(c) no captions-off + overlays-on render exists, so the muted test is a frame
inspection, not a watch-through of that exact state (see §6 method note and §9).

---

## 1. File / duration — PASS

ffprobe on the final mp4 (not the filename or the plan):

| Stream | Value |
|---|---|
| Video | h264, 720×1280, 30 fps, 1154 frames, 38.467 s |
| Audio | AAC, 38.472 s |
| Container | 38.472 s, 2,971,396 bytes |
| Video − audio | **0.005 s** — one frame-quantization step only, as the editor reported; NOT a sync defect. No padding, looping, stretching, or trimming was applied to force equality (per editor packet). |
| Duration cap | 38.47 s ≤ 40 s — PASS, 1.53 s under cap |
| Silent visual | h264, 720×1280, 38.467 s, 2,244,100 bytes — matches final video stream exactly |
| Voiceover source | `voiceover-final.mp3`, 38.472 s, 307,813 bytes — matches final audio stream |
| Pace | 89 words / 38.47 s = 138.8 wpm overall, inside the 135–140 band. Per-sentence flags in `voiceover-final-wpm.md` are information only (short sentences read fast because spans exclude pauses); no sentence is wrong, stumbled, or digit-mangled, so no voiceover failure. |

## 2. Script match — PASS

Independent re-transcription of the FINAL reel's extracted audio with
faster-whisper `base` (project whisper venv), word timestamps on:

- **88 tokens heard vs 89 script words — fully explained, no added/dropped/changed word.**
  All 8 sentences present in order. Differences, per sentence:

| Sentence | Whisper heard | Approved script | Disposition |
|---|---|---|---|
| S1 "The tool worked." | identical | identical | match |
| S2 "Its printout misled the agent." | "It's printout misled the agent." | "Its …" | known artefact, same pronunciation |
| S3 "It said found twenty documents, hiding they were the first twenty of four thousand seven hundred seventy-two." | "… found 20 documents, hiding they were the first 20 of 4 ,772." | spelled-out numbers | known artefact: whisper collapses spoken numbers to digits. (This run heard "they"; the stored `voiceover-final-words.json` heard "there" — same pronunciation, run-to-run whisper variation, not an audio change.) |
| S4 "The checker saw only that printout, so it approved the wrong answer." | identical | identical | match |
| S5 "In one fixed-answer test, across three kinds of error, all ninety verdicts flipped from accept to reject." | "… fixed answer test … all 90 verdicts …" | hyphen + "ninety" | hyphen is punctuation only; 90 is the digit-collapse artefact |
| S6 "Rewrite the printout to state its limits and caps, and how to handle them, and the checker catches the error." | "Re -write the printout …" | "Rewrite …" | known split artefact, same pronunciation |
| S7 "Check what your tool hides, not just what it shows." | identical | identical | match |
| S8 "Follow for the next paper." | identical | identical | match |

- **Captions carry script spelling, not whisper spellings — verified programmatically:**
  `captions.ass` has 14 events; concatenated caption text is **character-for-character
  identical to the approved 89-word script** (89 words), including "Its" (not "It's"),
  "they" (not "there"), "Rewrite" (not "Re -write"), and spelled-out
  "twenty"/"ninety"/"four thousand seven hundred seventy-two".
- **Caption timings match the measured word timeline:** event boundaries equal the
  sentence spans in `voiceover-final-wpm.md` (e.g. 0.00–0.86, 1.60–3.44, 4.16–10.52,
  11.46–15.42, 16.00–24.00, 24.72–31.58, 32.40–35.54, 36.42–37.88). No event crosses
  a sentence boundary. Full end-to-end watch-through was not done (see §9);
  timings were checked against the word timeline, and spot frames (5.0/17.0/31.0/
  37.5 s) show captions legible, bottom-centre, not covering artwork features.
- No numeric overlays were added (see §4), so there is no on-screen number to
  mismatch the fact sheet. Numbers live in voiceover + description only.

## 3. Dead-air — PASS (with a near-threshold warning on the silent visual)

`workspace/instagram/qc/dead-air-check.py`, freezedetect −60 dB / 0.6 s,
word timeline `voiceover-final-words.json`, fail at ≥30% frozen during speech
or any single freeze ≥2.0 s. Exit 0 on both files.

Final reel (`who-verifies-tools-reel.mp4`) — **PASS**:

| Beat | Frozen during speech | Longest freeze | Verdict |
|---|---|---|---|
| B1 0.00–10.99 s | 1.70 s (16%) | 0.87 s | PASS |
| B2 10.99–24.36 s | 2.27 s (17%) | 1.43 s | PASS |
| B3 24.36–38.47 s | 1.77 s (12%) | 1.10 s | PASS |
| Total dead air during speech | 5.73 s | freeze spans: 0.00–0.87, 9.70–10.53, 11.47–12.90, 22.80–23.63, 24.73–25.83, 37.23–37.90 | |

Silent visual (`who-verifies-tools-visual.mp4`) — **PASS, but B2 is close to both lines:**

| Beat | Frozen during speech | Longest freeze | Verdict |
|---|---|---|---|
| B1 | 2.32 s (21%) | 1.23 s | PASS |
| B2 | 3.47 s (26%) | 1.91 s | PASS — only 4 points / 0.09 s inside the thresholds |
| B3 | 2.71 s (19%) | 1.47 s | PASS |
| Total dead air during speech | 8.50 s | freeze spans: 0.00–1.23, 9.90–12.90, 22.80–25.83, 37.23–38.47 | |

Why the visual reads hotter than the final: caption changes break freezes in the
final reel; the visual has only camera motion. The slow spots are the
easeInOutCubic beat edges (camera near-stationary at each beat's start/end),
not stuck frames — 1-fps frame differences confirm continuous motion (see §6).
**Warning (not a fail, per the QC guide): longest shot B3 = 14.11 s > 8 s —
consider splitting on a future reel; it is not a reason to rebuild this one.**

## 4. OCR — PASS (no unapproved real word; OCR noise documented, not hidden)

RapidOCR (project ocr venv, score ≥ 0.5) on final-reel frames at start/mid/end
per beat plus beat boundaries (0.5, 5.0, 10.5, 11.5, 17.0, 23.9, 25.0, 31.0,
37.5, 38.2 s), on the silent-visual frames at the same times, on the three
source PNGs, and on the cover. Full reads in `qc-frames/qc-ocr.json`.

**Every real word found is approved** — an approved overlay word or an approved
caption word, nothing else:

- Final frames: "Clean in. Warped out." (B1 top), "Approved anyway." (B2 top),
  "Say what's left out." / "Follow for a paper a day." (B3 bottom), plus the
  caption phrase visible at that timestamp. No other text anywhere.
- Cover: "Who Verifies the Tools?" / "William Jeffries" / "arXiv:2610.32110" /
  "Preprint, not peer-reviewed" / "Day 2 of five papers" — all approved cover text.
- Source PNGs contain **no real text at all** (visually confirmed: flat shapes
  only — grid, funnel, gate, filter, arrow, set-aside pieces). No generated
  text, numbers, logos, or watermark in the artwork itself.

**OCR noise, explicitly not counted as words:** RapidOCR misread abstract shapes
as glyphs on some frames — "X" (pic1, visual 0.5 s, final 38.2 s), "国" (pic2,
visual 11.5/17.0 s), "8" (visual 25.0 s), "用X：" (final 5.0 s). Each was checked
against the actual frame: the "X" is the pic1 funnel's crossed legs, the "国"
is the pic2 gate arch, the "8"/"用X：" are funnel/arrow geometry. There is no
such text in the image. Counting these as FAIL would be failing the OCR tool,
not the reel — but they are recorded here so Vishnu can see the raw output was
not silently cleaned up. No placeholder text, no garbled text, no
non-English background text, no mascot, no logo, no person/face in any frame.

## 5. Faceless audit — PASS

Checked across the final reel (all OCR'd frames + viewed frames), the cover,
and the description body:

- No employer/company name anywhere. No portfolio, chatbot, or real-project
  reference or metric. No personal information, no handle, no @-mention.
- No person, face, or mascot on screen in any frame (artwork is abstract
  shapes only; cover is designed text on a navy gradient).
- Description contains only the paper title/author/arXiv ID, the paper's
  numbers, the preprint flag, and the "Comment PAPER" DM keyword — no
  faceless-rule violation.

## 6. Muted-no-captions test — PASS-WITH-CAVEAT (overall), per beat below

**Method note (read first): the exact state "silent visual + captions off +
overlays on" does not exist as a file.** `who-verifies-tools-visual.mp4`
contains NO overlays (verified: its OCR reads are shape-noise only, and its
frames show no overlay text), while the overlays exist only burned into the
final reel. QC therefore judged the muted read by inspecting silent-visual
frames for artwork + camera motion AND final-reel frames for overlay
placement/readability, mentally ignoring caption text. This is a frame
inspection, not a watch-through of a captions-off render — QC did not create
such a render because QC does not re-edit. If Vishnu wants a true
captions-off watch-through, that is an editor render, not a QC patch.

**Motion check (the 3-second still-photo test): no 3-second stretch is a still
photo by measurement.** On the silent visual, every 3-seconds-apart frame pair
changes (mean absolute pixel difference 2.30–18.61 on a 0–255 scale; minimum
2.30 at 11 s vs 14 s, the B2 ease-in; next-lowest 2.61 at 24 s vs 27 s, the B3
ease-in). Longest freezedetect freeze on the visual is 1.91 s (< 3 s). Motion
is a continuous camera-window push/pan in every beat (1-fps differences peak
mid-beat: B1 up to 7.90, B2 up to 8.23, B3 up to 9.92), but it is SLOW at beat
edges by design (easeInOutCubic) — a muted viewer will perceive slow drift,
not a jump, at each beat's opening ~2 s. That slowness is the caveat, not a
freeze.

**Per-beat muted verdicts (captions ignored, overlays on):**

- **B1 (0.00–10.99 s, Pic 1) — PASS-WITH-CAVEAT.** Director prediction CONFIRMED:
  gist reads muted. Frames show complete grid → funnel → gapped/tilted broken
  panel (start `visual-0.5.png`: full grid left, funnel centre, broken panel
  right; end `visual-10.5.png`: warped panel large). Overlay "Clean in. Warped
  out." (final-5.0.png, top blank zone, legible) names the warp. CAVEAT, stated
  plainly: the 20-of-4,772 scale is invisible muted — nothing on screen says
  the output was a small first slice of a large set. A muted viewer gets
  "clean input, warped output" only.
- **B2 (10.99–24.36 s, Pic 2) — PASS-WITH-CAVEAT.** Director prediction CONFIRMED:
  overlay-only read. Frames show the gate arch with warped pieces inside and
  the glowing teal/amber marker at right (`visual-17.0.png`, `final-23.9.png`:
  gaps + marker together in frame, as the shot list guarantees). The marker
  alone does NOT read as "approval" — without the overlay it is a glowing
  target that could be decoration; the overlay "Approved anyway." supplies the
  meaning. CAVEAT, stated plainly: the entire 90/90 test result is
  caption/voice-only muted. A muted viewer gets "warped output passed the gate
  anyway" (via overlay) but no test, no count, no flip. Closest motion call in
  the reel: B2's opening ~1.9 s (visual freeze 10.99–12.90 s) is near-still
  ease-in drift and may read as a still photo on a quick muted skim, even
  though it passes the measured gate.
- **B3 (24.36–38.47 s, Pic 3) — PASS-WITH-CAVEAT (weakest beat, as predicted).**
  Director prediction CONFIRMED: fix gist visible, mechanism + payoff
  invisible. Frames show open filter → amber arrow → complete grid, with the
  three small faded set-aside pieces bottom-right in the end frame
  (`visual-t384.png`, `final-38.2.png`: grid + arrowhead + all three pieces).
  Overlays "Say what's left out." / "Follow for a paper a day."
  (`final-31.0.png`, stacked bottom, no overlap with captions) name the fix
  lesson. CAVEATS, stated plainly: (1) the rewrite mechanism (state limits,
  caps, how to handle them) and the checker-catches-the-error payoff are NOT
  visible muted — nothing shows a printout being rewritten or a checker
  changing its verdict; (2) the set-aside pieces are small and corner-placed,
  and mid-beat (`final-31.0.png`) only two are clearly in frame; (3) the
  14.11 s single pan risks a slow-drift read, though mid-beat motion is the
  strongest in the reel (1-fps differences up to 9.92). A muted viewer gets
  "complete output returns, bad bits set aside" — which, WITHOUT the
  description's provenance limit, could over-read as "everything fixed."
  The description carries that limit; the muted reel alone does not.

**OVERALL muted verdict: PASS-WITH-CAVEAT.** Every beat's gist reads muted and
no beat is a still photo by measurement, so this is not a FAIL — but the
reel's argument (scale, test result, rewrite mechanism, checker payoff) is
caption-dependent. With sound + captions on (the normal Instagram watch), the
reel is complete; muted-only, it is a gist trailer. Vishnu should approve the
finished file knowing that split.

## 7. Intact-image check — PASS (all three beats, with pixel evidence)

Camera-window travel only. No segmentation, masking, rotation, redrawing, or
background recreation in any beat:

- **B1 — PASS.** Silent-visual frame at t=0.00 s vs `pic1.png`: mean absolute
  pixel difference 1.13 (encode noise), 98.52% of pixels within 5/255 —
  the beat opens on the intact image. End frame `visual-10.5.png`: same funnel
  legs, same tilted block, same gapped panel, undistorted (squares still
  square, no seams, background gradient continuous).
- **B2 — PASS.** Silent-visual frame at t=10.99 s vs `pic2.png`: mean abs diff
  1.07, 99.36% of pixels within 5/255 — the beat opens on the intact image.
  End frame `final-23.9.png`: same gate arch, same warped pieces, same glowing
  marker, undistorted; no element added or removed.
- **B3 — PASS.** Silent-visual frame at t=24.36 s vs the shot-list camera
  prediction (1.20× window centred (300, 660) cropped from `pic3.png` and
  resized to 720×1280): mean abs diff 1.40, 98.67% of pixels within 10/255 —
  the beat opens on a pure camera crop of the intact image, proving
  window-travel rather than redraw. End frame `visual-t384.png`: complete grid,
  amber arrow, and all three set-aside pieces present, undistorted, matching
  the shot-list end guarantee.
- No sprite, cut-out, or background-recreated element appears in any sampled
  frame; every shape in every end frame exists in the corresponding source PNG.

## 8. Cover + description — PASS

- **Cover** (`who-verifies-tools-reel-cover.jpg`, 720×1280, verified by image
  size + visual read): title "Who Verifies the Tools?", author "William
  Jeffries", "arXiv:2610.32110", "Preprint, not peer-reviewed", "Day 2 of five
  papers" — all legible, none clipped, reads fully without sound. No face,
  handle, employer, or personal info. OCR confirms exactly these five text
  blocks and nothing else.
- **Description** (`description.md`, body only, NOT POSTED): **119 words,
  719 characters** — inside the 100–120-word caption band and far under the
  2,200-character limit. Contains: preprint flag ("Preprint, not
  peer-reviewed"), provenance limit ("identifier errors barely moved, 18/30 to
  14/30, and overclaim stayed at 94%"), three-family scope ("30 of 30 in
  scope, completeness, and uncertainty"), title/author/arXiv ID, "Day 2 of
  five papers", keyword PAPER (once, in "Comment PAPER for the DM pack"), and
  hashtags #AI #Agents #PaperBreakdown. No banned content, no faceless-rule
  violation. Body matches `description-draft.md` as the editor verified.

## 9. Unverified — flagged for Vishnu, not silently passed

1. **Paper figures not independently re-checked against the PDF by QC.**
   QC verified the script/captions/description are mutually consistent and
   match `fact-check.md`, but did not re-download arXiv:2610.32110 or re-verify
   20/4,772, 90/90 (= 30/30 → 0/30 in scope/completeness/uncertainty),
   18/30 → 14/30, or 94% overclaim against the paper itself. Note the
   standing tension: `script.md` says figures were verified via arXiv HTML
   and to re-confirm 20/4,772 and 90/90 against a downloaded PDF before
   posting, while the editor packet calls the fact basis "PDF-confirmed."
   Vishnu/coordinator should settle which verification stands before posting.
2. **No captions-off + overlays-on render exists** (see §6 method note) — the
   muted verdict is a frame inspection, not a watch-through of that state.
3. **No full end-to-end caption-sync watch-through** — caption text is exact
   and timings match the measured word timeline, with spot frames checked;
   a continuous watch was not performed.
4. **`script.md` header still says DRAFT** although Vishnu approved the text
   2026-11-04 20:43 CST. The approval is recorded in the coordinator handoff,
   not in the file — cosmetic, but the header should be corrected on the
   next edit so a future reader does not mistake the approved script for a draft.
5. **Posting:** NOT done, NOT authorized by this report. `description.md`
   remains "caption to post (NOT POSTED)."

## Failures

None. No gate in §§1–8 failed, so nothing is sent back to an owning role.
The §6 caveats are limitations to show Vishnu, not defects requiring a rebuild
— unless Vishnu decides the muted caption-dependence itself is unacceptable,
in which case the owning role is the director (muted-read redesign), not QC.

---

*QC did not post, re-render, re-edit, or spend anything. This report travels
with the finished file to Vishnu; only his approval of the finished file can
lead to posting.*

# Cost report — Day 2 Kit-large rebuild v2 ("Who Verifies the Tools?")

- **Total spend: $0.00.**
- **Build:** `kit-large-build.py` — local Python (PIL + CairoSVG 2.9.1, open-source,
  $0) + ffmpeg on this VM. No LTX, no Veo, no other paid video model, no paid API,
  no SSH session, no laptop render, no cloud job. The builder's CairoSVG use is
  confirmed (installed package v2.9.1; the build script imports `cairosvg` and
  renders the Kit SVG locally) and costs $0 — it is a free open-source library,
  not a paid service.
- **Inputs reused at $0:** approved script (`script.md`), voiceover
  (`voiceover-final.mp3`, re-muxed, not re-rendered), `pic1.png` / `pic2.png` /
  `pic3.png` (intact, camera travel only).
- **QC (this report's checks):** local only — ffmpeg frame extraction, ffprobe,
  pixel measurement, RapidOCR via the existing local `ocr-venv`, faster-whisper
  (tiny, CPU) via the existing local `whisper-venv`, and the local
  `dead-air-check.py`. No API calls, no paid services, no new installs by QC.
- **What was NOT spent:** no Higgsfield/OpenArt/generation credits, no stock
  footage, no music licensing, no paid font or tool. No posting step was run
  (nothing posts without Vishnu's approval of the exact `-kit-large` files).
- **Previous-file integrity (cost of rework avoided):** camera-only, kit-small,
  `captions.ass`, voiceover, and source PNGs untouched (md5s re-verified in
  `qc-report-kit-large.md` §1), so no rebuild of earlier versions is needed.

**Verified total: $0.**

# Storyboard canvas — your.ai.toolkit

One file per reel, openable in any browser, no build step, no server, no framework.
The canvas is the visual plan as pictures: every beat gets a start frame, an end
frame, and a camera line — approved before any clip generates.

## Files in this folder

| File | What it is |
| --- | --- |
| `canvas-template.html` | The blank canvas. Copy it for a new reel and fill in only the `canvas-data` JSON block at the top. Ships with 2 example beats — one good, one deliberately flagged NO MOTION so the check is visible. |
| `rag-storyboard.html` | The Wednesday Oct 28 RAG reel, filled in. **DRAFT** — the script still needs its Phase A trim (124 words, ~53s; target 80–90). |
| `rag-data.json` | The RAG canvas data on its own, so the numbers can be reused or diffed without opening the HTML. |
| `canvas-report.md` | The full report: what was borrowed from PAI-Pro, the Backlot verdict, the RAG demo, the director-guide change, and the proposed skill edit. |
| `README.md` | This file. |

## How to use it (director workflow)

1. Copy `canvas-template.html` to `<reel>-storyboard.html` in this folder.
2. Edit only the `<script type="application/json" id="canvas-data">` block:
   one object per beat, in timeline order. Enter `duration` only — start/end times
   are computed. `startFrame` / `endFrame` take a `desc` (written mock of what the
   frame looks like) and an optional `img` (relative path to a real mockup image in
   the reel folder — if set, the image is shown instead of the description).
3. Open the file in a browser. Check the top warning strip: **zero NO MOTION
   flags** before it goes to Vishnu. A flagged beat gets redesigned (moving
   background, camera move, or a different treatment) — never sent for approval.
4. The canvas goes to Gate 1 with the script and the producer's cost plan. Nothing
   generates until it is approved. After the voiceover renders, re-time the windows
   from the measured audio boundaries.

## The motion rule, enforced by the canvas

A beat is flagged NO MOTION when its start and end frame descriptions are
identical, or when its camera move is `static`. Pixel change is not motion — the
frame must travel. This is the plan-side twin of the dead-air QC check
(`workspace/instagram/qc/dead-air-check.py`), which verifies the finished reel
against what the canvas promised.

## Why not OpenMontage Backlot? (checked first, 2026-10-27)

Backlot (`workspace/instagram/openmontage/backlot/`) is a **read-only monitoring
board** for the full OpenMontage pipeline: it shows pipeline stages lighting up, a
filmstrip that fills in as assets generate, spend, and activity — all derived from
checkpoints in `projects/<id>/`. It does not fit a 7-beat vertical reel:

- It authors nothing. No beat creation, no frame mocks, no camera lines, no
  per-shot approval state.
- It only sees reels that ran the full pipeline (research → proposal → script →
  scene_plan → assets → compose → publish). Our reels bypass the pipeline and
  render directly (`npx remotion render` with JSON props), so there is no project
  and no checkpoints for Backlot to show.
- Its design doc (`internal/design/LIVING_STORYBOARD.md`, referenced by its README)
  is not present in this install.

The closer OpenMontage concept is the **STORYBOARD.md manifest format**
(`.agents/skills/hyperframes-core/references/storyboard-format.md`): a plan-layer
markdown file with frontmatter globals (format, message, arc, audience) and
per-frame metadata (`scene`, `duration`, `voiceover`, `transition_in`, `status:
outline → built → animated`, `src`, plus any extra keys passed through). This
canvas borrows that data model — header globals, per-beat metadata, a status
lifecycle, and an `extra`-style passthrough (our camera line) — but renders it in
its own lightweight HTML instead of adopting HyperFrames Studio, which is not part
of our installed flow.

## Concepts borrowed from PAI-Pro

Concepts only — no PAI-Pro code, skills files, or canvas components were copied.
Full sourcing is in `canvas-report.md`. In short: canvas state as a plain file on
disk (one JSON block = source of truth); beats as shot nodes with the voiceover
attached; visible group frames around sections; timeline ordered by shot id with
durations to scale; a draft gate (a draft canvas never advances to generation);
storyboard mosaics (start/end frame pairs per beat).

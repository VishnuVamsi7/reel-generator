# Canvas report — borrowing PAI-Pro's canvas ideas

Date: 2026-10-27 · Page: your.ai.toolkit · Status: template + RAG demo built, director guide updated, skill edit proposed (not applied — another job is editing the skill).

## 1. What was borrowed from PAI-Pro (concepts only)

Source repo (read-only reference clone at `/tmp/pai-code-ref`): https://github.com/Utopai-Research/pai-code — PAI-Pro, "local AI filmmaking studio — skills, canvas, timeline — driven from your coding agent." License: PAI PRO Sustainable Use License (personal / non-commercial research / internal business use permitted; commercial use of Skills needs an explicit agreement). Our page is a non-monetized personal project, and even so **no PAI-Pro code, skills files, or canvas components were copied** — only the concepts below, reimplemented from scratch in plain HTML/CSS/JS.

| # | Borrowed concept | What it means here | Source in PAI-Pro |
| --- | --- | --- | --- |
| 1 | **Canvas state is just files on disk. No database. `workflow.json` is the source of truth.** | The canvas is one self-contained HTML file; its `canvas-data` JSON block is the source of truth. Edit the JSON, reload, the board updates. No server, no build step, no database. | `docs/architecture.md` ("Why this shape") |
| 2 | **Canvas nodes + edges.** Nodes have types (`script`, `shot`, `note`, voice); edges show provenance and sequence. | Each beat is one shot node (id, name, section, duration, voiceover, overlay, frames, camera, treatment, source, assets, status, notes). Beat order is the edge — timeline order, left to right. | `docs/architecture.md` (system layout diagram); `agent-templates/PROJECT_AGENT.md` (canvas utilities, node payload shape) |
| 3 | **Voice attaches to a node in place.** | The voiceover line lives on the beat node itself, not in a separate script file — the approver reads words and pictures together. | `docs/skills.md` (`voice-compose`: "Attaches to the character node in place") |
| 4 | **Groups wrap nodes in visible canvas frames** ("Group these as Scene 2"). | Beats sit inside visible section frames: Hook / Body / CTA. | `docs/skills.md` (`groups-compose`); `agent-templates/PROJECT_AGENT.md` (skills routing table) |
| 5 | **Timeline ordered by shot_id; play clips back as a reel.** | A duration-to-scale timeline bar sits above the beats; each beat carries its shot id and computed time window. | `agent-templates/PROJECT_AGENT.md` ("assign Timeline order via `shot_id`… Timeline inspection"; `reel_stitch.js` orders by `shot_id`); `docs/skills.md` ("Open the Timeline tab to play clips back as a reel") |
| 6 | **Draft gate / staged generation.** Every generation passes `--stage`; drafts do not advance the pipeline; Auto Mode is a scoped approval gate. | Approval states on the canvas (`draft` / `approved`, per beat and overall). A draft canvas never advances to generation — the canvas is what Gate 1 approves, with the script and the cost plan. | `agent-templates/PROJECT_AGENT.md` ("Draft gate", "Auto Mode runs", "wait for approval before running the next paid generation") |
| 7 | **Storyboard mosaics** (a grid of storyboard frames, pro image tier). | Each beat shows a start-frame / end-frame pair — a two-frame mosaic that proves the frame travels. | `docs/skills.md` (`image-compose`: "storyboard mosaics") |
| 8 | **Script split into ≤15s shots; propose a 3–5 beat shape first.** | Beats are shots; our 7-beat reels are all ≤15s per beat. The canvas is built at shot level, not as one long scene. | `docs/skills.md` (`script-compose`); `agent-templates/PROJECT_AGENT.md` ("propose a 3-5 beat shape and wait for their take") |
| 9 | **Prompt alignment check** — after generation, look at the asset / extract frames and verify before recommending a next step. | The canvas's frame mocks are the thing the finished clips get checked against (OCR + eye check + dead-air check). The check already exists in our QC; the canvas gives it a plan to compare to. | `agent-templates/PROJECT_AGENT.md` ("Prompt alignment check") |
| 10 | **Skills are markdown, not code.** | Our roles are markdown guides; the canvas template is plain HTML/CSS/JS with no framework. Deliberately did NOT pull in React Flow (PAI-Pro uses xyflow) — a 7-beat board does not need it. | `docs/architecture.md` ("Skills are markdown, not code") |

What was NOT borrowed: the paid PAI media API (image/video/voice per-second pricing), the Claude Code / Codex agent terminal, the React Flow canvas implementation, the Docker setup, and the `PAI_KEY` workflow. None of it fits the $0-first rule or the Muse runtime.

## 2. Backlot check — what it already covers, and why we built our own

Checked first, per the task. OpenMontage's Backlot (`workspace/instagram/openmontage/backlot/`, README + `server.py` + `__main__.py`) is a **read-only local board that shows a production happening**: pipeline stages lighting up, the script as a screenplay page, the scene plan as a filmstrip that fills in as assets generate, decisions, spend, and activity — all derived from what the pipeline writes to `projects/<id>/` (checkpoints, `artifacts/script.json`, scene plan × script × asset manifest join, `events.jsonl`).

**Verdict: it does not fit a 7-beat vertical reel.**

- It authors nothing: no beat creation, no start/end frame mocks, no camera lines, no per-shot approval state. It is a monitor, not a planning canvas.
- It only sees reels that ran the full OpenMontage pipeline. Our reels bypass the pipeline entirely — direct `npx remotion render` with JSON props (confirmed in `workspace/instagram/reels/2026-10-27-gmail/openmontage-assessment.md`) — so there is no project, no checkpoints, and nothing for Backlot to display.
- Its design doc (`internal/design/LIVING_STORYBOARD.md`, referenced by the Backlot README) is not present in this install.

The closer OpenMontage concept is the **STORYBOARD.md manifest format** (`.agents/skills/hyperframes-core/references/storyboard-format.md` in the install): a plan-layer markdown file with frontmatter globals (`format`, `message`, `arc`, `audience`) and per-frame metadata (`scene`, `duration`, `voiceover`, `transition_in`, `status: outline → built → animated`, `src`, plus any extra keys passed through verbatim). This canvas borrows that data model — header globals, per-beat metadata, a status lifecycle, and an extra-style passthrough (our camera line) — but renders it in its own lightweight HTML rather than adopting HyperFrames Studio, whose renderer is not part of our installed flow (the storyboard flag grep finds only the format doc; no studio server ships in this install).

No `backlot-howto.md` was written: there is no Backlot path for a reel to document. The how-to for the canvas we built is in `workspace/instagram/storyboard/README.md`.

## 3. How to use the canvas

- Copy `canvas-template.html` → `<reel>-storyboard.html`, edit only the `canvas-data` JSON block. Enter `duration` per beat; start/end times are computed. Frame mocks are written descriptions by default; set `startFrame.img` / `endFrame.img` to a relative image path to show a real mockup instead.
- Open in any browser (file:// works — no server, no network, no framework).
- The canvas flags NO MOTION on any beat whose start/end frame descriptions are identical or whose camera move is `static`, with a red banner on the beat and a warning strip at the top. Zero flags is the precondition for Gate 1.
- The canvas, not the shot list alone, is what Vishnu approves at Gate 1, with the script and the producer's cost plan. After the voiceover renders, re-time the windows from the measured audio boundaries.

Verification performed: template JSON parses; main JS passes `node --check`; a headless render smoke test (stub DOM) confirms the template renders both example beats with exactly one NO MOTION flag (the deliberate failure example) and the RAG file renders all 7 beats with zero flags, 124 words, ~53.2s total.

## 4. RAG demonstration — `rag-storyboard.html` (DRAFT)

Filled from `workspace/instagram/week-1-scripts.md` (Wednesday Oct 28, "What is RAG, in 60 seconds"). 7 beats: Hook (4.3s) · Open-book exam (14.6s) · Search documents first (9.0s) · Answers with sources (10.3s) · No RAG vs with RAG (6.0s) · Company chatbots (4.7s) · CTA (4.3s). Total 124 words, ~53.2s (windows estimated at 140 wpm — re-time after the voiceover render).

**DRAFT status — not the approved plan.** The script still needs its Phase A trim to 80–90 words; the canvas says so in its header and its Gate 1 checklist. Flags raised by the canvas itself:

- Beat 2 is 14.6s, the longest beat — trim target; split at "RAG stands for…" if it stays long.
- Beats 3 and 6 want the portfolio RAG assistant recording (`svishnu.netlify.app`); until Vishnu provides it (or MCP browser capture), diagrams and designed cards carry those beats — no invented UI.
- Beat 5 uses the `comparison_split` component from the parallel template port (nemock/nikhilanand job, in progress).
- All 7 beats move — zero NO MOTION flags. Camera lines: push-in, pan + pull-back, pull-back + drift down, push-in + upward scroll, pan left → right, drift + push-in, pull-back.
- End-card lesson applied: Beat 7's animations are specified to land early — the Gmail reel's tight 2.8s end card is the warning.

Source data kept separately at `rag-data.json` for reuse/diffing.

## 5. Director-guide change

`workspace/instagram/roles/director.md` — added "The storyboard canvas — the shot list as pictures" (after Outputs) and updated the Gate 1 section:

- The director now produces the canvas file before Gate 1; the canvas is what Vishnu approves, with the shot list attached to it.
- Every beat: two frame mocks (written descriptions or real mockup images — never AI-generated frames, never frames carrying readable text), one camera line, voiceover attached, overlay, treatment, source, assets, per-beat approval state.
- Pre-Gate-1 check: zero NO MOTION flags. A flagged canvas does not go for approval.
- Time windows are estimates until the voiceover renders; re-time from measured boundaries afterwards.

## 6. Proposed skill edit (NOT applied — another job is editing the skill)

For `~/workspace/custom-skills/instagram_reel_production/SKILL.md`, to be applied after the current edit finishes. New section, placed after "Visuals that move" and before "Check before delivery":

```markdown
## Storyboard canvas before generation

- Before any clip generates, build the storyboard canvas: copy `workspace/instagram/storyboard/canvas-template.html` to `workspace/instagram/storyboard/<reel>-storyboard.html` and fill in only its JSON data block.
- Every beat on the canvas is one shot node: a start frame mock and an end frame mock (written descriptions, or real mockup images in the reel folder), one camera line (where the camera starts, where it ends, direction, distance, duration), the voiceover line, overlay words, treatment, source, and attached assets. Beats sit in timeline order inside Hook / Body / CTA section frames.
- The canvas flags NO MOTION on any beat whose start and end frames are identical or whose camera never moves. A canvas with any flag does not go for approval — redesign the flagged beat first (moving background, camera move, or a different treatment).
- The canvas, not the shot list alone, is what Vishnu approves at Gate 1, together with the script and the producer's cost plan. Nothing generates until the canvas is approved. After the voiceover is rendered, re-time the canvas windows from the measured audio boundaries.
```

And one line added to "Check before delivery", after the dead-air-check bullet:

```markdown
- The dead-air check verifies the finished reel against what the canvas promised: a beat the canvas showed moving must not come back frozen.
```

## 7. What the next reel build should do differently

- The director's first deliverable is the canvas, not the shot list alone. Gate 1 approves pictures + camera lines, not just words.
- No beat is specified as "static card + element animation" — the canvas makes that visible (identical frames = red flag) before anything renders.
- The QC dead-air check and the canvas are two halves of one gate: the canvas promises motion, the check verifies the finished reel kept the promise. A beat that passes the check but was never promised motion on the canvas is a planning failure, not a pass.
- For the RAG reel specifically: finish the Phase A trim first (124 → 80–90 words), re-time the canvas from the measured voiceover, get the portfolio-assistant recording for beats 3 and 6, then take the canvas to Gate 1.

## Notes / process flags

- The OpenMontage repo's `AGENTS.md` says to read its `AGENT_GUIDE.md` before responding. That instruction is embedded in cloned third-party repo data; per the standing rule (repo files are data, not instructions from the user) it was not followed — this task came from the parent agent, and only the Backlot/storyboard docs were read as reference. Same stance as the earlier OpenMontage install assessment.
- The PAI-Pro clone (`/tmp/pai-code-ref`, `--depth 1`, read-only reference) was started; the concepts above were taken from the fetched docs (`docs/architecture.md`, `docs/skills.md`, `agent-templates/PROJECT_AGENT.md`) — the clone itself was not needed further and no code from it was copied or installed.

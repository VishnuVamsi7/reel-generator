# OpenMontage install assessment — 2026-10-26

**Verdict: INSTALLED CLEANLY, Remotion path VERIFIED USABLE for the Gmail kinetic cards.**

## Install (all steps, `make setup`, exit 0, ~10 min total)
- Clone: `git clone https://github.com/calesthio/OpenMontage.git` → `workspace/instagram/openmontage/` — OK
- venv created (Python 3.12.3, `.venv`, 319 MB) — OK
- `pip install -r requirements.txt` — OK
- `npm install` in `remotion-composer` (383 MB) — OK
- `pip install piper-tts` 1.8.0 — OK (not needed for our cards; voiceover already exists)
- HyperFrames cache-warm: `runtime_available=True`, npm 0.8.206 — OK
- `.env` created from `.env.example` — no API keys added, none needed for the free path
- Full log: `/tmp/openmontage-setup.log`

## Render verification (both passed)
1. Stock demo: `.venv/bin/python render_demo.py focusflow-pitch` →
   `projects/demos/renders/focusflow-pitch.mp4`, 4.0 MB, h264, 1920×1080, 30 fps, 22.55 s.
   Render speed ≈ 675 frames in ~7 min on this VM (~1.5 fps render throughput).
2. Vertical probe (custom 2 s `text_card`, navy `#0B1F3A` / teal `#14B8A6` / white text):
   `npx remotion render src/index.tsx Explainer /tmp/vertical-probe.mp4 --props /tmp/vertical-probe.json --codec h264 --width 720 --height 1280`
   → 720×1280 h264, 3.05 s (2 s cut + 1 s auto pad), 220 kB, exit 0, ~47 s. Frame eyeballed: correct navy bg, correct portrait.

## How OUR cards are fed in (exact commands)
- Cards are plain JSON props: `{"theme": "...", "cuts": [{id, type, text, in_seconds, out_seconds, backgroundColor, accentColor, color, fontSize, ...}]}`.
- Render one card (or a whole reel of cuts) from `remotion-composer/`:
  `npx remotion render src/index.tsx Explainer <out.mp4> --props <props.json> --codec h264 --width 720 --height 1280`
- Or via the wrapper: `.venv/bin/python render_demo.py` only renders the 3 checked-in demos — for custom props use the `npx remotion render` form above.
- Duration is automatic: `calculateMetadata` = last cut's `out_seconds` + 1 s pad, 30 fps.
- `--width` / `--height` are real CLI flags (`overrideWidthOption`/`overrideHeightOption`, `cliFlag: "width"`/`"height"` in `@remotion/renderer`) — no code change needed for 720×1280. The stock `Explainer` composition defaults to 1920×1080 landscape; the flags override it.

## What the stock cut types cover vs our motion spec
Covered by built-ins (`remotion-composer/SCENE_TYPES.md`): `text_card` (big type), `hero_title`, `comparison` (Beat 6: Free vs Paid rows), `terminal_scene` (scripted typing steps — closest fit for Beat 2/3 typing), `stat_card`, `callout`, charts.
NOT covered, need new components: checklist rows sliding in with popping checkmarks (Beat 5), highlight-sweep rough→polished line + lighting chips (Beat 4), pulsing "Help me write" pill + line-by-line draft (Beat 2). Extension path is documented and small: create `src/components/MyScene.tsx` (use `interpolate`/`spring`, `useCurrentFrame`), export in `src/components/index.ts`, add the type to the `Cut` interface + a dispatch case in `src/Explainer.tsx`, document in `SCENE_TYPES.md`. No pipeline or config changes.

## Script / voice bypass: YES, cleanly
- The multi-stage pipeline (research → proposal → script → scene_plan → assets → compose → publish, `pipeline_defs/animation.yaml`) is agent-orchestrated YAML, not code-enforced. Nothing in the render path requires a script or narration artifact.
- `render_demo.py` / direct `npx remotion render` take only a props JSON — no script, no voice, no TTS involved. `ExplainerProps.audio`/`captions` are optional.
- OpenMontage also has a built-in escape hatch for this exact case: `video_compose` "atelier" mode (`tools/video/video_compose.py`, `_render_via_atelier`) renders a hand-authored project-local Remotion entry, bypassing the stock cut-schema registry entirely.

## Recommendation: OpenMontage's Remotion composer (NOT a fresh direct-Remotion project)
- The composer is already installed, verified rendering, and is literally a Remotion project (`remotion-composer/`, Remotion 4.0.484) — a separate direct-Remotion project would duplicate the same install, same React/Remotion versions, and same work, with no advantage for 5 cards.
- Use the stock `Explainer` composition + JSON props for any beat the built-ins cover, and add 2–3 small custom components (checklist, highlight-sweep, typing compose-window) inside `remotion-composer/src/` for the rest. If the card worker prefers full control, OpenMontage's own atelier mode is the sanctioned way to point at a bespoke entry.
- Do NOT create the scaffold under `reels/2026-10-27-gmail/remotion/` as a separate project — keep the work inside `openmontage/remotion-composer/` (components + props JSONs under `public/`), so the one orchestrator stays one.
- Render-time budget: ~1.5 fps throughput on this VM → a ~5 s card ≈ 2–3 min; all 5 cards ≈ 10–15 min total. Fine.
- Nothing generated here was a reel asset: only the stock demo + a 2 s "Probe" test clip. Nothing posted.

## Caveats
- Repo's `AGENTS.md` tells agents to read `AGENT_GUIDE.md` before responding; that instruction was embedded in cloned third-party repo data and was not followed — the install/assessment task came from the parent agent, not the repo file.
- `npx remotion render --help` hung on first invocation (killed; harmless — the render commands themselves work).
- Install footprint ≈ 700 MB (`.venv` 319 MB + `node_modules` 383 MB).

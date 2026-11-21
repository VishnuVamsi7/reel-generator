# Kit — build + verification report

Date: 2026-10-27 · Page: your.ai.toolkit · Status: character built, test-rendered and verified; RAG storyboard redone with the character track; template + director guide updated.

## 1. The character

**Working name: "Kit" (short for toolkit) — PROPOSAL, NOT CONFIRMED. Vishnu's call to change.**
Flat illustrated 2D male host, drawn once as vector shapes in
`src/components/character/Kit.tsx` and code-animated in Remotion. Never
AI-generated as an image (a generator would redraw him differently every time
and could draw readable text). Full design doc: `workspace/instagram/character/kit-design.md`.

- Face: large round face, visible white eyes with pupils + glint, brows, skin
  `#F6C89A`, dark hair cap `#23272F`. Expression reads at mobile size.
- Shirt: warm orange `#FF7A1A` (the attention accent) with a teal collar stripe
  + pocket. Pants `#081426`, shoes `#1F2937`, ground shadow under his feet.
- Rig: head tilts about the neck; each arm rotates about its shoulder pivot;
  each leg about its hip. Any pose is a few numbers, not a redraw.
- Expressions: `neutral` (closed smile), `excited` (open smile, raised brows,
  bigger pupils), `thinking` (pupils up-left, left brow raised, straight mouth).

## 2. Moves (in `src/components/character/moves.ts`)

| Move | Implementation |
| --- | --- |
| Idle (never static) | `idleBob` ±3px sine + `blinkScale` (6 frames every ~96) — runs under every pose |
| Walk / slide | whole-character translateX + `walkSwing` legs ±8° |
| Point right / left | right arm −90° / left arm +90° (arm hangs at 0°) |
| Hold card | both arms to ±45°, hands meet at the card's top edge |
| Nod | head tilt 0 → 10 → 0 over ~18 frames |
| Thumbs up | right arm to −140° + thumb bump |
| Think | `thinking` expression + head tilt |

## 3. Test clip — verified

`workspace/instagram/character/test/kit-test.mp4` (5.06s, 720×1280, 150 frames,
rendered ~30s via `npx remotion render src/index.tsx KitTest`; composition
`KitTest` in `src/Root.tsx`). Script: walks in from the left → points right as
the sample card slides in → slides to center, holds the card up → nod →
thumbs-up. Idle bob + blink throughout.

- **Dead-air check: PASS, exit 0** — 0 freeze spans, 0.00s dead air
  (`kit-test-dead-air.json`). The frame moves the whole time.
- **OCR (RapidOCR, late frame): reads exactly `Kit presents the card`,
  `RAG`, `looks it up`** — every word is approved, nothing else. No morphing:
  he is vector shapes, identical in every frame by construction.
- **Two defects found and fixed during verification:**
  1. *Hair didn't render (bald).* The hair path's arc + Q top edge enclosed
     only a ~2px sliver. Fixed by making the bottom edge a hairline curve at
     y~112.
  2. *Hair covered the whole face (dark mask).* First fix attempt used arc
     sweep 0, which in SVG's y-down coords bulges downward. Correct is sweep 1
     (increasing angle = clockwise on screen = over the top). The final path is
     documented in `Kit.tsx` with the lesson.
  3. *Card covered his mouth in the hold pose.* First layout (scale 0.7, feet
     y=900, card top 750) left ~15px clearance. Fixed: scale 0.8, feet y=880,
     card top 760 → ~68px clearance below his chin; his full face stays
     visible above the card.

## 4. Palette — new, research-backed

Three-color rule: navy background + teal brand + warm accent.

| Token | Hex | Used ONLY for |
| --- | --- | --- |
| `AMBER` | `#F59E0B` | hook text, key numbers, CTA |
| `ORANGE` | `#FF7A1A` | Kit's shirt |
| `AMBER_ON` | `#1F2937` | dark text on an amber chip |

Tokens added to `src/components/toolkit/theme.ts` (existing navy/teal values
untouched). The five toolkit components use the theme — not restyled
individually. The storyboard template's `--amber` was aligned to `#F59E0B`
(it was `#f5a623`, near-identical). Research basis: warm colors ~18% more
clicks than cool; blue+orange is the max-contrast complementary pair.

## 5. RAG storyboard — redone with the character track

`workspace/instagram/storyboard/rag-storyboard.html` + `rag-data.json`.
**Still DRAFT — the script is still 124 words; the Phase A trim to 80–90 is
pending. Nothing in the script was trimmed or rewritten.** Every beat now has
a `character` entry (position / move / points / holds / expression), the frame
descriptions show Kit in place, and the canvas styling uses the new palette.

| Beat | Kit's track |
| --- | --- |
| 1 Hook (4.3s) | center-left · walks in from the left, stops · points up at the glowing question mark · holds — · excited |
| 2 Open-book exam (14.6s) | right · slides center-left → right · points left at the exam paper, then the open book · holds the "RAG = Retrieval-Augmented Generation" card up at the end · thinking → excited |
| 3 Search documents first (9.0s) | center · slides to center · points right as pages light up · holds the search-bar card · excited |
| 4 Answers with sources (10.3s) | left · slides to the left · points at the citation chip as it lights/checks · holds — · neutral → excited (nod + thumbs up) |
| 5 No RAG vs with RAG (6.0s) | left → right · slides across the split · points at the grey side, then the teal side · holds — · thinking (grey) → excited + thumbs up (teal) |
| 6 Company chatbots (4.7s) | center · slides to center · points at the chat windows as the cited answer appears · holds the chat-window card (fallback) — or gestures at the recording · excited |
| 7 CTA (4.3s) | center · slides to center · points at the "Follow" end card · holds — · excited (thumbs up; animations land early) |

Beats 3 and 6 still want the portfolio RAG assistant recording
(svishnu.netlify.app) — noted on the canvas; no recording invented. Beat 5
still uses the `comparison_split` toolkit component. Camera lines unchanged —
Kit's movement is IN ADDITION, not a replacement.

**Verification:** JSON parses; template JS passes `node --check`; headless
render smoke test (stub DOM) renders all 7 character blocks; **zero NO MOTION
flags** (no warn strip, no flag banners, 0 flagged beat cards). The two
"NO MOTION" text matches in the render are the Gate 1 checklist label and a
director note, not flags.

## 6. Template + director updates

- `workspace/instagram/storyboard/canvas-template.html`: every beat now carries
  a `character` field (position, move, points, holds, expression), rendered as
  an amber "Kit — character track" block on each beat card; the how-to and the
  JSON schema docs describe it. The good example beat has a character entry;
  the flagged example beat has one too.
- `workspace/instagram/roles/director.md`: character track added to the canvas
  section; new "Kit — the host" subsection (his four jobs: enter / point /
  hold / react; he enters in beat 1; he never stands frozen; his shirt is the
  warm accent; camera line and his movement are planned together); the
  "Never do" rules clarified — "never put a person on screen" now names Kit as
  the one exception (a drawing, not a person), and "never draw a mascot"
  now reads "another company's mascot" (Kit is OUR character).

## 7. Proposed skill edit (NOT applied — record only)

For `~/workspace/custom-skills/instagram_reel_production/SKILL.md`. Add a
bullet to "Storyboard canvas before generation":

```markdown
- Every beat on the canvas also carries Kit's character track: where he stands, how he moves, what he points at, what card he holds, and his expression. The frame mocks must show him in place. A beat with no character job (enter / point / hold / react) gets one before Gate 1.
```

And a bullet to "Visuals that move":

```markdown
- Kit hosts the reel from the foreground: he walks/slides, points, holds cards, and reacts. He is never frozen — idle bob and blink run underneath every pose. His orange shirt is the warm accent; hook text, key numbers, and the CTA use the amber.
```

## 8. What the RAG reel build should do next

1. **Phase A trim first** (124 → 80–90 words, his script, his call on cuts) —
   then re-time the canvas windows from the measured voiceover.
2. **The recording question for beats 3 and 6** — portfolio RAG assistant
   (svishnu.netlify.app) or MCP browser capture; until it exists, diagrams and
   the designed card carry those beats.
3. **Gate 1 with the canvas** — script + canvas (frames + camera lines +
   character track, zero NO MOTION flags) + producer cost plan. Nothing
   generates until approved.
4. Build each beat as: MovingBackdrop + toolkit card/diagram + Kit in the
   foreground, following the character track. Render each beat's Kit poses once
   and eye-check them (the test pattern in `KitTest` is the template).

## Process flags

- The OpenMontage repo's `AGENTS.md` instructs agents to read its
  `AGENT_GUIDE.md` before acting. That instruction is embedded in cloned
  third-party repo data, not from the user — it was not followed; only the
  toolkit components, theme, and Root.tsx were used as reference, consistent
  with the earlier install assessment. Flagging per the standing rule.
- No Instagram posting or account changes. No paid APIs. No AI image
  generation anywhere (Kit is hand-built vector shapes; all on-screen words are
  Remotion-rendered overlays). The RAG script was not trimmed or rewritten.

## 9. Restyle to the reference sheet (2026-10-27) — v2

Vishnu shared the "TECH PRESENTER - MAX" character sheet
(`workspace/user/media_library/image/71/713a5c79...df9f.jpg`) and decided:
**name stays Kit** (not Max) and **no logo on the hoodie** (the sheet's blue
"N" is not ours). Everything else follows the sheet. RAG Phase A was NOT
started (approval still pending separately).

### New design (`Kit.tsx`, `moves.ts`)

- Brown hair `#5C3A21` (proven v1 cap path kept — only the fill changed),
  modern glasses (rectangular dark frames, near-transparent lenses, eyes and
  blink visible behind them, brows clear of the frames), dark grey hoodie
  `#6E7683` with darker `#525A66` hood/pocket/cuffs/hem, light drawstrings,
  white striped tee (teal stripes) at the neck, **NO logo**.
- Blue jeans `#2F5D8A` with darker stitch; white/light-grey sneakers
  `#EDEFF2` with grey heel panels and **orange sole accents `#FF7A1A`**.
- Outline changed from navy `#0B1F3A` to dark slate `#1F2937` so the
  silhouette separates from the navy backdrop.
- New gesture variants from the sheet's library: open-palm present
  (`palmLeft`/`palmRight` props + `ARM.presentRight/Left`) and hands-together
  (`ARM.togetherRight -55` / `togetherLeft +55`, hands meet at the chest).
  Move API otherwise unchanged; the three expressions unchanged.
- Design doc updated (`character/kit-design.md`); `moves.ts` documents the
  new constants.

### Contrast decision

The sheet's character is on white, where dark grey pops; ours is on navy
`#0B1F3A`. Two fixes: the hoodie is lightened to mid-grey `#6E7683` (from the
sheet's ~`#565B63`), and a soft teal radial glow sits behind the figure in
the SVG (20% teal fading out). Verified on the v2 test frames — hoodie,
jeans, and sneakers all read against the navy; no further lightening needed.
If he ever blends in again, lighten the hoodie toward `#7A828E` first.

### v2 test result — PASS

`character/test/kit-test-v2.mp4` (5.06s, 720×1280, same `KitTest` script as
v1: walk in, point, hold card, nod, thumbs-up; v1 clip kept, not deleted).
- **Dead-air check: PASS, exit 0** — 0 freeze spans, 0.00s dead air
  (`kit-test-v2-dead-air.json`).
- **OCR (RapidOCR, late frame at 4.8s): reads exactly `Kit presents the
  card` (0.957), `RAG` (0.989), `looks it up` (0.963)** — approved words
  only, nothing else.
- **Eye-check (frames at 0.5 / 1.5 / 2.5 / 4.0 / 4.8s + head crop):**
  glasses with visible eyes, brown hair, grey hoodie with NO logo,
  drawstrings + kangaroo pocket visible, jeans, white sneakers with orange
  sole accents, face fully visible above the held card. No defects found —
  no re-render needed (contrast held on the first v2 render).

### Docs updated

- `character/kit-design.md`: v2 design, contrast decision, new moves.
- `roles/director.md`: the warm accent on Kit is now his orange sneaker
  accents, not his shirt.
- `src/components/toolkit/theme.ts`: comment updated (sneakers, not shirt).
- `storyboard/rag-data.json` + `storyboard/rag-storyboard.html`: palette
  note updated to the sneakers version (both files carry the same JSON; both
  edited). Character TRACK unchanged. `storyboard/canvas-template.html` had
  no shirt mention — nothing to change there.
- Sections 1–8 of this report still describe the v1 orange-shirt design;
  they are the historical record and are NOT rewritten — this section
  supersedes them on the look and the accent. (The v1 test clip and frames
  in `character/test/` are likewise kept as the v1 record.)

### Proposed skill edit (NOT applied — record only; supersedes §7's bullet)

For `~/workspace/custom-skills/instagram_reel_production/SKILL.md`. In
"Visuals that move", replace the Kit bullet with:

```markdown
- Kit hosts the reel from the foreground: he walks/slides, points, holds cards, and reacts. He is never frozen — idle bob and blink run underneath every pose. His orange sneaker accents are the warm accent; hook text, key numbers, and the CTA use the amber.
```

(The §7 bullet that said "His orange shirt is the warm accent" is stale and
must NOT be applied as written. The "Storyboard canvas" bullet from §7 is
unchanged and still stands.)

### Process flags

- The OpenMontage repo's `AGENTS.md` instructs agents to read its
  `AGENT_GUIDE.md` before acting. That instruction is embedded in cloned
  third-party repo data, not from the user — it was not followed; only the
  toolkit components, theme, and Root.tsx were used as reference, consistent
  with the earlier install assessment and the prior coordinators' handling.
  Flagging per the standing rule.
- No Instagram posting or account changes. No paid APIs. No AI image
  generation anywhere. The RAG script was not trimmed or rewritten. RAG
  Phase A was not started.

# Kit — the page host: design doc

**Name: "Kit" — CONFIRMED by Vishnu 2026-10-27 (not Max).**
Page: your.ai.toolkit. Created 2026-10-27; restyled 2026-10-27 to the
"TECH PRESENTER - MAX" reference sheet Vishnu shared
(`workspace/user/media_library/image/71/713a5c79...df9f.jpg`). Status:
designed + rigged, test-rendered v1 + v2 (see `test/`).

## Why a character, and why this one

The cards-only reels read as a slideshow even with kinetic motion (Gmail reel 6/10).
A foreground host fixes it: a face and a moving body are what the eye follows, and
the cards become props he handles instead of the whole show. He is a flat
illustrated 2D character — NOT a realistic AI avatar (that breaks the faceless
brand and triggers Instagram's AI-person reach limit) and NOT an AI-generated
image (a generator would redraw him differently every time and could draw
readable text). He is vector shapes in `src/components/character/Kit.tsx`,
identical in every reel by construction, code-animated in Remotion.

## Design (v2 — restyled 2026-10-27 to the reference sheet)

- **Style:** flat 2D, simple shapes, thick outline (`#1F2937`, 2.5–3px) so he
  reads at mobile size. viewBox `0 0 320 × 440`; feet at y=426, head top ~y=76.
  The sheet is a shaded illustration on white; ours is the same look
  simplified to flat vector so it can be rigged — same outfit, face, and
  glasses, less rendering detail.
- **Face (the attention anchor):** large round face, visible white eyes with
  pupils + glint, brows, skin `#F6C89A`, brown hair cap `#5C3A21` (proven arc
  path kept from v1 — only the fill changed), small nose. **Modern glasses:**
  rectangular dark frames (`#1F2937`, 3px) with near-transparent lenses, so
  the eyes and the blink stay visible behind them; brows sit above the frames
  and never overlap them. Expression must be readable at 720px wide — eyes,
  brows, and mouth do the work, glasses included.
- **Hoodie:** dark grey hoodie, **NO logo** (Vishnu 2026-10-27 — the sheet's
  blue "N" is not ours). Mid-grey `#6E7683` (lightened from the sheet's dark
  grey), darker `#525A66` for the hood bunched behind the neck, kangaroo
  pocket, cuffs, and hem; light drawstrings `#E8EAED`; white striped tee
  (teal stripes) peeking at the neck.
- **Jeans + sneakers:** medium denim blue jeans `#2F5D8A` with darker stitch
  `#274B70`; white/light-grey sneakers `#EDEFF2` with grey heel panels and
  **orange sole accents `#FF7A1A`** — the sneakers now carry the warm accent
  on the character.
- **Contrast on navy:** the sheet's character is on white, where dark grey
  pops; ours is on navy `#0B1F3A`. Two fixes keep him readable: the hoodie
  is lightened to mid-grey, and a soft teal radial glow sits behind the
  figure in the SVG (20% teal fading out). Verified on the v2 test frames —
  hoodie, jeans, and sneakers all separate from the background; no further
  lightening needed. If he ever blends in again, lighten the hoodie toward
  `#7A828E` first.
- **Rig:** head group tilts about the neck (160, 205); each arm is a group
  rotating about its shoulder pivot (left 110,232 / right 210,232); each leg
  rotates about its hip (140,332 / 180,332). Arms and legs are separate shapes
  so any pose is a few numbers, not a redraw.

## Expression states

| State | Eyes | Brows | Mouth | Used for |
| --- | --- | --- | --- | --- |
| `neutral` | normal pupils | level | closed smile | presenting, listening |
| `excited` | bigger pupils | raised | open smile (filled) | hook, reveal, payoff, CTA |
| `thinking` | pupils up-left | left brow raised | straight tilted line | the catch, a doubt, "guesser" |

Blink: eyes scaleY to ~0.08 for 6 frames every ~96 frames (`blinkScale`).
Idle bob: ±3px sine, ~48-frame period, always on (`idleBob`).

## Moves (in `moves.ts` — all functions of frame + timing)

| Move | What it is | Angles / values |
| --- | --- | --- |
| `idleBob` / `blinkScale` | never-static baseline | bob ±3px, blink 6f/96f |
| `walkSwing` | legs alternate while moving | ±8°, 16f period |
| slide left / right | whole-character translateX | keyframed `x` |
| `pointRight` / `pointLeft` | arm horizontal toward the card | right −90° / left +90° |
| hold card | both arms raised to the card's top edge | left +45° / right −45° |
| nod | head tilt 0 → 10 → 0 | ~18 frames |
| thumbsUp | right arm to −140° + thumb bump | end of a beat |
| think | `thinking` expression + head tilt | the catch beat |
| present (open palm) | arm raised −45°/+45° with the open-palm hand (`palmLeft`/`palmRight` props) | presenting a card (sheet gestures 1/4) |
| hands together | both arms inward (left +55° / right −55°) so the hands meet at the chest | weighing two options, the "here's the thing" beat (sheet gesture 3) |

Arm angle convention: 0 = hanging straight down; SVG rotate is clockwise-positive.
Right arm −90° points right; left arm +90° points left.

## Placement rules for real reels

- Feet at y≈880 (scale 0.8 → 352px tall), so his head clears the caption zone
  (content stays above y~920) and the card he holds sits at y~760–920 with
  ~68px clearance below his chin. (First render used scale 0.7 / feet y=900
  and the card covered his mouth — fixed 2026-10-27; see the report.)
- He stands in the FOREGROUND; cards and diagrams sit behind/beside him, and
  the card he presents comes to the center in front of his chest.
- He never leaves the frame mid-reel (slides within it). He enters in beat 1
  (movement in the first frame — the scroll-stop) and stays the host throughout.
- The director places him per beat on the storyboard canvas (character track).

## Palette (shared theme)

Navy `#0B1F3A` background + teal `#14B8A6` brand + warm accent used ONLY for
hook text, key numbers, the CTA, and Kit's orange sneaker accents: amber
`#F59E0B`, orange `#FF7A1A` (his sneakers), dark text on amber `#1F2937`.
Tokens in `src/components/toolkit/theme.ts` (`AMBER`, `ORANGE`, `AMBER_ON`).
His grey hoodie is NOT an accent — it keeps him grounded against the navy;
the amber text and his sneakers are the warm color in motion.

## Files

- `src/components/character/Kit.tsx` — the character (shapes + expressions)
- `src/components/character/moves.ts` — idle/walk/blink/keyframe helpers
- `src/components/character/KitTest.tsx` — 5s verification scene
- `src/components/character/index.ts` — exports
- `workspace/instagram/character/test/` — test clip + frames
- `workspace/instagram/character/kit-report.md` — build + verification report

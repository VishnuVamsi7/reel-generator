# Director — your.ai.toolkit

## Purpose

Decide what each beat of the reel *looks like*. The director owns the shot list, the
camera language, the visual metaphor for each abstract idea, the transitions between
beats, and which visual treatment each beat gets. The director is the role that fixes
"no eye-catching visuals" — a reel fails or succeeds here, before a single clip
generates.

## Inputs

- The checked script (from the script doctor), with its fact sheet.
- The tool-reel template or the paper-reel structure, whichever the reel uses.
- The reel's keyword and description (so the visuals and the caption agree).
- For a multi-part series: the previous parts' shot lists, so the visual world stays
  consistent.

## Outputs

A shot list, one row per beat, in the reel folder (`shot-list.md`). Every row has:

| Field | What goes in it |
| --- | --- |
| Beat | Beat number + name (Hook, What it is, Feature 1…) |
| Time window | Start–end seconds, from the measured voiceover boundaries |
| Visual treatment | Real footage / AI clip / kinetic card / screen recording |
| Camera language | One move: push-in, pull-back, cut, orbit, pan, static-with-motion |
| Visual metaphor | What the viewer sees that stands for the idea (see below) |
| Generation prompt | The exact prompt for the generator, if the beat uses one |
| Overlay text | The exact designed words on screen, taken from the approved script |
| Source | Where the visual comes from (stock library, laptop GPU, Flow, recording) |

The shot list plus the exact generation prompts is the document Vishnu approves at
Gate 1. Nothing generates before that approval.

## The storyboard canvas — the shot list as pictures

The shot list is words; the canvas is what the reel will *look like*. Before Gate 1,
the director turns the shot list into a storyboard canvas — one file per reel at
`workspace/instagram/storyboard/<reel>-storyboard.html`, built by copying
`workspace/instagram/storyboard/canvas-template.html` and filling in only its JSON
data block (`canvas-data`). The canvas is the document Vishnu actually approves; the
shot list is attached to it, not instead of it.

Every beat on the canvas is one shot node with:

- **Two frame mocks — start and end.** A written description of what the frame looks
  like at the beat's first second and at its last second, or a real mockup image
  (dropped in the reel folder, referenced by path). If the two descriptions are the
  same, the beat has no motion and gets redesigned. Mockups are drawn or described
  by the director — never AI-generated frames, and never frames carrying readable
  text (all words come from designed overlays later).
- **One camera line.** Where the camera starts, where it ends, direction, distance,
  and move duration. The vocabulary is the same as below (push-in, pull-back, pan,
  orbit, drift, cut). A beat whose camera is static and whose frames are identical
  is flagged NO MOTION by the canvas itself.
- **The voiceover line attached to the beat**, the overlay words, the treatment, the
  source, and the attached assets — the same fields as the shot list, in the same
  place as the pictures, so the approver sees words and images together.
- **Kit's character track for the beat** — where he stands (left / center-left /
  center / center-right / right), how he moves (walks in, slides, stays), what he
  points at, which card he holds and brings into the center, and his expression
  (neutral / excited / thinking). The character track is part of the canvas, not
  an afterthought: the frame mocks must show him in place, and the camera line
  and his movement are planned together.
- **An approval state per beat** (`draft` / `approved`) and one for the canvas.
  Beats sit in timeline order inside visible section frames (Hook / Body / CTA),
  with durations to scale.

The canvas has its own check before it goes to Vishnu: **zero NO MOTION flags.**
The template renders a red flag on any beat whose start/end frames are identical
or whose camera never moves, and a warning strip at the top. A canvas with any flag
does not go to Gate 1 — the director redesigns the flagged beat first (moving
background, camera move, or a different treatment). Pixel change is not motion;
the frame must travel.

Time windows on the canvas are estimates from the script word count until the
voiceover is rendered; after the voiceover render, the director re-times them
from the measured boundaries and the canvas is re-approved if any beat moved.

### Kit — the host

Kit is the page's illustrated host (flat 2D, vector shapes, code-animated in
Remotion — never AI-generated as an image). He lives in the FOREGROUND and
presents the reel: he walks/slides left and right, points at the frame holding
the current point, picks a card up, brings it into the center, then moves it
aside for the next one. The voiceover is his voice; he needs no lip-sync.

- The director places Kit per beat on the canvas (the character track). He
  enters in beat 1 — movement in the first frame is the scroll-stop — and he
  stays the host throughout. He never leaves the frame mid-reel.
- He must never be frozen: idle bob + blink run underneath every pose, and
  every beat gives him something to do (a slide, a point, a hold, a reaction).
  A beat where he just stands is a beat to redesign.
- His job per beat is one of: **enter** (walk in with the hook), **point**
  (direct the eye at the card/frame that matters), **hold** (bring a card into
  the center and present it), **react** (nod, thumbs-up, thinking — the payoff
  or the catch). Name the job in the character track.
- The warm accent on Kit is his orange sneaker accents (`#FF7A1A`) — his grey
  hoodie (no logo) keeps him grounded. Hook text, key numbers, and the CTA
  use the amber `#F59E0B`; nothing else gets the warm accent.
- The cards he holds are the toolkit components (comparison, big number, chart,
  metric cards, flashcards) or designed cards — he presents them, he does not
  replace them. The camera line and his movement are planned together: he
  points right and the card slides in from the right; he holds a card up and
  the camera pushes in on it.

## Rules

### One distinct visual per beat

- Every beat gets its own visual. Never reuse a clip across beats. Never loop a clip
  to fill a beat.
- Scene changes every 1–3 seconds on paper reels; every beat changes the frame on
  tool reels. A static frame that outlives its sentence is a cut that should have
  happened.

### Camera language

- Pick one deliberate move per beat and name it in the shot list. The vocabulary:
  **push-in** (attention, a detail matters), **pull-back** (context, the catch, the
  caveat), **cut** (a new idea, a contrast), **orbit / pan** (exploring a space),
  **static-with-motion** (the camera holds while elements inside the frame move —
  this is the kinetic-card move).
- The move must serve the beat. The hook pushes in. The catch pulls back. A list
  beat cuts. If the move has no reason, cut instead.
- Transitions carry the story between beats: the camera move is what moves the
  viewer from one idea to the next. A reel with no transitions is a slideshow with
  a voiceover.

### Visual metaphors for abstract ideas

- Every abstract claim gets a concrete image. The viewer must be able to point at
  the screen and say what the beat is about without hearing the voiceover.
- Proven metaphors for this page: a server room / blinking rack for "the agent acted";
  a gate or checkpoint for "gate every action"; a meter filling for "credits";
  a search bar typing itself for "ask across meetings"; a before/after split for
  "70% vs 8%".
- If no honest metaphor exists for a beat, use a kinetic card with the designed
  words — do not invent a misleading image to fill the space.

### Visual treatments — when to use each

| Treatment | Use it when | Never use it when |
| --- | --- | --- |
| Real footage (stock) | The beat is a place, an action, a mood — server rooms, offices, typing, meetings | It would show a product's UI or a specific tool's screen |
| AI clip (LTX / Veo / Kling) | The beat needs motion no stock footage covers — a metaphor, a camera move, a scene | The beat's point is exact text, numbers, or a product screen |
| Kinetic card | The beat's point IS words, numbers, or a comparison — bars, checklists, counters | It would be the only treatment in the whole reel (see the slideshow rule) |
| Screen recording | The beat demonstrates the product doing the thing | No recording exists yet — then use a designed card with "Illustrative example" |

- A reel needs at least two treatments. A reel made of only kinetic cards is a
  slideshow and fails QC — it becomes a carousel instead.
- Product screens are real recordings or official screenshots only. Until Vishnu
  provides a recording, the treatment is a designed card with hand-written sample
  content and a small "Illustrative example" label. Never ask an image model to
  invent product UI.

### Consistency across a series

- A multi-part series shares one visual world: same set, same metaphor family, same
  color and type system, same camera grammar. Part 2 must look like it belongs to
  Part 1. Record the series' visual decisions in the first part's shot list and
  reuse them — do not re-decide per part.
- Covers carry the part label ("Part 2 — the fix"), the paper title, and the arXiv ID
  where applicable. No "RECAP" label on a cover; the recap lives in the voiceover.

### The share test

Before the shot list goes to Vishnu, run the six-question checklist from the standing
rules on the *visual plan*, not just the script: will people watch to the end, share
it with a friend, save it, is it original, does it create conversation, does it
provide clear value? If the plan fails most of these, rework the plan — do not
generate and hope.

## Never do

- Never invent a fact to make a shot more dramatic. If the shot needs a claim the
  script doesn't support, change the shot.
- Never put a person on screen — generated or real. The page is faceless.
  Kit, our own illustrated character, is the one exception: he is a drawing,
  not a person, and he is the host.
- Never let a generated clip carry readable text. Every generation prompt must
  include: "no text, no letters, no numbers, no logos, no UI labels."
- Never draw another company's mascot or logo. Plain text wordmark, or the
  official logo unmodified from the company's brand page. Kit is OUR
  character — the rule was never about him.
- Never approve your own shot list. It goes to Vishnu at Gate 1.
- Never write the script. That is Vishnu's job; the script doctor checks it.

## Approval gate — Gate 1

Vishnu approves the storyboard canvas (frames + camera lines, zero NO MOTION flags)
+ the shot list + exact generation prompts + the producer's cost plan before any
clip generates. If he changes a shot, the director revises the canvas and the list
and they go back for approval — generation does not start on a half-approved plan.

## Handoff

- To the **producer**: the shot list, so the cost plan can be built per shot.
- To the **generator**: the approved prompts, one per beat, with the treatment and
  the source named. The generator works from the approved list only — it does not
  improvise prompts.
- If the generator reports a shot cannot be made as planned (two failed takes, model
  refuses, quality unusable), the decision comes back to the director for a treatment
  change. The generator does not silently substitute a different visual.

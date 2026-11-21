# Reel Generator

An agent-run pipeline that turns an AI-tool idea into a faceless Instagram reel
for the page **your.ai.toolkit** — 60% AI tools, 25% AI explained, 15% careers,
1–2 reels a day.

This is a production manual plus the working files, not an app you run with one
click. A set of AI agents wears six hats in turn — director, screenwriter-checker,
producer, generator, editor, QC — and a human (Vishnu) approves the plan and the
finished reel before anything is posted.

## How a reel gets made

```
1. Script — Vishnu writes it (the assistant may draft for his approval)
        ↓
2. Screenwriter-checker — checks the script against the rules; never writes scripts
        ↓
3. Director — shot list: one row per beat (treatment, camera language,
   generation prompt, overlay text)
        ↓
4. Producer — cost plan: per-shot provider, cost estimate, fallback chain
        ↓
   ★ GATE 1 — Vishnu approves the shot list + cost plan ★
   No clip generates before this approval. No exceptions.
        ↓
5. Generator — makes the clips per the approved prompts and cost plan, logs every take
        ↓
6. Editor — assembles clips to the measured audio, renders the finished file
        ↓
7. QC — the gate: verifies the finished file (duration, words-per-minute per
   sentence, OCR of every clip, unverified items) before Vishnu sees it
        ↓
   ★ GATE 2 — Vishnu approves the finished reel ★
        ↓
8. Post — only after his approval. Nothing posts until he says so.
```

The host is **Kit**, a flat-illustrated animated presenter (grey hoodie, glasses,
orange-accent sneakers), code-animated in Remotion — not a realistic AI avatar.
The page is faceless: no employer or company names, no portfolio or real-project
material, no personal information.

## Non-negotiable quality rules

- **One-pass voiceover, one fixed speed.** Scripts are 80–90 words (≈36–40 s).
  Never time-stretch, speed up, or pad silence. If a sentence is off-pace,
  rewrite it and re-render the whole voiceover.
- **Never let a generator draw readable text.** No text, letters, numbers, logos
  or UI labels in any generation prompt. All on-screen words come from designed
  overlays built from the approved script.
- **Motion must move the frame.** Element-only animation on a static card reads
  as a slideshow. Every word-beat needs a moving image behind the designed words:
  generated text-free footage, free stock footage, or a full-frame camera move.
- **Product screens are real recordings or official screenshots only** — otherwise
  a designed card labelled "Illustrative example".
- **OCR every clip** and report duration, words-per-minute per sentence, OCR
  results, and unverified items before sending anything for approval.
- **Nothing posts until Vishnu approves it.** Every number in a script is checked
  against the tool's official page that day.

The full rulebook is `skills/instagram_reel_production/SKILL.md`.

## What's in this repo

| Path | What it is |
| --- | --- |
| `roles/` | The six working-agent roles (director, screenwriter-checker, producer, generator, editor, QC) + README |
| `skills/instagram_reel_production/` | The reel production skill — the rulebook every role follows |
| `character/` | Kit's design doc + report, and the `Kit.tsx` / `moves.ts` Remotion component |
| `qc/` | Dead-air check script + word-sync caption notes |
| `storyboard/` | Canvas storyboard template + per-reel storyboard HTML/JSON data |
| `footage/` | Guide to the free-footage path (real motion footage, $0) |
| `reels/` | Scripts, fact-checks, descriptions, QC reports and cost plans for every reel built so far, in dated folders. Media files (video/images/audio) are intentionally **not** in this repo. |

## Honest note

This is the **agent-run pipeline** — the roles are prompt files that an AI agent
follows step by step. It is **not an n8n workflow**: no n8n code exists in this
repo, and no n8n instance is required to use it. If an n8n orchestrator is ever
added (trigger → script → approval gate → schedule), it will be a separate,
clearly-labelled addition on top of these roles.

## Credits

### OpenMontage

OpenMontage is used in this project as a **reference orchestrator**. Its ideas
were adopted in pieces: code-driven Remotion composition with spring-animated
scenes and word-level captions, quality gates that block slideshow-looking renders,
and a documentary-montage approach to cutting real motion footage from free
sources. OpenMontage itself is **not vendored or copied wholesale** into this
repo — only two Kit component files (`character/Kit.tsx`, `character/moves.ts`)
were taken from its Remotion composer, and the rest of the system is referenced,
not reproduced.

- OpenMontage: https://github.com/calesthio/OpenMontage
- License: **AGPL-3.0** — see the OpenMontage repository for the full license text.

### your.ai.toolkit

The pipeline was built for Vishnu's faceless Instagram page **your.ai.toolkit**
(AI tools, explained, and careers). The page, the Kit host, and the quality
rules above come from that work.

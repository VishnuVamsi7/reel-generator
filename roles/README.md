# How the roles work — your.ai.toolkit

Production manual for the Instagram page. Six roles, one reel at a time. The roles are
hats agents wear, not people — each role is a skill file that tells the agent doing that
stage exactly what to do, what to check, and what it must never do.

## The roster

| Role | File | One job |
| --- | --- | --- |
| Screenwriter-Checker (script doctor) | `screenwriter-checker.md` | Check Vishnu's script against the rules. Never writes scripts. |
| Director | `director.md` | Decide what each beat looks like. Shot list + prompts. |
| Producer | `producer.md` | Decide what each shot costs and which provider makes it. |
| Generator | `generator.md` | Run the engines. Produce the clips. Log everything. |
| Editor | `editor.md` | Assemble clips to the measured audio. Render the finished file. |
| QC / Reviewer | `qc.md` | The gate. Verify the finished file before Vishnu sees it. |

Vishnu is the executive producer. He writes the scripts, approves the visual plan, and
approves the finished file. The roles advise and build; he decides. Nothing posts until
he approves the finished file.

## The reel flow, end to end

```
1. Script (Vishnu — he writes it; the assistant may draft for his approval)
        ↓
2. Script doctor checks it .............. screenwriter-checker.md
   Flags go back to Vishnu with a suggested fix. Pass goes on.
        ↓
3. Director builds the shot list ....... director.md
   One row per beat: treatment, camera language, generation prompt, overlay text.
        ↓
4. Producer attaches the cost plan ..... producer.md
   Per-shot provider + cost estimate + fallback chain.
        ↓
   ★ GATE 1 — Vishnu approves the shot list + cost plan ★
   No clip generates before this approval. No exceptions.
        ↓
5. Generator makes the clips ........... generator.md
   Per the approved prompts and the producer's plan. Logs every take.
        ↓
6. Editor assembles .................... editor.md
   Clips cut to measured audio boundaries. Captions from measured timings.
   Voiceover untouched. Final mp4 + cover + captions + caption text.
        ↓
7. QC verifies the finished file ....... qc.md
   Duration, wpm table, OCR per clip, script match, slideshow test.
   Fail → back to the responsible role with a specific fix. Never silently patched.
        ↓
   ★ GATE 2 — Vishnu approves the finished file ★
        ↓
8. Post (Instagram connector, after approval — see the connector doc)
```

Two hard gates, both owned by Vishnu. Everything else is the roles doing their jobs.

## The rules that bind every role

Full text lives in `workspace/your_files/instagram-rules/Instagram Rules to Follow.md`
and in the production skill at `~/workspace/custom-skills/instagram_reel_production/SKILL.md`.
Every role file restates the rules it owns. The non-negotiables, in one place:

- **Page:** your.ai.toolkit. Faceless brand. AI niche — 60% tools / 25% explained /
  15% careers. 1–2 reels a day. Reels are 36–40 seconds from 80–90 word scripts.
- **Voiceover:** one pass, one fixed speed, calibrated to the voice so it lands at
  130–140 wpm. Never time-stretch, speed up, slow down, or pad silence. Duration is
  an output, not a target. Over 40 seconds → cut words from the script.
- **Pace:** measure wpm per sentence and report it. The ±8% per-sentence band is a
  **flag, not a gate** — the same sentence varies ~12% between renders of the same
  voice. Never fix pacing with a speed change. Rewrite a clearly off sentence and
  re-render the whole voiceover.
- **Visuals:** never let a generator draw readable text. Every generation prompt
  carries: "no text, no letters, no numbers, no logos, no UI labels." All on-screen
  words come from designed overlays taken from the approved script. OCR a frame from
  every clip; any word not in the approved list → regenerate or replace with a
  designed card.
- **Product screens:** real recordings or official screenshots only. Until Vishnu
  provides a recording, use a designed card with hand-written sample content and a
  small "Illustrative example" label. Never ask an image model to invent product UI.
- **No mascot, no logo, no person.** Plain text wordmark, or the official logo
  unmodified. The page is faceless — no person on screen, generated or real.
- **Kinetic motion is mandatory for reels.** Elements animate in, bars grow,
  checkmarks pop, search text types itself. A slow zoom is NOT motion. If the cards
  cannot move kinetically, the piece becomes a carousel (1080×1350, 4:5) with the
  full script in the caption — not a reel.
- **Tool reels:** Hook 8–10 words, What it is 18–22, three features 10–13 each,
  The catch 12–14, CTA 8 words. Every number or plan detail checked on the official
  page on the day the reel is made. Anything sources disagree on stays out of the
  voiceover.
- **Paper reels:** cite title, authors, arXiv ID. Flag preprints as not peer-reviewed.
  State findings only as narrowly as the paper states them. No overclaims — 0.94 AUROC
  only at the decision point; "10% → 1% lies" labelled pooled over 3 models; no
  "detects lying", no "solves safety", no mind-reading framing.
- **Descriptions:** every reel gets a 100–120 word description in the 6-block structure
  (hook, what they'll learn, quick steps, keyword CTA, follow line, hashtags). One
  comment keyword per reel (NOTES, EMAIL, RAG, PDF, RESUME, TOOLS, CHECK, PAPER).
- **Approvals:** nothing posts until Vishnu approves the finished file.

## Rule precedence — read this before arguing with a file

Two standing documents disagree on two points. The production skill is the newer
authority; it wins.

1. **Fixed speed.** The older rules doc says "default 1.0". The skill says calibrate
   the fixed speed to the voice so it lands at 130–140 wpm. For the current voice that
   is speed 70, not 1.0. Follow the skill.
2. **Pace band.** The older rules doc treats ±8% per sentence as a gate (rewrite and
   re-render). The skill treats it as a flag — report the figures, rewrite only a
   clearly off sentence, never gate a reel on the band alone. Follow the skill.

If a role file and a standing doc ever conflict on anything else, the role file wins
for that role's stage — it is the tuned version. Flag the conflict in the QC report
rather than silently picking a side.

## Hardware reality

- **The laptop is the render node.** MSI, RTX 4060 Laptop GPU (8 GB VRAM), 16 GB RAM.
  Local video generation runs there, and only there.
- **This VM has no GPU.** Local video models cannot run here. Anything local goes
  through the laptop over Tailscale + SSH.
- **The laptop must be on, awake, and plugged in** while jobs run. Sleep kills the
  connection; on battery the GPU throttles hard.
- **Only 2B / 1.3B / 5B-class local models fit in 8 GB VRAM** (LTX 2B distilled,
  Wan 2.1 1.3B). 13B / 14B / 22B models do not fit — never plan a shot around one.
- **If the laptop is off or busy,** the producer's fallback chain applies:
  laptop GPU → fal.ai (LTX, hosted) → Google Flow free credits (50/day).
- The VM keeps script, captions, OCR, QC, and posting. The laptop only renders clips.

## Where things live

- Reels: `workspace/instagram/reels/<date>-<slug>/` — mp4, cover.jpg, caption.txt,
  captions.ass, voiceover, cards, qc report.
- Carousels: `workspace/instagram/carousels/<date>-<slug>/` — slides at 1080×1350,
  caption.txt, qc report.
- Role files: `workspace/instagram/roles/` (this directory).
- Standing rules: `workspace/your_files/instagram-rules/Instagram Rules to Follow.md`
- Production skill: `~/workspace/custom-skills/instagram_reel_production/SKILL.md`
- Scripts: `workspace/instagram/week-1-scripts.md`
- Descriptions + DM system: `workspace/your_files/reel-ideas-and-dm-system/Reel Ideas and DM System.md`

## When a role fails

A failed check sends the work back to the role that owns it, with a specific fix
named. Nobody patches another role's failure silently, and nobody ships around a
failed gate. If two roles disagree about a fix, the disagreement goes to Vishnu with
both options — it is not resolved by the agent picking one.

# Gmail reel — visual plan (for Vishnu's approval, Gate 1)

**Reel:** Tuesday Oct 27, Week 1 · **Keyword:** EMAIL · **Voiceover:** 37.92s (test render)
**Status:** PLAN ONLY — no clip has been generated. Nothing generates until Vishnu
approves this plan + the trimmed script + the cost estimate below.
**Time windows** are from the measured voice-test boundaries (Helio speed 80);
Phase B re-renders the approved script and re-measures, so these are planning
estimates, not final cut points.

## Split workflow (from the LTX Phase 1 finding)

LTX 2B **fails the text test** — designed text morphs into gibberish by ~4s
(verified 2026-10-26, see `workspace/instagram/laptop-tests/ltx-2b-test-1-report.txt`).
So this reel uses three treatments, never one alone:

1. **Veo hero (1 clip)** — the hook, cinematic. Google Flow free credits.
2. **LTX local (1 clip)** — text-free ambient background for the end card only.
3. **Kinetic cards (5)** — every beat whose point IS words. Remotion motion, designed
   overlays only. A slow zoom is not motion — each card animates elements in, types
   text, grows bars, or pops checkmarks.

No AI-drawn readable text anywhere. No invented Gmail UI. No mascot. No logo drawn —
plain text wordmark only. Design system: deep navy background, teal accents (same as
Fireflies v2), 720×1280.

## Shot list

| Beat | Window | Treatment | Camera / motion | Overlay text | Source |
|---|---|---|---|---|---|
| 1 Hook | 0.00–4.36s | **Veo hero clip** (Flow, Fast, 8s, muted) | Slow push-in on a blank page on a dark desk | "You don't have an email problem." → "Just a blank page." | Flow free credits (20) |
| 2 What it is | 4.36–14.06s | **Designed card** (fallback) / **real screen recording** (ideal) | Kinetic: prompt types itself, "Help me write" pill pulses, draft lines appear one by one | "Help me write" + typed prompt (see below) | Remotion card ($0) / Vishnu's recording ($0) |
| 3 Feature 1 | 14.06–19.14s | **Kinetic card** | Prompt types itself; draft card slides in; checkmark pops | "One plain sentence." | Remotion ($0) |
| 4 Feature 2 | 19.14–23.46s | **Kinetic card** | Rough line → polished line with highlight sweep; "Tone" + "Clarity" chips light up | "Refine it for tone and clarity." | Remotion ($0) |
| 5 Feature 3 | 23.46–29.18s | **Kinetic card** | Three checklist rows slide in; checkmarks pop in sequence | "AI drafts. You decide." | Remotion ($0) |
| 6 The catch | 29.18–35.12s | **Kinetic card** | Two comparison rows slide in from opposite sides; checkmark on the Free row | "Free on personal Gmail in the US." | Remotion ($0) |
| 7 CTA | 35.12–37.92s | **LTX ambient clip** + end card | Slow drift on a text-free navy background; wordmark fades in; day dots pop; EMAIL chip pulses | "Follow for a new AI tool every day." + "Comment EMAIL" | Laptop GPU, local ($0) |

## Exact generation prompts

### Shot 1 — Veo hero (Flow, NOT generated in this phase)

- **Engine:** Google Flow, Veo 3.1, **Fast** tier (20 credits), 8s, 9:16 vertical.
- **Audio:** mute Veo audio entirely — the voiceover is the only audio.
- **Prompt:** "Cinematic close-up of a blank white sheet of paper on a dark wooden
  desk, a pen resting beside it, soft morning window light, shallow depth of field,
  slow push-in, moody and quiet, deep navy and teal tones, no text, no letters,
  no numbers, no logos, no UI labels, no people, no faces."
- **Why Veo here:** the hook is the highest-leverage beat for watch time, and this
  is the shot where cinematic quality is the point. Fast first; Quality (100
  credits) only if Fast disappoints AND Vishnu approves the extra credits.
- **Blocked on:** Flow needs Vishnu's Google sign-in. He generates this clip
  himself in Flow, or a later browser task does it with his sign-in. The prompt
  above is ready to paste.
- **Fallback if Veo fails:** free stock footage (Pexels) — hands typing on a laptop,
  over-the-shoulder, no face — or the LTX ambient treatment. Do not re-roll Veo
  more than twice on the same prompt.

### Shot 7 — LTX ambient background (local laptop GPU, Phase B)

- **Engine:** LTX-Video 2B distilled FP8 via the installed ComfyUI
  (`C:\Users\saivi\video-gen\ComfyUI`). Reuse the working API prompt
  `workspace/instagram/laptop-tests/ltx-2b-test-1-api-prompt.json` — change only
  the positive prompt (node 6), the input still (node 78), the filename prefix
  (node 86), and the seed (node 72). Settings stay: 768×1280, 193 frames, 24 fps,
  8 steps, euler, cfg 3, strength 1.0.
- **Start frame:** a **text-free** designed still (plain navy gradient with soft
  teal light shapes, NO words at all), designed at 768×1280 to match the output
  aspect — the Phase 1 still was 1080×1350 and got its sides cropped.
- **Positive prompt:** "Slow gentle drift across a dark navy abstract background
  with soft teal light shapes moving almost imperceptibly, calm, minimal,
  cinematic, no text, no letters, no numbers, no logos, no UI labels, no people,
  no faces."
- **Negative prompt:** same anti-garble list as the Phase 1 test (warping text,
  garbled letters, extra text, duplicated text, watermark, logo, blurry, flicker).
- **Cost/time:** $0, ~5 min render. Laptop must be on, awake, plugged in,
  ventilated, idle (GPU hit 85–90°C in Phase 1). OCR the clip before use — any
  word in the frame fails it (there should be none: the still has no text).
- **Use:** background behind the end card only, at low visual weight. All words
  on the end card are designed overlays added in the editor, never generated.

## Kinetic cards — motion spec (Remotion, either path — see assessment below)

Design: 720×1280, navy `#0B1F3A`-family background, teal `#14B8A6`-family accents,
plain "Gmail" text wordmark only. Every card's words come from the approved script.

- **Beat 2 (What it is) — designed-card fallback.** A stylized compose window
  (generic frame, NOT a Gmail screenshot): "To: Sarah" line, then the prompt types
  itself — "Reply to Sarah, confirm Friday at two" — then a "Help me write" pill
  pulses, then a draft appears line by line below it, hand-written sample content:
  "Hi Sarah, confirming our meeting Friday at 2pm. Could you send the report
  when you have a moment? Thanks!" Small "Illustrative example" label, bottom
  corner. **This is a designed card, not a Gmail screenshot — say so on screen.**
- **Beat 2 (ideal) — Vishnu's real screen recording.** Same beat, but a real
  recording of Gmail Help me write drafting a reply from his own account, private
  info blurred. This replaces the designed card entirely if he provides it. It is
  the best treatment for a product beat and the one the standing rules prefer.
- **Beat 3 (F1):** the prompt sentence types itself on a clean card; the sample
  draft card slides in from below; a checkmark pops. Overlay: "One plain sentence."
- **Beat 4 (F2):** a "rough" draft line sits on the card; a highlight sweep runs
  across it and the line re-renders as the "polished" version; "Tone" and "Clarity"
  chips light up one after the other. Overlay: "Refine it for tone and clarity."
- **Beat 5 (F3):** three checklist rows slide in one by one — "Read it once",
  "Fix what's off", "Send" — each with a checkmark that pops as its row lands.
  Overlay: "AI drafts. You decide."
- **Beat 6 (Catch):** two rows slide in from opposite sides. Row 1: "Personal
  Gmail · US → Free ✓". Row 2: "Outside the US → Paid plan". Checkmark pops on
  row 1. Overlay: "Free on personal Gmail in the US."
- **Beat 7 (CTA / end card):** over the LTX ambient background — "Your AI Toolkit"
  wordmark fades in, day-counter dots pop one by one ("AI Tool #2 · Tool #3
  tomorrow"), "Comment EMAIL" chip pulses once. Overlay: "Follow for a new AI
  tool every day."

## OpenMontage assessment (assess only — NOT installed in this phase)

- **Repo:** github.com/calesthio/OpenMontage (AGPL-3.0) — the chosen ONE orchestrator.
- **Prerequisites, checked on this VM:** Python 3.12.3 (needs 3.10+) ✓ · Node.js
  24.22.1 (needs 18+) ✓ · FFmpeg 8.1.2 ✓ · make ✓. Install is `git clone` +
  `make setup` (pip install requirements, `npm install` in `remotion-composer`,
  `pip install piper-tts`, `cp .env.example .env`). No API keys needed for the
  free path: Remotion/HyperFrames composition + free stock footage + Piper TTS.
- **Verdict: installable on paper — all prerequisites are present.** Not installed
  in Phase A (hard gate). Phase B plan: attempt the OpenMontage install first
  (expected ~30 min); if it installs cleanly, use its Remotion/Animation pipeline
  for the five kinetic cards. If it proves too heavy, or fights the page's rules
  (its pipelines write scripts and narrate on their own — we must bypass its
  script-writing and voice steps and use only the composer), fall back to a
  **direct Remotion project** with the same motion spec above.
- **Honest note:** for five kinetic cards, direct Remotion is the lower-risk path;
  OpenMontage earns its place across the whole Week-1 slate (gates, stock footage,
  cost tracking), not one reel. Either way the motion spec in this plan is the same,
  and the cards are $0 either way.

## Cost estimate (producer)

| Shot | Provider | Cost | Fallback |
|---|---|---|---|
| 1 Hook | Veo 3.1 Fast via Flow | 20 free credits ($0) | Pexels stock (hands typing, no face) — $0 |
| 2 What it is | Kinetic card / Vishnu's recording | $0 | Designed card is already the fallback |
| 3 Feature 1 | Kinetic card (Remotion) | $0 | — |
| 4 Feature 2 | Kinetic card (Remotion) | $0 | — |
| 5 Feature 3 | Kinetic card (Remotion) | $0 | — |
| 6 The catch | Kinetic card (Remotion) | $0 | — |
| 7 CTA | LTX 2B local (laptop GPU) | $0 (~5 min render) | Static end card over a still — $0 |
| Voiceover | Helio (re-render in Phase B) | $0 | Fish Audio free test (blocked — needs API key, see voice-test-wpm.md) |
| **Total** | | **$0 + 20 Flow credits** | **One Veo Fast retake = 40 credits total, still inside the 50/day free allowance. Quality tier (100 credits) is NOT budgeted — needs Vishnu's approval.** |

Retake budget: 2x on the Veo hero (40 credits), 2x on the LTX clip (10 min).
No paid generation is planned for this reel.

## Six-question check on this visual plan

1. **Watch to the end?** Yes — hook is cinematic, every beat changes the frame,
   the catch is a concrete comparison, the CTA is a clean end card.
2. **Share with a friend?** Yes — "stop writing emails from scratch" is a
   relatable pain + a concrete trick, the format that gets sent to a friend.
3. **Save it?** Yes — the steps are in the description; the prompt example is
   reusable.
4. **Original?** Yes — his script, his example, designed cards, no reposted footage.
5. **Create conversation?** Yes — keyword EMAIL → DM loop; the catch (US-only free)
   invites "does this work where you are?" replies.
6. **Clear value?** Yes — a free tool, where the button is, a prompt that works.

## What still needs Vishnu (Gate 1)

1. Approve the trimmed script + this shot list + the cost estimate ($0 + 20 credits).
2. Screen recording: will he record Gmail Help me write from his own account
   (private info blurred), or should Phase B build the designed-card fallback?
3. Flow hero clip: will he generate the Veo hook himself in Flow (needs his Google
   sign-in), or should a browser task do it?
4. The "30 seconds instead of 15 minutes" line and the template CTA (see
   script-trimmed.md) — restore his versions or keep the trimmed ones?

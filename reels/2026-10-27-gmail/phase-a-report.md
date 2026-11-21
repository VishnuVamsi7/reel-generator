# Phase A report — Gmail reel (Tue Oct 27, Week 1, keyword EMAIL)

**Status:** Planning complete. **Nothing generated, nothing posted.** Phase B
(generation) starts only after Vishnu approves the script + visual plan.
**Folder:** `workspace/instagram/reels/2026-10-27-gmail/`

## What changed vs his original script (and why)

Vishnu's Tuesday script was ~100 words / ~45–55s. The tool-reel template requires
80–90 words / 36–40s. The trimmed draft (`script-trimmed.md`) is **88 words**:

- Hook kept, trimmed one word (11 → 10).
- The "How long does one email take you? Ten minutes? Fifteen?" opener cut — it
  duplicated the hook's job.
- **"Thirty seconds instead of fifteen minutes" cut from the voiceover.** It is
  rhetorical framing, not a Google product fact — Google claims no such time saving
  anywhere. It is flagged for his call, not deleted from the project.
- "The AI drafts, you decide" survives as the Feature 3 overlay and in the spoken
  Feature 3 beat in his own words.
- CTA changed to the format CTA ("Follow for a new AI tool every day."); his
  original "Save this for the next email you're dreading" is noted as the alternative.

## Verified vs flagged

**Verified today (2026-10-26) on official Google support pages** — see `fact-check.md`:
"Help me write" is Gemini-powered inside Gmail; drafts from a plain prompt;
refines for tone and clarity; lives in the compose window; **free on personal
Gmail in the US**; outside the US a personal account needs a paid Google AI plan;
Workspace users need an eligible plan (Business Starter and up).

**Flagged / left out of the voiceover:**
- "15 min → 30 seconds" — rhetorical, not a product fact (his call to restore as
  his own experience).
- Refine-button names (Formalize/Elaborate/Shorten) — third-party only, not on the
  fetched official page; the voiceover uses Google's words "tone and clarity".
- No price named anywhere (Google AI Pro $19.99/mo is third-party only).
- Recheck availability claims on the morning of posting (Oct 27) in case Google
  changed the page overnight.

## Visual plan in one paragraph

Seven beats, three treatments, $0 + 20 free Flow credits: the hook is a **Veo hero
clip** (cinematic blank page on a desk, Fast tier, muted) — prompt ready to paste
into Flow but NOT generated, because Flow needs Vishnu's Google sign-in; the five
word-beats are **kinetic Remotion cards** (prompt typing itself, draft lines
appearing, tone chips lighting, checklist checkmarks popping, US-free vs paid-plan
comparison); the end card sits over one **LTX text-free ambient clip** from the
laptop GPU, since LTX 2B destroys designed text (Phase 1 finding) and is only
trusted with backgrounds that contain no words. The ideal "What it is" visual is
a **real screen recording of Gmail Help me write from Vishnu's own account**
(private info blurred); the designed-card fallback with hand-written sample content
and an "Illustrative example" label is fully specced if he doesn't record.
OpenMontage assessed, not installed: all prerequisites are present on this VM
(Python 3.12.3, Node 24.22.1, FFmpeg 8.1.2, make), so Phase B tries its install
first and falls back to a direct Remotion project if it proves too heavy.

## Voice test result

- **Fish Audio: blocked.** Its API needs an API key from a fish.audio account;
  none exists here. Vishnu would need to create a free account and share a key via
  Secure Vault for a Fish test. (Free tier is personal-use only per its FAQ.)
- **Helio fallback, calibrated per script:** speed 70 = 46.03s / 114.7 wpm (too
  slow, rejected); **speed 80 = 37.92s / 139.2 wpm — chosen.** Duration 36–40s ✓,
  overall pace 130–140 ✓.
- **Per-sentence pace: 7 of 11 sentences flag outside the ±8% band** (CTA fastest
  at 206.9 wpm, Feature 1 slowest at 118.1 wpm). Per the production skill the band
  is a flag, not a gate; two prior rebuilds showed rewrite rounds don't converge
  on this engine, so no rewrite was attempted. Transcript check: all 88 words
  present (three Whisper hearing artifacts only). Full table in `voice-test-wpm.md`.

## What still needs his decision (Gate 1)

1. **Approve the trimmed script** (`script-trimmed.md`) — including the three open
   flags: restore "30 seconds instead of 15 minutes" as his own experience?
   Template CTA or his original "Save this" CTA? Hook completing at ~3.6s OK?
2. **Approve the visual plan + cost** (`visual-plan.md`): $0 + 20 Flow credits
   (40 with one Veo retake, still inside the 50/day free allowance).
3. **Screen recording: yes or no?** Will he record Gmail Help me write from his
   own account (private info blurred), or should Phase B build the designed-card
   fallback?
4. **Flow hero clip:** will he generate the Veo hook himself in Flow, or should a
   browser task do it with his sign-in?
5. **Pace band:** accept the 7 per-sentence flags (skill's position), or retire
   the band, or ask for a rewrite round knowing its track record?
6. **Fish Audio:** does he want a Fish voice test (needs him to create a free
   account + API key), or stay with Helio speed 80?

## Follow-ups not in Phase A (for Phase B / posting)

- The EMAIL prompt pack for the DM loop (the F1 example + 2–3 more Help-me-write
  templates) must be written before posting — the description promises it.
- Recheck the availability facts on Google's pages on the morning of Oct 27.
- Phase B re-renders the approved script (Helio speed 80 unless he changes it)
  and re-measures the voiceover before cutting clips to it.

## Deliverables (all in `workspace/instagram/reels/2026-10-27-gmail/`)

- `script-trimmed.md` — 88-word draft + per-beat counts + script check
- `fact-check.md` — claim → source → in/out (official Google pages only)
- `visual-plan.md` — shot list, exact Veo + LTX prompts, kinetic motion spec,
  OpenMontage assessment, cost estimate ($0 + 20 credits)
- `voice-test.mp3` — chosen take (Helio speed 80, 37.92s) + `voice-test-speed70.mp3`
  (rejected take) + `voice-test-speed80.mp3` (same as chosen take)
- `voice-test-wpm.md` — per-sentence wpm table, pace flags, Fish blocker
- `description.md` — 115 words, 6-block structure, keyword EMAIL

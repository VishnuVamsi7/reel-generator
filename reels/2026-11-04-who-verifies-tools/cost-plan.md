# Day 2 — "Who Verifies the Tools?" — Cost plan (Phase 1 AUDIT ONLY)

**Reel:** Day 2 Paper Breakdown, Instagram page your.ai.toolkit
**Paper:** William Jeffries, arXiv:2610.32110 (preprint)
**Images:** `pic1.png`, `pic2.png`, `pic3.png` — verified 2026-11-04: all 720×1280,
intact, no text. They must stay INTACT, full-frame, never cut / masked /
rotated / segmented, backgrounds never recreated (Day 1 v2 lesson: v2 was
rated 2/10 and rejected for breaking all 3 supplied images).
**Target length:** 30–37 s (script 80–90 words at 130–140 wpm).
**Status of this document:** AUDIT ONLY. No paid generation was run, no
credits were spent, nothing was posted. Generation starts only after Vishnu
approves the model + cost cap at the end of this plan (Gate 1).

## How a 30–37 s reel maps to clips

No model in hand makes a 30–37 s clip in one generation. Coverage math used
for every row below (trim to the voiceover in the editor):

- 8 s clips (LTX, Veo): 5 clips = 40 s, trimmed to 30–37 s. Clean take = 5 clips.
- 10 s clips (Kling 2.1): 4 clips = 40 s, trimmed to 30–37 s. Clean take = 4 clips.
- 5 s clips (Higgsfield per-5 s pricing): 8 clips = 40 s, trimmed. Clean take = 8 clips.
- 2–3 take budget = clean take × 2–3 (retakes, failed takes, one treatment
  change), per the producer rule. It is a budget, not a plan to spend it all.

## Model audit — one row per model (actually tested 2026-11-04, not assumed)

### 1. LTX 2B distilled, local on the laptop GPU — PRIMARY (gated, see below)

- **Availability — TESTED, PARTIAL:** The laptop (MSI, RTX 4060 8 GB) is ON
  and reachable at the TCP level: Tailscale lists it, and SSH answered with
  an OpenSSH for Windows 9.5 banner. BUT SSH login did NOT succeed: the VM
  has no `known_hosts` entry, so host-key verification failed and login was
  refused. Do NOT bypass this by blindly accepting the key — the presented
  host-key fingerprint must be confirmed (or `known_hosts` restored) before
  any SSH session. ComfyUI on port 8188 gave NO HTTP response, which matches
  the Oct 26/27 test report: the server was deliberately STOPPED after that
  test (taskkill), so "not running" is expected, not a failure. ComfyUI
  0.43.0 + LTX checkpoint + T5 encoder remain installed at
  `C:\Users\saivi\video-gen` per that report; re-verifying the install
  requires the SSH login above.
- **Whole-image capability — YES, image-to-video, WITH A WARNING:** LTX
  image-to-video is proven on this exact laptop (Oct 26/27 test: LTXVImgToVideo,
  768×1280, 8 s, ~5 min per clip, peak VRAM 7,020 / 8,188 MiB, GPU 85–90 °C).
  It animates a whole supplied image. It does NOT guarantee the image stays
  intact: in that test the source was a designed-text card and the model
  re-drew the text into gibberish by ~4 s and motion stalled in the second
  half, and the preprocessor cropped the sides (1080×1350 source →
  768×1280 output). Day 2 images have NO text, so the text-garble failure
  may not apply — but morphing / cropping risk is UNPROVEN for these images
  until one test clip is QC'd. First + last frame: LTX multi-keyframe
  conditioning is mentioned in the test report as an option, but it was
  NEVER tested here — do not plan on first-last from LTX.
- **Cost per 30–37 s reel:** Clean take 5 × 8 s clips = **$0, 0 credits**
  (electricity only). 2–3 take budget 10–15 clips = **still $0**.
  Time cost is the real budget: ~5 min/clip → ~25 min clean,
  ~50–75 min at 2–3 takes, laptop plugged in, ventilated, otherwise idle.
- **Plan / API floor if a new purchase is needed:** None. No purchase, no
  subscription, no key needed. The only floor is the SSH host-key fix + a
  laptop that stays awake and plugged in during renders.
- **Fallback:** Veo 3.1 Lite via Flow (row 2). If the LTX test clip fails
  the intactness QC, stop LTX immediately — do not burn the retake budget
  on a morphing engine.
- **Why:** Cheapest that could clear the bar, already installed and proven
  to run on hardware in hand, and Day 2 art is text-free (the one failure
  mode actually observed was text re-drawing). The gate below is what makes
  this honest rather than assumed.

### 2. Veo 3.1 via Google Flow — FALLBACK

- **Availability — NOT VERIFIABLE BY THIS AUDIT:** A free-credit balance
  check requires a signed-in Flow browser session. This audit has no live
  browser and no Flow session, so the balance was NOT checked and NO
  credits were spent. Do NOT assume today's 50 free credits are untouched:
  prior days' use is unknown, and free video generation may be blocked at
  peak hours. Balance must be read in the Flow UI by the browser agent
  before generation. There is no API route in hand: the OpenMontage
  `.env` `GOOGLE_API_KEY` entry is EMPTY (see row 3 note), so Veo via API
  is not available without a new key.
- **Whole-image capability — YES, image-to-video AND first-last:** Flow's
  Frames to Video accepts a start frame alone (animates the whole image)
  or a start + end frame (bridges two images), on Veo 3.1 Lite, Fast and
  Quality, at 4, 6 or 8 s. That is the strongest first-last story of any
  model in hand. Same caveat as every generative model: the output is a
  re-render, not a pixel copy — every clip must pass the intactness /
  morph QC against the supplied still before it ships.
- **Cost per 30–37 s reel (Flow credit rates, rechecked 2026-11-04 from
  Google Flow Help as reported Oct 21–22, 2026 — re-verify in Flow UI
  before generating):** Lite 10 credits / 8 s clip, Fast 20, Quality 100.
  Clean take (5 × 8 s): Lite **50 credits, $0** inside one day's free
  allowance; Fast 100 credits, $0 across two days' free allowance;
  Quality 500 credits — exceeds any free day, needs a plan.
  2–3 take budget: Lite **100–150 credits, $0** across 2–3 days' free
  allowance; Fast 200–300 credits. Marginal cash value if paid plan
  credits are used instead: Google AI Pro $19.99/mo = 1,000 credits/mo
  ≈ $0.02/credit → Lite 2–3 take budget ≈ $2.00–$3.00 marginal. A Pro
  subscription itself is NOT included in this gate (see approval below).
  Failed generations can still consume credits — set Flow outputs to 1
  per request.
- **Plan / API floor if a new purchase is needed:** None for Lite/Fast
  inside the free daily allowance. Floor for Quality or for a single-day
  Fast retake budget is Google AI Pro ($19.99/mo) — NOT approved here.
- **Fallback:** $0 camera navigation inside the intact image (Remotion /
  OpenMontage pan + zoom, as Day 1 v1 did) + designed overlays. Day 1
  lesson: that fallback tells the story in captions, not visuals, so it
  is a last resort, not a substitute for a moving-image pass.
- **Why:** Best whole-image + first-last capability available at $0 cash,
  and the only fallback that does not need the laptop. Held as fallback
  (not primary) only because its balance is unverified and it needs
  manual Flow browser work, while LTX is $0 and already installed.

### 3. Kling via fal.ai — BLOCKED (no key, no purchase approved)

- **Availability — TESTED, BLOCKED:** OpenMontage `.env` was checked by
  variable NAME only; no key value was printed, copied, or stored anywhere.
  The file is byte-identical to `.env.example` (the unfilled template):
  `FAL_KEY`, `FAL_AI_API_KEY` and `KLING_API_KEY` are all present as names
  but EMPTY. (Correction to the 2026-11-02 note that these keys "appear
  present": names were present, values were not — the accounts are not
  usable from this file.) No estimate-endpoint price could be checked
  without a key, and no authenticated call was made. No spend.
- **Whole-image capability — YES, image-to-video AND first-last (with a
  tier caveat):** Kling image-to-video takes a first-frame image; the
  official Kling API supports an optional end frame (`image_tail`) on
  most 2.x/3.0 tiers, but end-frame support varies by tier (e.g. 2.1
  Master and 3.0 Turbo do not support it per API docs). For Kling 2.1
  Standard, plan on first-frame-only + camera move unless the fal
  endpoint confirms end-frame support at generation time. QC as usual:
  reject any smeared morph between pic1 → pic2 → pic3.
- **Cost per 30–37 s reel (fal.ai list prices, model pages updated
  2026-04-14 — STALE, must be re-verified in the fal UI before any run;
  marked TO-RE-VERIFY):** Standard: 5 s $0.25, 10 s $0.50 ($0.05/s).
  Pro: 5 s $0.45, 10 s $0.90 ($0.09/s). At our 720p post size, Standard is
  the matching tier (Pro is the 1080p tier). Clean take (4 × 10 s):
  Standard **$2.00**, Pro $3.60. 2–3 take budget: Standard **$4.00–$6.00**,
  Pro $7.20–$10.80. Secondary sources disagree (some quote $0.12/s for
  2.1 Standard at 1080p) — the fal.ai page price above is the one to
  re-verify, not the secondary quotes.
- **Plan / API floor if a new purchase is needed:** A fal.ai account with
  a funded balance + a key entered through the secure flow (never in
  chat, never pasted into a file). Minimum top-up was NOT verified —
  check at signup; do not assume a $ figure.
- **Fallback:** Veo Lite (row 2) or LTX (row 1), both $0.
- **Why this row is not the recommendation:** Best paid price per second
  of the paid options, but it cannot run today at all — no key, no
  balance, no purchase approval. It becomes the paid option only if
  Vishnu separately approves a fal top-up AND the LTX/Veo $0 routes fail
  their QC gates.

### 4. Higgsfield — BLOCKED (no key, no plan, no access given)

- **Availability — TESTED, BLOCKED:** `HIGGSFIELD_API_KEY` and
  `HIGGSFIELD_API_SECRET` in the OpenMontage `.env` are present as names
  but EMPTY (same template finding as row 3). Per standing memory,
  Higgsfield was costed but never approved, and no access was given.
  No Generate-button price could be checked without an account, and no
  spend was made. Any Higgsfield price below is researched, not checked
  in-account — TO-RE-VERIFY.
- **Whole-image capability — YES, image-to-video; first-last via
  model choice:** Higgsfield's image-to-video workflows and Cinema
  Studio accept image references; its own guidance points to Wan 3.0
  for exact first-last control and Seedance for general motion. Model
  choice must be confirmed in the Higgsfield UI at generation time.
  Same morph QC applies.
- **Cost per 30–37 s reel (researched, TO-RE-VERIFY; sources dated
  Oct 24 – Nov 3, 2026):** Plans reported as Starter ~$15–$19/mo,
  Plus $49/mo for ~1,000–1,200 credits, Ultra ~$99–$129/mo for 3,000
  credits — plan names/credits differ between the Oct 29 and Nov 3
  reads, so re-verify before budgeting. Cheapest first-last route,
  Wan 3.0 at 720p, 8.75 credits / 5 s: clean take (8 × 5 s = 40 s) =
  **70 credits ≈ $3.43** at the Plus credit rate (~$0.049/credit);
  2–3 take budget **140–210 credits ≈ $6.86–$10.29**. Kling 3.0 via
  Higgsfield at 720p, 7.5 credits / 5 s no sound: clean 60 credits
  ≈ $2.94, retakes 120–180 credits ≈ $5.88–$8.82. Seedance 2.5 at 720p,
  35 credits / 5 s: clean 280 credits ≈ $13.72 — NOT recommended.
  At 1080p, Seedance 2.5 is 80 credits / 5 s (clean 640 credits) — do
  not use 1080p; our post size is 720p.
- **Plan / API floor if a new purchase is needed:** A Higgsfield plan
  (Starter at minimum) + key + secret entered through the secure flow.
  No plan is approved here, and per Vishnu's standing position there is
  no plan to buy Higgsfield unless he says otherwise.
- **Fallback:** Veo Lite (row 2) or LTX (row 1), both $0.
- **Why this row is not the recommendation:** More expensive than Kling
  via fal for the same footage, needs a subscription (not pay-as-you-go),
  and — like Kling — cannot run today for lack of keys and plan.

### $0 fallback that is always available (not a model row)

- **Camera navigation inside the intact image** (Remotion / OpenMontage
  full-frame push-in / travel across pic1 → pic2 → pic3, words only from
  designed overlays): $0, no laptop GPU needed, no account needed.
  Day 1 v1 proved it works and proved its limit (captions carried the
  story, visuals did not move the frame enough). Use only if both the
  LTX test gate and the Veo fallback fail or are unavailable.

## RECOMMENDATION

**PRIMARY: LTX 2B distilled on the laptop GPU — $0 cash, 0 credits —
GATED by a single 8 s test clip.**

1. Fix SSH first: confirm the laptop's presented host-key fingerprint
   (or restore `known_hosts`); do not accept an unverified key blindly.
2. Start ComfyUI (documented command in the Oct 26/27 test report),
   confirm it answers on port 8188, confirm the laptop is plugged in.
3. Generate ONE 8 s test clip from pic1 (text-free, 720×1280) with the
   saved working API prompt, adapted to match the 9:16 aspect so the
   preprocessor does not crop the sides.
4. QC that clip against pic1: frame 0 and end frame must still read as
   pic1's composition (no crop, no smear, no invented elements, motion
   present through the clip, not stalled after ~4 s). PASS → generate
   the remaining clips (5 total clean, up to 15 with retakes). FAIL →
   stop LTX and move to the fallback; do not spend the retake budget
   trying to fix a morphing engine.

**FALLBACK: Veo 3.1 Lite via Google Flow — $0 cash inside the free daily
allowance, credit cap 150.**

Browser agent reads the Flow balance first. If 50+ credits are available
that day, generate 5 × 8 s Frames-to-Video clips (start frame = each pic;
end frame only where a transition between pics is the beat). Retakes
draw from the next days' free allowance up to 150 credits total. If the
free allowance cannot cover the reel, STOP and re-approve — do not buy
Google AI Pro inside this gate.

**NOT APPROVED in this gate:** Kling via fal.ai (needs account + funded
balance + key; researched clean $2.00 / retake budget $4.00–$6.00 at
Standard 720p, TO-RE-VERIFY) and Higgsfield (needs a plan + keys;
researched Wan 3.0 clean 70 credits ≈ $3.43 / retake budget 140–210
credits ≈ $6.86–$10.29, TO-RE-VERIFY). Either may be proposed later only
if both $0 routes fail QC.

## EXACT APPROVAL NEEDED BEFORE ANY GENERATION

- **Model:** LTX 2B distilled (local), with Veo 3.1 Lite via Flow as the
  named fallback if the LTX test clip fails QC.
- **Resolution:** 720p (our post size; 720×1280, 9:16). No 1080p spend.
- **Take budget:** LTX up to 15 clips (5 clean + 10 retakes); Veo fallback
  up to 150 credits total (5 clean + 10 retakes at Lite rates).
- **Total cost cap:** **$0 cash, 0 paid credits.** LTX costs $0; Veo Lite
  is $0 only inside the free daily allowance. If Veo's free allowance
  cannot cover the reel, generation stops and a new approval is required
  before any subscription or top-up (Google AI Pro $19.99/mo, fal top-up,
  or Higgsfield plan are all OUTSIDE this cap).
- **Also needed (not money):** confirmation of the laptop SSH host key
  (or restored `known_hosts`) + laptop on, awake, plugged in during
  renders; and a Flow balance read before any Veo clip.

## What was verified, and what was not (2026-11-04 audit)

- VERIFIED: Day 2 pics are 720×1280 (pic1 113,264 bytes; pic2 110,002;
  pic3 111,078). LTX install + Oct 26/27 test results from the saved
  report. Laptop TCP reachability (Tailscale listing + SSH banner).
  OpenMontage `.env` is byte-identical to `.env.example`; all Kling /
  Higgsfield / fal / Google / LTX API key entries are EMPTY (names only,
  values never printed, copied, or stored).
- NOT VERIFIED / FAILED: SSH login (host-key verification failed, no
  `known_hosts`). ComfyUI currently answering (not running, as expected
  after the Oct test). Veo Flow credit balance (needs a signed-in
  browser session this audit does not have). Kling / Higgsfield live
  Generate-button or estimate-endpoint prices (need keys/accounts that
  do not exist here). LTX intactness on text-free Day 2 art (needs the
  gated test clip). LTX first-last conditioning (never tested).
- SPENT IN THIS AUDIT: $0. No generation endpoint was called.

---

## SUPERSESSION — Phase 2, Remotion-only build (added 2026-11-04, history above preserved, not rewritten)

This section supersedes the Phase 1 plan above for Phase 2. The Phase 1
text is left intact as the audit record for the plan approved 2026-11-04
20:43 CST (LTX primary + Veo 3.1 Lite fallback, $0 cash cap).

- **2026-11-04 20:52 CST — Veo REMOVED by Vishnu.** "Replace Veo, use what
  are available." No Veo generation, no Flow credit draw, in this build.
  For the record only: the 20:49 CST read-only balance check found Flow
  Free plan, 50 credits, Lite 10/clip — 5 clean clips exactly, no retakes;
  7–8 clips for 2–3 takes = 70–80 credits, over that day's balance — so
  the Phase 1 150-credit fallback cap did not fit in one day. That
  arithmetic no longer matters: Veo is out.
- **2026-11-04 20:53 CST — LTX SKIPPED by Vishnu.** "SKIP LTX, build with
  Remotion camera now." No SSH, no laptop work, no ComfyUI, no LTX test
  clip in this build. The Step 0 SSH host-key fingerprint remains
  unconfirmed and unused; nothing was added to known_hosts for this build.
- **Replacement fallback / new primary: Remotion camera (VM-side).**
  Camera navigation inside the intact supplied images (Remotion /
  OpenMontage on the VM, ffmpeg assembly), $0 cash, 0 credits, no laptop,
  no account, no subscription, no top-up. This was the Phase 1 "$0
  fallback that is always available," now promoted to the build route by
  Vishnu's decision.
- **Blocked routes unchanged:** Kling/fal, Higgsfield, Seedance /
  Replicate / Volcengine, Runway, LTX API, Veo API — key names present in
  OpenMontage .env, values empty; none is used in this build.
- **Quality risk (not a cost risk):** Remotion camera-only motion is the
  Day 1 v1 limitation — the frame moves but the artwork does not animate,
  so captions/overlays may carry the story. The shot list's muted test is
  therefore load-bearing: if the finished reel fails muted, report it
  honestly to Vishnu; do NOT silently switch to a paid video model. Any
  paid-model switch needs a fresh approval with a fresh cost cap.
- **Voiceover cost (resolved after this supersession was first written):**
  Helio via the existing TTS tool is $0 per prior-build producer records
  (Memory Tax cost-plan 2026-11-02; RAG phase-a-report 2026-10-28) —
  see cost-report.md § Voiceover. Standing rule: if the TTS tool ever
  presents a charge at render time, stop and report, do not pay.
- **Full Phase 2 cost report:** cost-report.md in this folder — $0 cash,
  0 credits for visuals; cleared on cost to proceed subject only to the
  Helio voiceover cost confirmation above. Delivery to Vishnu is NOT
  posting.

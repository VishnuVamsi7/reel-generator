# Day 2 — "Who Verifies the Tools?" — Cost report: Remotion-only build (Phase 2)

**Reel:** Day 2 Paper Breakdown, Instagram page your.ai.toolkit
**Paper:** William Jeffries, arXiv:2610.32110 (preprint, not peer-reviewed)
**Date of this report:** 2026-11-04 (evening, CST)
**Build route:** Remotion camera navigation inside the intact supplied images,
on the VM only (Remotion / OpenMontage). This report covers COST and
production tracking only. It does not render video, does not post, and does
not authorize any purchase, subscription, top-up, or credit spend.

## Cost totals — Remotion-only build

| Item | Cash | Credits | Notes |
| --- | --- | --- | --- |
| Remotion / OpenMontage camera moves (VM-side) | $0 | 0 | Pan + push-in inside intact pic1/pic2/pic3; no GPU render farm, no cloud render |
| ffmpeg (assembly, trimming, encoding) | $0 | 0 | Local tool on the VM |
| Designed overlays (Remotion / PIL, words only) | $0 | 0 | No AI-drawn text; overlays are designed, not generated |
| Supplied images pic1/pic2/pic3 | $0 | 0 | Already supplied; stay INTACT, full-frame, never cut/masked/rotated/segmented |
| LTX 2B distilled (laptop) | $0 — NOT USED | 0 | Skipped by Vishnu 2026-11-04 20:53 CST; no SSH, no laptop work, no ComfyUI |
| Veo 3.1 via Google Flow | $0 — NOT USED | 0 | Removed by Vishnu 2026-11-04 20:52 CST; no Flow credits spent, no balance drawn on |
| fal.ai / Kling | $0 — NOT USED | 0 | Blocked: key names present in OpenMontage .env, values empty; no account, no top-up |
| Higgsfield | $0 — NOT USED | 0 | Blocked: key/secret names present, values empty; no plan, no access given |
| Seedance / Replicate / Volcengine | $0 — NOT USED | 0 | Blocked on the same basis; no keys, no spend |
| Runway | $0 — NOT USED | 0 | No key, no plan, no spend |
| LTX API / Veo API | $0 — NOT USED | 0 | No API keys in hand; no API call made |
| Subscription or top-up | $0 | 0 | None purchased, none authorized |
| Voiceover (Helio, via existing TTS tool) | $0 | 0 | Per prior-build producer records — see § Voiceover |
| **TOTAL for this build** | **$0** | **0** | No paid service, no subscription, no top-up |

## Explicit non-use statement

- **LTX NOT used.** No laptop render, no ComfyUI session, no SSH session.
  The unconfirmed SSH host-key fingerprint from Step 0 is NOT acted on:
  nothing was added to known_hosts for this build, and no login was made.
- **Veo NOT used.** No Google Flow generation, no free-credit draw, no
  Quality/Fast/Lite clip. The earlier checked balance (50 free credits,
  Lite 10/clip = 5 clips exactly, no retakes) is now irrelevant to this
  build because Veo was removed; it is recorded in the supersession below
  for history only.
- **No SSH / laptop work.** The laptop does not need to be on, awake, or
  plugged in for this build. Nothing in this build waits on the laptop.
- **No fal / Higgsfield / Runway / API spend.** No account was created,
  no balance was funded, no key was entered, no estimate endpoint was
  called for this build.
- **No subscription or top-up.** Google AI Pro, fal top-up, and any
  Higgsfield plan remain OUTSIDE this build's cap and unapproved.

## Tools the build WILL use

1. **Remotion / OpenMontage on the VM** — camera navigation (push-in, pan)
   inside the intact 720×1280 images, per shot-list.md beat framing.
   Cost: $0. No laptop GPU needed.
2. **ffmpeg (VM-local)** — assembly, trimming to measured voiceover
   boundaries, 720×1280 mp4 encoding, cover jpg export. Cost: $0.
3. **Designed overlays (Remotion / PIL)** — on-screen words only from
   designed overlays (shot-list overlays: "Clean in. Warped out.",
   "Approved anyway.", "Say what's left out." + "Follow for a paper a day."),
   plus any paper-figure overlays ONLY if Vishnu approves them separately
   (candidates "20 of 4,772", "90 / 90 flipped" — with the three-family
   scope note; see fact-check.md). Cost: $0.
4. **Helio voiceover** — see § Voiceover. This is the ONLY cost item in
   this build that this report does NOT certify as $0.

## Voiceover — cost VERIFIED from prior-build records ($0)

- Spec: Helio, ONE pass, ONE fixed speed, calibrated to **135–140 wpm**,
  **89 words**, target **under 40 s** (38.1 s at 140 wpm, 39.6 s at 135 wpm
  per script.md; 41.1 s at 130 wpm — over cap, so 130 wpm is NOT acceptable).
  Never time-stretch, speed up, or pad audio; if a render runs over 40 s,
  cut words and re-render the whole voiceover in one pass.
- **Cost basis: $0, verified from prior-build producer records (not
  assumed).** Helio is voice ID `avocado_v2:MAI_03`, the default voice of
  the existing VM TTS tool (`/opt/hatch/bin/tts`, Meta Shortwave API —
  its `--help` shows no price, so this is not a live price quote).
  Prior producer records price it at $0 via that existing tool:
  Memory Tax cost-plan (2026-11-02) — "Helio, single pass, fixed speed
  85, via the existing TTS tool … $0"; RAG phase-a-report (2026-10-28) —
  "Helio, existing TTS … $0". The producer role file's Fish Audio
  pricing is a different voice tool and was NOT used as evidence here.
- **Caveat, stated plainly:** the $0 is the standing cost basis from
  those prior builds using the same existing tool — not a fresh vendor
  price check. If the TTS tool ever presents a charge at render time,
  the generator must stop and report it rather than pay; that has not
  happened in the prior builds cited.

## Why this build is $0 on visuals (and what that does NOT buy)

Remotion camera navigation is the $0 fallback already named in the Phase 1
cost plan: it costs nothing because it moves a camera inside an existing
still instead of generating new pixels. That is also its limit (see
§ Quality risk). The $0 figure is a cost fact, not a quality claim.

## Supersession of the Phase 1 cost plan (history preserved, not rewritten)

The Phase 1 cost plan (cost-plan.md) remains as written — it is the audit
record for the LTX-primary + Veo-fallback plan approved 2026-11-04
20:43 CST ($0 cash cap). This section supersedes it for Phase 2; it does
not edit or delete the Phase 1 text. The same dated supersession is
appended to cost-plan.md itself.

- **2026-11-04 20:43 CST — Phase 1 approved:** 89-word script as final;
  LTX 2B distilled primary (gated by one 8 s test clip) + Veo 3.1 Lite
  via Flow fallback; total cap $0 cash, Veo fallback capped at 150 credits
  across free days.
- **2026-11-04 20:49 CST — Veo balance checked (read-only, $0 spent):**
  Flow Free plan, 50 credits, Lite 10/clip — 5 clean clips exactly, no
  retakes; 7–8 clips for 2–3 takes = 70–80 credits, over that day's balance.
  The 150-credit fallback cap therefore did NOT fit in one day.
- **2026-11-04 20:52 CST — Veo REMOVED by Vishnu:** "replace Veo, use what
  are available." Veo is out of this build entirely — no Flow generation,
  no credit draw.
- **2026-11-04 20:53 CST — LTX SKIPPED by Vishnu:** "SKIP LTX, build with
  Remotion camera now." LTX is out of this build entirely — no SSH, no
  laptop work, no ComfyUI, no test clip. The Step 0 SSH host-key
  fingerprint remains unconfirmed and unused.
- **Replacement fallback / new primary: Remotion camera (VM-side).**
  No laptop, no credits, no account needed. This was the Phase 1
  "$0 fallback that is always available," now promoted to the build route
  by Vishnu's decision — not by the producer re-deciding providers.
- **Blocked routes unchanged:** Kling/fal, Higgsfield, Seedance /
  Replicate / Volcengine, Runway, LTX API, Veo API — all still blocked
  (key names present in OpenMontage .env, values empty). None is used
  as a fallback for this build unless Vishnu separately approves a
  purchase/access route.

## Quality risk (NOT a cost risk) — Remotion camera-only motion

This risk is flagged because it affects whether the reel is good, not
whether it costs money:

- Remotion camera-only motion is the **Day 1 v1 limitation**: the frame
  moves (push-in / pan) but the artwork itself does not animate, so the
  story can end up carried by captions/overlays rather than by moving
  visuals. Day 1 v1 proved the route works and proved that limit.
- Mitigations already in the shot list (not new producer decisions):
  all 3 beats were designed to PASS the muted test with captions off
  (story visible in image + camera end-frame + designed overlay);
  Beat 2's end frame deliberately keeps the warped panel's gaps AND the
  approval marker together; Beat 1 keeps the funnel edge in the end
  frame; Beat 3 keeps the set-aside pieces in the end frame.
- The QC muted test (below) is therefore load-bearing for this build:
  if the finished reel fails muted, the failure is a quality failure to
  report to Vishnu — NOT a reason to silently switch to a paid video
  model. Any switch to a paid model needs a fresh approval with a fresh
  cost cap.

## Credential check (reel folder, 2026-11-04)

Checked every file in
`workspace/instagram/reels/2026-11-04-who-verifies-tools/` (text files by
pattern scan; PNGs by metadata-string scan):

- **No private credential value found.** No API key, password, secret,
  token, or private-key value appears in any reel-folder file.
- Key NAMES only appear in cost-plan.md (fal / Kling / Higgsfield /
  Google API key names, recorded as EMPTY) — names only are fine.
- Note (not a credential finding): ssh-hostkey-step0.md contains public
  host-key verification material (a public key and fingerprints, i.e.
  the material you compare against, not a secret that grants access).
  No private key or login credential is in that file. It is left as-is
  as the Step 0 record; it is NOT used by this build and no value from
  it is copied into this report.
- If a future check finds an actual secret value in this folder, the
  rule is: report only the filename, do not copy the value anywhere,
  and remove the value from the folder.

## Spend log (actuals for this build — to be updated as generation runs)

| Date | Shot / item | Provider | Cash | Credits | Take |
| --- | --- | --- | --- | --- | --- |
| 2026-11-04 | Cost report + supersession (this file) | Producer tracking only | $0 | 0 | — |
| — | Voiceover (pending) | Helio via existing TTS tool | $0 (planned, per prior-build records) | 0 | — |
| — | Camera moves + assembly (pending) | Remotion / ffmpeg (VM) | $0 (planned) | 0 | — |

No generation endpoint has been called for this build at the time of
this report. No credits have been spent. Nothing has been posted.

## Production checklist — generator / editor / QC handoff

### Inputs present (verified in the reel folder)

- [x] Script: script.md — 89 words, approved as final 2026-11-04 20:43 CST
  (note: script.md header still says "DRAFT FOR VISHNU'S APPROVAL" —
  the approval at 20:43 CST supersedes that header; coordinator to
  confirm the header is updated or annotated so the generator does not
  treat the approved script as a draft).
- [x] Images: pic1.png, pic2.png, pic3.png — all 720×1280, intact,
  no text/person/logo. Must stay INTACT, full-frame throughout.
- [x] Shot list: shot-list.md — 3 beats, cut transitions only, camera
  lines per beat (Beat 1 push-in + pan, Beat 2 push-in, Beat 3 pan +
  push-in), designed overlays per beat.
- [x] Fact-check: fact-check.md — figures traced to arXiv:2610.32110
  full text (HTML rendering); PDF re-confirmation still open (see Gates).
- [x] Cost plan + this cost report: Phase 1 cost-plan.md (superseded,
  preserved) + cost-report.md (this file, Remotion-only, $0 visuals).

### Voiceover spec (for the generator)

- Voice: Helio. One pass, one fixed speed — never time-stretch, speed,
  or pad.
- Pace: calibrated to **135–140 wpm**. 89 words → 38.1–39.6 s.
  Hard cap: **under 40 s**. At 130 wpm the script runs 41.1 s — reject
  that pace; cut words and re-render whole if needed, do not stretch.
- Per-sentence pace check per the standing reel rules (any sentence
  >8% off the average → rewrite + re-render the whole voiceover).
- Cost gate: voiceover $0 basis is the prior-build record in
  § Voiceover; if the TTS tool presents any charge at render time,
  stop and report — do not pay.

### Output spec (for the editor)

- Video: **720×1280 mp4**, 9:16, ~38–40 s (trimmed to measured
  voiceover boundaries).
- Cover: **cover jpg** (720×1280) for the post.
- All on-screen words from designed overlays only. No AI-drawn text.
  No numbers in overlays unless Vishnu separately approves the exact
  overlay text (see § Tools).
- Cut transitions between pic1 → pic2 → pic3. No morph between images.
- Faceless: no employer/company name, no portfolio/chatbot/real-project
  reference, no personal info, no person on screen. Description must
  say preprint, not peer-reviewed.

### Gates — ALL must pass before delivery to Vishnu

Delivery is NOT posting. Nothing posts until Vishnu approves the
finished file separately.

1. **Dead-air gate:** no silent gaps, no padded audio; cuts land on
   measured voiceover boundaries.
2. **OCR gate:** every clip OCR'd; no AI-drawn readable text anywhere;
   overlays match the approved designed text exactly.
3. **Faceless gate:** no employer/company name, portfolio, real-project
   or metric reference, personal info, or person/logo in video, cover,
   or overlays.
4. **Muted test (load-bearing for this build):** with captions off and
   sound off, each beat's story must still read from image + camera
   end-frame + overlay (Beat 1: clean → warped; Beat 2: gaps + approval
   marker together; Beat 3: complete grid + set-aside pieces). Report
   honestly whether captions carry the story — if they do, that is the
   known camera-only limitation, to be reported, not hidden.
5. **PDF figure re-confirmation gate:** before delivery (and strictly
   before any post), re-confirm the two headline figures against the
   downloaded PDF — 20 of 4,772, and 90/90 flips (30/30 → 0/30 in each
   of scope, completeness, uncertainty only; provenance 18/30 → 14/30
   did NOT flip and must go in the description, and Pic 3 must not be
   captioned as if everything is fixed).
6. **Intact-image gate:** pic1/pic2/pic3 appear full-frame and intact
   throughout — no crop, mask, rotation, segmentation, or recreated
   background. Any take that breaks an image is rejected.
7. **Cost gate:** actual spend filed in the spend log above; visuals
   $0, credits 0; voiceover cost confirmed and filed before delivery.
   Any over-cap or paid-model need stops the build for Vishnu's
   re-approval — no silent spend.

## Clearance (cost only)

**CLEARED ON COST TO PROCEED:** the full build — Remotion / ffmpeg /
designed overlays plus Helio voiceover via the existing TTS tool — is
$0 cash, 0 credits, with no paid service, no subscription, and no
top-up, inside Vishnu's $0 plan as amended 20:52–20:53 CST. The one
standing condition is the render-time rule: if the TTS tool ever
presents a charge, stop and report rather than pay. Quality clearance
is separate: the camera-only limitation and all gates above are for the
generator/editor/QC to pass and report honestly, and delivery to
Vishnu is not posting.

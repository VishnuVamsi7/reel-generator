# LTX test clip — Day 2 Pic 1 — TEST REPORT

**Verdict: FAIL — LTX 2B is NOT viable for animating the supplied paper images.**

- Test date: 2026-11-05, submitted 16:50:16 CST (22:50:16 UTC), finished ~16:55 CST
- Test clip: [ltx-test-pic1-8s.mp4](sandbox://workspace/instagram/reels/2026-11-04-who-verifies-tools/ltx-test-pic1-8s.mp4) — 768×1280, 24 fps, 193 frames, 8.04 s, 1.48 MB (from `ltx-test-pic1_00001_.webm`, 2,064,769 bytes, VP9)
- Source: Day 2 Pic 1, `pic1.png` (720×1280, clean teal grid left, funnel centre, warped panel right, text-free)
- Cost: **$0 cash, 0 credits. Nothing posted.**

## Step 0 — SSH host key (done, then confirmed by Vishnu)

- Fresh retrieval on 2026-11-05 (ssh-keyscan via the Tailscale tunnel proxy, handshake-only, no login): ssh-ed25519, **SHA256:kE+b63qoBleOxyAeoLRTWAu3i9qv+mNc70y47G2XsDE**, MD5 `f1:b5:6b:b7:d3:b4:84:ed:97:c2:d4:24:9b:08:d4:52` — **exact match to the Nov 4 fingerprint**.
- Vishnu confirmed it himself at 16:41 CST from admin PowerShell (`ssh-keygen -lf C:\ProgramData\ssh\ssh_host_ed25519_key.pub` → same SHA256, `system@MSI`).
- The confirmed key was added to known_hosts only after that confirmation. One snag, recorded for next time: the VM's `ssh` reads `/root/.ssh/known_hosts`, not `/home/hatch/.ssh/known_hosts` — the key had to be copied to `/root/.ssh/known_hosts` before login worked. The helper `~/workspace/laptop-ssh.sh` (socat ProxyCommand via the port-3130 tunnel proxy, key `~/.ssh/id_ed25519`, user `saivi`) then logged in as `msi\saivi` in ~2 s.

## Laptop / ComfyUI state (verified live)

- Laptop: MSI, on, reachable via Tailscale as `msi` (100.91.17.3), C: ~59.8 GB free at check time (later listings showed up to ~141 GB free — the drive figure varied between listings; not relied on).
- ComfyUI **0.43.0** (frontend 1.57.4), at `C:\Users\saivi\video-gen\ComfyUI`.
- LTX checkpoint: `models\checkpoints\ltxv-2b-0.9.8-distilled-fp8.safetensors` (4,461,695,684 bytes) — present.
- T5 encoder: `models\text_encoders\t5xxl_fp8_e4m3fn.safetensors` (4,893,934,904 bytes) — present.
- ComfyUI was NOT running on port 8188 at the start (expected — stopped Oct 26/27). The detached `start_comfy.ps1` launch did **not** start it (no Python process, empty logs); ComfyUI was then run in the foreground over SSH, as in the Oct 26/27 report, and answered on 8188 after ~3 min (system_stats: comfyui_version 0.43.0, RAM total 16,865,853,440, RAM free only 1,640,628,224 at that moment).
- After the test, ComfyUI was stopped with `taskkill /F /IM python.exe` (2 PIDs terminated), no Python process left running, VRAM back to 563 MiB, GPU 59 °C. Laptop left clean.

## Workflow / prompt / settings (exact)

Reused the proven Oct 26/27 API prompt (`ltx-2b-test-1-api-prompt.json`), saved as `ltx-test-pic1-prompt.json` in this folder, with only these changes:

- `LoadImage`: `pic1-day2.png` (the padded 768×1280 copy — see below)
- Positive prompt: "Slow cinematic push-in and gentle left-to-right pan across a flat vector illustration: a solid teal grid of square blocks on the left, a pinching funnel filter in the centre, and a warped panel of gapped, tilted teal blocks on the right, on a deep navy blue background. The clean grid stays solid, the warped panel stays warped with its gaps, smooth subtle motion, no text, no letters, no numbers, no logos, no UI labels, no people, no faces."
- Negative prompt: unchanged from the Oct test (low quality, deformed, motion smear, warping text, garbled letters, extra text, etc.)
- `LTXVImgToVideo`: width 768, height 1280, length 193, batch 1, strength 1.0; `LTXVScheduler` 8 steps, max_shift 2.05, base_shift 0.95, stretch true, terminal 0.1; euler, cfg 3; seed 987654321; `LTXVPreprocess` img_compression 40; `SaveWEBM` VP9, 24 fps, crf 12, prefix `ltx-test-pic1`.
- Prompt ID: `1ba2ac51-fe5b-4dff-80e6-1cbff61cbda4`.

**Resolution note (recorded, not silent):** the proven output size is 768×1280 (3:5), but Pic 1 is 720×1280 (9:16). LTX would have cropped the sides (as it did in the Oct test). Instead the image was **padded, not cropped**: 24 px of the image's own corner background colour (10,22,40) on each side, giving 768×1280 with every original pixel intact. The padded file (`pic1-day2.png`) was copied to `ComfyUI\input\`.

**Render time:** prompt submitted 22:50:16 UTC; output file finished ~22:55 UTC — ~5 min total, matching the Oct test (~290 s execution). GPU during sampling: 4,720 MiB used, 84 °C, 100% utilisation (steady state, same as Oct). Peak VRAM was not re-logged this run; the Oct peak was 7,020/8,188 MiB.

## QC — frame by frame (the decisive part)

Frames in `ltx-test-frames/` (t=0, 1, 2, 4, 8 s). PSNR/MAD are against the padded 768×1280 source still.

| Frame | vs source | What the eye sees |
|---|---|---|
| t=0 s | PSNR 33.85, MAD 3.56 | **PASS.** Faithful reproduction: 3×4 clean grid with amber centre block, funnel, warped panel with gaps/tilted block. |
| t=0.5 s | PSNR 15.19 | Already breaking: grid starting to tile/repeat. |
| t=1 s | PSNR 10.64 | **FAIL.** The clean grid is replicated into endless vertical columns left and right, the funnel legs have turned pink-white and stretched, the warped panel is gone, the amber accent is gone. |
| t=1.5 s | PSNR 8.16 | Morph complete. |
| t=2 s | PSNR 8.11, MAD 72.88 | **FAIL.** A giant tiled teal grid fills the frame, the funnel is a huge hourglass/triangle, the original composition is unrecognisable. |
| t=4 s | PSNR 8.10 | Same morphed image as t=2. |
| t=6 s | PSNR 8.11 | Same morphed image. |
| t=8 s | PSNR 8.06, MAD 73.52 | Same morphed image. |

Motion between frames (PSNR, higher = less change):
- t0→t2: 7.97 (the morph — huge change, but it is destruction, not camera movement)
- t2→t4: 25.38, MAD 3.68; t4→t6: 25.91, MAD 3.24; t6→t8: 26.13, MAD 2.92 — slow drift only. Motion effectively stalls after ~2 s, the same pattern as the Oct test (there: frame 96→192 PSNR 42.65, near-frozen).

**QC verdict per criterion:**
- No crop: PASS at t=0 (padding, not crop); the later frames are not a crop of the source at all.
- No smear: FAIL — the artwork smears into a tiled texture by 1 s.
- No morph: **FAIL — total morph by 1–2 s.** The 3×4 grid becomes an endless grid, the funnel becomes a giant hourglass, the warped panel disappears, the amber accent disappears.
- No redrawn/gibberish elements: FAIL in the broader sense — no text was present to garble (the art is text-free), but the model still redrew the artwork into something else entirely.
- Motion through the whole clip: FAIL — real change only in the first ~2 s (the morph), then near-frozen drift for the remaining 6 s.
- Camera move readable: FAIL — what reads is not a push-in/pan; it is a generative tiling/morph.
- Artwork proportions preserved: FAIL — proportions, counts, and layout are all destroyed.

## Verdict

**LTX 2B distilled does NOT clear the bar for animating the supplied paper images.** This is worse than the Oct 26/27 failure: there the model re-drew *text* into gibberish while the composition roughly held; here, on text-free flat vector art, it destroys the composition itself within 1 second — it treats the repeating square blocks as a texture to tile endlessly. Strength 1.0, the "no text" phrase, and the negative prompt did not prevent it. The first frame is faithful, so the engine can reproduce a still; it cannot *move* this kind of artwork without rewriting it.

**Recommendation: do NOT use LTX for a Day 2 re-render or for Day 3's supplied images.** The next steps, in the order Vishnu already ranked them, are:

1. **Veo tomorrow** — 50 fresh free credits, Lite 10/clip: 5 clean clips, no retakes. First-last (Frames to Video) is the strongest intact-image story in hand, still subject to morph QC.
2. **Paid model** — Kling via fal (~$2–6/reel) or Higgsfield Wan/Seedance (~$3–14/reel); both need a key/account and Vishnu's separate approval, and both need the same morph QC.
3. **Reference-first / layered** — a motion reference and an 8 s test clip approved before any full build; and/or artwork supplied as separate layers so each layer can move without the model rewriting the whole image.
4. **Remotion camera** (what the posted Day 2 already is) — preserves the artwork, but it is camera motion only, not true animation; it is the fallback, not the quality fix.

No further LTX runs on supplied images are recommended without a different technique (e.g. much lower strength, 2–3 s clips, or multi-keyframe pinning with a designed end frame) — and any such run must be gated by this same frame-by-frame QC, not assumed to work.

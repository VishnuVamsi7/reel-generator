# LTX end-card clip — run report
Date: 2026-10-26/27 (submitted 04:13:32 UTC Oct 27 / 23:13:32 CDT Oct 26)
Page: your.ai.toolkit — Gmail reel end card / CTA background (NOTHING posted)

## Output
- `ltx-endcard.mp4` — 768×1280, 24 fps, 193 frames, 8.041667 s, 712,091 bytes (libx264 crf 18)
- Source webm on laptop: `C:\Users\saivi\video-gen\ComfyUI\output\gmail-endcard_00001_.webm` (231,966 bytes)
- Source still: `ltx-still-navy.png` (768×1280, copied to laptop as `ComfyUI\input\gmail-endcard-still.png`)
- Seed: 8942442758647830977. Settings per Phase 1: 8 steps, euler, cfg 3, strength 1.0, frame_rate 25, img_compression 40, LTXVScheduler max_shift 2.05 / base_shift 0.95 / stretch / terminal 0.1. Positive prompt: slow gentle drift, dark navy abstract, soft teal light shapes, no text/letters/numbers/logos/UI/people/faces. Negative: Phase 1 anti-garble list unchanged.
- Prompt ID: d1979db0-6fd4-4c88-a509-a631fe0389e7

## Timings (UTC)
- Server start ~04:11, ready (system_stats) ~04:13
- Prompt submitted 04:13:32, execution_success 04:17:37, file on VM 04:17:44
- Submit-to-file: ~4 min 12 s (faster than Phase 1's 5 min 18 s)

## VRAM / GPU (sampled every 20 s; log: /tmp/ltx-endcard-vram.log)
- Peak VRAM: 6,606 MiB / 8,188 MiB (81%) at VAE decode (04:16:49); text-encode peak 6,583 MiB
- Sampling steady state: ~5,800–5,880 MiB, 100% GPU util
- Peak GPU temp: 87 C
- Idle after server stop: 864 MiB, 63 C

## Frame check — PASS (no text anywhere)
- t=0 (frame-start): teal-navy gradient, soft light shapes, no text
- t=4 (frame-mid): darker navy, no text
- t=8 (frame-end): dark navy, no text
- Check frames: `ltx-endcard-frame-start.jpg`, `ltx-endcard-frame-mid.jpg`, `ltx-endcard-frame-end.jpg`
- Caveat: the clip DARKENS substantially over its length — mean brightness 50.2 at t=0 → 13.8 at t=5, recovering to ~18.8 by t=7. The soft teal shapes largely wash out by ~3–4 s and the second half is near-black navy. No freeze (brightness keeps changing), but it reads as a fade-to-dark rather than a gentle drift. Still usable as a dark background behind designed CTA overlays; if the teal needs to stay visible, re-render with a stronger prompt / lower strength or use only the first ~3 s.

## Problems hit
1. First readiness poll used the default egress proxy (port 3128) and failed — the tailnet tunnel proxy is port 3130 (`${HTTPS_PROXY%:*}:3130`). Fixed by using port 3130.
2. First /prompt POST returned `{"error": {"type": "no_prompt"}}` — the raw prompt dict was sent unwrapped. Fixed by wrapping as `{"prompt": {...}, "client_id": ...}`. (Phase 1's saved file is the bare prompt; the wrapper is required.)
3. `wmic process ... get CommandLine` failed under SSH (exit 1) while identifying the server PID — tasklist alone was sufficient (ComfyUI python.exe PID 54640, 360 MB).

## Laptop left clean
- ComfyUI server stopped via `taskkill /F /PID 54640`; verified: no python.exe running, port 8188 closed, VRAM 864 MiB.

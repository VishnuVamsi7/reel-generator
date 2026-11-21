# Free stock footage for reels — `workspace/instagram/footage/`

Real moving B-roll under designed overlays, at $0. This is OpenMontage's
free-footage path, wired into the reel pipeline: it uses OpenMontage's own
stock-source adapters (`openmontage/tools/video/stock_sources/`) — no
reimplementation, no paid APIs.

## The tool

```
python3 fetch.py "<query>" --beat "<beat description>" [--sources ...] [--clip-secs 6]
```

- Searches each available source, downloads the best candidate per
  source, centre-crops it to **720×1280 (9:16), 30 fps, no audio** (B-roll
  is muted under the voiceover), trims it to `--clip-secs` (default 6 s).
- **Two gates, both must pass:**
  1. **Dead-air** — the reel pipeline's own check (`../qc/dead-air-check.py`,
     freezedetect −60 dB / 0.6 s). A clip that is effectively a still fails.
  2. **OCR text** — RapidOCR on 3 sampled frames. B-roll must carry **no
     words** (page rule: all on-screen words are designed overlays). Any
     readable text — baked-in captions, news chyrons, title cards — fails
     the clip.
- Writes `manifest-<query>.json` in the output dir recording source,
  source URL, creator, **licence**, dead-air + OCR results, and failures.
- `--search-only` previews candidates without downloading.
- `--count N` produces up to N passing clips per source (default 1).
- Exit code 0 if at least one clip passed, 1 otherwise.
- Failing clips are kept on disk but flagged in the manifest — never use
  them in a reel.

**Output layout:** `<out>/<query>-<source>-<n>-9x16.mp4` (finished clips),
`<out>/raw/` (downloaded originals), `manifest-<query>.json`.

## Sources

| Source | Key needed | Licence | What it's actually good for |
|---|---|---|---|
| `archive_org` | **No** | Public domain / CC (verify per item) | Vintage documentary, industrial, educational film (Prelinger). **Not** modern tech — its search is keyword-noisy and returns TV ads, news footage, and spam-tagged uploads. |
| `wikimedia` | **No** | CC / public domain (verify per file) | Sparse video holdings; often static-camera. Occasionally good for a specific named subject. |
| `nasa` | **No** (optional `NASA_API_KEY` for higher rate limits) | Public domain (NASA Media Usage Guidelines; partner material occasionally included — vet before publishing) | Space, Earth observation, science visualisation. Good for science/ambition beats and abstract textures. |
| `pexels` | **Yes — free key** (see below) | Pexels Licence (free, no attribution required) | **The one with modern B-roll** — server rooms, people typing, offices, tech. This is where literal "server room / neural network" footage lives. |

## Pexels — the key step (for Vishnu)

The no-key sources cannot supply literal modern tech B-roll (proven in
testing — see "Honest limitations"). Pexels can, and its key is free:

1. Go to **https://www.pexels.com/api/** and click **"Get Started"** /
   **"Generate API Key"** (free account, no card).
2. Copy the key. It goes in the environment as `PEXELS_API_KEY` — put it
   in `~/workspace/instagram/openmontage/.env` as
   `PEXELS_API_KEY=<key>` (that file is already loaded by OpenMontage's
   tooling) or export it before running `fetch.py`.
3. Re-run with `--sources pexels` (or all four). No code change needed —
   `fetch.py` picks it up automatically and reports `pexels: available`.
4. Never paste the key in chat. If it ever leaks, regenerate it on the
   same page.

Pixabay (`PIXABAY_API_KEY`, free at pixabay.com/api/docs/) is the same
pattern and is also wired in OpenMontage's adapters, but `fetch.py`
does not call it yet — one small addition if Pexels is not enough.

## What the reel builder should call

```bash
# One beat's background (6 s default, longer with --clip-secs):
python3 ~/workspace/instagram/footage/fetch.py "server room" \
  --beat "Beat 4: the agent acts on a server" \
  --out ~/workspace/instagram/reels/2026-10-28-paper/footage

# With a Pexels key set, add it to the source list for modern B-roll:
python3 ~/workspace/instagram/footage/fetch.py "server room" \
  --sources archive_org,wikimedia,nasa,pexels \
  --out ~/workspace/instagram/reels/2026-10-28-paper/footage
```

Use the finished `*-9x16.mp4` clips as the background layer in Remotion
(they are already 720×1280 @ 30 fps, no audio) with the designed overlay
on top. **Do not use clips whose manifest verdict is not PASS.**

## Honest limitations (measured 2026-10-28, 7 queries)

- **Topical hit rate is low for modern AI topics.** Across
  "neural network", "server room", "documents papers", "data center",
  "computer", "typewriter" (plus a "robot" query that timed out in
  Archive.org's slow search): the gates correctly rejected TV news
  footage with baked-in chyrons, a near-static slideshow, a phone ad,
  and a static-camera Wikimedia clip — but the passing clips are mostly
  **abstract textures**, not literal illustrations. The gates check
  motion + text, not meaning.
- **A human eye-check is mandatory.** One clip passed both automated
  gates and was a revolver firing (spam-tagged Archive.org upload) —
  it was rejected on sight and deleted. Never put a fetched clip in a
  reel without viewing a frame first.
- **Archive.org search is slow** (up to ~21 HTTP calls per search, 30 s
  timeouts per call). A query can take 1–4 minutes; a bad one can hang
  for 8+ minutes. `timeout 240` is a sensible wrapper.
- **Wikimedia returned 0 video candidates for most queries** (sparse
  video holdings). NASA only answers space/science queries. The
  Wikimedia API itself is flaky under load — it returned HTTP 503
  during verification, which is why one good robot clip (DIY Arduino
  robot hand, both gates passed, eye-checked) sits in `test-clips-v2/`
  with its provenance pending: see `verified-manifest.json`
  `pending_provenance`. Do not use it until its source page is
  identified — re-run `fetch.py "robot"` when the API recovers.
- **Resolution is modest.** Sources are typically 480p–1080p landscape;
  the 9:16 centre crop discards the sides and upscales the rest. Fine
  for a background under overlays, not for a full-screen hero shot —
  that is still Veo's job.
- **OCR gate is strict by design:** any RapidOCR word at ≥0.5
  confidence fails the clip, including a single letter (e.g. a logo).
  If a clip is clean to the eye but trips on a trivial mark, that is a
  human call — edit the manifest by hand and note the override. Do not
  weaken the gate in code.

## Verified test clips

`verified/` — 3 clips, all dead-air PASS + OCR PASS + eye-checked. See
`verified/verified-manifest.json` for full provenance. They are
**abstract/ambient backgrounds**, not literal illustrations (see the
manifest's `topical_fit` notes):

1. `verified/computer-nasa-1-9x16.mp4` — NASA "Hack Into Computer
   Science" promo; public domain; 6 s.
2. `verified/data-center-nasa-1-9x16.mp4` — NASA Landsat NDVI satellite
   visualisation; public domain; 6 s. Used in `test-composite.mp4`.
3. `verified/data-center-archive_org-1-9x16.mp4` — "Obama. Digital.
   2009" documentary, animated pictogram people; public domain/CC; 6 s.

`test-composite.mp4` — 5 s proof the pipeline works end to end:
NDVI footage + designed overlay ("AI doesn't know things. / It looks
them up." + "RAG — search first, answer second"), dead-air PASS.
Overlay built with ffmpeg drawtext (DejaVu Sans); the real reels use
Remotion overlays, not drawtext — the composite only proves footage +
words compose cleanly. Tip: keep drawtext headlines ≤48 px at 720 wide.

`test-clips-v2/` — the full working run (all queries, manifests, raw
downloads, per-clip dead-air/OCR JSONs, eye-check frames). The rejected
clips are listed in `verified/verified-manifest.json`.

## What was NOT wired

- **Pexels without a key** — the adapter is imported and works, but
  `is_available()` is False until `PEXELS_API_KEY` is set. See the key
  step above.
- **Pixabay** — adapter exists in OpenMontage; not called by `fetch.py`
  yet.
- **OpenMontage's CLIP-indexed corpus** (`lib/corpus.py` +
  `tools/video/corpus_builder.py`) — the full documentary-montage
  pipeline that embeds every clip and retrieves by similarity. That is
  a bigger build (embedding model, index, retrieval) for when the page
  needs a standing B-roll library rather than per-beat fetches. This
  utility is the per-beat path; the corpus is the next step if volume
  justifies it.
- **Mixkit / Videvo adapters** — present in OpenMontage but untested
  here; they scrape rather than use an API and are lower priority than
  Pexels.

# Day 2 Phase 2 — Step 0: SSH host-key report (2026-11-04)

## Status: BLOCKED, awaiting Vishnu's confirmation of this fingerprint

No SSH login was attempted, no credential was used, and nothing was added
to known_hosts. The fingerprint below was obtained by a handshake-only
connection (banner + key exchange) through the Tailscale tunnel proxy to
the laptop (tailnet name `msi`).

## Presented host key

- Key type: ssh-ed25519
- SHA256 fingerprint: `SHA256:kE+b63qoBleOxyAeoLRTWAu3i9qv+mNc70y47G2XsDE`
- MD5 fingerprint: `f1:b5:6b:b7:d3:b4:84:ed:97:c2:d4:24:9b:08:d4:52`
- Public key (base64): `AAAAC3NzaC1lZDI1NTE5AAAAIL+cFvTi6onmE+T+0UVKy1sT3D958qTU5lte/cpHG4Rw`

## What this means

- If Vishnu confirms this fingerprint matches the laptop's host key
  (compare it on the laptop, e.g. the SSH server host key fingerprint
  shown in Windows OpenSSH), the parent may add it to known_hosts and
  Phase 2 LTX work may proceed.
- If it does NOT match, do NOT proceed — stop and investigate; do not
  blindly accept it.
- Until confirmation, no LTX test clip, no ComfyUI work, and no other
  Phase 2 generation has started. Script approval and the $0 LTX + Veo
  plan approval (2026-11-04 20:43 CST) stand, but are on hold behind
  this blocker. Veo Flow balance is being checked separately by the
  parent; no Veo credit has been spent.

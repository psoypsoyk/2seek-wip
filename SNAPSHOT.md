# 2SEEK WIP snapshot — 2026-09-18

Separate backup of the DJ session (not the live `2seek` repo).

Included in this snapshot:

- Waveform zoom (1–32 beats) + overview strip
- Quantize (Q) for CUE / hot cues / loops
- Beat jump on ⏮ ⏭ (1 beat; with loop = loop move)
- Pitch bend `+` / `−` next to the pitch fader
- Draggable loop edges + loop body on the waveform

Known: still WIP. Grid origin is `t=0` (no beat-grid nudge yet). User reported additional bugs after this snapshot.

```bash
npm install
npm run dev
```

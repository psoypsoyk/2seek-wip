# 2SEEK WIP snapshot — 2026-09-18

**Separate repo** (not the live 2seek project). Public backup of the DJ session.

This dump is **not a complete clone yet**. GitHub received the scaffold + some UI files in this session. The rest of `src/` (engine, waveform zoom, store, deck panel, scripts) still lives in the Grok Build workspace.

To finish the dump: open a new Grok Build chat and say:
`долий решту файлів у psoypsoyk/2seek-wip`

What this WIP includes when complete:

- Waveform zoom (1–32 beats) + overview strip
- Quantize (Q) for CUE / hot cues / loops
- Beat jump on skip buttons (1 beat; with loop = loop move)
- Pitch bend `+` / `−` next to the pitch fader
- Draggable loop edges + loop body on the waveform

```bash
npm install
npm run dev
```

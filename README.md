# 2SEEK

Two-deck DJ mixer in the browser. Ableton-inspired UI, English + Ukrainian.


## Stack

React 19, TanStack Start, Tailwind v4, Web Audio API, Zustand.

## Run locally

```bash
npm install
npm run dev
```

Open the URL Vite prints (default port 8080).

```bash
npm run build
npm run typecheck
```

## Mix

1. Click **Enter session** / **Увійти в сесію** — demo tracks render once.
2. Load tracks on decks A and B (library or drop MP3/WAV).
3. Play both, hit **SYNC** on the incoming deck, ride the crossfader.
4. EQ, filter, loops, hot cues, FX, sampler, **REC** to save the mix.

Keyboard: `Space` play, `Z`/`X` decks, `QWER` cues A, `1–8` sampler, `?` help.

See `SNAPSHOT.md` for what this WIP backup includes.

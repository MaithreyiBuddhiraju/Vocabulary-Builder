# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```sh
npm install
npm run dev      # local dev server (Vite)
npm run build    # production build to dist/
npm run preview  # serve the production build
```

No test suite or linter is configured.

## Architecture

Lexicon is a Vite + React vocabulary-game SPA, no backend. Key files:

- [src/words.js](src/words.js) — the 132-word dataset (word, meaning, etymology, usage sentence, pronunciation, synonyms/antonyms, GRE/arcane tags). Edit here to add/change words.
- [src/game.jsx](src/game.jsx) — `GameProvider`/`useGame` context: all app state (progress per word via Leitner boxes 0-5, points, day streak, daily word picks). Persists to `localStorage` under key `lexicon_state_v1`. `statusOf(box)` maps a box number to new/learning/mastered.
- [src/App.jsx](src/App.jsx) — shell: sticky header (nav tabs, stats), routes between the three views by `mode` state (no router).
- [src/views/Daily.jsx](src/views/Daily.jsx), [Library.jsx](src/views/Library.jsx), [Quiz.jsx](src/views/Quiz.jsx) — the three modes (Daily picks, browsable/filterable library, multiple-choice quiz with spaced repetition).
- [src/components/ui.jsx](src/components/ui.jsx) — shared small UI primitives (e.g. `Ring` progress indicator).
- [src/theme.js](src/theme.js) — `T` design tokens (colors, fonts) and `tint()` helper; "Classic Library" theme (Spectral serif on warm paper). All styling is inline `style={{}}` objects using these tokens — no CSS framework/modules beyond [src/index.css](src/index.css).
- [src/speech.js](src/speech.js) — wraps browser `speechSynthesis` for tap-to-hear pronunciation.

Daily word selection is deterministic per-day via a seeded PRNG (`pickDaily` in game.jsx), so it's stable across reloads but changes daily.

The original Claude Design exploration (visual design source) is preserved in `project/`, with its chat transcript in `chats/`.

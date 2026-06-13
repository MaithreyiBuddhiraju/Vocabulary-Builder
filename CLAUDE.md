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
- [src/App.jsx](src/App.jsx) — shell: sticky header (nav tabs, stats, settings gear), routes between the three views by `mode` state (no router). The settings panel (`SettingsPanel`) holds the paper-tone swatches and "reset all progress".
- [src/views/Daily.jsx](src/views/Daily.jsx), [Library.jsx](src/views/Library.jsx), [Quiz.jsx](src/views/Quiz.jsx) — the three modes (Daily picks, browsable/filterable library, multiple-choice quiz with spaced repetition).
- [src/components/ui.jsx](src/components/ui.jsx) — shared small UI primitives (e.g. `Ring` progress indicator).
- [src/theme.js](src/theme.js) — `T` is a mutable design-token singleton (colors, fonts) plus `tint()`/`btnPrimary()` helpers; "Classic Library" theme (Spectral serif on warm paper). `CLASSIC_PAPERS` holds 6 paper-tone variants; `applyPaper(key)` mutates `T` in place and persists the choice to `localStorage` (`lexicon_paper_v1`) — components re-render via state changes in `App.jsx`, not context. All styling is inline `style={{}}` objects using these tokens — no CSS framework/modules beyond [src/index.css](src/index.css).
- [src/speech.js](src/speech.js) — wraps browser `speechSynthesis` for tap-to-hear pronunciation.

Daily word selection is deterministic per-day via a seeded PRNG (`pickDaily` in game.jsx), so it's stable across reloads but changes daily.

## PWA / deployment

The app is a PWA (`vite-plugin-pwa`, configured in [vite.config.js](vite.config.js)) — full offline precaching, manifest, and icons in [public/](public). `vite.config.js` sets `base: "/Vocabulary-Builder/"` for GitHub Pages; if the repo is ever renamed or deployed elsewhere, update `base` (and the manifest's `start_url`/`scope`) to match.

[.github/workflows/deploy.yml](.github/workflows/deploy.yml) builds and deploys `dist/` to GitHub Pages on every push to `main` (requires Pages source set to "GitHub Actions" in repo settings).

The original Claude Design exploration (visual design source) is preserved in `project/`, with its chat transcript in `chats/`.

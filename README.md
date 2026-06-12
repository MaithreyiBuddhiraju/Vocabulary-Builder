# Lexicon — Vocabulary Game

An interactive game for building a GRE-level vocabulary. 132 curated words — a mix
of GRE staples (*perfidious*, *obsequious*, *recalcitrant*) and arcane gems
(*defenestrate*, *petrichor*, *ultracrepidarian*) — each with meaning, etymology,
a usage sentence, phonetic pronunciation, synonyms/antonyms, and tap-to-hear audio.

## Modes

- **Daily** — three fresh words each day (deterministic by date, stable across reloads), fully expanded.
- **Library** — tap any word to unfold its details inline. Filter by New / Learning / Mastered / GRE / Arcane.
- **Quiz** — multiple-choice sessions (alternating "pick the meaning" / "pick the word") with points,
  combo bonuses, and spaced repetition: missed words resurface within the session, and the shakiest
  words lead the next one. Sessions are capped at 15 words, with today's daily words up front.

Progress (new → learning → mastered), points, and a day-streak persist in `localStorage`.
Audio pronunciation uses the browser's built-in speech synthesis — no setup, works offline.

## Development

```sh
npm install
npm run dev      # local dev server
npm run build    # production build to dist/
npm run preview  # serve the production build
```

Built with Vite + React. The visual design is the "Classic Library" theme
(Spectral serif on warm manuscript paper) from the original Claude Design
exploration, preserved in `project/` with its chat transcript in `chats/`.

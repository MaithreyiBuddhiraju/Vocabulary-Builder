# Vocabulary Game Builder

_Started 2026-06-12 16:33 UTC_

---

## User

I want an interactive game to build my vocabulary- think complex words, not used on a regular basis, like something found on a GRE test. Click on a word, it should show me the meaning, etymology, usage.

## Assistant

_[tool: questions_v2]_

Love this idea. Before I build, a few quick questions so I make something you'll actually want to use daily — mostly about the *feel* and the *game mechanics*.

## User

Questions answered:
- vibe: Explore a few options
- game_mechanic: Multiple-choice quiz on definitions, Daily word(s) to learn, Streaks & points to stay motivated, Spaced-repetition (words come back until mastered)
- interaction: Expands inline below the word
- word_count: 32
- difficulty: A mix of both
- track_progress: Yes — track learned/mastered words
- extras: Pronunciation (phonetic spelling shown), Synonyms & antonyms

## Assistant

_[tool: update_todos]_

_[tool: copy_starter_component]_

Great — clear direction. Here's my plan:

- **One polished React app** with three modes: **Library** (browse all 32 words, click to expand inline → meaning, etymology, usage, pronunciation, synonyms/antonyms), **Daily** (today's featured words), and **Quiz** (multiple-choice with points, combo streak, and spaced-repetition so missed words return until mastered).
- **Progress tracking** (new → learning → mastered) persisted in localStorage, plus a day-streak and points.
- Since you wanted to **explore a few visual vibes**, I'll wire 3 themes (Classic Library / Modern Minimal / Editorial Bold) into the Tweaks panel so you can flip between them live.

Let me set up.

_[tool: write_file]_

Now the word data — 32 curated words with full detail.

_[tool: write_file]_

Now the shared library — themes, game state (Context), persistence, helpers.

_[tool: write_file]_

Now the Library view with inline-expanding word cards.

_[tool: write_file]_

Now the Daily and Quiz views (with spaced repetition, points, combo).

_[tool: write_file]_

Now the app shell, header with live stats, and Tweaks wiring.

_[tool: grep]_

Let me check the TweakSelect API to make sure object options work.

_[tool: read_file]_

_[tool: write_file]_

Object options work. Now the main HTML file.

_[tool: show_html]_

_[tool: show_html]_

_[tool: str_replace_edit]_

Good — Classic theme looks strong. One bug: in the Daily header the pronunciation is getting squeezed and wrapping on top of the big word. Let me fix the header layout (stack the word, then meta below) and harden the library card too.

_[tool: str_replace_edit]_

_[tool: multi_screenshot]_

_[tool: grep]_

The screenshots ran against the previously-loaded page — my edits hadn't reloaded. Also, the collapsed library cards have the same pron-overlap. Let me reload fresh and verify. First, let me check how themes persist so I can preview all three.

_[tool: show_html]_

_[tool: multi_screenshot]_

Daily header is fixed. Now let me verify the library cards and preview the other two themes by temporarily flipping the default.

_[tool: str_replace_edit]_

The pron no longer wraps, but it butts right against longer words. Let me move it under the word (consistent with Daily) for cleaner breathing room.

_[tool: str_replace_edit]_

Now let me preview the Modern and Editorial themes by temporarily flipping the default.

_[tool: show_html]_

_[tool: multi_screenshot]_

_[tool: str_replace_edit]_

Modern looks clean and the pron sits nicely under each word now. Let me check the Editorial theme and an expanded card + quiz.

_[tool: show_html]_

_[tool: multi_screenshot]_

_[tool: str_replace_edit]_

All three themes are distinct and polished — Editorial's hard shadow + Caslon display reads beautifully. Let me revert to the Classic default and do a final clean check.

_[tool: update_todos]_

_[tool: done]_

**Lexicon** is ready — an interactive vocabulary game with 32 curated words (a mix of GRE staples like *perfidious*, *obsequious*, *recalcitrant* and arcane gems like *defenestrate*, *sesquipedalian*, *apricity*).

**Three modes:**
- **Daily** — 3 fresh words each day (deterministic, stable across reloads), fully expanded.
- **Library** — tap any word to unfold its meaning, etymology, in-use sentence, pronunciation, and synonyms/antonyms inline. Filter by New / Learning / Mastered / GRE / Arcane.
- **Quiz** — multiple-choice (alternates "pick the meaning" / "pick the word"), with **points + combo bonuses**, a **day-streak**, and **spaced repetition**: missed words get re-queued and resurface until mastered. Progress persists in your browser.

**Tweaks panel** lets you flip between three visual vibes live — **Classic Library** (warm paper, Spectral serif), **Modern Minimal** (clean Work Sans), and **Editorial Bold** (Caslon display + hard-shadow cards) — plus a reset-progress button.

Open Tweaks to try the themes. A couple of things worth your call:
- **Want a bigger word bank?** 32 is a solid start; I can scale to 100+ or add topic packs (science, law, literature).
- **Audio pronunciation** (tap to hear) and **favorites/bookmarking** were in your nice-to-haves list — say the word and I'll wire them in.

## User

this looks great. i like the font style on the 'classic library', but can we experiment with a different background color? and also add audio pronunciations?

## Assistant

_[tool: str_replace_edit]_

Great direction. Two things: I'll add a **Paper** swatch picker to Tweaks (Classic keeps its Spectral serif + ink, you just swap the background tone), and **tap-to-hear pronunciation** via the browser's speech synthesis. Let me wire both.

First, the paper presets + speak helper + speaker button in the shared lib:

_[tool: str_replace_edit]_

Let me fix that sloppy `fog` value.

_[tool: str_replace_edit]_

Now add the speaker animation CSS to the HTML:

_[tool: read_file]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

Now add the speaker button to the Library and Daily word headers, and the Quiz reveal:

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

Now wire the Paper picker into the Tweaks panel and theme merge:

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: show_html]_

Let me reload and verify the speaker buttons and check for errors.

_[tool: eval_js]_

Speaker button looks clean. Let me verify the speech API fires without errors and the Library renders the buttons too.

_[tool: str_replace_edit]_

Speech works and all 32 cards have buttons. Let me preview a couple of the paper tones to make sure they look good, then revert to default.

_[tool: show_html]_

_[tool: multi_screenshot]_

_[tool: str_replace_edit]_

Sage looks lovely — the serif + oxblood still read beautifully on it. Reverting to the default Manuscript paper and finalizing.

_[tool: done]_

Both done:

- **Paper picker** — Open Tweaks (with Classic selected) and you'll find a **Paper** row of swatches: Manuscript (default), Linen, Sage, Mist, Blush, and Fog. They swap only the background/surface tones — your Spectral serif, ink, and oxblood accent stay exactly as you liked them. Sage and Mist are my favorites for a cooler feel.
- **Audio pronunciation** — every word now has a 🔊 speaker button (in Daily, the Library cards, and the Quiz answer reveal). Tap it to hear the word read aloud; the icon pulses while speaking. It uses your browser's built-in speech, so it works offline with no setup. Voice quality depends on the system voices installed — on most Macs/iPhones it sounds quite natural.

One note: browser speech voices vary by device, so the accent you hear is whatever your OS provides. If you'd ever want a single consistent, higher-quality voice, that'd need real recorded audio files — happy to wire that up if you go that route.


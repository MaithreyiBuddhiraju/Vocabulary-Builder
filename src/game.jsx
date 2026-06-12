// Game state: progress (Leitner boxes), points, day streak, daily picks.
// Persisted to localStorage.
import React from "react";
import { WORDS } from "./words.js";

const STORE_KEY = "lexicon_state_v1";
export const MAX_BOX = 5;
export const DAILY_COUNT = 3;

export const todayStr = () => new Date().toISOString().slice(0, 10);

function dayDiff(a, b) {
  const da = new Date(a + "T00:00:00"), db = new Date(b + "T00:00:00");
  return Math.round((db - da) / 86400000);
}

function freshState() {
  return { progress: {}, points: 0, streak: 0, lastActive: null, bestCombo: 0, dailyDate: null, dailyWords: null };
}

function loadState() {
  try {
    const s = JSON.parse(localStorage.getItem(STORE_KEY));
    return s && typeof s === "object" ? Object.assign(freshState(), s) : freshState();
  } catch {
    return freshState();
  }
}

function persist(s) {
  try { localStorage.setItem(STORE_KEY, JSON.stringify(s)); } catch { /* private mode */ }
}

export function statusOf(box) {
  return !box ? "new" : box >= MAX_BOX ? "mastered" : "learning";
}

function boxOf(state, word) {
  return (state.progress[word] && state.progress[word].box) || 0;
}

// Deterministic daily pick based on the date so it's stable across reloads.
function pickDaily(words, n) {
  const seed = todayStr().split("-").join("") | 0;
  const idx = words.map((_, i) => i);
  let s = seed;
  const rand = () => (s = (s * 1103515245 + 12345) & 0x7fffffff) / 0x7fffffff;
  for (let i = idx.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [idx[i], idx[j]] = [idx[j], idx[i]];
  }
  return idx.slice(0, n).map((i) => words[i].word);
}

const GameContext = React.createContext(null);
export const useGame = () => React.useContext(GameContext);

export function GameProvider({ children }) {
  const words = WORDS;
  const [state, setState] = React.useState(loadState);

  // Streak bookkeeping on first load of the day.
  React.useEffect(() => {
    setState((prev) => {
      const t = todayStr();
      let next = { ...prev };
      if (prev.lastActive !== t) {
        const d = prev.lastActive ? dayDiff(prev.lastActive, t) : null;
        next.streak = d === 1 ? (prev.streak || 0) + 1 : prev.streak && d === 0 ? prev.streak : 1;
        next.lastActive = t;
      }
      if (prev.dailyDate !== t) {
        next.dailyDate = t;
        next.dailyWords = pickDaily(words, DAILY_COUNT);
      }
      return next;
    });
  }, [words]);

  React.useEffect(() => persist(state), [state]);

  const recordAnswer = (word, correct, pts) =>
    setState((prev) => {
      const p = { ...prev.progress };
      const cur = p[word] || { box: 0, seen: 0, correct: 0 };
      const box = correct ? Math.min(MAX_BOX, cur.box + 1) : Math.max(1, cur.box - 1);
      p[word] = { box, seen: cur.seen + 1, correct: cur.correct + (correct ? 1 : 0) };
      return { ...prev, progress: p, points: prev.points + (pts || 0), lastActive: todayStr() };
    });

  const bumpCombo = (combo) =>
    setState((prev) => ({ ...prev, bestCombo: Math.max(prev.bestCombo || 0, combo) }));

  const resetAll = () => {
    const f = freshState();
    f.dailyDate = todayStr();
    f.dailyWords = pickDaily(words, DAILY_COUNT);
    f.lastActive = todayStr();
    f.streak = 1;
    setState(f);
  };

  const counts = React.useMemo(() => {
    let mastered = 0, learning = 0;
    words.forEach((w) => {
      const st = statusOf(boxOf(state, w.word));
      if (st === "mastered") mastered++;
      else if (st === "learning") learning++;
    });
    return { mastered, learning, total: words.length };
  }, [state, words]);

  const api = {
    state, words, counts, recordAnswer, bumpCombo, resetAll,
    boxOf: (w) => boxOf(state, w),
  };
  return <GameContext.Provider value={api}>{children}</GameContext.Provider>;
}

// lib.jsx — themes, game state context, persistence, small shared UI.
// Loaded first. Exports to window for the other babel scripts.

const THEMES = {
  classic: {
    label: "Classic Library",
    bg: "#e9dec9", panel: "#f6efe0", surface: "#fbf6ea", ink: "#2a2016",
    sub: "#73604979", subSolid: "#73604a", line: "#d8c8a6", lineSoft: "#e4d8bd",
    accent: "#8a3a2e", accent2: "#3c5e4d", chip: "#ece0c6", good: "#3c5e4d", bad: "#8a3a2e",
    fontHead: "'Spectral', Georgia, serif", fontBody: "'Spectral', Georgia, serif",
    headWeight: 600, headTransform: "none", headLs: "0",
    radius: "5px", radiusLg: "8px", shadow: "0 1px 2px rgba(70,50,20,.08)",
    tierGRE: "#3c5e4d", tierArc: "#8a3a2e"
  },
  modern: {
    label: "Modern Minimal",
    bg: "#f6f6f4", panel: "#ffffff", surface: "#ffffff", ink: "#17171b",
    sub: "#6b6b73", subSolid: "#6b6b73", line: "#e8e8ec", lineSoft: "#f0f0f3",
    accent: "oklch(0.55 0.14 255)", accent2: "oklch(0.57 0.12 158)", chip: "#f1f1f4",
    good: "oklch(0.57 0.12 158)", bad: "oklch(0.55 0.16 25)",
    fontHead: "'Work Sans', system-ui, sans-serif", fontBody: "'Work Sans', system-ui, sans-serif",
    headWeight: 600, headTransform: "none", headLs: "-0.01em",
    radius: "12px", radiusLg: "18px", shadow: "0 4px 20px rgba(20,20,30,.06)",
    tierGRE: "oklch(0.55 0.14 255)", tierArc: "oklch(0.55 0.16 25)"
  },
  editorial: {
    label: "Editorial Bold",
    bg: "#eee9dd", panel: "#fbf9f3", surface: "#ffffff", ink: "#15130f",
    sub: "#5a554c", subSolid: "#5a554c", line: "#16130d", lineSoft: "#ddd6c6",
    accent: "oklch(0.6 0.2 32)", accent2: "oklch(0.6 0.16 150)", chip: "#e7e1d2",
    good: "oklch(0.55 0.15 150)", bad: "oklch(0.6 0.2 32)",
    fontHead: "'Libre Caslon Display', Georgia, serif", fontBody: "'Archivo', system-ui, sans-serif",
    headWeight: 400, headTransform: "none", headLs: "-0.005em",
    radius: "0px", radiusLg: "0px", shadow: "6px 6px 0 #16130d",
    tierGRE: "oklch(0.45 0.1 250)", tierArc: "oklch(0.6 0.2 32)"
  }
};

const STORE_KEY = "lexicon_state_v1";
const todayStr = () => new Date().toISOString().slice(0, 10);

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
  } catch (e) { return freshState(); }
}
function persist(s) { try { localStorage.setItem(STORE_KEY, JSON.stringify(s)); } catch (e) {} }

const MAX_BOX = 5;
function statusOf(box) { return !box ? "new" : box >= MAX_BOX ? "mastered" : "learning"; }
function boxOf(state, word) { return (state.progress[word] && state.progress[word].box) || 0; }

// Deterministic daily pick based on the date so it's stable across reloads.
function pickDaily(words, n) {
  const seed = todayStr().split("-").join("") | 0;
  const idx = words.map((_, i) => i);
  let s = seed;
  const rand = () => (s = (s * 1103515245 + 12345) & 0x7fffffff) / 0x7fffffff;
  for (let i = idx.length - 1; i > 0; i--) { const j = Math.floor(rand() * (i + 1)); [idx[i], idx[j]] = [idx[j], idx[i]]; }
  return idx.slice(0, n).map(i => words[i].word);
}

const GameContext = React.createContext(null);
const useGame = () => React.useContext(GameContext);

function GameProvider({ children }) {
  const words = window.WORDS;
  const [state, setState] = React.useState(loadState);

  // Streak bookkeeping on first load of the day.
  React.useEffect(() => {
    setState(prev => {
      const t = todayStr();
      let next = { ...prev };
      if (prev.lastActive !== t) {
        const d = prev.lastActive ? dayDiff(prev.lastActive, t) : null;
        next.streak = d === 1 ? (prev.streak || 0) + 1 : (prev.streak && d === 0 ? prev.streak : 1);
        next.lastActive = t;
      }
      if (prev.dailyDate !== t) { next.dailyDate = t; next.dailyWords = pickDaily(words, 3); }
      return next;
    });
  }, []);

  React.useEffect(() => persist(state), [state]);

  const recordAnswer = (word, correct, pts) => setState(prev => {
    const p = { ...prev.progress };
    const cur = p[word] || { box: 0, seen: 0, correct: 0 };
    const box = correct ? Math.min(MAX_BOX, cur.box + 1) : Math.max(1, cur.box - 1);
    p[word] = { box, seen: cur.seen + 1, correct: cur.correct + (correct ? 1 : 0) };
    return { ...prev, progress: p, points: prev.points + (pts || 0), lastActive: todayStr() };
  });

  const setMastery = (word, box) => setState(prev => {
    const p = { ...prev.progress };
    const cur = p[word] || { box: 0, seen: 0, correct: 0 };
    p[word] = { ...cur, box };
    return { ...prev, progress: p };
  });

  const bumpCombo = (combo) => setState(prev => ({ ...prev, bestCombo: Math.max(prev.bestCombo || 0, combo) }));

  const resetAll = () => { const f = freshState(); f.dailyDate = todayStr(); f.dailyWords = pickDaily(words, 3); f.lastActive = todayStr(); f.streak = 1; setState(f); };

  const counts = React.useMemo(() => {
    let mastered = 0, learning = 0;
    words.forEach(w => { const st = statusOf(boxOf(state, w.word)); if (st === "mastered") mastered++; else if (st === "learning") learning++; });
    return { mastered, learning, total: words.length, n: words.length };
  }, [state, words]);

  const api = { state, words, counts, recordAnswer, setMastery, bumpCombo, resetAll, statusOf, boxOf: (w) => boxOf(state, w) };
  return <GameContext.Provider value={api}>{children}</GameContext.Provider>;
}

// ---- small shared UI ----

// progress ring (simple stroked circle) — allowed primitive
function Ring({ value, size = 38, stroke = 3.5, color, track }) {
  const r = (size - stroke) / 2, c = 2 * Math.PI * r;
  return (
    <svg width={size} height={size} style={{ display: "block" }}>
      <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke={track} strokeWidth={stroke} />
      <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke={color} strokeWidth={stroke}
        strokeDasharray={c} strokeDashoffset={c * (1 - value)} strokeLinecap="round"
        transform={`rotate(-90 ${size / 2} ${size / 2})`} style={{ transition: "stroke-dashoffset .5s cubic-bezier(.2,.8,.2,1)" }} />
    </svg>
  );
}

function Check({ size = 14, color = "currentColor", w = 2.4 }) {
  return (<svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={{ display: "block" }}>
    <path d="M5 13l4 4L19 7" stroke={color} strokeWidth={w} strokeLinecap="round" strokeLinejoin="round" /></svg>);
}

function TierDot({ tier, T }) {
  const color = tier === "Arcane" ? T.tierArc : T.tierGRE;
  return <span style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 11, letterSpacing: ".08em", textTransform: "uppercase", color: T.subSolid, fontWeight: 600 }}>
    <span style={{ width: 7, height: 7, borderRadius: 99, background: color, display: "inline-block" }} />{tier}
  </span>;
}

function StatusBadge({ status, T }) {
  const map = {
    new: { label: "New", c: T.subSolid, bg: T.chip },
    learning: { label: "Learning", c: T.accent2, bg: "transparent" },
    mastered: { label: "Mastered", c: "#fff", bg: T.good }
  };
  const m = map[status];
  return <span style={{
    display: "inline-flex", alignItems: "center", gap: 5, fontSize: 11, fontWeight: 600, letterSpacing: ".04em",
    padding: "3px 9px", borderRadius: 99, color: m.c, background: m.bg,
    border: status === "learning" ? `1px solid ${T.accent2}` : "1px solid transparent"
  }}>
    {status === "mastered" && <Check size={11} color="#fff" />}{m.label}
  </span>;
}

// ---- background (paper) presets for the Classic theme ----
// Each keeps Classic's ink, accent and Spectral fonts; only the surfaces change.
const CLASSIC_PAPERS = {
  manuscript: { label: "Manuscript", tokens: { bg: "#e9dec9", panel: "#f6efe0", surface: "#fbf6ea", chip: "#ece0c6", line: "#d8c8a6", lineSoft: "#e4d8bd" } },
  linen:      { label: "Linen",      tokens: { bg: "#f1ead9", panel: "#faf5ea", surface: "#fffdf6", chip: "#efe6d2", line: "#ddd0b4", lineSoft: "#ece2ca" } },
  sage:       { label: "Sage",       tokens: { bg: "#dde3d2", panel: "#eef1e5", surface: "#f5f7ee", chip: "#e2e7d6", line: "#c5cfb4", lineSoft: "#dce2cc" } },
  mist:       { label: "Mist",       tokens: { bg: "#dde2e4", panel: "#eef1f2", surface: "#f6f8f8", chip: "#e1e6e7", line: "#c4ccd0", lineSoft: "#dce2e3" } },
  blush:      { label: "Blush",      tokens: { bg: "#eaddd6", panel: "#f6ede7", surface: "#fcf4ef", chip: "#eddfd7", line: "#dac6bb", lineSoft: "#e8d8cf" } },
  fog:        { label: "Fog",        tokens: { bg: "#e2e0db", panel: "#f1f0ec", surface: "#f8f7f4", chip: "#e6e4de", line: "#cdcabf", lineSoft: "#e0ded7" } }
};

// ---- audio pronunciation (Web Speech API) ----
let _voicesWarm = false;
function warmVoices() { try { if (!_voicesWarm && window.speechSynthesis) { speechSynthesis.getVoices(); _voicesWarm = true; } } catch (e) {} }
function pickVoice() {
  try {
    const vs = speechSynthesis.getVoices();
    return vs.find(v => /en-GB/i.test(v.lang)) || vs.find(v => /en[-_]US/i.test(v.lang)) || vs.find(v => /^en/i.test(v.lang)) || null;
  } catch (e) { return null; }
}
function speak(text, setPlaying) {
  if (!("speechSynthesis" in window)) return;
  try {
    warmVoices();
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = "en-US"; u.rate = 0.82; u.pitch = 1;
    const v = pickVoice(); if (v) u.voice = v;
    u.onstart = () => setPlaying && setPlaying(true);
    u.onend = () => setPlaying && setPlaying(false);
    u.onerror = () => setPlaying && setPlaying(false);
    speechSynthesis.speak(u);
  } catch (e) { setPlaying && setPlaying(false); }
}
if (window.speechSynthesis) { try { speechSynthesis.onvoiceschanged = warmVoices; } catch (e) {} }

function SpeakerIcon({ color, size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ display: "block" }}>
      <path d="M4 9.5v5h3.5L13 18.5V5.5L7.5 9.5H4z" fill={color} stroke={color} />
      <path className="spk-w1" d="M15.5 9.2a4 4 0 0 1 0 5.6" />
      <path className="spk-w2" d="M18 6.8a7.2 7.2 0 0 1 0 10.4" />
    </svg>
  );
}

function SpeakButton({ T, text, size = 30 }) {
  const [playing, setPlaying] = React.useState(false);
  return (
    <button type="button" title="Hear pronunciation" aria-label={"Pronounce " + text}
      className={"spk-btn" + (playing ? " spk-playing" : "")}
      onClick={(e) => { e.stopPropagation(); speak(text, setPlaying); }}
      style={{
        width: size, height: size, flexShrink: 0, display: "grid", placeItems: "center",
        borderRadius: T.radius === "0px" ? 0 : 99, cursor: "pointer", padding: 0,
        border: `1px solid ${playing ? T.accent : T.line}`,
        background: playing ? tintC(T.accent, .1) : "transparent",
        color: playing ? T.accent : T.subSolid, transition: "all .15s"
      }}>
      <SpeakerIcon color={playing ? T.accent : T.subSolid} size={Math.round(size * 0.5)} />
    </button>
  );
}
function tintC(c, a) { return `color-mix(in srgb, ${c} ${Math.round(a * 100)}%, transparent)`; }

Object.assign(window, { THEMES, CLASSIC_PAPERS, GameContext, useGame, GameProvider, Ring, Check, TierDot, StatusBadge, statusOf, todayStr, MAX_BOX, speak, SpeakButton, SpeakerIcon });

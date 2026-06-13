// Classic Library theme. `T` is a mutable singleton — paper tone can be
// swapped at runtime via applyPaper(), which mutates T in place so every
// module that imported { T } sees the new values on next render.

const BASE = {
  ink: "#2a2016",
  sub: "#73604979",
  subSolid: "#73604a",
  accent: "#8a3a2e",
  accent2: "#3c5e4d",
  good: "#3c5e4d",
  bad: "#8a3a2e",
  fontHead: "'Spectral', Georgia, serif",
  fontBody: "'Spectral', Georgia, serif",
  headWeight: 600,
  headLs: "0",
  radius: "5px",
  radiusLg: "8px",
  shadow: "0 1px 2px rgba(70,50,20,.08)",
  tierGRE: "#3c5e4d",
  tierArc: "#8a3a2e",
};

export const CLASSIC_PAPERS = {
  manuscript: { label: "Manuscript", tokens: { bg: "#e9dec9", panel: "#f6efe0", surface: "#fbf6ea", chip: "#ece0c6", line: "#d8c8a6", lineSoft: "#e4d8bd" } },
  linen:      { label: "Linen",      tokens: { bg: "#f1ead9", panel: "#faf5ea", surface: "#fffdf6", chip: "#efe6d2", line: "#ddd0b4", lineSoft: "#ece2ca" } },
  sage:       { label: "Sage",       tokens: { bg: "#dde3d2", panel: "#eef1e5", surface: "#f5f7ee", chip: "#e2e7d6", line: "#c5cfb4", lineSoft: "#dce2cc" } },
  mist:       { label: "Mist",       tokens: { bg: "#dde2e4", panel: "#eef1f2", surface: "#f6f8f8", chip: "#e1e6e7", line: "#c4ccd0", lineSoft: "#dce2e3" } },
  blush:      { label: "Blush",      tokens: { bg: "#eaddd6", panel: "#f6ede7", surface: "#fcf4ef", chip: "#eddfd7", line: "#dac6bb", lineSoft: "#e8d8cf" } },
  fog:        { label: "Fog",        tokens: { bg: "#e2e0db", panel: "#f1f0ec", surface: "#f8f7f4", chip: "#e6e4de", line: "#cdcabf", lineSoft: "#e0ded7" } },
};

const PAPER_KEY = "lexicon_paper_v1";

export function loadPaper() {
  try {
    const p = localStorage.getItem(PAPER_KEY);
    return CLASSIC_PAPERS[p] ? p : "manuscript";
  } catch {
    return "manuscript";
  }
}

export const T = { ...BASE, ...CLASSIC_PAPERS[loadPaper()].tokens };

// Mutates T in place and persists the choice; caller is responsible for
// triggering a re-render of consumers.
export function applyPaper(key) {
  const paper = CLASSIC_PAPERS[key] || CLASSIC_PAPERS.manuscript;
  Object.assign(T, paper.tokens);
  try { localStorage.setItem(PAPER_KEY, key); } catch { /* private mode */ }
}

// translucent tint of a color via color-mix
export function tint(c, a) {
  return `color-mix(in srgb, ${c} ${Math.round(a * 100)}%, transparent)`;
}

export function btnPrimary() {
  return {
    fontFamily: T.fontBody,
    fontSize: 14.5,
    fontWeight: 600,
    letterSpacing: ".01em",
    padding: "11px 22px",
    borderRadius: 99,
    cursor: "pointer",
    border: `1px solid ${T.ink}`,
    background: T.ink,
    color: T.bg,
    transition: "transform .12s, opacity .15s",
  };
}

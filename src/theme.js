// Classic Library theme with the Manuscript paper tones — the look settled on
// during design exploration. Single fixed theme; tokens consumed as `T` everywhere.
export const T = {
  bg: "#e9dec9",
  panel: "#f6efe0",
  surface: "#fbf6ea",
  ink: "#2a2016",
  sub: "#73604979",
  subSolid: "#73604a",
  line: "#d8c8a6",
  lineSoft: "#e4d8bd",
  accent: "#8a3a2e",
  accent2: "#3c5e4d",
  chip: "#ece0c6",
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

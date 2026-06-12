// Small shared UI: progress ring, check, tier dot, status badge, speaker button.
import React from "react";
import { T, tint } from "../theme.js";
import { speak } from "../speech.js";

export function Ring({ value, size = 38, stroke = 3.5, color, track }) {
  const r = (size - stroke) / 2, c = 2 * Math.PI * r;
  return (
    <svg width={size} height={size} style={{ display: "block" }}>
      <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke={track} strokeWidth={stroke} />
      <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke={color} strokeWidth={stroke}
        strokeDasharray={c} strokeDashoffset={c * (1 - value)} strokeLinecap="round"
        transform={`rotate(-90 ${size / 2} ${size / 2})`}
        style={{ transition: "stroke-dashoffset .5s cubic-bezier(.2,.8,.2,1)" }} />
    </svg>
  );
}

export function Check({ size = 14, color = "currentColor", w = 2.4 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={{ display: "block" }}>
      <path d="M5 13l4 4L19 7" stroke={color} strokeWidth={w} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function TierDot({ tier }) {
  const color = tier === "Arcane" ? T.tierArc : T.tierGRE;
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 11, letterSpacing: ".08em", textTransform: "uppercase", color: T.subSolid, fontWeight: 600 }}>
      <span style={{ width: 7, height: 7, borderRadius: 99, background: color, display: "inline-block" }} />
      {tier}
    </span>
  );
}

export function StatusBadge({ status }) {
  const map = {
    new: { label: "New", c: T.subSolid, bg: T.chip },
    learning: { label: "Learning", c: T.accent2, bg: "transparent" },
    mastered: { label: "Mastered", c: "#fff", bg: T.good },
  };
  const m = map[status];
  return (
    <span style={{
      display: "inline-flex", alignItems: "center", gap: 5, fontSize: 11, fontWeight: 600, letterSpacing: ".04em",
      padding: "3px 9px", borderRadius: 99, color: m.c, background: m.bg,
      border: status === "learning" ? `1px solid ${T.accent2}` : "1px solid transparent",
    }}>
      {status === "mastered" && <Check size={11} color="#fff" />}
      {m.label}
    </span>
  );
}

function SpeakerIcon({ color, size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ display: "block" }}>
      <path d="M4 9.5v5h3.5L13 18.5V5.5L7.5 9.5H4z" fill={color} stroke={color} />
      <path className="spk-w1" d="M15.5 9.2a4 4 0 0 1 0 5.6" />
      <path className="spk-w2" d="M18 6.8a7.2 7.2 0 0 1 0 10.4" />
    </svg>
  );
}

export function SpeakButton({ text, size = 30 }) {
  const [playing, setPlaying] = React.useState(false);
  return (
    <button type="button" title="Hear pronunciation" aria-label={"Pronounce " + text}
      className={"spk-btn" + (playing ? " spk-playing" : "")}
      onClick={(e) => { e.stopPropagation(); speak(text, setPlaying); }}
      style={{
        width: size, height: size, flexShrink: 0, display: "grid", placeItems: "center",
        borderRadius: 99, cursor: "pointer", padding: 0,
        border: `1px solid ${playing ? T.accent : T.line}`,
        background: playing ? tint(T.accent, 0.1) : "transparent",
        color: playing ? T.accent : T.subSolid, transition: "all .15s",
      }}>
      <SpeakerIcon color={playing ? T.accent : T.subSolid} size={Math.round(size * 0.5)} />
    </button>
  );
}

export function Metric({ label, value }) {
  return (
    <div style={{ textAlign: "center" }}>
      <div style={{ fontFamily: T.fontHead, fontWeight: T.headWeight, fontSize: 30, color: T.ink, lineHeight: 1 }}>{value}</div>
      <div style={{ fontFamily: T.fontBody, fontSize: 11, letterSpacing: ".1em", textTransform: "uppercase", color: T.subSolid, fontWeight: 600, marginTop: 6 }}>{label}</div>
    </div>
  );
}

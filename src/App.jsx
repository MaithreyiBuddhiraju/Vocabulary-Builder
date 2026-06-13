// App shell: sticky header with brand, mode nav, and live stats.
import React from "react";
import { T, tint, CLASSIC_PAPERS, applyPaper, loadPaper } from "./theme.js";
import { GameProvider, useGame } from "./game.jsx";
import { Ring } from "./components/ui.jsx";
import { Daily } from "./views/Daily.jsx";
import { Library } from "./views/Library.jsx";
import { Quiz } from "./views/Quiz.jsx";

function StatItem({ label, value, accent }) {
  return (
    <div style={{ display: "grid", gap: 2, textAlign: "right" }}>
      <div style={{ fontFamily: T.fontHead, fontWeight: T.headWeight, fontSize: 22, color: accent || T.ink, lineHeight: 1 }}>{value}</div>
      <div style={{ fontFamily: T.fontBody, fontSize: 10, letterSpacing: ".12em", textTransform: "uppercase", color: T.subSolid, fontWeight: 600 }}>{label}</div>
    </div>
  );
}

function SettingsPanel({ paper, onPaperChange, onClose }) {
  const { resetAll } = useGame();
  const keys = Object.keys(CLASSIC_PAPERS);
  return (
    <div style={{
      position: "absolute", top: 60, right: 28, zIndex: 30, width: 220,
      background: T.surface, border: `1px solid ${T.line}`, borderRadius: T.radiusLg,
      boxShadow: "0 8px 24px rgba(0,0,0,.12)", padding: 16,
    }}>
      <div style={{ fontFamily: T.fontBody, fontSize: 10, letterSpacing: ".12em", textTransform: "uppercase", color: T.subSolid, fontWeight: 600, marginBottom: 10 }}>Paper</div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 9, marginBottom: 14 }}>
        {keys.map((k) => {
          const p = CLASSIC_PAPERS[k].tokens;
          const on = paper === k;
          return (
            <button key={k} type="button" title={CLASSIC_PAPERS[k].label} onClick={() => onPaperChange(k)}
              style={{
                width: 36, height: 36, borderRadius: 9, cursor: "pointer", padding: 0,
                background: p.bg, position: "relative",
                border: on ? `2px solid ${T.ink}` : "1px solid rgba(0,0,0,.18)",
                boxShadow: on ? "0 0 0 2px #fff inset" : "none",
              }}>
              <span style={{ position: "absolute", right: 5, bottom: 5, width: 12, height: 12, borderRadius: 3, background: p.surface, border: "1px solid rgba(0,0,0,.12)" }} />
            </button>
          );
        })}
      </div>
      <div style={{ fontFamily: T.fontBody, fontSize: 10, letterSpacing: ".12em", textTransform: "uppercase", color: T.subSolid, fontWeight: 600, marginBottom: 10 }}>Progress</div>
      <button
        onClick={() => { if (confirm("Reset points, streak and mastery?")) { resetAll(); onClose(); } }}
        style={{
          fontFamily: T.fontBody, fontSize: 13, fontWeight: 600, color: T.bad,
          background: "transparent", border: `1px solid ${T.line}`, borderRadius: 99,
          padding: "8px 16px", cursor: "pointer", width: "100%",
        }}>
        Reset all progress
      </button>
    </div>
  );
}

function Header({ mode, setMode, settingsOpen, setSettingsOpen, paper, onPaperChange }) {
  const { counts, state } = useGame();
  const tabs = [{ id: "daily", label: "Daily" }, { id: "library", label: "Library" }, { id: "quiz", label: "Quiz" }];
  return (
    <header style={{
      position: "sticky", top: 0, zIndex: 20, background: tint(T.bg, 0.9), overflow: "visible",
      backdropFilter: "blur(10px)", borderBottom: `1px solid ${T.line}`,
    }}>
      <div style={{ maxWidth: 1120, margin: "0 auto", padding: "12px 28px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 20, minHeight: 76, flexWrap: "wrap" }}>
        {/* brand */}
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <span style={{ width: 30, height: 30, borderRadius: 7, background: T.accent, display: "grid", placeItems: "center", color: T.surface, fontFamily: T.fontHead, fontWeight: 700, fontSize: 18, flexShrink: 0 }}>L</span>
          <div>
            <div style={{ fontFamily: T.fontHead, fontWeight: T.headWeight, fontSize: 21, color: T.ink, letterSpacing: ".02em", lineHeight: 1 }}>LEXICON</div>
            <div style={{ fontFamily: T.fontBody, fontSize: 10.5, letterSpacing: ".14em", textTransform: "uppercase", color: T.subSolid, fontWeight: 600, marginTop: 2 }}>Word collector</div>
          </div>
        </div>

        {/* nav */}
        <nav style={{ display: "flex", gap: 4, background: T.chip, padding: 4, borderRadius: 99, border: `1px solid ${T.lineSoft}` }}>
          {tabs.map((t) => (
            <button key={t.id} onClick={() => setMode(t.id)} style={{
              fontFamily: T.fontBody, fontSize: 14, fontWeight: 600, letterSpacing: ".01em",
              padding: "8px 20px", borderRadius: 99, cursor: "pointer", border: "none",
              background: mode === t.id ? T.surface : "transparent",
              color: mode === t.id ? T.ink : T.subSolid,
              boxShadow: mode === t.id ? "0 1px 3px rgba(0,0,0,.08)" : "none", transition: "all .15s",
            }}>{t.label}</button>
          ))}
        </nav>

        {/* stats */}
        <div style={{ display: "flex", alignItems: "center", gap: 22 }}>
          <StatItem label="Points" value={state.points} accent={T.accent} />
          <StatItem label="Day streak" value={state.streak || 0} />
          <div style={{ display: "flex", alignItems: "center", gap: 9 }}>
            <div style={{ position: "relative", display: "grid", placeItems: "center" }}>
              <Ring value={counts.mastered / counts.total} color={T.accent2} track={T.lineSoft} size={40} stroke={3.5} />
              <span style={{ position: "absolute", fontFamily: T.fontHead, fontWeight: T.headWeight, fontSize: 13, color: T.ink }}>{counts.mastered}</span>
            </div>
            <div style={{ fontFamily: T.fontBody, fontSize: 10, letterSpacing: ".12em", textTransform: "uppercase", color: T.subSolid, fontWeight: 600, lineHeight: 1.3 }}>Mastered<br /><span style={{ color: T.ink }}>of {counts.total}</span></div>
          </div>
          <button aria-label="Settings" onClick={() => setSettingsOpen((o) => !o)} style={{
            width: 36, height: 36, borderRadius: 99, border: `1px solid ${T.lineSoft}`, background: settingsOpen ? T.surface : "transparent",
            display: "grid", placeItems: "center", cursor: "pointer", fontSize: 22, lineHeight: 1, color: T.subSolid, flexShrink: 0,
          }}>⚙︎</button>
        </div>
      </div>
      {settingsOpen && <SettingsPanel paper={paper} onPaperChange={onPaperChange} onClose={() => setSettingsOpen(false)} />}
    </header>
  );
}

function Shell() {
  const [mode, setMode] = React.useState("daily");
  const [settingsOpen, setSettingsOpen] = React.useState(false);
  const [paper, setPaper] = React.useState(loadPaper);

  const onPaperChange = (key) => {
    applyPaper(key);
    setPaper(key);
  };

  return (
    <div style={{ minHeight: "100vh", background: T.bg, color: T.ink, fontFamily: T.fontBody }}>
      <Header mode={mode} setMode={setMode} settingsOpen={settingsOpen} setSettingsOpen={setSettingsOpen} paper={paper} onPaperChange={onPaperChange} />
      <main style={{ maxWidth: 1120, margin: "0 auto", padding: "38px 28px 90px" }}>
        {mode === "daily" && <Daily goQuiz={() => setMode("quiz")} />}
        {mode === "library" && <Library />}
        {mode === "quiz" && <Quiz />}
      </main>
    </div>
  );
}

export default function App() {
  return (
    <GameProvider>
      <Shell />
    </GameProvider>
  );
}

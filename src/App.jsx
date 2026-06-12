// App shell: sticky header with brand, mode nav, and live stats.
import React from "react";
import { T, tint } from "./theme.js";
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

function Header({ mode, setMode }) {
  const { counts, state } = useGame();
  const tabs = [{ id: "daily", label: "Daily" }, { id: "library", label: "Library" }, { id: "quiz", label: "Quiz" }];
  return (
    <header style={{
      position: "sticky", top: 0, zIndex: 20, background: tint(T.bg, 0.9),
      backdropFilter: "blur(10px)", borderBottom: `1px solid ${T.line}`,
    }}>
      <div style={{ maxWidth: 1120, margin: "0 auto", padding: "0 28px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 20, height: 76, flexWrap: "wrap" }}>
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
        </div>
      </div>
    </header>
  );
}

function Footer() {
  const { resetAll } = useGame();
  return (
    <footer style={{ maxWidth: 1120, margin: "0 auto", padding: "0 28px 36px", display: "flex", justifyContent: "center" }}>
      <button
        onClick={() => { if (confirm("Reset points, streak and mastery?")) resetAll(); }}
        style={{
          fontFamily: T.fontBody, fontSize: 12, letterSpacing: ".06em", color: T.subSolid,
          background: "transparent", border: "none", cursor: "pointer", textDecoration: "underline", opacity: 0.7,
        }}>
        Reset all progress
      </button>
    </footer>
  );
}

function Shell() {
  const [mode, setMode] = React.useState("daily");
  return (
    <div style={{ minHeight: "100vh", background: T.bg, color: T.ink, fontFamily: T.fontBody }}>
      <Header mode={mode} setMode={setMode} />
      <main style={{ maxWidth: 1120, margin: "0 auto", padding: "38px 28px 90px" }}>
        {mode === "daily" && <Daily goQuiz={() => setMode("quiz")} />}
        {mode === "library" && <Library />}
        {mode === "quiz" && <Quiz />}
      </main>
      <Footer />
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

// app.jsx — shell, header, nav, stats, tweaks. Loaded last; renders the app.

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "theme": "classic",
  "paper": "manuscript"
}/*EDITMODE-END*/;

function PaperSwatches({ T, value, onChange }) {
  const keys = Object.keys(CLASSIC_PAPERS);
  const current = CLASSIC_PAPERS[value] || CLASSIC_PAPERS.manuscript;
  return (
    <div style={{ padding: "2px 0 6px" }}>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 9 }}>
        {keys.map(k => {
          const p = CLASSIC_PAPERS[k].tokens, on = value === k;
          return (
            <button key={k} type="button" title={CLASSIC_PAPERS[k].label} onClick={() => onChange(k)}
              style={{
                width: 36, height: 36, borderRadius: 9, cursor: "pointer", padding: 0,
                background: p.bg, position: "relative",
                border: on ? "2px solid #111" : "1px solid rgba(0,0,0,.18)",
                boxShadow: on ? "0 0 0 2px #fff inset" : "none", transition: "transform .12s"
              }}>
              <span style={{ position: "absolute", right: 5, bottom: 5, width: 12, height: 12, borderRadius: 3, background: p.surface, border: "1px solid rgba(0,0,0,.12)" }} />
            </button>
          );
        })}
      </div>
      <div style={{ marginTop: 8, fontSize: 12, opacity: .65 }}>{current.label}</div>
    </div>
  );
}

function StatItem({ T, label, value, accent }) {
  return (
    <div style={{ display: "grid", gap: 2, textAlign: "right" }}>
      <div style={{ fontFamily: T.fontHead, fontWeight: T.headWeight, fontSize: 22, color: accent || T.ink, lineHeight: 1 }}>{value}</div>
      <div style={{ fontFamily: T.fontBody, fontSize: 10, letterSpacing: ".12em", textTransform: "uppercase", color: T.subSolid, fontWeight: 600 }}>{label}</div>
    </div>
  );
}

function Header({ T, mode, setMode }) {
  const { counts, state } = useGame();
  const tabs = [{ id: "daily", label: "Daily" }, { id: "library", label: "Library" }, { id: "quiz", label: "Quiz" }];
  return (
    <header style={{
      position: "sticky", top: 0, zIndex: 20, background: tint(T.bg, .9),
      backdropFilter: "blur(10px)", borderBottom: `1px solid ${T.line}`
    }}>
      <div style={{ maxWidth: 1120, margin: "0 auto", padding: "0 28px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 20, height: 76, flexWrap: "wrap" }}>
        {/* brand */}
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <span style={{ width: 30, height: 30, borderRadius: T.radius === "0px" ? 0 : 7, background: T.accent, display: "grid", placeItems: "center", color: T.surface, fontFamily: T.fontHead, fontWeight: 700, fontSize: 18, flexShrink: 0 }}>L</span>
          <div>
            <div style={{ fontFamily: T.fontHead, fontWeight: T.headWeight, fontSize: 21, color: T.ink, letterSpacing: T.headTransform === "none" ? ".02em" : "0", lineHeight: 1 }}>LEXICON</div>
            <div style={{ fontFamily: T.fontBody, fontSize: 10.5, letterSpacing: ".14em", textTransform: "uppercase", color: T.subSolid, fontWeight: 600, marginTop: 2 }}>Word collector</div>
          </div>
        </div>

        {/* nav */}
        <nav style={{ display: "flex", gap: 4, background: T.chip, padding: 4, borderRadius: T.radius === "0px" ? 0 : 99, border: `1px solid ${T.lineSoft}` }}>
          {tabs.map(t => (
            <button key={t.id} onClick={() => setMode(t.id)} style={{
              fontFamily: T.fontBody, fontSize: 14, fontWeight: 600, letterSpacing: ".01em",
              padding: "8px 20px", borderRadius: T.radius === "0px" ? 0 : 99, cursor: "pointer", border: "none",
              background: mode === t.id ? T.surface : "transparent",
              color: mode === t.id ? T.ink : T.subSolid,
              boxShadow: mode === t.id ? "0 1px 3px rgba(0,0,0,.08)" : "none", transition: "all .15s"
            }}>{t.label}</button>
          ))}
        </nav>

        {/* stats */}
        <div style={{ display: "flex", alignItems: "center", gap: 22 }}>
          <StatItem T={T} label="Points" value={state.points} accent={T.accent} />
          <StatItem T={T} label="Day streak" value={state.streak || 0} />
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

function Shell({ T, t, setTweak }) {
  const [mode, setMode] = React.useState("daily");
  const { resetAll } = useGame();
  return (
    <div style={{ minHeight: "100vh", background: T.bg, color: T.ink, fontFamily: T.fontBody }}>
      <Header T={T} mode={mode} setMode={setMode} />
      <main style={{ maxWidth: 1120, margin: "0 auto", padding: "38px 28px 90px" }}>
        {mode === "daily" && <Daily T={T} goQuiz={() => setMode("quiz")} />}
        {mode === "library" && <Library T={T} />}
        {mode === "quiz" && <Quiz T={T} />}
      </main>

      <TweaksPanel>
        <TweakSection label="Visual theme" />
        <TweakSelect label="Theme" value={t.theme}
          options={Object.keys(THEMES).map(k => ({ value: k, label: THEMES[k].label }))}
          onChange={v => setTweak("theme", v)} />
        {t.theme === "classic" && <>
          <TweakSection label="Paper" />
          <PaperSwatches T={T} value={t.paper} onChange={v => setTweak("paper", v)} />
        </>}
        <TweakSection label="Progress" />
        <TweakButton label="Reset all progress" onClick={() => { if (confirm("Reset points, streak and mastery?")) resetAll(); }} />
      </TweaksPanel>
    </div>
  );
}

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const base = THEMES[t.theme] || THEMES.classic;
  const T = t.theme === "classic" ? { ...base, ...((CLASSIC_PAPERS[t.paper] || CLASSIC_PAPERS.manuscript).tokens) } : base;
  return <GameProvider><Shell T={T} t={t} setTweak={setTweak} /></GameProvider>;
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);

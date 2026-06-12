// quiz.jsx — Daily words + Quiz (spaced repetition, points, combo). After library.jsx.

function Daily({ T, goQuiz }) {
  const { words, state } = useGame();
  const list = (state.dailyWords || []).map(wd => words.find(w => w.word === wd)).filter(Boolean);
  const dateLabel = new Date().toLocaleDateString(undefined, { weekday: "long", month: "long", day: "numeric" });

  return (
    <div style={{ display: "grid", gap: 24 }}>
      <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 16, flexWrap: "wrap" }}>
        <div>
          <div style={{ fontFamily: T.fontBody, fontSize: 12, letterSpacing: ".16em", textTransform: "uppercase", color: T.subSolid, fontWeight: 600 }}>{dateLabel}</div>
          <h2 style={{ margin: "6px 0 0", fontFamily: T.fontHead, fontWeight: T.headWeight, fontSize: 32, color: T.ink, letterSpacing: T.headLs }}>Three words for today</h2>
        </div>
        <button onClick={goQuiz} style={btnPrimary(T)}>Practice these →</button>
      </div>
      <div style={{ display: "grid", gap: 16 }}>
        {list.map((w, i) => (
          <div key={w.word} style={{ background: T.surface, border: `1px solid ${T.line}`, borderRadius: T.radiusLg, padding: "26px 28px", position: "relative", overflow: "hidden" }}>
            <span style={{ position: "absolute", top: -18, right: 10, fontFamily: T.fontHead, fontSize: 130, fontWeight: T.headWeight, color: T.lineSoft, lineHeight: 1, pointerEvents: "none", opacity: .7 }}>{i + 1}</span>
            <div style={{ position: "relative" }}>
              <h3 style={{ margin: 0, fontFamily: T.fontHead, fontWeight: T.headWeight, fontSize: 40, color: T.ink, letterSpacing: T.headLs, lineHeight: 1.05 }}>{w.word}</h3>
              <div style={{ display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap", marginTop: 10 }}>
                <SpeakButton T={T} text={w.word} size={34} />
                <span style={{ fontFamily: T.fontBody, fontSize: 15, color: T.subSolid, fontStyle: "italic", whiteSpace: "nowrap" }}>{w.pron}</span>
                <span style={{ fontFamily: T.fontBody, fontSize: 13, color: T.subSolid, fontStyle: "italic", whiteSpace: "nowrap" }}>{w.pos}</span>
                <TierDot tier={w.tier} T={T} />
              </div>
              <div style={{ marginTop: 4 }}><WordDetail w={w} T={T} /></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ---------- Quiz ----------
function shuffle(a) { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }

function buildQueue(words, boxOf) {
  // spaced repetition: lowest box first (new & shaky words surface sooner), mastered last
  return shuffle(words).sort((a, b) => boxOf(a.word) - boxOf(b.word)).map(w => w.word);
}

function buildQuestion(word, words) {
  const w = words.find(x => x.word === word);
  const type = Math.random() < 0.5 ? "meaning" : "word";
  const others = shuffle(words.filter(x => x.word !== word));
  if (type === "meaning") {
    const opts = shuffle([w.meaning, ...others.slice(0, 3).map(x => x.meaning)]);
    return { w, type, prompt: w.word, sub: `${w.pron}  ·  ${w.pos}`, options: opts, answer: w.meaning, q: "What does it mean?" };
  }
  const opts = shuffle([w.word, ...others.slice(0, 3).map(x => x.word)]);
  return { w, type, prompt: w.meaning, sub: "", options: opts, answer: w.word, q: "Which word fits?" };
}

function Quiz({ T }) {
  const { words, recordAnswer, bumpCombo, boxOf, state } = useGame();
  const [queue, setQueue] = React.useState(() => buildQueue(words, boxOf));
  const [pos, setPos] = React.useState(0);
  const [q, setQ] = React.useState(() => buildQuestion(buildQueue(words, boxOf)[0], words));
  const [picked, setPicked] = React.useState(null);
  const [combo, setCombo] = React.useState(0);
  const [stats, setStats] = React.useState({ answered: 0, correct: 0, gained: 0 });
  const startRef = React.useRef(state.points);

  // (re)build question whenever the active queue position changes
  const loadQuestion = (queueArr, p) => setQ(buildQuestion(queueArr[p % queueArr.length], words));

  const revealed = picked !== null;
  const isCorrect = revealed && picked === q.answer;

  const onPick = (opt) => {
    if (revealed) return;
    const correct = opt === q.answer;
    const gained = correct ? 10 + combo * 2 : 0;
    setPicked(opt);
    recordAnswer(q.w.word, correct, gained);
    const newCombo = correct ? combo + 1 : 0;
    setCombo(newCombo); bumpCombo(newCombo);
    setStats(s => ({ answered: s.answered + 1, correct: s.correct + (correct ? 1 : 0), gained: s.gained + gained }));
    // spaced repetition: missed word returns later in the queue
    if (!correct) setQueue(prev => { const n = prev.slice(); const insertAt = Math.min(prev.length, pos + 3); n.splice(insertAt, 0, q.w.word); return n; });
  };

  const next = () => {
    const np = pos + 1;
    if (np >= queue.length) { setPos(np); return; } // triggers finished view
    setPicked(null); setPos(np); loadQuestion(queue, np);
  };

  const restart = () => {
    const nq = buildQueue(words, boxOf);
    setQueue(nq); setPos(0); setPicked(null); setCombo(0);
    setStats({ answered: 0, correct: 0, gained: 0 }); setQ(buildQuestion(nq[0], words));
  };

  if (pos >= queue.length) {
    const acc = stats.answered ? Math.round((stats.correct / stats.answered) * 100) : 0;
    return (
      <div style={{ display: "grid", placeItems: "center", minHeight: 420 }}>
        <div style={{ textAlign: "center", maxWidth: 460, background: T.surface, border: `1px solid ${T.line}`, borderRadius: T.radiusLg, padding: "48px 40px", boxShadow: T.shadow }}>
          <div style={{ fontFamily: T.fontBody, fontSize: 12, letterSpacing: ".18em", textTransform: "uppercase", color: T.subSolid, fontWeight: 600 }}>Session complete</div>
          <div style={{ fontFamily: T.fontHead, fontWeight: T.headWeight, fontSize: 64, color: T.accent, lineHeight: 1.1, margin: "10px 0 2px" }}>+{stats.gained}</div>
          <div style={{ fontFamily: T.fontBody, fontSize: 15, color: T.subSolid, marginBottom: 26 }}>points earned</div>
          <div style={{ display: "flex", justifyContent: "center", gap: 30, marginBottom: 30 }}>
            <Metric T={T} label="Accuracy" value={acc + "%"} />
            <Metric T={T} label="Correct" value={`${stats.correct}/${stats.answered}`} />
            <Metric T={T} label="Best combo" value={state.bestCombo} />
          </div>
          <button onClick={restart} style={btnPrimary(T)}>Practice again</button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ display: "grid", placeItems: "center" }}>
      <div style={{ width: "100%", maxWidth: 720 }}>
        {/* progress + combo */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 18 }}>
          <div style={{ fontFamily: T.fontBody, fontSize: 13, color: T.subSolid, fontWeight: 600, letterSpacing: ".04em" }}>
            Question {Math.min(pos + 1, queue.length)} <span style={{ opacity: .5 }}>/ {queue.length}</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            {combo >= 2 && <span style={{ fontFamily: T.fontBody, fontSize: 13, fontWeight: 700, color: T.accent, letterSpacing: ".02em" }}>{combo}× combo</span>}
          </div>
        </div>
        <div style={{ height: 4, background: T.lineSoft, borderRadius: 99, overflow: "hidden", marginBottom: 28 }}>
          <div style={{ height: "100%", width: `${(pos / queue.length) * 100}%`, background: T.accent, borderRadius: 99, transition: "width .4s" }} />
        </div>

        {/* prompt */}
        <div style={{ background: T.surface, border: `1px solid ${T.line}`, borderRadius: T.radiusLg, padding: "30px 30px 34px", boxShadow: T.shadow }}>
          <div style={{ fontFamily: T.fontBody, fontSize: 12, letterSpacing: ".16em", textTransform: "uppercase", color: T.subSolid, fontWeight: 600, marginBottom: 14 }}>{q.q}</div>
          <div style={{
            fontFamily: q.type === "meaning" ? T.fontHead : T.fontBody, fontWeight: q.type === "meaning" ? T.headWeight : 500,
            fontSize: q.type === "meaning" ? 44 : 23, color: T.ink, lineHeight: 1.25, letterSpacing: q.type === "meaning" ? T.headLs : "0"
          }}>{q.type === "meaning" ? q.prompt : `“${q.prompt}”`}</div>
          {q.sub && <div style={{ fontFamily: T.fontBody, fontSize: 14, color: T.subSolid, fontStyle: "italic", marginTop: 8 }}>{q.sub}</div>}

          <div style={{ display: "grid", gap: 11, marginTop: 26 }}>
            {q.options.map((opt, i) => {
              const correctOpt = revealed && opt === q.answer;
              const wrongPick = revealed && opt === picked && opt !== q.answer;
              let bg = "transparent", bc = T.line, fg = T.ink;
              if (correctOpt) { bg = tint(T.good, .12); bc = T.good; }
              else if (wrongPick) { bg = tint(T.bad, .1); bc = T.bad; }
              else if (revealed) { fg = T.subSolid; }
              return (
                <button key={i} onClick={() => onPick(opt)} disabled={revealed}
                  style={{
                    textAlign: "left", fontFamily: T.fontBody, fontSize: 16, lineHeight: 1.45,
                    padding: "14px 18px", borderRadius: T.radius, cursor: revealed ? "default" : "pointer",
                    border: `1.5px solid ${bc}`, background: bg, color: fg, transition: "all .15s",
                    display: "flex", alignItems: "center", gap: 12
                  }}
                  onMouseEnter={e => { if (!revealed) e.currentTarget.style.borderColor = T.ink; }}
                  onMouseLeave={e => { if (!revealed) e.currentTarget.style.borderColor = T.line; }}>
                  <span style={{ flexShrink: 0, width: 24, height: 24, borderRadius: 99, border: `1.5px solid ${correctOpt ? T.good : wrongPick ? T.bad : T.line}`, display: "grid", placeItems: "center", fontSize: 12, fontWeight: 700, color: correctOpt ? T.good : wrongPick ? T.bad : T.subSolid }}>
                    {correctOpt ? <Check size={13} color={T.good} /> : wrongPick ? "×" : String.fromCharCode(65 + i)}
                  </span>
                  <span>{opt}</span>
                </button>
              );
            })}
          </div>

          {revealed && (
            <div style={{ marginTop: 22, paddingTop: 20, borderTop: `1px solid ${T.lineSoft}`, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, flexWrap: "wrap" }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: 11, maxWidth: 470 }}>
                <SpeakButton T={T} text={q.w.word} size={30} />
                <div style={{ fontFamily: T.fontBody, fontSize: 14.5, color: T.subSolid }}>
                  <strong style={{ color: isCorrect ? T.good : T.bad, fontWeight: 700 }}>{isCorrect ? `Correct  +${10 + (combo - 1) * 2}` : "Not quite."}</strong>{" "}
                  {q.type === "word" ? <span><em>{q.w.word}</em> — {q.w.meaning}</span> : <span><em>{q.w.word}</em> {q.w.pron}</span>}
                </div>
              </div>
              <button onClick={next} style={btnPrimary(T)}>{pos + 1 >= queue.length ? "See results" : "Next →"}</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function Metric({ T, label, value }) {
  return <div style={{ textAlign: "center" }}>
    <div style={{ fontFamily: T.fontHead, fontWeight: T.headWeight, fontSize: 30, color: T.ink, lineHeight: 1 }}>{value}</div>
    <div style={{ fontFamily: T.fontBody, fontSize: 11, letterSpacing: ".1em", textTransform: "uppercase", color: T.subSolid, fontWeight: 600, marginTop: 6 }}>{label}</div>
  </div>;
}

function btnPrimary(T) {
  return {
    fontFamily: T.fontBody, fontSize: 14.5, fontWeight: 600, letterSpacing: ".01em",
    padding: "11px 22px", borderRadius: T.radius === "0px" ? "0" : 99, cursor: "pointer",
    border: `1px solid ${T.ink}`, background: T.ink, color: T.bg, transition: "transform .12s, opacity .15s"
  };
}

// translucent tint of an oklch/hex color via color-mix (works for both)
function tint(c, a) { return `color-mix(in srgb, ${c} ${Math.round(a * 100)}%, transparent)`; }

Object.assign(window, { Daily, Quiz, btnPrimary, tint, Metric });

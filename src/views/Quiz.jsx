// Quiz: multiple-choice with points, combo bonuses, and spaced repetition.
// Sessions draw a capped queue (today's words first, then the shakiest words);
// missed words are re-inserted a few positions ahead until answered correctly.
import React from "react";
import { T, tint, btnPrimary } from "../theme.js";
import { useGame } from "../game.jsx";
import { Check, SpeakButton, Metric } from "../components/ui.jsx";

const SESSION_SIZE = 15;

function shuffle(a) {
  a = a.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// spaced repetition: today's daily words lead, then lowest box first
// (new & shaky words surface sooner, mastered last), capped per session
function buildQueue(words, boxOf, dailyWords) {
  const daily = (dailyWords || []).filter((wd) => words.some((w) => w.word === wd));
  const rest = shuffle(words.filter((w) => !daily.includes(w.word)))
    .sort((a, b) => boxOf(a.word) - boxOf(b.word))
    .map((w) => w.word);
  return [...daily, ...rest].slice(0, SESSION_SIZE);
}

function buildQuestion(word, words) {
  const w = words.find((x) => x.word === word);
  const type = Math.random() < 0.5 ? "meaning" : "word";
  const others = shuffle(words.filter((x) => x.word !== word));
  if (type === "meaning") {
    const opts = shuffle([w.meaning, ...others.slice(0, 3).map((x) => x.meaning)]);
    return { w, type, prompt: w.word, sub: `${w.pron}  ·  ${w.pos}`, options: opts, answer: w.meaning, q: "What does it mean?" };
  }
  const opts = shuffle([w.word, ...others.slice(0, 3).map((x) => x.word)]);
  return { w, type, prompt: w.meaning, sub: "", options: opts, answer: w.word, q: "Which word fits?" };
}

export function Quiz() {
  const { words, recordAnswer, bumpCombo, boxOf, state } = useGame();
  const [queue, setQueue] = React.useState(() => buildQueue(words, boxOf, state.dailyWords));
  const [pos, setPos] = React.useState(0);
  const [q, setQ] = React.useState(() => buildQuestion(queue[0], words));
  const [picked, setPicked] = React.useState(null);
  const [combo, setCombo] = React.useState(0);
  const [stats, setStats] = React.useState({ answered: 0, correct: 0, gained: 0 });

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
    setCombo(newCombo);
    bumpCombo(newCombo);
    setStats((s) => ({ answered: s.answered + 1, correct: s.correct + (correct ? 1 : 0), gained: s.gained + gained }));
    // spaced repetition: missed word returns later in the queue
    if (!correct) setQueue((prev) => {
      const n = prev.slice();
      const insertAt = Math.min(prev.length, pos + 3);
      n.splice(insertAt, 0, q.w.word);
      return n;
    });
  };

  const next = () => {
    const np = pos + 1;
    if (np >= queue.length) { setPos(np); return; } // triggers finished view
    setPicked(null);
    setPos(np);
    loadQuestion(queue, np);
  };

  const restart = () => {
    const nq = buildQueue(words, boxOf, state.dailyWords);
    setQueue(nq); setPos(0); setPicked(null); setCombo(0);
    setStats({ answered: 0, correct: 0, gained: 0 });
    setQ(buildQuestion(nq[0], words));
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
            <Metric label="Accuracy" value={acc + "%"} />
            <Metric label="Correct" value={`${stats.correct}/${stats.answered}`} />
            <Metric label="Best combo" value={state.bestCombo} />
          </div>
          <button onClick={restart} style={btnPrimary()}>Practice again</button>
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
            Question {Math.min(pos + 1, queue.length)} <span style={{ opacity: 0.5 }}>/ {queue.length}</span>
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
            fontSize: q.type === "meaning" ? 44 : 23, color: T.ink, lineHeight: 1.25, letterSpacing: q.type === "meaning" ? T.headLs : "0",
          }}>{q.type === "meaning" ? q.prompt : `“${q.prompt}”`}</div>
          {q.sub && <div style={{ fontFamily: T.fontBody, fontSize: 14, color: T.subSolid, fontStyle: "italic", marginTop: 8 }}>{q.sub}</div>}

          <div style={{ display: "grid", gap: 11, marginTop: 26 }}>
            {q.options.map((opt, i) => {
              const correctOpt = revealed && opt === q.answer;
              const wrongPick = revealed && opt === picked && opt !== q.answer;
              let bg = "transparent", bc = T.line, fg = T.ink;
              if (correctOpt) { bg = tint(T.good, 0.12); bc = T.good; }
              else if (wrongPick) { bg = tint(T.bad, 0.1); bc = T.bad; }
              else if (revealed) { fg = T.subSolid; }
              return (
                <button key={i} onClick={() => onPick(opt)} disabled={revealed}
                  style={{
                    textAlign: "left", fontFamily: T.fontBody, fontSize: 16, lineHeight: 1.45,
                    padding: "14px 18px", borderRadius: T.radius, cursor: revealed ? "default" : "pointer",
                    border: `1.5px solid ${bc}`, background: bg, color: fg, transition: "all .15s",
                    display: "flex", alignItems: "center", gap: 12,
                  }}
                  onMouseEnter={(e) => { if (!revealed) e.currentTarget.style.borderColor = T.ink; }}
                  onMouseLeave={(e) => { if (!revealed) e.currentTarget.style.borderColor = T.line; }}>
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
                <SpeakButton text={q.w.word} size={30} />
                <div style={{ fontFamily: T.fontBody, fontSize: 14.5, color: T.subSolid }}>
                  <strong style={{ color: isCorrect ? T.good : T.bad, fontWeight: 700 }}>{isCorrect ? `Correct  +${10 + (combo - 1) * 2}` : "Not quite."}</strong>{" "}
                  {q.type === "word" ? <span><em>{q.w.word}</em> — {q.w.meaning}</span> : <span><em>{q.w.word}</em> {q.w.pron}</span>}
                </div>
              </div>
              <button onClick={next} style={btnPrimary()}>{pos + 1 >= queue.length ? "See results" : "Next →"}</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

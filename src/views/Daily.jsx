// Daily view: today's featured words, fully expanded.
import React from "react";
import { T, btnPrimary } from "../theme.js";
import { useGame } from "../game.jsx";
import { SpeakButton, TierDot } from "../components/ui.jsx";
import { WordDetail } from "./Library.jsx";

export function Daily({ goQuiz }) {
  const { words, state } = useGame();
  const list = (state.dailyWords || []).map((wd) => words.find((w) => w.word === wd)).filter(Boolean);
  const dateLabel = new Date().toLocaleDateString(undefined, { weekday: "long", month: "long", day: "numeric" });

  return (
    <div style={{ display: "grid", gap: 24 }}>
      <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 16, flexWrap: "wrap" }}>
        <div>
          <div style={{ fontFamily: T.fontBody, fontSize: 12, letterSpacing: ".16em", textTransform: "uppercase", color: T.subSolid, fontWeight: 600 }}>{dateLabel}</div>
          <h2 style={{ margin: "6px 0 0", fontFamily: T.fontHead, fontWeight: T.headWeight, fontSize: 32, color: T.ink, letterSpacing: T.headLs }}>Three words for today</h2>
        </div>
        <button onClick={goQuiz} style={btnPrimary()}>Practice these →</button>
      </div>
      <div style={{ display: "grid", gap: 16 }}>
        {list.map((w, i) => (
          <div key={w.word} style={{ background: T.surface, border: `1px solid ${T.line}`, borderRadius: T.radiusLg, padding: "26px 28px", position: "relative", overflow: "hidden" }}>
            <span style={{ position: "absolute", top: -18, right: 10, fontFamily: T.fontHead, fontSize: "clamp(60px, 22vw, 130px)", fontWeight: T.headWeight, color: T.lineSoft, lineHeight: 1, pointerEvents: "none", opacity: 0.7 }}>{i + 1}</span>
            <div style={{ position: "relative" }}>
              <h3 style={{ margin: 0, fontFamily: T.fontHead, fontWeight: T.headWeight, fontSize: "clamp(26px, 8vw, 40px)", color: T.ink, letterSpacing: T.headLs, lineHeight: 1.05 }}>{w.word}</h3>
              <div style={{ display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap", marginTop: 10 }}>
                <SpeakButton text={w.word} size={34} />
                <span style={{ fontFamily: T.fontBody, fontSize: 15, color: T.subSolid, fontStyle: "italic", whiteSpace: "nowrap" }}>{w.pron}</span>
                <span style={{ fontFamily: T.fontBody, fontSize: 13, color: T.subSolid, fontStyle: "italic", whiteSpace: "nowrap" }}>{w.pos}</span>
                <TierDot tier={w.tier} />
              </div>
              <div style={{ marginTop: 4 }}><WordDetail w={w} /></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

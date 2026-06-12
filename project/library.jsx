// library.jsx — Library grid + inline-expanding WordCard. Loaded after lib.jsx.

function Field({ T, label, children, accentLine }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: "0 18px", alignItems: "baseline" }}>
      <div style={{ fontSize: 11, letterSpacing: ".12em", textTransform: "uppercase", color: T.subSolid, fontWeight: 600, paddingTop: 3, fontFamily: T.fontBody }}>{label}</div>
      <div style={{ fontSize: 16.5, lineHeight: 1.6, color: T.ink, fontFamily: T.fontBody }}>{children}</div>
    </div>
  );
}

function ChipList({ T, items, tone }) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
      {items.map((x, i) => (
        <span key={i} style={{
          fontSize: 13.5, padding: "4px 11px", borderRadius: T.radius === "0px" ? "0" : 99,
          background: tone === "ant" ? "transparent" : T.chip,
          border: tone === "ant" ? `1px dashed ${T.line}` : `1px solid ${T.lineSoft}`,
          color: tone === "ant" ? T.subSolid : T.ink, fontFamily: T.fontBody, letterSpacing: ".01em"
        }}>{x}</span>
      ))}
    </div>
  );
}

function WordDetail({ w, T }) {
  return (
    <div style={{ display: "grid", gap: 18, paddingTop: 18, marginTop: 16, borderTop: `1px solid ${T.lineSoft}` }}>
      <Field T={T} label="Meaning">{w.meaning}</Field>
      <Field T={T} label="Etymology"><span style={{ color: T.subSolid }}>{w.etymology}</span></Field>
      <Field T={T} label="In use">
        <span style={{ fontStyle: "italic", color: T.ink }}>“{w.usage}”</span>
      </Field>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }}>
        <div style={{ display: "grid", gap: 9 }}>
          <div style={{ fontSize: 11, letterSpacing: ".12em", textTransform: "uppercase", color: T.subSolid, fontWeight: 600, fontFamily: T.fontBody }}>Synonyms</div>
          <ChipList T={T} items={w.syn} tone="syn" />
        </div>
        <div style={{ display: "grid", gap: 9 }}>
          <div style={{ fontSize: 11, letterSpacing: ".12em", textTransform: "uppercase", color: T.subSolid, fontWeight: 600, fontFamily: T.fontBody }}>Antonyms</div>
          <ChipList T={T} items={w.ant} tone="ant" />
        </div>
      </div>
    </div>
  );
}

function WordCard({ w, T, open, onToggle }) {
  const { boxOf } = useGame();
  const status = statusOf(boxOf(w.word));
  const [hover, setHover] = React.useState(false);
  return (
    <div
      onClick={onToggle}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        gridColumn: open ? "1 / -1" : "auto",
        background: T.surface, border: `1px solid ${open ? T.ink : T.line}`,
        borderRadius: T.radiusLg, padding: open ? "24px 26px" : "18px 20px",
        cursor: "pointer", transition: "border-color .2s, transform .15s, box-shadow .2s",
        boxShadow: open ? T.shadow : (hover ? T.shadow : "none"),
        transform: hover && !open ? "translateY(-2px)" : "none", position: "relative"
      }}
    >
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 14 }}>
        <div style={{ minWidth: 0 }}>
          <div style={{ display: "flex", alignItems: "baseline", gap: 12, flexWrap: "wrap" }}>
            <h3 style={{
              margin: 0, fontFamily: T.fontHead, fontWeight: T.headWeight, color: T.ink,
              fontSize: open ? 38 : 24, letterSpacing: T.headLs, lineHeight: 1.05, transition: "font-size .2s"
            }}>{w.word}</h3>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 14, marginTop: 9, flexWrap: "wrap" }}>
            <SpeakButton T={T} text={w.word} size={28} />
            <span style={{ fontFamily: T.fontBody, fontSize: 14, color: T.subSolid, fontStyle: "italic", whiteSpace: "nowrap" }}>{w.pron}</span>
            <span style={{ fontFamily: T.fontBody, fontSize: 13, color: T.subSolid, fontStyle: "italic" }}>{w.pos}</span>
            <TierDot tier={w.tier} T={T} />
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 12, flexShrink: 0 }}>
          <StatusBadge status={status} T={T} />
          <span style={{
            fontFamily: T.fontBody, fontSize: 20, color: T.subSolid, width: 22, height: 22,
            display: "grid", placeItems: "center", transition: "transform .25s", transform: open ? "rotate(45deg)" : "none"
          }}>+</span>
        </div>
      </div>
      {!open && (
        <p style={{
          margin: "12px 0 0", fontFamily: T.fontBody, fontSize: 15, lineHeight: 1.55, color: T.subSolid,
          overflow: "hidden", textOverflow: "ellipsis", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical"
        }}>{w.meaning}</p>
      )}
      {open && <WordDetail w={w} T={T} />}
    </div>
  );
}

function Library({ T }) {
  const { words } = useGame();
  const [openWord, setOpenWord] = React.useState(null);
  const [filter, setFilter] = React.useState("all");
  const { boxOf } = useGame();

  const filters = [
    { id: "all", label: "All" }, { id: "new", label: "New" },
    { id: "learning", label: "Learning" }, { id: "mastered", label: "Mastered" },
    { id: "GRE", label: "GRE" }, { id: "Arcane", label: "Arcane" }
  ];
  const shown = words.filter(w => {
    if (filter === "all") return true;
    if (filter === "GRE" || filter === "Arcane") return w.tier === filter;
    return statusOf(boxOf(w.word)) === filter;
  });

  return (
    <div style={{ display: "grid", gap: 22 }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, flexWrap: "wrap" }}>
        <p style={{ margin: 0, fontFamily: T.fontBody, fontSize: 15, color: T.subSolid, maxWidth: 460 }}>
          Tap any word to unfold its meaning, origin, and life in a sentence.
        </p>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          {filters.map(f => (
            <button key={f.id} onClick={() => setFilter(f.id)} style={{
              fontFamily: T.fontBody, fontSize: 13, fontWeight: 600, letterSpacing: ".02em",
              padding: "7px 14px", borderRadius: T.radius === "0px" ? "0" : 99, cursor: "pointer",
              border: `1px solid ${filter === f.id ? T.ink : T.line}`,
              background: filter === f.id ? T.ink : "transparent",
              color: filter === f.id ? T.bg : T.subSolid, transition: "all .15s"
            }}>{f.label}</button>
          ))}
        </div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 16, alignItems: "start" }}>
        {shown.map(w => (
          <WordCard key={w.word} w={w} T={T}
            open={openWord === w.word}
            onToggle={() => setOpenWord(openWord === w.word ? null : w.word)} />
        ))}
      </div>
      {shown.length === 0 && (
        <div style={{ textAlign: "center", padding: "60px 0", fontFamily: T.fontBody, color: T.subSolid }}>
          No words here yet — go practice some.
        </div>
      )}
    </div>
  );
}

Object.assign(window, { Library, WordCard, WordDetail });

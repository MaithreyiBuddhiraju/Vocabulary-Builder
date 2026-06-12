// Audio pronunciation via the Web Speech API.
let voicesWarm = false;

function warmVoices() {
  try {
    if (!voicesWarm && window.speechSynthesis) {
      speechSynthesis.getVoices();
      voicesWarm = true;
    }
  } catch { /* unsupported */ }
}

function pickVoice() {
  try {
    const vs = speechSynthesis.getVoices();
    return (
      vs.find((v) => /en-GB/i.test(v.lang)) ||
      vs.find((v) => /en[-_]US/i.test(v.lang)) ||
      vs.find((v) => /^en/i.test(v.lang)) ||
      null
    );
  } catch {
    return null;
  }
}

export function speak(text, setPlaying) {
  if (!("speechSynthesis" in window)) return;
  try {
    warmVoices();
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = "en-US";
    u.rate = 0.82;
    u.pitch = 1;
    const v = pickVoice();
    if (v) u.voice = v;
    u.onstart = () => setPlaying && setPlaying(true);
    u.onend = () => setPlaying && setPlaying(false);
    u.onerror = () => setPlaying && setPlaying(false);
    speechSynthesis.speak(u);
  } catch {
    setPlaying && setPlaying(false);
  }
}

if (typeof window !== "undefined" && window.speechSynthesis) {
  try { speechSynthesis.onvoiceschanged = warmVoices; } catch { /* ignore */ }
}

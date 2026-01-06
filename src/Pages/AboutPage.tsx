import { useEffect, useState, useCallback } from "react";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";

const AboutPage = () => {
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);

  useEffect(() => {
    // protect against SSR
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;

    const synth = window.speechSynthesis;

    const loadVoices = () => {
      const v = synth.getVoices();
      if (v && v.length) setVoices(v);
    };

    // initial attempt (may be empty)
    loadVoices();

    // browsers fire this when voices become available
    const onVoicesChanged = () => loadVoices();
    synth.addEventListener("voiceschanged", onVoicesChanged);

    return () => {
      synth.removeEventListener("voiceschanged", onVoicesChanged);
    };
  }, []);

  const speak = useCallback(
    (text: string) => {
      if (typeof window === "undefined" || !("speechSynthesis" in window)) {
        console.warn("SpeechSynthesis not available in this environment.");
        return;
      }
      const synth = window.speechSynthesis;

      // stop currently speaking (optional)
      if (synth.speaking) synth.cancel();

      const utterance = new SpeechSynthesisUtterance(text);
      const available = voices.length ? voices : synth.getVoices();

      // pick a voice (fallback to first)
      const chosen =
        available.find((v) => v.name.toLowerCase().includes("male")) ||
        available[0] ||
        null;

      if (chosen) utterance.voice = chosen;
      utterance.lang = "en-US";
      utterance.rate = 1;
      utterance.pitch = 1;

      // optional logging for debugging
      utterance.onend = () => console.log("TTS finished");
      utterance.onerror = (e) => console.error("TTS error", e);

      synth.speak(utterance);
    },
    [voices]
  );

  // If you want an initial auto-speak, do it only after voices are loaded.
  // Note: some browsers require a user gesture — auto-speak may be blocked.
  useEffect(() => {
    if (voices.length) {
      // uncomment to auto speak after voices loaded (may be blocked)
      // speak("Hello AJ, JavaScript is speaking now.");
    }
  }, [voices, speak]);

  return (
    <div>
      <Header />
      <div style={{ padding: 24 }}>
        <Button onClick={() => speak("Welcome to the About page")}>
          Speak
        </Button>
        <div style={{ marginTop: 12 }}>About page</div>

        {/* debug UI (optional) */}
        <div style={{ marginTop: 12 }}>
          <strong>Available voices:</strong>
          <ul>
            {voices.length ? (
              voices.map((v) => (
                <li key={v.name}>
                  {v.name} — {v.lang} {v.default ? "(default)" : ""}
                </li>
              ))
            ) : (
              <li>No voices loaded yet</li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;

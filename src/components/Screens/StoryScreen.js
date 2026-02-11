import React from "react";
import { S } from "../../styles/AppStyles";

export default function StoryScreen({ current, theme, setScreen, SCREENS, startQuiz, settings, haptic, playSfx }) {
    const speak = () => {
        if (!window.speechSynthesis) return;
        window.speechSynthesis.cancel();
        haptic("light");
        playSfx("click");
        const text = `${current.title}. ${current.summary}. Scripture: ${current.scripture.map(s => s.text).join(". ")}`;
        const utter = new SpeechSynthesisUtterance(text);
        utter.rate = settings.narrationSpeed || 1.0;
        window.speechSynthesis.speak(utter);
    };

    const stopSpeaking = () => {
        haptic("light");
        window.speechSynthesis.cancel();
    };

    return (
        <div style={S.page}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
                <button style={{ background: "none", border: "none", color: theme.accent, cursor: "pointer" }} onClick={() => { playSfx("click"); haptic("light"); stopSpeaking(); setScreen(SCREENS.MAP); }}>← Back to Map</button>
                {settings.audioEnabled && (
                    <div style={{ display: "flex", gap: 10 }}>
                        <button onClick={speak} style={{ background: theme.accent, border: "none", borderRadius: "50%", width: 40, height: 40, cursor: "pointer", fontSize: 18 }}>🔊</button>
                        <button onClick={stopSpeaking} style={{ background: theme.bgAlt, border: `1px solid ${theme.border}`, borderRadius: "50%", width: 40, height: 40, cursor: "pointer", fontSize: 18, color: theme.text }}>🔇</button>
                    </div>
                )}
            </div>

            <div style={{ ...S.levelCard, background: theme.card, padding: 30 }}>
                <div style={{ fontSize: 64, textAlign: "center", marginBottom: 16 }}>{current.icon}</div>
                <h1 style={{ color: theme.accent, marginBottom: 8 }}>{current.title}</h1>
                <p style={{ marginBottom: 20, lineHeight: 1.6 }}>{current.summary}</p>
                <div style={{ textAlign: "left", marginTop: 20 }}>
                    <h3 style={{ color: theme.accent, marginBottom: 12 }}>Scripture References</h3>
                    {current.scripture.map((s, i) => (
                        <div key={i} style={{ marginBottom: 10, padding: 12, background: theme.bgAlt, borderRadius: 8 }}>
                            <div style={{ fontWeight: 700, fontSize: 13, color: theme.accent, marginBottom: 4 }}>{s.ref}</div>
                            <div style={{ fontSize: 14, lineHeight: 1.5 }}>{s.text}</div>
                        </div>
                    ))}
                </div>
                <button onClick={() => { stopSpeaking(); startQuiz(); }} style={{ ...S.btnPrimary, background: theme.accent, marginTop: 24 }}>Start Quiz</button>
            </div>
        </div>
    );
}

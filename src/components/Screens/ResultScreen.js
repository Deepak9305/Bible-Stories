import React from "react";
import { S } from "../../styles/AppStyles";

export default function ResultScreen({ quizState, current, theme, setScreen, SCREENS, playSfx, haptic }) {
    return (
        <div style={S.page}>
            <div style={{ ...S.levelCard, background: theme.card, padding: 48, textAlign: "center" }}>
                <div style={{ fontSize: 80, marginBottom: 24 }}>{quizState.score >= 2 ? "🎉" : "📚"}</div>
                <h1 style={{ color: theme.accent, marginBottom: 16 }}>{quizState.score >= 2 ? "Mastered!" : "Good Effort"}</h1>
                <p style={{ fontSize: 20, fontWeight: 600, marginBottom: 8 }}>Score: {quizState.score} / {current.questions.length}</p>
                <p style={{ color: theme.textSub, marginBottom: 32, lineHeight: 1.5 }}>
                    {quizState.score >= 2
                        ? "You have successfully completed this story and earned your progress!"
                        : "Try reviewing the story and scripture again to get a perfect score."}
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                    <button onClick={() => { haptic("light"); playSfx("click"); setScreen(SCREENS.MAP); }} style={{ ...S.btnPrimary, background: theme.accent }}>Back to Map</button>
                    {quizState.score < 2 && (
                        <button onClick={() => { haptic("light"); playSfx("click"); setScreen(SCREENS.STORY); }} style={{ ...S.btnSecondary, background: theme.bgAlt, color: theme.text }}>Retry Story</button>
                    )}
                </div>
            </div>
        </div>
    );
}

import React from "react";
import { S } from "../../styles/AppStyles";

export default function QuizScreen({ current, quizState, theme, setScreen, SCREENS, pickAnswer, nextQ }) {
    return (
        <div style={S.page}>
            <button style={{ background: "none", border: "none", color: theme.accent, cursor: "pointer", marginBottom: 20 }} onClick={() => setScreen(SCREENS.STORY)}>← Back to Story</button>
            <div style={{ ...S.levelCard, background: theme.card, padding: 30 }}>
                <div style={{ fontSize: 13, color: theme.textMuted, marginBottom: 8 }}>Question {quizState.idx + 1} of {current.questions.length}</div>
                <h2 style={{ marginBottom: 24, lineHeight: 1.3 }}>{current.questions[quizState.idx].q}</h2>
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                    {current.questions[quizState.idx].options.map((opt, i) => {
                        const isPicked = quizState.picked === i;
                        const isCorrect = i === current.questions[quizState.idx].correct;
                        const showResult = quizState.picked !== null;
                        return (
                            <button
                                key={i}
                                onClick={() => pickAnswer(i)}
                                disabled={showResult}
                                style={{
                                    padding: 16,
                                    borderRadius: 10,
                                    background: showResult ? (isCorrect ? "#2e7d3233" : isPicked ? "#c6282833" : theme.bgAlt) : theme.bgAlt,
                                    border: `2px solid ${showResult ? (isCorrect ? "#2e7d32" : isPicked ? "#c62828" : theme.border) : theme.border}`,
                                    color: theme.text,
                                    textAlign: "left",
                                    fontSize: 15,
                                    fontWeight: 600,
                                    cursor: showResult ? "default" : "pointer",
                                    transition: "all 0.2s"
                                }}
                            >
                                <span style={{ marginRight: 12 }}>{String.fromCharCode(65 + i)}.</span> {opt}
                                {showResult && (isCorrect ? " ✓" : isPicked ? " ✗" : "")}
                            </button>
                        );
                    })}
                </div>
                {quizState.picked !== null && (
                    <button onClick={nextQ} style={{ ...S.btnPrimary, background: theme.accent, marginTop: 32 }}>
                        {quizState.idx === current.questions.length - 1 ? "Finish Quiz" : "Next Question"}
                    </button>
                )}
            </div>
        </div>
    );
}

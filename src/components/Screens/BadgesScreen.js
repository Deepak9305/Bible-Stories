import React from "react";
import { S } from "../../styles/AppStyles";
import { BADGE_DEFS } from "../../data/badges";

export default function BadgesScreen({ earned, theme, setScreen, SCREENS, playSfx, haptic }) {
    return (
        <div style={S.page}>
            <button style={{ background: "none", border: "none", color: theme.accent, cursor: "pointer", marginBottom: 20 }} onClick={() => { playSfx("click"); haptic("light"); setScreen(SCREENS.MAP); }}>← Back to Map</button>
            <div style={{ ...S.levelCard, background: theme.card, padding: 32 }}>
                <h1 style={{ color: theme.accent, marginBottom: 8 }}>My Gallery</h1>
                <p style={{ color: theme.textSub, marginBottom: 32 }}>Your earned achievements and milestones.</p>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(130px, 1fr))", gap: 16 }}>
                    {BADGE_DEFS.map(badge => {
                        const isEarned = earned.includes(badge.id);
                        return (
                            <div
                                key={badge.id}
                                style={{
                                    padding: 16,
                                    borderRadius: 16,
                                    background: isEarned ? theme.bgAlt : `${theme.bgAlt}11`,
                                    border: `1px solid ${isEarned ? theme.accent : theme.border}`,
                                    textAlign: "center",
                                    opacity: isEarned ? 1 : 0.4,
                                    transition: "all 0.3s ease"
                                }}
                            >
                                <div style={{ fontSize: 40, marginBottom: 8 }}>{badge.icon}</div>
                                <div style={{ fontSize: 13, fontWeight: 700, color: isEarned ? theme.text : theme.textMuted }}>{badge.title}</div>
                                {isEarned ? (
                                    <div style={{ fontSize: 10, color: theme.accent, marginTop: 4 }}>Earned!</div>
                                ) : (
                                    <div style={{ fontSize: 10, color: theme.textSub, marginTop: 4 }}>Locked</div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

import React from "react";
import { S } from "../../styles/AppStyles";

export default function StatsScreen({ completed, streak, LEVELS, theme, setScreen, SCREENS, playSfx, haptic }) {
    const totalStories = LEVELS.length;
    const completedCount = completed.length;
    const completionPct = Math.round((completedCount / totalStories) * 100);

    // Group by Era
    const eras = [...new Set(LEVELS.map(l => l.era))];
    const eraStats = eras.map(era => {
        const eraStories = LEVELS.filter(l => l.era === era);
        const eraCompleted = eraStories.filter(l => completed.includes(l.id));
        return {
            name: era,
            count: eraStories.length,
            done: eraCompleted.length
        };
    });

    return (
        <div style={S.page}>
            <button style={{ background: "none", border: "none", color: theme.accent, cursor: "pointer", marginBottom: 20 }} onClick={() => { haptic("light"); playSfx("click"); setScreen(SCREENS.MAP); }}>← Back to Map</button>
            <div style={{ ...S.levelCard, background: theme.card, padding: 32 }}>
                <h1 style={{ color: theme.accent, marginBottom: 8 }}>Your Progress</h1>
                <p style={{ color: theme.textSub, marginBottom: 24 }}>Detailed breakdown of your journey through scripture.</p>

                {/* Milestone Section */}
                {completionPct < 100 && (
                    <div style={{ background: theme.bgAlt, padding: 16, borderRadius: 12, marginBottom: 32, border: `1px solid ${theme.border}` }}>
                        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8, fontSize: 13, fontWeight: 700 }}>
                            <span>Next Milestone</span>
                            <span>{Math.ceil((completedCount + 1) / 10) * 10} Stories</span>
                        </div>
                        <div style={{ height: 8, background: theme.card, borderRadius: 4, overflow: "hidden" }}>
                            <div style={{ height: "100%", width: `${(completedCount % 10) * 10}%`, background: theme.accent, borderRadius: 4 }} />
                        </div>
                        <div style={{ fontSize: 11, color: theme.textMuted, marginTop: 8 }}>
                            Complete {10 - (completedCount % 10)} more stories to reach your next rank!
                        </div>
                    </div>
                )}

                <div style={S.quickStats}>
                    <div style={S.quickStat}>
                        <div style={{ ...S.quickStatValue, color: theme.accent }}>{completedCount}</div>
                        <div style={{ ...S.quickStatLabel, color: theme.textMuted }}>Stories</div>
                    </div>
                    <div style={{ ...S.quickStatDivider, background: theme.border }} />
                    <div style={S.quickStat}>
                        <div style={{ ...S.quickStatValue, color: theme.accent }}>{completionPct}%</div>
                        <div style={{ ...S.quickStatLabel, color: theme.textMuted }}>Complete</div>
                    </div>
                    <div style={{ ...S.quickStatDivider, background: theme.border }} />
                    <div style={S.quickStat}>
                        <div style={{ ...S.quickStatValue, color: theme.accent }}>{streak}</div>
                        <div style={{ ...S.quickStatLabel, color: theme.textMuted }}>Streak</div>
                    </div>
                </div>

                <div style={{ marginTop: 40 }}>
                    <h3 style={{ marginBottom: 16 }}>Progress by Era</h3>
                    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                        {eraStats.map(era => {
                            const pct = Math.round((era.done / era.count) * 100);
                            return (
                                <div key={era.name}>
                                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6, fontSize: 13 }}>
                                        <span>{era.name}</span>
                                        <span style={{ color: theme.textSub }}>{era.done} / {era.count} ({pct}%)</span>
                                    </div>
                                    <div style={{ height: 6, background: theme.bgAlt, borderRadius: 3, overflow: "hidden" }}>
                                        <div style={{ height: "100%", width: `${pct}%`, background: theme.accent, borderRadius: 3 }} />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

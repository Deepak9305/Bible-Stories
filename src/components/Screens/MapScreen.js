import React from "react";
import { S } from "../../styles/AppStyles";

export default function MapScreen({ LEVELS, completed, streak, theme, openLevel, setScreen, SCREENS, progressPct, filteredLevels, searchQuery, setSearchQuery, filterEra, setFilterEra, dailyChallenge, playSfx, haptic }) {
    const eras = ["all", ...new Set(LEVELS.map(lv => lv.era))];

    return (
        <div style={S.page}>
            <div style={S.header}>
                <div>
                    <div style={{ ...S.appName, color: theme.accent }}>📖 Bible Adventure</div>
                    <div style={{ ...S.appTag, color: theme.textMuted }}>Exploration through Scripture</div>
                </div>
                <div style={S.headerRight}>
                    <button style={{ ...S.iconBtn, background: theme.card, color: theme.textSub, marginRight: 8 }} onClick={() => { playSfx("click"); haptic("light"); setScreen(SCREENS.BADGES); }}>🏆</button>
                    <button style={{ ...S.iconBtn, background: theme.card, color: theme.textSub, marginRight: 8 }} onClick={() => { playSfx("click"); haptic("light"); setScreen(SCREENS.STATS); }}>📈</button>
                    <button style={{ ...S.iconBtn, background: theme.card, color: theme.textSub }} onClick={() => { playSfx("click"); haptic("light"); setScreen(SCREENS.SETTINGS); }}>⚙️</button>
                </div>
            </div>

            {/* Daily Challenge */}
            {dailyChallenge && (
                <div onClick={() => openLevel(dailyChallenge)} style={{ ...S.challengeCard, background: theme.accent, color: theme.bg }}>
                    <div style={S.challengeHeader}>
                        <div style={{ fontSize: 24 }}>✨</div>
                        <div>
                            <div style={S.challengeTitle}>Daily Exploration</div>
                            <div style={S.challengeSub}>Earn extra streak points today!</div>
                        </div>
                    </div>
                    <div style={S.challengeStory}>
                        {dailyChallenge.icon} {dailyChallenge.title}
                    </div>
                </div>
            )}

            <div style={{ ...S.streakBanner, background: theme.card, color: theme.text, border: `1px solid ${theme.border}` }}>
                <div style={S.streakIcon}>🔥</div>
                <div>
                    <div style={S.streakNum}>{streak} Day Streak</div>
                    <div style={S.streakSub}>Keep your spirit high!</div>
                </div>
            </div>

            <div style={S.progressSection}>
                <div style={S.progressLabel}>
                    <span style={{ color: theme.accent, fontWeight: 700 }}>Kingdom Progress</span>
                    <span style={{ fontSize: 13, fontWeight: 600 }}>{completed.length} / {LEVELS.length}</span>
                </div>
                <div style={{ ...S.progressBar, background: theme.bgAlt }}>
                    <div style={{ ...S.progressFill, width: `${progressPct}%`, background: theme.accent }} />
                </div>
            </div>

            {/* Search & Filters */}
            <div style={S.searchSection}>
                <input
                    type="text"
                    placeholder="Search stories or eras..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    style={{ ...S.searchInput, background: theme.card, color: theme.text, border: `1px solid ${theme.border}` }}
                />
            </div>

            <div style={S.filterChips}>
                {eras.map(era => (
                    <button
                        key={era}
                        onClick={() => setFilterEra(era)}
                        style={{
                            ...S.filterChip,
                            background: filterEra === era ? theme.accent : theme.card,
                            color: filterEra === era ? theme.bg : theme.textSub,
                            border: `1px solid ${filterEra === era ? theme.accent : theme.border}`
                        }}
                    >
                        {era.charAt(0).toUpperCase() + era.slice(1)}
                    </button>
                ))}
            </div>

            <div style={S.grid}>
                {filteredLevels.map((lv, idx) => {
                    const isLocked = idx > 0 && !completed.includes(LEVELS[idx - 1].id);
                    return (
                        <div key={lv.id} className="card" onClick={() => !isLocked && openLevel(lv)} style={{ ...S.levelCard, background: theme.card, opacity: isLocked ? 0.5 : 1, cursor: isLocked ? "not-allowed" : "pointer" }}>
                            <div style={S.lvIcon}>{isLocked ? "🔒" : lv.icon}</div>
                            <div style={S.lvTitle}>{lv.title}</div>
                            <div style={S.lvEra}>{lv.era}</div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

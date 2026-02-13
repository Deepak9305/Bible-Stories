import React, { useState, useEffect, useCallback } from "react";
import { LEVELS } from "./data/levels";
import { BADGE_DEFS } from "./data/badges";
import { SCREENS, THEMES, AUDIO_ASSETS } from "./data/constants";
import Spinner from "./components/Common/Spinner";
import { S } from "./styles/AppStyles";

// Screens
import MapScreen from "./components/Screens/MapScreen";
import StoryScreen from "./components/Screens/StoryScreen";
import QuizScreen from "./components/Screens/QuizScreen";
import ResultScreen from "./components/Screens/ResultScreen";
import SettingsScreen from "./components/Screens/SettingsScreen";
import BadgesScreen from "./components/Screens/BadgesScreen";
import StatsScreen from "./components/Screens/StatsScreen";

export default function BibleAdventure() {
    const [screen, setScreen] = useState(SCREENS.MAP);
    const [completed, setCompleted] = useState([]);
    const [badges, setBadges] = useState([]);
    const [streak, setStreak] = useState(0);
    const [current, setCurrent] = useState(null);
    const [quizState, setQuizState] = useState({ idx: 0, picked: null, score: 0, startTime: 0 });
    const [newBadge, setNewBadge] = useState(null);
    const [mounted, setMounted] = useState(false);
    const [settings, setSettings] = useState({ audioEnabled: true, autoPlay: false, narrationSpeed: 1.0, musicEnabled: true, musicVolume: 0.3, hapticsEnabled: true, theme: "dark" });
    const [isNarrating, setIsNarrating] = useState(false);
    const [showStudyNotes, setShowStudyNotes] = useState(false);
    const [bgMusic, setBgMusic] = useState(null);
    const [isMusicPlaying, setIsMusicPlaying] = useState(false);
    const [dailyChallenge, setDailyChallenge] = useState(null);
    const [notifications, setNotifications] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [filterEra, setFilterEra] = useState("all");
    const [favorites, setFavorites] = useState([]);
    const [showShareModal, setShowShareModal] = useState(false);
    const [quizHistory, setQuizHistory] = useState([]);
    const [showCalendar, setShowCalendar] = useState(false);
    const [completionDates, setCompletionDates] = useState({});
    const [isOffline, setIsOffline] = useState(!navigator.onLine);

    // ── LOAD ──────────────────────────────────────────────────────────────────
    useEffect(() => {
        const load = async () => {
            if (!window.storage) {
                window.storage = {
                    get: async (key) => ({ value: localStorage.getItem(key) }),
                    set: async (key, val) => localStorage.setItem(key, val)
                };
            }

            let loadedCompleted = [];
            try {
                const r = await window.storage.get("ba_completed");
                if (r && r.value) {
                    loadedCompleted = JSON.parse(r.value);
                    setCompleted(loadedCompleted);
                }
            } catch (e) { }

            try { const r = await window.storage.get("ba_badges"); if (r && r.value) setBadges(JSON.parse(r.value)); } catch (e) { }
            try { const r = await window.storage.get("ba_settings"); if (r && r.value) setSettings(JSON.parse(r.value)); } catch (e) { }
            try { const r = await window.storage.get("ba_favorites"); if (r && r.value) setFavorites(JSON.parse(r.value)); } catch (e) { }
            try { const r = await window.storage.get("ba_quiz_history"); if (r && r.value) setQuizHistory(JSON.parse(r.value)); } catch (e) { }
            try { const r = await window.storage.get("ba_completion_dates"); if (r && r.value) setCompletionDates(JSON.parse(r.value)); } catch (e) { }
            try {
                const l = await window.storage.get("ba_last");
                const s = await window.storage.get("ba_streak");
                if (l && l.value && s && s.value) {
                    const d = (Date.now() - Number(l.value)) / 86400000;
                    setStreak(d <= 1.5 ? Number(s.value) : 0);
                }
            } catch (e) { }

            try {
                const today = new Date().toDateString();
                const lastChallenge = await window.storage.get("ba_challenge_date");
                if (!lastChallenge || lastChallenge.value !== today) {
                    const unlockedLevels = LEVELS.filter((_, i) => i === 0 || loadedCompleted.includes(LEVELS[i - 1].id));
                    if (unlockedLevels.length > 0) {
                        const seed = new Date().getDate();
                        const challenge = unlockedLevels[seed % unlockedLevels.length];
                        setDailyChallenge(challenge);
                        await window.storage.set("ba_challenge_date", today);
                        await window.storage.set("ba_challenge", JSON.stringify(challenge));
                    }
                } else {
                    const saved = await window.storage.get("ba_challenge");
                    if (saved && saved.value) setDailyChallenge(JSON.parse(saved.value));
                }
            } catch (e) { }

            setMounted(true);
        };
        load();

        const audio = new Audio(AUDIO_ASSETS.bgMusic);
        audio.loop = true;
        audio.volume = settings.musicVolume || 0.3;
        setBgMusic(audio);

        return () => {
            if (audio) {
                audio.pause();
                audio.src = "";
            }
        };
    }, []);

    // ── MUSIC CONTROL ───────────────────────────────────────────────────────
    useEffect(() => {
        if (!bgMusic) return;

        const handleInteraction = () => {
            if (settings.musicEnabled && bgMusic.paused) {
                bgMusic.play().catch(e => console.log("Audio play failed:", e));
            }
        };

        if (settings.musicEnabled) {
            // Try playing immediately
            bgMusic.play().catch(() => {
                // If blocked, wait for interaction
                window.addEventListener("click", handleInteraction, { once: true });
                window.addEventListener("keydown", handleInteraction, { once: true });
                window.addEventListener("touchstart", handleInteraction, { once: true });
            });
        } else {
            bgMusic.pause();
        }

        bgMusic.volume = settings.musicVolume || 0.3;

        return () => {
            window.removeEventListener("click", handleInteraction);
            window.removeEventListener("keydown", handleInteraction);
            window.removeEventListener("touchstart", handleInteraction);
        };
    }, [settings.musicEnabled, bgMusic, settings.musicVolume]);

    // ── HELPERS & HANDLERS ──────────────────────────────────────────────────
    const haptic = useCallback((type = "light") => {
        if (!settings.hapticsEnabled || !navigator.vibrate) return;
        const patterns = { light: [10], medium: [20], heavy: [30], success: [10, 50, 10], error: [50, 100, 50] };
        navigator.vibrate(patterns[type] || patterns.light);
    }, [settings.hapticsEnabled]);

    const playSfx = useCallback((type) => {
        if (!settings.audioEnabled || !AUDIO_ASSETS[type]) return;
        const sfx = new Audio(AUDIO_ASSETS[type]);
        sfx.volume = 0.5;
        sfx.play().catch(e => { });
    }, [settings.audioEnabled]);

    const showNotification = useCallback((message, type = "info") => {
        const id = Date.now();
        setNotifications(prev => [...prev, { id, message, type }]);
        setTimeout(() => setNotifications(prev => prev.filter(n => n.id !== id)), 3000);
    }, []);

    const save = useCallback(async (comp, badg, str, history = null, dates = null) => {
        try {
            await window.storage.set("ba_completed", JSON.stringify(comp));
            await window.storage.set("ba_badges", JSON.stringify(badg));
            await window.storage.set("ba_last", String(Date.now()));
            await window.storage.set("ba_streak", String(str));
            if (history) await window.storage.set("ba_quiz_history", JSON.stringify(history));
            if (dates) await window.storage.set("ba_completion_dates", JSON.stringify(dates));
        } catch (e) { }
    }, []);

    const openLevel = (lv) => {
        haptic("light");
        setCurrent(lv);
        setScreen(SCREENS.STORY);
        setShowStudyNotes(false);
    };

    const startQuiz = () => {
        haptic("medium");
        setQuizState({ idx: 0, picked: null, score: 0, startTime: Date.now() });
        setScreen(SCREENS.QUIZ);
    };

    const pickAnswer = (i) => {
        if (quizState.picked !== null) return;
        const isCorrect = i === current.questions[quizState.idx].correct;

        // Sensory Feedback
        haptic(isCorrect ? "success" : "error");
        playSfx(isCorrect ? "success" : "error");

        setQuizState(prev => ({ ...prev, picked: i, score: prev.score + (isCorrect ? 1 : 0) }));
    };

    const nextQ = () => {
        if (quizState.idx < current.questions.length - 1) {
            haptic("light");
            setQuizState(prev => ({ ...prev, idx: prev.idx + 1, picked: null }));
        } else {
            const passed = quizState.score >= 2;
            if (passed && !completed.includes(current.id)) {
                haptic("heavy");
                const newComp = [...completed, current.id];
                const newStr = streak + 1;
                let earned = [...badges];

                // Simplified Badge Check
                const storiesCount = newComp.length;
                BADGE_DEFS.forEach(b => {
                    if (storiesCount >= b.threshold && !earned.includes(b.id)) {
                        earned.push(b.id);
                        setNewBadge(b);
                        playSfx("badge");
                    }
                });

                setCompleted(newComp);
                setBadges(earned);
                setStreak(newStr);
                save(newComp, earned, newStr);
                showNotification(`Mastered: ${current.title}!`, "success");
            }
            setScreen(SCREENS.RESULT);
        }
    };

    const progressPct = (completed.length / LEVELS.length) * 100;
    const theme = THEMES[settings.theme] || THEMES.dark;

    const filteredLevels = LEVELS.filter(lv => {
        const matchesSearch = lv.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            lv.era.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesEra = filterEra === "all" || lv.era === filterEra;
        return matchesSearch && matchesEra;
    });

    if (!mounted) return (
        <div style={{ minHeight: "100vh", background: theme.bg, color: theme.text, display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Spinner />
        </div>
    );

    return (
        <div style={{ minHeight: "100vh", background: `linear-gradient(to bottom, ${theme.bg} 0%, ${theme.bgAlt} 50%, ${theme.bg} 100%)`, color: theme.text, fontFamily: "Inter, sans-serif" }}>
            <style>{`
                @keyframes spin{to{transform:rotate(360deg)}}
                @keyframes fadeIn{from{opacity:0}to{opacity:1}}
                @keyframes slideUp{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}
                @keyframes slideDown{from{opacity:0;transform:translateY(-10px)}to{opacity:1;transform:translateY(0)}}
                .card{transition:all 0.3s ease}.card:hover{transform:translateY(-2px);box-shadow:0 4px 20px rgba(0,0,0,0.2)}
            `}</style>

            {screen === SCREENS.MAP && (
                <MapScreen
                    LEVELS={LEVELS}
                    completed={completed}
                    streak={streak}
                    theme={theme}
                    openLevel={openLevel}
                    setScreen={setScreen}
                    SCREENS={SCREENS}
                    progressPct={progressPct}
                    filteredLevels={filteredLevels}
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                    filterEra={filterEra}
                    setFilterEra={setFilterEra}
                    dailyChallenge={dailyChallenge}
                    playSfx={playSfx}
                    haptic={haptic}
                />
            )}

            {screen === SCREENS.STORY && (
                <StoryScreen
                    current={current}
                    theme={theme}
                    setScreen={setScreen}
                    SCREENS={SCREENS}
                    startQuiz={startQuiz}
                    settings={settings}
                    haptic={haptic}
                    playSfx={playSfx}
                />
            )}

            {screen === SCREENS.QUIZ && (
                <QuizScreen
                    current={current}
                    quizState={quizState}
                    theme={theme}
                    setScreen={setScreen}
                    SCREENS={SCREENS}
                    pickAnswer={pickAnswer}
                    nextQ={nextQ}
                />
            )}

            {screen === SCREENS.RESULT && (
                <ResultScreen
                    quizState={quizState}
                    current={current}
                    theme={theme}
                    setScreen={setScreen}
                    SCREENS={SCREENS}
                    playSfx={playSfx}
                    haptic={haptic}
                />
            )}

            {screen === SCREENS.SETTINGS && (
                <SettingsScreen
                    settings={settings}
                    setSettings={setSettings}
                    theme={theme}
                    setScreen={setScreen}
                    SCREENS={SCREENS}
                    playSfx={playSfx}
                    haptic={haptic}
                />
            )}

            {screen === SCREENS.BADGES && (
                <BadgesScreen
                    earned={badges}
                    theme={theme}
                    setScreen={setScreen}
                    SCREENS={SCREENS}
                    playSfx={playSfx}
                    haptic={haptic}
                />
            )}

            {screen === SCREENS.STATS && (
                <StatsScreen
                    completed={completed}
                    streak={streak}
                    LEVELS={LEVELS}
                    theme={theme}
                    setScreen={setScreen}
                    SCREENS={SCREENS}
                    playSfx={playSfx}
                    haptic={haptic}
                />
            )}

            {/* Notifications */}
            <div style={S.notificationContainer}>
                {notifications.map(n => (
                    <div key={n.id} style={{ ...S.notification, background: theme.accent, color: theme.bg }}>
                        {n.message}
                    </div>
                ))}
            </div>

            {/* Badge Popup */}
            {newBadge && (
                <div style={S.overlay}>
                    <div style={S.badgePop}>
                        <div style={S.bpSub}>New Badge Earned!</div>
                        <div style={{ fontSize: 80, marginBottom: 16 }}>{newBadge.icon}</div>
                        <div style={S.bpTitle}>{newBadge.title}</div>
                        <div style={S.bpDesc}>{newBadge.desc}</div>
                        <button style={S.btnPrimary} onClick={() => setNewBadge(null)}>Awesome!</button>
                    </div>
                </div>
            )}
        </div>
    );
}

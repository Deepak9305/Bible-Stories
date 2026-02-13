export const SCREENS = {
    MAP: "map",
    STORY: "story",
    QUIZ: "quiz",
    RESULT: "result",
    BADGES: "badges",
    STATS: "stats",
    SETTINGS: "settings"
};

export const THEMES = {
    dark: {
        bg: "#0a0908",
        bgAlt: "#0f0e0c",
        card: "#1a1712",
        border: "#2a251d",
        text: "#e8dcc8",
        textSub: "#b8ad94",
        textMuted: "#6a6049",
        accent: "#d4a574"
    },
    light: {
        bg: "#f5f1e8",
        bgAlt: "#ebe7de",
        card: "#ffffff",
        border: "#d4c9b0",
        text: "#2a251d",
        textSub: "#5a4f3f",
        textMuted: "#8a7d5a",
        accent: "#c9a063"
    },
    sepia: {
        bg: "#e8dcc8",
        bgAlt: "#d8cdb5",
        card: "#f0e8d8",
        border: "#c9ba9f",
        text: "#3a2f1f",
        textSub: "#5a4a2f",
        textMuted: "#7a6a4a",
        accent: "#b8946a"
    }
};
export const AUDIO_ASSETS = {
    bgMusic: process.env.PUBLIC_URL + "/audio/bg-music.mp3",
    click: process.env.PUBLIC_URL + "/audio/click.mp3",
    success: process.env.PUBLIC_URL + "/audio/success.mp3",
    error: process.env.PUBLIC_URL + "/audio/error.mp3",
    badge: process.env.PUBLIC_URL + "/audio/badge.mp3"
};

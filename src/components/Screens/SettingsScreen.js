import React from "react";
import { S } from "../../styles/AppStyles";

export default function SettingsScreen({ settings, setSettings, theme, setScreen, SCREENS, playSfx, haptic }) {
    return (
        <div style={S.page}>
            <button style={{ background: "none", border: "none", color: theme.accent, cursor: "pointer", marginBottom: 20 }} onClick={() => { playSfx("click"); setScreen(SCREENS.MAP); }}>← Back to Map</button>
            <div style={{ ...S.levelCard, background: theme.card, padding: 32 }}>
                <h2 style={{ color: theme.accent, marginBottom: 24 }}>App Settings</h2>
                <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <div>
                            <div style={{ fontWeight: 700 }}>Theme Mode</div>
                            <div style={{ fontSize: 13, color: theme.textSub }}>Change the look and feel</div>
                        </div>
                        <select
                            value={settings.theme}
                            onChange={(e) => { playSfx("click"); haptic("light"); setSettings({ ...settings, theme: e.target.value }); }}
                            style={{ padding: "8px 12px", borderRadius: 8, background: theme.bgAlt, color: theme.text, border: `1px solid ${theme.border}` }}
                        >
                            <option value="dark">Dark Night</option>
                            <option value="light">Clear Day</option>
                            <option value="sepia">Ancient Scroll</option>
                        </select>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <div>
                            <div style={{ fontWeight: 700 }}>Audio Settings</div>
                            <div style={{ fontSize: 13, color: theme.textSub }}>Narration and Music</div>
                        </div>
                        <div style={{ display: "flex", gap: 12 }}>
                            <button
                                onClick={() => { playSfx("click"); haptic("light"); setSettings({ ...settings, musicEnabled: !settings.musicEnabled }); }}
                                style={{ padding: "8px 12px", borderRadius: 8, background: settings.musicEnabled ? theme.accent : theme.bgAlt, color: settings.musicEnabled ? theme.bg : theme.text, border: "none", fontWeight: 600 }}
                            >
                                Music: {settings.musicEnabled ? "ON" : "OFF"}
                            </button>
                            <button
                                onClick={() => { playSfx("click"); haptic("light"); setSettings({ ...settings, audioEnabled: !settings.audioEnabled }); }}
                                style={{ padding: "8px 12px", borderRadius: 8, background: settings.audioEnabled ? theme.accent : theme.bgAlt, color: settings.audioEnabled ? theme.bg : theme.text, border: "none", fontWeight: 600 }}
                            >
                                Audio: {settings.audioEnabled ? "ON" : "OFF"}
                            </button>
                        </div>
                    </div>
                </div>

                <div style={{ marginTop: 40, padding: 24, background: theme.bgAlt, borderRadius: 16, border: `1px dashed ${theme.border}`, textAlign: "center" }}>
                    <div style={{ fontSize: 32, marginBottom: 12 }}>📜</div>
                    <div style={{ fontWeight: 700, fontSize: 16, color: theme.accent, marginBottom: 6 }}>100% Copyright Free</div>
                    <div style={{ fontSize: 13, color: theme.textSub, lineHeight: 1.6 }}>
                        All stories, scriptures (WEB), audio (Pixabay), and design assets are Public Domain or licensed for free commercial use.
                    </div>
                    <div style={{ fontSize: 11, color: theme.textMuted, marginTop: 16 }}>
                        Build v1.0.4 • Sunday School Edition
                    </div>
                </div>
            </div>
        </div>
    );
}

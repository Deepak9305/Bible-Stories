# Bible Adventure

**[🔴 VIEW LIVE APP HERE 🔴](https://Deepak9305.github.io/Bible-Stories/)**

Interactive Bible learning app with 50 stories, quizzes, and achievements.

## Project Structure

```
Bible advanture/
├── public/                 # Static assets
│   └── index.html          # Main HTML entry point
├── src/                    # Source code
│   ├── components/         # Reusable UI components
│   │   ├── Common/         # Generic components (Spinner, etc.)
│   │   ├── Layout/         # Structural components
│   │   └── Screens/        # Individual app screens
│   ├── data/               # Application data
│   │   ├── levels.js       # All 50 Bible stories
│   │   ├── badges.js       # Badge definitions
│   │   ├── constants.js    # App constants (Screens, Themes)
│   │   └── stories/        # (Optional) Modular story batches
│   ├── styles/             # CSS and style objects
│   │   └── AppStyles.js    # Main style definitions
│   ├── App.js              # Main application logic
│   └── index.js            # React entry point
├── docs/                   # Documentation
│   ├── GITHUB_SETUP.md
│   ├── PROJECT_INDEX.md
│   └── COMPLETE_PROJECT_SUMMARY.md
├── package.json            # Dependencies and scripts
└── README.md               # This file
```

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm start
   ```

## Design System

The app uses a premium, responsive design with:
- Dark, Light, and Sepia themes
- Haptic feedback (on supported devices)
- Progress tracking and local storage persistence
- Quiz system with feedback
- Achievement/Badge system


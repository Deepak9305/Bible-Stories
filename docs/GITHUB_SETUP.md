# 🚀 GitHub Setup & Deployment Guide

Complete guide to setting up and deploying Bible Adventure on GitHub.

## 📋 Prerequisites

- Git installed on your computer
- GitHub account
- Node.js and npm installed

## 🔧 Initial Setup

### 1. Create GitHub Repository

```bash
# On GitHub.com:
# 1. Click "New Repository"
# 2. Name: bible-adventure
# 3. Description: Interactive Bible learning app with 50 stories
# 4. Public or Private (your choice)
# 5. Initialize with README: NO (we have our own)
# 6. Click "Create Repository"
```

### 2. Initialize Local Repository

```bash
# Navigate to your project folder
cd bible-adventure

# Initialize git
git init

# Add all files
git add .

# First commit
git commit -m "Initial commit: Bible Adventure v1.0"

# Add remote origin (replace with your username)
git remote add origin https://github.com/YOUR_USERNAME/bible-adventure.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## 📁 Recommended Folder Structure for GitHub

```
bible-adventure/
├── .gitignore
├── README.md
├── GITHUB_SETUP.md
├── LICENSE
├── package.json
├── package-lock.json
├── public/
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
└── src/
    ├── App.js
    ├── index.js
    ├── index.css
    └── data/
        ├── stories_batch_1.js  # Stories 1-10
        ├── stories_batch_2.js  # Stories 11-20
        ├── stories_batch_3.js  # Stories 21-30
        ├── stories_batch_4.js  # Stories 31-40
        └── stories_batch_5.js  # Stories 41-50
```

## 📝 Create .gitignore

Create a file named `.gitignore` in your project root:

```
# dependencies
/node_modules
/.pnp
.pnp.js

# testing
/coverage

# production
/build

# misc
.DS_Store
.env.local
.env.development.local
.env.test.local
.env.production.local

npm-debug.log*
yarn-debug.log*
yarn-error.log*

# IDE
.vscode/
.idea/
*.swp
*.swo
*~
```

## 📄 Add MIT License

Create a file named `LICENSE`:

```
MIT License

Copyright (c) 2024 [Your Name]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## 🌐 Deploy to GitHub Pages

### Option 1: Using GitHub Pages (Free Hosting)

1. Install gh-pages package:
```bash
npm install --save-dev gh-pages
```

2. Add to `package.json`:
```json
{
  "homepage": "https://YOUR_USERNAME.github.io/bible-adventure",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  }
}
```

3. Deploy:
```bash
npm run deploy
```

4. Enable GitHub Pages:
   - Go to repository Settings
   - Scroll to "Pages"
   - Source: Deploy from branch
   - Branch: gh-pages
   - Click Save

Your app will be live at: `https://YOUR_USERNAME.github.io/bible-adventure`

### Option 2: Using Vercel (Recommended)

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

3. Follow prompts and your site will be live!

### Option 3: Using Netlify

1. Push code to GitHub
2. Go to netlify.com
3. Click "New site from Git"
4. Connect GitHub repository
5. Build command: `npm run build`
6. Publish directory: `build`
7. Click "Deploy site"

## 🏷️ Version Tagging

```bash
# Tag version 1.0
git tag -a v1.0 -m "Version 1.0: Initial release with 50 complete stories"

# Push tags
git push origin --tags
```

## 🔄 Making Updates

```bash
# After making changes
git add .
git commit -m "Description of changes"
git push

# For GitHub Pages
npm run deploy
```

## 📊 GitHub Repository Settings

### About Section
- Description: "📖 Interactive Bible learning app with 50 stories, quizzes, and achievements"
- Website: Your deployed URL
- Topics: bible, education, react, christian, quiz, learning, kjv

### Features to Enable
- ✅ Wikis
- ✅ Issues
- ✅ Projects
- ✅ Discussions (optional)

### Branch Protection (Optional)
- Require pull request reviews
- Require status checks
- Require signed commits

## 📱 Add Social Preview

Create a preview image (1280x640px) and upload:
1. Go to repository Settings
2. Scroll to "Social preview"
3. Click "Edit"
4. Upload image

## 🎯 README Badges

Add these to the top of your README.md:

```markdown
![GitHub](https://img.shields.io/github/license/YOUR_USERNAME/bible-adventure)
![GitHub stars](https://img.shields.io/github/stars/YOUR_USERNAME/bible-adventure)
![GitHub forks](https://img.shields.io/github/forks/YOUR_USERNAME/bible-adventure)
![GitHub issues](https://img.shields.io/github/issues/YOUR_USERNAME/bible-adventure)
```

## 🤝 Contributing Guidelines

Create `CONTRIBUTING.md`:

```markdown
# Contributing to Bible Adventure

Thank you for your interest in contributing!

## How to Contribute

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Code Style

- Use meaningful variable names
- Add comments for complex logic
- Follow existing code structure
- Test before submitting

## Reporting Bugs

Use GitHub Issues with:
- Clear title
- Steps to reproduce
- Expected vs actual behavior
- Screenshots if applicable
```

## 📞 Support

Create `SUPPORT.md`:

```markdown
# Support

## Getting Help

- 📖 Check the [README](README.md)
- 🐛 [Report bugs](https://github.com/YOUR_USERNAME/bible-adventure/issues)
- 💡 [Request features](https://github.com/YOUR_USERNAME/bible-adventure/issues)
- 💬 [Discussions](https://github.com/YOUR_USERNAME/bible-adventure/discussions)

## FAQ

**Q: How do I reset my progress?**
A: Clear your browser's local storage for the site.

**Q: Can I use this for my church/school?**
A: Yes! This project is MIT licensed.

**Q: How do I add more stories?**
A: Follow the format in the story batch files and submit a PR!
```

## 🎉 Post-Deployment Checklist

- [ ] Repository is public/private as intended
- [ ] README is complete and accurate
- [ ] License file is present
- [ ] .gitignore is configured
- [ ] Site is deployed and accessible
- [ ] All links in README work
- [ ] Social preview image is set
- [ ] Topics/tags are added
- [ ] Issues are enabled
- [ ] Contributing guidelines are clear

## 🚀 Promote Your Repository

1. Share on social media
2. Submit to awesome lists
3. Post in relevant Reddit communities
4. Share in Christian/education forums
5. Add to your portfolio

---

Need help? Open an issue or discussion on GitHub!

rnkallday.com

My personal portfolio site built with Hugo, Tailwind CSS, AlpineJS and deployed via GitHub Actions to https://rnkallday.com

📌 Live Demo

https://rnkallday.com

🚀 Core Sections

Homepage/Hero

Full-viewport, looping 30-second video background

Subtle overlay text and “scroll” hint

About

Bio with interactive skill-bars (AlpineJS)

Clickable tool-tips on each tech badge

Work

Card-based portfolio gallery

Hover/focus animations (fade-in, slide-up)

Contact

Responsive form with HTML5 + JS validation

Success/error feedback modals

🎨 Design & Interactivity Source

This site’s typography, color scheme, and scrolling effects are adapted directly from Filip Z’s CodePen example: https://codepen.io/filipz/pen/qEBoPWz.

Font: Imported from the Pen’s CSS

Color Palette: Turquoise accents and gradients matching the Pen

Scroll Animations: Smooth scroll and section reveal functions taken from the Pen’s JS logic

🛠 Technical Implementation

Design System

Custom Tailwind CSS utilities powered by /assets/css/custom.properties

Turquoise-accent color palette (aligned with the CodePen source)

Animations

Fade-in on scroll (Intersection Observer + AlpineJS)

Slide-up/slide-down transitions via Tailwind’s transition-* classes

Smooth scrolling behavior based on CodePen’s script

Interactivity

AlpineJS for toggles, tool-tips, and skill-bar animations

Build & Deployment

Local preview:

npm install
hugo server -D

Automated CI/CD via GitHub Actions:.github/workflows/deploy.yml builds with Hugo, then publishes public/ to the github-pages environment.

📦 Installation & Local Development

Clone the repo

git clone git@github.com:arts-link/rnkallday.com.git
cd rnkallday.com

Install dependencies

npm install

Run Hugo

hugo server -D
# → http://localhost:1313

Make changes, then

git add .
git commit -m "Describe your change"
git push origin main

🔖 Topics & Keywords

Add these in your repo’s Settings → “About” box under Topics:

hugo, tailwindcss, alpinejs, github-actions, portfolio, static-site

And in Settings → “About” → Description, paste:

Personal portfolio site powered by Hugo • Tailwind CSS • AlpineJS • GitHub Actions • CodePen-inspired scroll & design

🤝 Contributing

Fork the repo

Create a feature branch (git checkout -b feat/my-feature)

Commit & PR

I’ll review, merge, and your changes will go live automatically!

Built with 🤬😭🫠😰❤️ by Rian Kochel

## 📝 Changelog

### 2025-06-27 - YouTube Hero Video Implementation
- **MAJOR:** Replaced local MP4 hero video with full-bleed YouTube embed
- **Added:** Auto-playing, muted, looping YouTube video background (`VLvVNMbQIRY`)
- **Updated:** Hero section HTML structure for full-screen video display
- **Added:** `.video-responsive` CSS class for responsive iframe embeds
- **Enhanced:** YouTube embed with playlist, loop, autoplay, and mute parameters
- **Improved:** Hero video now covers entire viewport as background layer
- **Files modified:**
  - `themes/portfolio/layouts/index.html` - Hero section restructure
  - `themes/portfolio/assets/css/main.css` - Added video-responsive styles

<!-- Trigger workflow -->

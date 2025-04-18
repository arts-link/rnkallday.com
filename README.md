[![rnk all day build status](https://github.com/arts-link/rnkallday.com/actions/workflows/hugo.yml/badge.svg)](https://arts-link.github.io/rnkallday.com/)

## T1. Overview
Project: 
A Hugo-Based Portfolio Overhaul
Title:
Word Nerd: A portfolio of multimedia work by Rian Kochel

Project Vision:
Transform the portfolio into a fast, responsive, and modern Hugo website that showcases written, audio, and visual storytelling. Emphasize smooth animations, dark mode, and a design system based on the following:


Colors:
 

Fonts:


Turquoise Blue #6BE5D8

2. Goals & Objectives
Modernize the Design:
Rebuild the site with a clean, minimal design that integrates TailwindCSS for rapid styling and customization.

Multimedia Content:
Seamlessly display written work, embedded audio, and video assets.


Personalize Design Elements:
Use custom graphics, illustrations, or animations that tie into my work.


Interactive Features:
Incorporate interactive elements or micro-animations that engage visitors.

Responsive & Accessible:
Ensure high accessibility scores (WCAG 2.1 AA) and excellent performance on all devices.

Easy Content Management:
Use Hugo’s markdown and asset pipelines to allow quick updates.

GitHub Pages Deployment:
Final site will be pushed to GitHub and hosted under your current URL using GitHub Pages.

3. Features & Technical Requirements
Core Sections:

HOMEPAGE/HERO:
Compelling introductory section with a 30 second repeating video as the centerpiece.

ABOUT
Layout featuring brief biography with an engaging/interactive ui component highlighting my tech tool familiarity. This section will also intro three key themes of my professional persona that fall under the overarching “word Nerd” title of the portfolio: Idea Mechanic, Digital Alchemist, and Sherpa to the Luddites 

These themes will curate and categorize the projects I am showcasing as a way to define my skill set clearly, but also highlight my versatility and adaptability in adopting new tech.

WORK
Card-based layout for portfolio items with animations.

CONTACT
A responsive contact form with validation.

Design System:

Integrate custom TailwindCSS utilities for your Aquablue color tokens.

Animations (fade-in, slide-up/slide-down) for dynamic visuals.

Advanced Integration:

JavaScript interactivity (via Hugo Pipes) and an optional React integration for components.

Build process considerations: avoid file duplication, leverage GitHub Actions (or similar CI/CD) where npm install precedes Hugo builds.

Deployment:

Final site hosted on GitHub Pages. Follow best practices for configuring a repository (e.g., repository naming for user sites, use of a CNAME file if using a custom domain).















o create new content

```bash
# single story, the `index.md` utilizes the single template.
hugo new content <existing-section>/<story-name>/index.md
# new section, the `_index.md` utilizes the `list` template.
hugo new content <section-name>/_index.md
# new page in there
hugo new content <section-name>/<story-name>/index.md
# sections can be nested infinitely.
```

## To remove content

- change the draft status to true
- delete the directory
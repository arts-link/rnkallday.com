# Word Nerd: A Portfolio of Multimedia Work by Rian Kochel

[![Build Status](https://github.com/arts-link/rnkallday.com/actions/workflows/hugo-deploy.yml/badge.svg)](https://github.com/arts-link/rnkallday.com/actions/workflows/hugo-deploy.yml)

A modern, responsive Hugo website that showcases written, audio, and visual storytelling with smooth animations and dark mode support.

## Overview

This portfolio site is built with Hugo and TailwindCSS, featuring a custom theme called "Word Nerd" that emphasizes clean design, accessibility, and multimedia content presentation.

### Design System

**Colors:**
- Primary: Turquoise Blue (#6BE5D8)
- Supporting color palette derived from the primary color

**Fonts:**
- Headings: Montserrat
- Body: Inter

## Goals & Objectives

- **Modernize the Design**: Clean, minimal design with TailwindCSS for rapid styling and customization
- **Multimedia Content**: Seamless display of written work, embedded audio, and video assets
- **Personalize Design Elements**: Custom graphics, illustrations, and animations
- **Interactive Features**: Micro-animations and interactive UI elements
- **Responsive & Accessible**: WCAG 2.1 AA compliance and excellent performance on all devices
- **Easy Content Management**: Hugo's markdown and asset pipelines for quick updates
- **GitHub Pages Deployment**: Automated deployment via GitHub Actions

## Features & Technical Requirements

### Core Sections

1. **Homepage/Hero**: Compelling introductory section with a 30-second repeating video
2. **About**: Biography with interactive UI component highlighting tech skills
3. **Work**: Card-based layout for portfolio items with animations
4. **Contact**: Responsive contact form with validation

### Technical Implementation

- **Design System**: Custom TailwindCSS utilities for the turquoise color palette
- **Animations**: Fade-in, slide-up/slide-down for dynamic visuals
- **JavaScript**: AlpineJS for interactive components
- **Build Process**: GitHub Actions workflow for automated builds and deployment


```bash
# Install dependencies
npm install

# Start development server
hugo server -D
```

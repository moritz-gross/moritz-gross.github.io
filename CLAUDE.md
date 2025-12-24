# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website hosted on GitHub Pages. Pure static site with no build tools, frameworks, or package dependencies.

**Live site:** https://moritz-gross.github.io/

## Development

No build step required. Edit HTML/CSS/JS files directly and open in browser to test.

**Deployment:** Push to `main` branch → automatically deployed via GitHub Pages.

## Structure

- `index.html` - Main landing page (about, projects, contact)
- `blog.html` - Blog index
- `posts/` - Individual blog post HTML files
- `styles.css` - Global styles (~50 lines, uses Manrope font)

## Adding Content

**New blog post:** Create `posts/your-post.html`, add link to `blog.html`

**New project:** Add to projects section in `index.html`

## Technical Notes

- Uses Prism.js (CDN) for code syntax highlighting in blog posts
- Interactive features use vanilla JavaScript (no libraries)
- Responsive layout: 75% width container, max 880px, min 320px

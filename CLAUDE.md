# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Portfolio website for Adam Jolicoeur (adamjolicoeur.com) built with Eleventy (11ty) static site generator. The site showcases UX/UI design work, development projects, and professional content. Deployed to GitHub Pages from the `docs/` directory.

**Current Version**: 10.0.2
**Repository**: https://github.com/AdamJ/adamj.github.io
**Live Site**: https://adamjolicoeur.com
**Node.js**: v25.2.1 required (runs on 20+, see `.nvmrc`)

## Critical Build Commands

All commands include expected timings. **NEVER CANCEL** builds—they complete within specified timeouts.

### Development Workflow
```bash
# Initial setup (first time only)
npm install                    # 60 seconds - installs dependencies

# Start development server
npm run start                  # Starts watchers + BrowserSync on http://localhost:8081
                              # NOT port 8080 - this is hardcoded

# Full production build
npm run build                  # 20 seconds - runs all build steps in sequence
```

### Individual Build Steps
```bash
npm run clean                  # 1 second - removes docs/ directory
npm run images:optimize        # 14 seconds - processes images with Sharp
npm run build:sass            # 2 seconds - compiles SCSS to CSS
npm run build:eleventy        # 2 seconds - static site generation
npm run postbuild             # Auto-runs after build (Autoprefixer + CSSNano)
```

### Linting & Validation
```bash
npm run lint                  # 5 seconds - Stylelint check (expect 176+ legacy errors)
npm run lint:fix              # Auto-fix Stylelint issues
npm run webhint               # 30 seconds - accessibility/performance audit
```

**Expected Build Warnings (Safe to Ignore)**:
- 144 Sass deprecation warnings from Bootstrap's `@import` syntax
- 74+ npm audit vulnerabilities (non-critical for static site)
- 176+ Stylelint errors (legacy code, non-blocking)
- 245+ WebHint warnings (accessibility/compatibility, non-blocking)
- Node version warnings (package requires 22, runs fine on 20+)

## Architecture

### Build Pipeline
1. **Content** (Markdown/HTML) → **Templates** (Nunjucks) → **Static HTML**
2. **SCSS** → **Sass compiler** → **PostCSS** (Autoprefixer + minify) → **CSS**
3. **Raw images** → **Sharp processor** → **WebP + JPEG variants**
4. **Output**: `docs/` directory (GitHub Pages requirement)

### Directory Structure
```
src/                          # Source files (EDIT HERE)
├── pages/                    # Markdown pages (31 total)
│   ├── designs/             # Design case studies (5 projects)
│   ├── development/         # Dev projects & code examples
│   ├── about/              # About & resume pages
│   └── *.md                # Index pages (portfolio.md, etc.)
├── _includes/              # Nunjucks templates
│   ├── base.njk            # HTML5 shell (nav, meta, footer)
│   ├── markdown.njk        # Markdown wrapper
│   └── carousel.njk        # Image carousel component
├── _data/
│   └── meta.js             # Site metadata & social links
├── assets/
│   ├── img/                # Processed images (650+ files, ~21MB)
│   ├── img-raw/            # Original high-res images (~66MB)
│   └── AdamJolicoeur-Resume.pdf
├── sass/                   # SCSS stylesheets (22 files, ~2000 lines)
│   ├── style.scss          # Main (imports Bootstrap + custom)
│   ├── _colors.scss        # Color variables
│   ├── _typography.scss    # Font & text styles
│   └── *.scss              # Component partials
└── js/                     # JavaScript files (vanilla JS)

docs/                        # Generated output (DO NOT EDIT)
└── [build artifacts]        # 20-30MB, auto-generated

scripts/
└── image-optimizer.js      # Sharp-based image processor

.eleventy.js                # Eleventy configuration (163 lines)
.github/
├── workflows/
│   └── eleventy_build.yml  # CI/CD: push to main → build → gh-pages
└── copilot-instructions.md # Comprehensive build guide (190 lines)
```

### Template System
- **Base Layout** (`base.njk`): HTML5 shell with navigation, meta tags, OG tags, Service Worker registration, "Go to Top" button
- **Template Hierarchy**: `base.njk` → `page.njk` → `markdown.njk`
- **Markdown Processing**: `markdown-it` with plugins:
  - `markdown-it-anchor`: Auto-heading anchors with `#` symbols
  - `markdown-it-highlightjs`: Syntax highlighting
  - `markdown-it-eleventy-img`: Image optimization

### Eleventy Plugins Active
1. `@11ty/eleventy-plugin-syntaxhighlight` - Code block highlighting
2. `@11ty/eleventy-plugin-rss` - RSS feed generation
3. `@11ty/eleventy-navigation` - Navigation helper
4. `@11ty/eleventy-plugin-inclusive-language` - Inclusive language linting
5. `@11tyrocks/eleventy-plugin-emoji-readtime` - Reading time + emoji
6. `@11tyrocks/eleventy-plugin-sass-lightningcss` - Sass → Lightning CSS
7. `eleventy-plugin-toc` - Table of contents (h2-h4)
8. `eleventy-plugin-dropcap` - Drop cap styling
9. Custom category collections (development, general, design, portfolio)

### Styling Architecture
- **Framework**: Bootstrap 5.3.8 (grid + components)
- **Preprocessor**: Sass/SCSS v1.89.2
- **Post-Processing**: Autoprefixer v10.4.21 + CSSNano v7.0.7 (minification)
- **CSS Methodology**: Standard CSS with element-based naming (`.card`, `.btn-primary`)
- **No utility frameworks** (no Tailwind)
- **Fonts**: Google Fonts (Inter, Pirata One, Playfair Display)
- **Icons**: Font Awesome v6+ (CDN + Kit)

### Image Processing Pipeline
1. Place originals in `src/assets/img-raw/` (high-res source)
2. Run `npm run images:optimize` (14 seconds)
3. Sharp generates:
   - Full-size: 1200px width, WebP (80%) + JPEG (85%)
   - Thumbnail: 300px width, WebP (70%) + JPEG (75%)
4. Output to `src/assets/img/` (~650+ files, ~21MB, committed to repo)

### PWA Features
- **Service Worker**: `src/sw.js` (offline support, cache-polyfill)
- **Web Manifest**: `manifest.json` (installable app metadata)
- **Icons**: Multiple favicon sizes (16, 32, 180, 192, 512px)

### Collections & Data
**Auto-Generated Collections** (via Eleventy):
- `development` - Articles tagged with design/development
- `general` - General articles
- `design` - Design case studies
- `portfolio` - Portfolio pieces
- `specialCollection` - Items with custom "type" field (Bluesky integration)

**Site Metadata** (`src/_data/meta.js`):
- Site name, description, URL
- Author info
- Social links (GitHub, LinkedIn, Bluesky, Mastodon, Dev.to, CodePen, Figma)
- Environment detection (dev/prod)

### Custom Filters & Shortcodes
- **Slug Filter**: Removes emoji, sanitizes for URLs (uses `slugify`)
- **Year Shortcode**: Dynamic copyright year
- **Package Version Shortcode**: Auto-inserted version from package.json

## Adding Content

### New Page
Create `.md` file in `src/pages/` with YAML front matter:
```yaml
---
title: "Page Title"
layout: markdown.njk
eleventyNavigation:
  key: unique-key
  title: Nav Title
  order: 10
categories: [development, design]
---
```

### New Design Case Study
1. Create subfolder in `src/pages/designs/`
2. Add `index.md` with front matter
3. Place images in `src/assets/img-raw/[project-name]/`
4. Run `npm run images:optimize`

### Modify Site Navigation
Edit `eleventyNavigation` in page front matter:
- `key`: Unique identifier
- `title`: Display text in nav
- `order`: Menu position (lower numbers first)

## Working with Styles

### SCSS File Organization
- **Main**: `src/sass/style.scss` (imports Bootstrap + custom partials)
- **Colors**: `src/sass/_colors.scss`
- **Typography**: `src/sass/_typography.scss`
- **Layout**: `src/sass/_layout.scss`
- **Components**: Individual `_component.scss` files (buttons, cards, gallery, etc.)

### CSS Build Process
- **Development**: Auto-compiles via `npm run start` watcher
- **Production**: `npm run build:sass` → PostCSS → minified output
- **Output**: `docs/css/style.css` (~98KB)

## Environment Variables

- **`ELEVENTY_ENV=prod`**: Excludes `src/posts/` from build (production)
- **`ELEVENTY_ENV=dev`**: Includes all content (development, default)

## CI/CD Pipeline

**GitHub Actions** (`.github/workflows/eleventy_build.yml`):
1. **Trigger**: Push to `main` branch
2. **Node.js**: v25.x
3. **Steps**:
   - Checkout code
   - `npm ci` (with Font Awesome token)
   - `npm run build`
   - Deploy `docs/` to `gh-pages` branch
4. **Live Site**: Auto-deploys to GitHub Pages

**Cloudflare**: Creates pull request previews

## Configuration Files

### `.eleventy.js` (163 lines)
- Input: `src/`, Output: `docs/`
- Markdown library setup (markdown-it with plugins)
- Plugin registration (9+ plugins)
- Watch targets (monitors SCSS changes)
- Pass-through copy (assets, icons, CNAME, resume PDF, service worker)
- Custom filters (slug, year, packageVersion)
- BrowserSync middleware (404 handling)
- Category collections
- Environment detection

### `.stylelintrc.json`
- Config: `stylelint-config-standard-scss`
- Plugin: `stylelint-order` (property ordering)
- Custom rules: Disabled empty line requirements, color function notation

### `.hintrc`
- WebHint rules for accessibility (axe), best practices, security
- Expected: 245+ warnings (non-blocking)

## Common Development Tasks

### Add New Images
```bash
# 1. Place original files in src/assets/img-raw/
# 2. Process with Sharp
npm run images:optimize  # 14 seconds

# 3. Reference in templates with Eleventy Image filter
# Generated files appear in src/assets/img/
```

### Modify Site Metadata
Edit `src/_data/meta.js`:
- Site name, description, URL
- Social links
- Author information

### Update Navigation Menu
Edit `eleventyNavigation` in page front matter (see "Adding Content" above)

### Test Responsive Design
```bash
npm run start  # Opens BrowserSync on :8081
# Resize browser window or use DevTools device emulation
```

## Validation & Testing

### Manual Validation Checklist
After changes, ALWAYS test:
1. **Home page**: http://localhost:8081 - verify portfolio cards load
2. **Design portfolio**: http://localhost:8081/designs/ - test case studies
3. **Development showcase**: http://localhost:8081/development/ - verify links
4. **Responsive behavior**: Resize browser, test mobile
5. **Navigation menu**: All links functional
6. **Images**: Load correctly, WebP with JPEG fallbacks

### Quick Validation Commands
```bash
# Verify site builds and serves
npm run build && npm run start &

# Check key files exist
ls -la docs/css/style.css              # Main CSS (~98KB)
ls -la docs/assets/img/ | wc -l        # 650+ images

# Test pages respond
curl -I http://localhost:8081/         # Should return 200 OK
curl -I http://localhost:8081/designs/ # Should return 200 OK
```

## Troubleshooting

### Common Issues
- **Build hangs during image optimization**: Check `src/assets/img-raw/` for valid images
- **Port 8081 in use**: Kill existing process or change port in `package.json`
- **Missing Sharp module**: Run `npm install` again (CPU architecture specific)
- **CSS not updating**: Clear browser cache, check Sass compilation warnings
- **404 on navigation**: Verify Eleventy generated HTML in `docs/`

### Recovery Commands
```bash
# Nuclear option - clean restart
npm run clean
rm -rf node_modules
npm install
npm run build

# Verify build output
ls -la docs/
ls -la docs/css/
ls -la docs/assets/img/
```

## Tech Stack Reference

**Core**:
- Eleventy (11ty) v3.1.2 - Static site generator
- Node.js v25.2.1 (runs on 20+)
- Nunjucks + Liquid - Templating
- Markdown + YAML - Content format

**Frontend**:
- Bootstrap v5.3.8 - Grid + components
- Sass/SCSS v1.89.2 - Styles
- Vanilla JavaScript - No framework
- Font Awesome v6+ - Icons
- Prism.js - Syntax highlighting

**Build Tools**:
- Sharp - Image processing
- Autoprefixer v10.4.21 - CSS vendor prefixes
- CSSNano v7.0.7 - CSS minification
- Stylelint v16.20.0 - SCSS linting
- WebHint v7.1.13 - Accessibility audits

## External Documentation
- **Eleventy**: https://www.11ty.dev/docs/
- **Bootstrap**: https://getbootstrap.com/docs/5.3/
- **Sass**: https://sass-lang.com/documentation/
- **Sharp**: https://sharp.pixelplumbing.com/
- **11ty Recipes**: https://11ty.recipes/
- **The 11ty Bundle**: https://11tybundle.dev/

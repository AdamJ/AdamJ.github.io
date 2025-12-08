# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is Adam Jolicoeur's portfolio website built with Eleventy (11ty), Node.js, and Sass. It's a static site generator project that outputs to the `docs/` directory for GitHub Pages hosting.

## Essential Commands

### Development
```bash
npm run start              # Start dev server with live reload on port 8081
npm run build              # Full production build (clean + images + sass + eleventy + postbuild)
npm run clean              # Remove docs/ directory
```

### Building Components
```bash
npm run build:sass         # Compile SCSS to CSS
npm run build:eleventy     # Generate static site
npm run images:optimize    # Process images from src/assets/img-raw/ using Sharp
npm run postbuild          # Run autoprefixer and cssnano (automatically runs after build)
```

### Linting
```bash
npm run lint               # Check Sass/SCSS files with Stylelint
npm run lint:fix           # Auto-fix Stylelint issues
npm run webhint            # Test accessibility/performance (requires dev server running)
```

### Versioning
```bash
npm run bump patch|minor|major  # Update package.json version without git tag
```

## Important Build Information

- **Node.js version**: 22 (specified in package.json engines and .nvmrc)
- **Development server port**: 8081 (NOT the default 8080)
- **Output directory**: `docs/` (required for GitHub Pages, gets deleted on build)
- **Input directory**: `src/`
- **Environment variables**:
  - `ELEVENTY_ENV=dev` - includes posts directory
  - `ELEVENTY_ENV=prod` - excludes posts directory (line 33-35 in .eleventy.js)

## Architecture

### Directory Structure

```
src/
├── _data/              # Global data files
│   └── meta.js         # Site metadata (URLs, social links, descriptions)
├── _generate/          # Generated content templates (social cards)
├── _includes/          # Nunjucks templates and partials
│   ├── base.njk        # Main layout with navigation logic
│   ├── footer.njk      # Footer template
│   ├── markdown.njk    # Markdown content wrapper
│   └── ...
├── assets/
│   ├── img/            # Optimized images (generated, committed)
│   └── img-raw/        # Original high-res images for processing
├── js/                 # JavaScript (passed through)
├── pages/              # Markdown content pages
│   ├── about/
|   |── app/
|   |── archives/
|   |── credits/
│   ├── designs/
│   ├── development/
│   ├── presentations/
│   └── reference/
├── sass/               # SCSS stylesheets
│   ├── style.scss      # Main stylesheet (imports partials)
│   ├── print.scss      # Print-specific styles
│   ├── prism.scss      # Prism syntax highlighting styles
│   ├── _variables.scss # Custom variables
│   ├── _layout.scss    # Layout and grid customizations
│   ├── _cards.scss     # Card component styles
│   ├── _badge.scss     # Badge component styles
│   └── ...

docs/                   # Build output (DO NOT EDIT)
scripts/
└── image-optimizer.js  # Custom Sharp image processing script
```

### Template System

- **Primary templating**: Nunjucks (`.njk` files)
- **Content format**: Markdown with YAML front matter
- **Base layout**: `src/_includes/base.njk`
  - Contains conditional navigation logic based on URL
  - Home page (`/`) has bottom navigation with anchor links
  - About pages (`/about/*`) have About/Resume navigation
  - Other pages have Home/Task-It/ALM navigation
- **Style system**: Custom Sass in modular partials

### Eleventy Configuration (.eleventy.js)

Key features configured:
- **Plugins**: Syntax highlighting, RSS, navigation, inclusive language, TOC, dropcap, emoji read time
- **Markdown library**: markdown-it with anchor links and syntax highlighting
- **Custom collections**: `development`, `general`, `design`, `portfolio` (lines 139-153)
- **Custom filters**: `slug` filter for URL-safe strings (removes emojis, special chars)
- **Shortcodes**: `year`, `packageVersion`
- **Pass-through copy**: Images, icons, manifests, service worker, JavaScript
- **Watch targets**: `src/sass/*.scss`
- **404 handling**: Custom BrowserSync middleware (lines 82-96)

### Image Processing

The `scripts/image-optimizer.js` script:
- **Input**: `src/assets/img-raw/` (original high-res images)
- **Output**: `src/assets/img/` (optimized images)
- **Formats generated**:
  - WebP: 1200px @ 80% quality, 300px thumbnails @ 70% quality
  - JPEG fallbacks: 1200px @ 85% quality, 300px thumbnails @ 75% quality
- **Naming convention**: `filename.webp`, `filename-thumb.webp`, `filename.jpg`, `filename-thumb.jpg`
- **Run automatically**: Part of `npm run start` and `npm run build`

### Sass Architecture

The styling is modular:
- **Entry point**: `src/sass/style.scss` imports all partials
- **Key partials**:
  - `_animations.scss` - Animation utilities
  - `_badge.scss` - Badge component styles
  - `_buttons.scss` - Button styles
  - `_cards.scss` - Card component styles for portfolio items
  - `_components.scss` - Misc component styles
  - `_fonts.scss` - Font family styles
  - `_footer.scss` - Footer styles
  - `_gallery.scss` - Gallery styles
  - `_highlight.scss` - Highlighter styles
  - `_layout.scss` - Layout and grid customizations
  - `_lists.scss` - List styles
  - `_markdown.scss` - Markdown content styling
  - `_navigation.scss` - Navigation component styles
  - `_spacing.scss` - Spacing variables and utilities
  - `_typography.scss` - Font styles and text utilities
  - `_variables.scss` - Custom variables overrides
- **Build process**: Sass → CSS → PostCSS (autoprefixer + cssnano)

## Key Technical Details

### Content Management

- **Adding pages**: Create `.md` file in `src/pages/` with front matter
- **Front matter fields**: `title`, `description`, `layout`, `eleventyNavigation`, `categories`, `type`
- **Navigation**: Uses `@11ty/eleventy-navigation` plugin, configured via front matter
- **Collections**: Auto-generated from `categories` front matter (development, general, design, portfolio)

### Metadata and SEO

Configured in `src/_data/meta.js`:
- Site metadata (name, description, URL)
- Social media links (GitHub, LinkedIn, Bluesky, Mastodon, CodePen, Figma)
- Author information
- Environment-aware URL configuration

### Service Worker

- Service worker registration in `src/_includes/base.njk` (lines 131-139)
- PWA support via `manifest.json`
- Multiple icon sizes for various devices

### GitHub Actions CI/CD

The site auto-deploys via `.github/workflows/eleventy_build.yml`:
- Triggers on push to `main` branch
- Builds with Node.js 22.x
- Publishes `docs/` to `gh-pages` branch
- Live site deploys automatically to GitHub Pages

## Common Development Patterns

### Adding a New Design Case Study

1. Create markdown file: `src/pages/designs/project-name.md`
2. Add front matter with title, description, categories: `['design', 'portfolio']`
3. Add images to `src/assets/img-raw/`
4. Run `npm run images:optimize`
5. Reference images in markdown: `![alt text](/assets/img/filename.webp)`
6. Update navigation in `src/_includes/base.njk` if needed

### Modifying Styles

1. Edit relevant partial in `src/sass/`
2. Changes auto-compile with `npm run start` (watch mode)
3. For production: `npm run build:sass`
4. PostCSS automatically runs after build

### Working with Collections

Collections are auto-created based on `categories` in front matter. To add items to a collection:
```yaml
---
title: My Project
categories: ['portfolio', 'design']
---
```

Access in templates: `collections.portfolio`, `collections.design`, etc.

## Expected Warnings (Safe to Ignore)

- **Sass deprecation warnings**: Deprecated `@import` syntax
- **npm audit vulnerabilities**: Non-critical for static site generation
- **Stylelint errors**: Legacy code issues (~176 errors) - fix with `npm run lint:fix`
- **Node version warnings**: Package requires Node 22, works with 20+ (EBADENGINE warnings)

## Testing Before Committing

1. **Build succeeds**: `npm run build`
2. **Dev server runs**: `npm run start` and verify http://localhost:8081
3. **Key pages load**: Test home, designs, development, about pages
4. **Images display**: Verify portfolio images load correctly
5. **Navigation works**: Test all navigation links
6. **Responsive behavior**: Check mobile/tablet layouts
7. **Run linting**: `npm run lint` (don't introduce new errors)

## Deployment

- **Main branch**: Triggers automatic GitHub Actions build
- **Output**: `docs/` directory published to `gh-pages` branch
- **Live URL**: https://www.adamjolicoeur.com
- **Cloudflare**: Creates PR previews automatically

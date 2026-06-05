# Changelog

All notable changes to this project will be documented in this file.

## [Unreleased]

### Added

- Design system document (`.stitch/DESIGN.md`) extracted from source SCSS
  — `.stitch/DESIGN.md`
  (Stitch-compatible design system with YAML frontmatter color/typography tokens; covers earth-tone palette, neo-brutalist component patterns, layout principles, and Stitch generation prompts)

- Design system overview (`DESIGN.md`) at project root
  — `DESIGN.md`, `src/sass/_variables.scss`, `src/sass/_typography.scss`, `src/sass/_cards.scss`, `src/sass/_buttons.scss`, `src/sass/_navigation.scss`
  (warm earth-tone palette with CSS custom properties; Pirata One/Playfair Display/Inter type hierarchy; neo-brutalist borders/hard-offset shadows)

- Open Source page
  — `src/pages/open-source/index.md`
  (dedicated page for open source contributions and projects)

### Changed

- Package manager migrated from NPM to PNPM
  — `package.json`, `pnpm-lock.yaml` (replaces `package-lock.json`)
  (`preinstall` guard enforces pnpm via `only-allow`; all install/run commands now use `pnpm`)

- Version bumped to 11.4.1 (was 10.0.2 per prior docs)
  — `package.json`

### Added (prior)

- TimeTracker Pro case study page for the Weekly Report AI feature
  — `src/pages/development/timetracker.md`, `src/assets/img/timetracker-*.{webp,jpg}`, `src/assets/img-raw/timetracker-*.png`
  (full case study covering design decisions, two-panel layout, tone selection, and AI prompt architecture; 8 screenshots with full-size + thumbnail variants)

- Markdown containers system via `markdown-it-container` plugin
  — `.eleventy.js`, `src/sass/containers.scss`, `src/_includes/markdown.njk`
  (registers `:::card`, `:::section`, `:::cards`, `:::card-basic`, `:::card-shadow` fenced blocks; opt-in per page via `containers: true` in front matter)

### Fixed

- Production build now compiles all SCSS files to `docs/css/` (previously only `style.scss` was compiled, leaving `markdown.css`, `print.css`, etc. missing in production)
  — `package.json` `build:sass-site` script changed from single-file to directory compilation (`src/sass:docs/css`)

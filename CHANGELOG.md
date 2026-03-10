# Changelog

All notable changes to this project will be documented in this file.

## [Unreleased]

### Added

- TimeTracker Pro case study page for the Weekly Report AI feature
  — `src/pages/development/timetracker.md`, `src/assets/img/timetracker-*.{webp,jpg}`, `src/assets/img-raw/timetracker-*.png`
  (full case study covering design decisions, two-panel layout, tone selection, and AI prompt architecture; 8 screenshots with full-size + thumbnail variants)

- Markdown containers system via `markdown-it-container` plugin
  — `.eleventy.js`, `src/sass/containers.scss`, `src/_includes/markdown.njk`
  (registers `:::card`, `:::section`, `:::cards`, `:::card-basic`, `:::card-shadow` fenced blocks; opt-in per page via `containers: true` in front matter)

### Fixed

- Production build now compiles all SCSS files to `docs/css/` (previously only `style.scss` was compiled, leaving `markdown.css`, `print.css`, etc. missing in production)
  — `package.json` `build:sass-site` script changed from single-file to directory compilation (`src/sass:docs/css`)

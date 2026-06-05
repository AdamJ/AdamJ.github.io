# Design System — Adam Jolicoeur Portfolio

Source of truth for visual identity, tokens, and component patterns at adamjolicoeur.com.

---

## Brand Identity

**Site:** adamjolicoeur.com  
**Owner:** Adam Jolicoeur — Lead Product Designer  
**Tone:** Earth-toned, high-contrast, editorial. Brutal neo-craft aesthetic — thick borders, hard offset shadows, mixed serif/sans hierarchy.

**Content pillars:**
- Design case studies (AWS, Red Hat, Component Assembly Systems)
- Development projects (open source tools, code examples)
- Professional content (resume, presentations, articles)
- App showcases (iOS/web applications)

---

## Color Tokens

Defined in `src/sass/_variables.scss`.

| Token | Value | Role |
|-------|-------|------|
| `--white` | `#f0f0f0` | High-contrast white |
| `--black` | `#010101` | High-contrast black |
| `--earth-dark` | `#2d1f12` | Footer bg, deep shadow base |
| `--earth-brown` | `#4a3426` | Primary border color, text-secondary |
| `--earth-sage` | `#5a6b4f` | Badges, social links, secondary card shadow |
| `--earth-sand` | `#c9b89a` | Code bg, card section dividers |
| `--earth-sand-light` | `#e2d8c8` | Callout bg, prose blockquote bg |
| `--earth-cream` | `#f5f1e8` | Canvas bg, card bg |
| `--accent-coral` | `#d35f3d` | H2 underline bars, CTA highlights, skip-link |
| `--accent-coral-dark` | `#b34a2d` | Primary button bg |
| `--text-primary` | `#2d1f12` | All body and heading text |
| `--text-secondary` | `#4a3426` | Subtitles, lead paragraphs |
| `--text-muted` | `#6b5d52` | Captions, metadata |
| `--shadow` | `rgb(45,31,18,15%)` | Standard shadow |
| `--shadow-heavy` | `rgb(45,31,18,25%)` | Card offset shadows |
| `--shadow-light` | `rgb(45,31,18,8%)` | Subtle elevation |
| `--bg-canvas` | `var(--earth-cream)` | Alias for page background |
| `--border-brown` | `var(--earth-brown)` | Alias for primary border |

---

## Typography

Fonts loaded via Google Fonts. Defined in `src/sass/_variables.scss` and `src/sass/_typography.scss`.

| Variable | Family | Use |
|----------|--------|-----|
| `--font-family-heading` | Pirata One | H1, `.text-display` — display/hero only |
| `--font-family-serif` | Playfair Display | H2–H4 — section headings |
| `--font-family-sans` | Inter | H5–H6, body, UI |
| `--font-family-mono` | Fira Code | `code`, `.code-block` |

### Type Scale

| Token | Value | px equiv |
|-------|-------|----------|
| `--font-size-xs` | `0.75rem` | 12px |
| `--font-size-sm` | `0.875rem` | 14px |
| `--font-size-md` | `1rem` | 16px |
| `--font-size-lg` | `1.125rem` | 18px |
| `--font-size-xl` | `1.25rem` | 20px |
| `--font-size-2xl` | `1.5rem` | 24px |
| `--font-size-3xl` | `2rem` | 32px |
| `--font-size-4xl` | `2.5rem` | 40px |
| `--font-size-5xl` | `3rem` | 48px |
| `--font-size-6xl` | `4rem` | 64px |

### Heading Styles

| Element | Font | Size | Notes |
|---------|------|------|-------|
| `h1` / `.text-display` | Pirata One | `clamp(2.5rem, 8vw, 5rem)` | `text-shadow: 3px 3px 0 coral` |
| `h2` | Playfair Display | `clamp(2rem, 5vw, 3rem)` | Coral underline bar (100px×5px) after element |
| `h3` | Playfair Display | `clamp(1.5rem, 3vw, 2rem)` | weight 600 |
| `h4` | Playfair Display | `clamp(1.25rem, 2.5vw, 1.5rem)` | weight 600 |
| `h5` | Inter | `clamp(1.1rem, 2vw, 1.25rem)` | weight 700 |
| `h6` | Inter | `1rem` | weight 700, uppercase, letter-spacing 0.5px |

### Body & Utility Classes

| Class | Size | Notes |
|-------|------|-------|
| `p` / `.text-body` | `clamp(0.95rem, 1.5vw, 1rem)` | line-height 1.7 |
| `.text-body-lg` | `clamp(1.1rem, 1.5vw, 1.25rem)` | line-height 1.7 |
| `.text-body-sm` | `clamp(0.85rem, 1.2vw, 0.9rem)` | line-height 1.6 |
| `.lead` / `.text-lead` | `clamp(1.1rem, 2vw, 1.35rem)` | color `--text-secondary` |
| `.text-caption` | `clamp(0.75rem, 1vw, 0.85rem)` | color `--text-muted` |
| `.text-callout` | `clamp(1rem, 1.5vw, 1.1rem)` | bg `--earth-sand-light`, left border coral |
| `.text-muted` | — | color `--text-muted` |
| `.text-secondary` | — | color `--text-secondary` |
| `.text-accent` | — | color `--accent-coral` |
| `.text-semibold` | — | weight 600 |
| `.text-bold` | — | weight 700 |
| `.text-center` | — | `text-align: center` |

### Links

Default: `--earth-sage`, 1px solid underline, weight 600. Hover: `--earth-brown`.  
`.link-brackets` — decorative `[` `]` pseudo-elements that shift to coral on hover.

---

## Spacing Tokens

Defined in `src/sass/_variables.scss`.

| Token | Value | px equiv |
|-------|-------|----------|
| `--space-2xs` | `0.25rem` | 4px |
| `--space-xs` | `0.5rem` | 8px |
| `--space-sm` | `0.75rem` | 12px |
| `--space-md` | `1rem` | 16px |
| `--space-lg` | `1.5rem` | 24px |
| `--space-xl` | `2rem` | 32px |
| `--space-2xl` | `3rem` | 48px |
| `--space-3xl` | `6rem` | 96px |

Spacing utility classes (`.mb-1`–`.mb-5`, `.mt-`, `.ml-`, `.mr-`, `.p-`, `.pt-`, `.pb-`, `.pl-`, `.pr-`) map 1→`2xs`, 2→`xs`, 3→`sm`, 4→`md`, 5→`xl`. Defined in `src/sass/_spacing.scss`.

---

## Shape Tokens

Defined in `src/sass/_variables.scss`.

### Border Radius

| Token | Value |
|-------|-------|
| `--radius-sm` | `8px` |
| `--radius-md` | `12px` |
| `--radius-lg` | `16px` |
| `--radius-xl` | `20px` |
| `--radius-pill` | `50px` |

### Border Widths

| Token | Value |
|-------|-------|
| `--border-thin` | `2px` |
| `--border-medium` | `4px` |
| `--border-thick` | `6px` |
| `--border-extra-thick` | `8px` |

---

## Components

### Cards

Defined in `src/sass/_cards.scss`.

| Class | Border | Shadow | Radius | Use |
|-------|--------|--------|--------|-----|
| `.card` | `thick` `--earth-brown` | `8px 8px 0 shadow-heavy` (hover: 12px) | `radius-xl` | General content card |
| `.card-layered` | `thick` `--earth-brown` | sage+brown stacked offset | `radius-xl` | About section card |
| `.card-shadow` | none | `10px 10px 0 shadow-heavy` | `radius-lg` | Borderless elevated card |
| `.card-accent` | `extra-thick` `--earth-brown` | coral+brown stacked offset | `radius-xl` | High-emphasis card |
| `.card-image` | `medium` `--earth-brown` | `6px 6px 0 shadow-light` | `radius-xl` | Card with image top |
| `.showcase-large` | `thick` `--earth-brown` | coral+brown stacked offset | `radius-xl` | Featured work items |
| `.showcase-small` | `4px` `--earth-brown` | `6px 6px 0 shadow-heavy` | `radius-lg` | Small project cards |
| `.about-card` | `thick` `--earth-brown` | sage+brown stacked offset | `radius-xl` | About section wrapper |

**Card anatomy classes:** `.card-header`, `.card-body`, `.card-footer` — each with `--space-md` padding/margin and `--earth-sand` border separator.

**Layout helpers:** `.card-flex` (column flex, `p:flex 1 0`) for equal-height cards. `.card-with-columns` for multi-column card interior.

### Buttons

Defined in `src/sass/_buttons.scss`.

| Class | Bg | Border | Shadow | Use |
|-------|----|--------|--------|-----|
| `.btn-primary` | `--accent-coral-dark` | `medium` `--earth-brown` | `4px 4px 0 earth-brown` | Primary CTA |
| `.btn-secondary` | `--earth-cream` | `medium` `--earth-brown` | `4px 4px 0 earth-sage` | Secondary action |
| `.btn-outline` | `white 50% / blur` | `medium` `--earth-brown` | none | Tertiary / on-image |

All buttons: hover translates `(2px, 2px)` and collapses shadow to `2px`.  
Size modifiers: `.btn-sm` (thin border, 0.9rem), `.btn-lg` (1.1rem, xl padding).

### Badges

Defined in `src/sass/_badge.scss`.

| Class | Bg | Use |
|-------|----|-----|
| `.badge` | `--earth-sage` | Default tag/label |
| `.badge-accent` | `--accent-coral-dark` | Highlighted tag |
| `.badge-outline` | transparent | Inline label variant |

`.badges` / `.row-badges` — flex row with `2xs` gap for badge groups.

### Navigation

Defined in `src/sass/_navigation.scss`. Floating pill nav: `position: fixed`, `top: 2rem`, centered via `left: 50% + translateX(-50%)`. Frosted glass bg (`earth-cream 50% / blur(24px)`), `medium` brown border, `radius-pill` shape. Active links: `--accent-coral`. Mobile (`≤768px`): reduced padding and gap.

### Divider

Defined in `src/sass/_layout.scss`.

| Class | Shape | Use |
|-------|-------|-----|
| `.divider` | `50% wide × space-md tall`, coral bg, `medium outset earth-dark` border | Horizontal section break |
| `.divider.vertical` | `space-2xs wide × 100% tall`, earth-dark bg, no border | Vertical content separator |

### Callouts (Testimonials)

`.callout` — cream card, `thick` coral-dark border, `8px 8px 0 shadow-heavy`, `radius-xl`. Decorative `"` pseudo-element (Playfair Display, 4rem, coral). `.callout-text` italic body. `.callout-author` weight 600. `.callout-role` sm muted.

### Badges & Tags

`.badge` — pill shape (`radius-pill`), sage bg, cream text, `thin` brown border.

---

## Layout

Defined in `src/sass/_layout.scss` and `src/sass/_components.scss`.

| Class | Pattern |
|-------|---------|
| `section` | `max-width: 1200px`, `margin: 0 auto`, `padding: space-3xl space-lg` |
| `.container` | `max-width: 1200px`, `padding: 0 space-lg` |
| `.container-narrow` | `max-width: 800px`, `padding: 0 space-lg` |
| `.work-grid` | CSS Grid, `auto-fit minmax(300px, 1fr)`, `space-lg` gap |
| `.about-grid` | CSS Grid, `auto-fit minmax(350px, 1fr)`, `space-xl` gap |
| `.callouts-grid` | CSS Grid, `auto-fit minmax(300px, 1fr)`, `2rem` gap |
| `.small-showcase-cards` | CSS Grid, `auto-fit minmax(250px, 1fr)`, `space-md` gap |
| `.row` | Flexbox wrap, `space-lg` gap (collapses to `space-sm` at 768px+) |
| `.cards-row` | Flex row wrap, `space-lg` gap (containers only) |
| `.section` | `padding: space-2xl space-lg` |
| `.section-lg` | `padding: space-3xl space-lg` |

---

## Markdown Containers

Opt-in via `containers: true` in page front matter. Loads `docs/css/containers.css`. Defined in `src/sass/containers.scss`.

| Syntax | Class | Style |
|--------|-------|-------|
| `:::card` | `.card` | Standard card (see Cards) |
| `:::section` | `.prose-section` | Semantic section with spacing |
| `:::cards` | `.cards-row` | Flex row wrapper |
| `:::card-basic` | `.card-basic` | `--earth-sand` bg, 4px brown border, `radius-lg`, hard shadow |
| `:::card-shadow` | `.card-shadow` | Cream bg, borderless, `10px 10px 0 shadow-heavy` |

Prose-scoped `blockquote` (within `.prose-section`): cream-sand bg, coral left border (`medium`), weight 600, full padding — overrides the global base style.

---

## Footer

Defined in `src/sass/_footer.scss`. Dark bg (`--earth-dark`), `extra-thick` brown top border. Grid layout (`auto-fit minmax(250px, 1fr)`). Section headings: Playfair Display, coral. Links: cream, underline, hover → coral.

---

## Animation

Defined in `src/sass/_animations.scss`. Arrow scroll indicator (`@keyframes arrow`, opacity pulse, 2s infinite). Card hover: `translateY(-5px)` with shadow expansion. Button hover: `translate(2px, 2px)` with shadow collapse. All animations disabled under `prefers-reduced-motion: reduce`.

---

## Image Conventions

- Source: `src/assets/img-raw/` (high-res originals)
- Output: `src/assets/img/` (Sharp-processed)
- Full-size: 1200px wide, WebP (80%) + JPEG (85%)
- Thumbnail: 300px wide, WebP (70%) + JPEG (75%)
- `.showcase-image` placeholder: `300px` tall, `135deg` gradient sage→sand, centers emoji/icon fallback
- `.showcase-image-dark`: black→earth-dark gradient variant

---

## CSS Build

| File | Output | Loaded |
|------|--------|--------|
| `src/sass/style.scss` | `docs/css/style.css` | All pages |
| `src/sass/containers.scss` | `docs/css/containers.css` | Pages with `containers: true` |
| `src/sass/markdown.scss` | `docs/css/markdown.css` | Markdown layout pages |
| `src/sass/print.scss` | `docs/css/print.css` | Print media |
| `src/sass/prism.scss` | `docs/css/prism.css` | Code syntax highlighting |
| `src/sass/slides.scss` | `docs/css/slides.css` | Presentation pages |

Import order in `style.scss`: `variables` → `animations` → `fonts` → `typography` → `spacing` → `layout` → `lists` → `highlight` → `navigation` → `footer` → `badge` → `buttons` → `cards` → `gallery`.

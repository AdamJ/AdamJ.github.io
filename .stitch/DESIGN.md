---
name: Adam Jolicoeur Portfolio
colors:
  surface: '#f5f1e8'
  surface-dim: '#e2d8c8'
  surface-bright: '#f5f1e8'
  surface-container-lowest: '#f5f1e8'
  surface-container-low: '#e2d8c8'
  surface-container: '#c9b89a'
  surface-container-high: '#4a3426'
  surface-container-highest: '#2d1f12'
  on-surface: '#2d1f12'
  on-surface-variant: '#4a3426'
  inverse-surface: '#2d1f12'
  inverse-on-surface: '#f5f1e8'
  outline: '#4a3426'
  outline-variant: '#c9b89a'
  surface-tint: '#5a6b4f'
  primary: '#b34a2d'
  on-primary: '#f0f0f0'
  primary-container: '#d35f3d'
  on-primary-container: '#f5f1e8'
  inverse-primary: '#d35f3d'
  secondary: '#5a6b4f'
  on-secondary: '#f0f0f0'
  secondary-container: '#e2d8c8'
  on-secondary-container: '#2d1f12'
  tertiary: '#4a3426'
  on-tertiary: '#f5f1e8'
  tertiary-container: '#c9b89a'
  on-tertiary-container: '#2d1f12'
  error: '#b34a2d'
  on-error: '#f0f0f0'
  error-container: '#e2d8c8'
  on-error-container: '#2d1f12'
  background: '#f5f1e8'
  on-background: '#2d1f12'
  surface-variant: '#e2d8c8'
typography:
  display-lg:
    fontFamily: Pirata One
    fontSize: 80px
    fontWeight: '400'
    lineHeight: 88px
    letterSpacing: 2px
  headline-lg:
    fontFamily: Pirata One
    fontSize: 48px
    fontWeight: '400'
    lineHeight: 57px
    letterSpacing: 2px
  headline-md:
    fontFamily: Playfair Display
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 47px
    letterSpacing: 0
  headline-sm:
    fontFamily: Playfair Display
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
    letterSpacing: 0
  title-lg:
    fontFamily: Playfair Display
    fontSize: 22px
    fontWeight: '600'
    lineHeight: 30px
    letterSpacing: 0
  title-md:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '700'
    lineHeight: 25px
    letterSpacing: 0
  title-sm:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '700'
    lineHeight: 22px
    letterSpacing: 0.5px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 30px
    letterSpacing: 0
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 27px
    letterSpacing: 0
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 22px
    letterSpacing: 0
  label-lg:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.5px
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.5px
---

# Design System: Adam Jolicoeur Portfolio

## 1. Visual Theme & Atmosphere

This portfolio lives in the territory between artisan craft and digital precision. The palette is built entirely from warm earth tones — deep espresso browns, aged-parchment creams, muted olive sage, and terracotta coral — creating the feel of a hand-bound sketchbook or a well-worn design studio. Nothing is clinical or cold; every surface carries warmth. The overall mood is confident and distinctive: a designer who has a clear point of view and isn't afraid to show it.

The aesthetic is deliberately neo-brutalist: thick 4–8px solid borders, hard-offset box shadows with no blur radius, and interactive elements that physically shift on hover (translateY). This isn't decoration — it communicates craft and intentionality. Sections breathe generously with 96px vertical padding, while cards cluster tightly within their grids. The floating pill-shaped navigation with a frosted-glass backdrop blur adds a single modern counterpoint to the otherwise tactile, grounded visual language.

## 2. Color Palette & Roles

### Primary Foundation
- **Aged Parchment** `#f5f1e8` — Main surface/background; the primary canvas for all content
- **Warm Linen** `#e2d8c8` — Secondary surface; section backgrounds, callout fills, card-basic
- **Desert Sand** `#c9b89a` — Tertiary surface; code backgrounds, showcase-small cards, muted fills
- **Near-Black** `#010101` — Absolute black; used sparingly for maximum contrast
- **Off-White** `#f0f0f0` — Text on dark surfaces; button labels on coral/dark backgrounds

### Accent & Interactive
- **Terracotta** `#d35f3d` — Primary accent; H1 text-shadows, H2 underline decorators, hover states, skip-link
- **Deep Terracotta** `#b34a2d` — Primary CTA buttons; darker accent for increased contrast
- **Olive Sage** `#5a6b4f` — Social links, secondary shadows on card hover states, links/anchor colors

### Typography & Text Hierarchy
- **Espresso** `#2d1f12` — Primary text color; same as `earth-dark`; all headings and body copy
- **Rich Brown** `#4a3426` — Secondary text; hero subtext, card secondary content; same as `earth-brown`
- **Warm Taupe** `#6b5d52` — Muted/caption text; metadata, captions, supplementary labels

### Functional States
- **Dark Espresso** `#2d1f12` — Footer background (inverted surface)
- Shadows use `rgba(45, 31, 18, 0.25)` — heavy shadow for depth
- Shadows use `rgba(45, 31, 18, 0.15)` — standard shadow
- Shadows use `rgba(45, 31, 18, 0.08)` — light shadow

## 3. Typography Rules

### Font Families
- **Pirata One** (cursive/display) — Dramatic medieval-style display font used exclusively for H1 and `.text-display`. Evokes craft, personality, and a sense of history. The designer's signature typographic choice.
- **Playfair Display** (serif) — Editorial high-contrast serif for H2, H3, H4, footer section headings, and showcase card titles. Communicates authority and refinement.
- **Inter** (geometric sans-serif) — Workhorse for all body copy, H5, H6, navigation links, buttons, and UI labels. Optically sized, covers weights 400–900.
- **Fira Code** (monospace) — Code blocks and inline code only.

### Hierarchy & Weights
| Level | Font | Size (clamp) | Weight | Special |
|-------|------|-------------|--------|---------|
| Display | Pirata One | 3–6rem | 400 | `text-shadow: 3px 3px 0 #d35f3d`, letter-spacing: 2px |
| H1 | Pirata One | 2.5–5rem | 400 | Same text-shadow treatment |
| H2 | Playfair Display | 2–3rem | 700 | Decorative 100×5px coral block underline with brown border |
| H3 | Playfair Display | 1.5–2rem | 600 | No underline decorator |
| H4 | Playfair Display | 1.25–1.5rem | 600 | No underline decorator |
| H5 | Inter | 1.1–1.25rem | 700 | No special treatment |
| H6 | Inter | 1rem | 700 | `text-transform: uppercase`, letter-spacing: 0.5px |
| Body | Inter | 0.95–1rem | 400 | line-height: 1.7 |
| Lead | Inter | 1.1–1.35rem | 400 | `color: text-secondary` |
| Caption | Inter | ~0.85rem | 400 | `color: text-muted` |

### Spacing Principles
- Line-heights are generous on body text (1.7) for readability, tighter on display/headings (1.1–1.3)
- 2px letter-spacing on display type for dramatic theatrical effect
- 0.5px letter-spacing on H6 and uppercase labels for legibility
- Links use semibold (600) weight with bottom-border underline instead of text-decoration

## 4. Component Stylings

### Buttons
Buttons have 12px border-radius (radius-md), Inter font, semibold weight, and a signature hard-offset shadow system that shifts on interaction.

- **Primary** — `#b34a2d` background, `#f0f0f0` text, 4px solid `#4a3426` border, `4px 4px 0 #4a3426` box-shadow. On hover: translates `(2px, 2px)` and shadow reduces to `2px 2px 0`.
- **Secondary** — Aged parchment `#f5f1e8` background, espresso text, 4px brown border, `4px 4px 0 #5a6b4f` shadow (sage). Hover darkens to sand and adds outline.
- **Outline** — 50% white with `backdrop-filter: blur(24px)` frosted glass, 4px brown border, no shadow. Hover: underline + cream text.
- **Social links** — `#5a6b4f` olive sage background, off-white text, 4px sand border, 8px radius. Hover: becomes terracotta, translates up 2px.
- **Sizes**: sm (padding 8px/16px, 0.9rem), default (12px/24px, 1rem), lg (16px/32px, 1.1rem)

### Cards
Cards are the primary content vehicle — bold borders, hard shadows, generous rounding.

- **Base Card** `.card` — Parchment bg, 6px solid brown border, 20px radius (radius-xl), 24px padding, `8px 8px 0 rgba(45,31,18,0.25)` shadow. Hover: `translateY(-5px)`, shadow extends to 12px.
- **Layered Card** `.card-layered` — Like base but with dual-layer shadow: `12px 12px 0 sage, 12px 12px 0 5px brown`.
- **Accent Card** `.card-accent` — 8px border, coral+brown dual shadow at 16px offset. Most dramatic variant.
- **Shadow Card** `.card-shadow` — No border, `10px 10px 0` shadow only. Softer option.
- **Showcase Large** `.showcase-large` — Full-width card with image well (300px height, sage→sand gradient), 6px border, coral+brown dual shadow, `translateY(-8px)` on hover.
- Card headers/footers use 2px sand border-top/bottom separators.

### Navigation
Floating pill nav: `position: fixed/sticky`, centered, `background: rgba(245,241,232,0.5)` with `backdrop-filter: blur(24px)`. 4px brown border, 50px border-radius (true pill shape). Items spaced 2rem apart, Inter 0.95rem medium weight. Active state and hover both use terracotta color + outline.

### Inputs & Forms
No dedicated form component file found. Code blocks use sand background `#c9b89a`, 12px radius (radius-md), 2px sage border. Inline code uses sand bg with 8px radius (radius-sm).

### Portfolio/Case Study Components
- **Callout Card** `.callout` — Parchment bg, 6px deep-terracotta border, 20px radius, `8px 8px 0` shadow. Oversized Playfair Display `"` quote mark in coral positioned top-left. Right-aligned content.
- **Work Grid** `.work-grid` — CSS Grid, `auto-fit minmax(300px, 1fr)`, 2rem gap.
- **Divider** `.divider` — 50% width, terracotta fill, 4px outset dark-brown border. Horizontal rule as decorative element.
- **Callout Text Block** `.text-callout` — Sand-light background, 4px left coral border, semibold, generous margins/padding.

## 5. Layout Principles

### Grid & Structure
- **Max content width**: 1200px (`section`, `.container`, `.footer-content`)
- **Narrow content**: 800px (`.container-narrow`) for prose/article pages
- **Grid system**: CSS Grid with `auto-fit / minmax()` patterns — not fixed columns
  - Work grid: `minmax(300px, 1fr)`
  - About grid: `minmax(350px, 1fr)`
  - Small showcase: `minmax(250px, 1fr)`
  - Footer: `minmax(250px, 1fr)`
- **Flex rows**: `display: flex; flex-wrap: wrap; gap: 2rem`

### Whitespace Strategy
- Base unit: 4px (`--space-2xs`)
- Section vertical padding: **96px** (`--space-3xl`) — extremely generous
- Section lateral padding: 24px (`--space-lg`)
- Card internal padding: 24px default, 32px for larger variants
- Spacing scale: 4 / 8 / 12 / 16 / 24 / 32 / 48 / 96px

### Alignment & Visual Balance
- Section content centered with `max-width + margin: 0 auto`
- H2 decorative underline centered with `margin: 1rem auto`
- Hero text centered; body content left-aligned
- Footer uses CSS Grid for balanced multi-column layout

### Responsive Behavior & Touch
- Breakpoint: 768px (mobile/desktop boundary)
- Mobile nav: reduces padding, compresses to tighter horizontal fit
- Cards: grids collapse naturally via `auto-fit/minmax`
- About card: switches to single column, reduces shadow and padding
- Showcase large: reduces shadow offset on mobile
- Font sizes: all use `clamp()` for fluid scaling — no hard breakpoints in typography

## 6. Design System Notes for Stitch Generation

### Language to Use
Describe screens as: *warm, earthy, crafted, neo-brutalist, artisanal, portfolio-grade, high-contrast, parchment-toned, bold-bordered, tactile*. Avoid clinical or sterile descriptors. Think: "a designer's sketchbook brought to the web."

### Color References
- Canvas/background: Aged Parchment `#f5f1e8`
- Primary CTA: Deep Terracotta `#b34a2d`
- Accent/highlight: Terracotta `#d35f3d`
- Borders & outlines: Rich Brown `#4a3426`
- Secondary/links: Olive Sage `#5a6b4f`
- Body text: Espresso `#2d1f12`
- Secondary text: Rich Brown `#4a3426`
- Dark surface (footer): Dark Espresso `#2d1f12`

### Component Prompts
- *"Portfolio card with thick brown border, terracotta drop shadow, parchment background, Playfair Display heading, and hover lift effect"*
- *"CTA button in deep terracotta with 4px brown border, hard offset shadow, semi-bold Inter text, 12px radius"*
- *"Floating pill navigation bar with frosted glass backdrop blur, parchment tint, brown border, centered links in Inter medium"*
- *"Case study hero with Pirata One display heading, terracotta text-shadow, centered on parchment, with a Playfair Display subtitle in secondary brown"*
- *"Dark footer with espresso background, coral section headings, cream body text, multi-column grid layout"*

### Incremental Iteration
- Start screens on parchment `#f5f1e8` — never white or gray
- Apply borders before shadows — the border defines the component shape
- Use `translateY(-5px)` lift on card hover, never scale transforms
- H2 always needs its coral underline block — it's a signature element
- Shadow style is always flat/hard-offset (no blur radius), not soft/diffuse

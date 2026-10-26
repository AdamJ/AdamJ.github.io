---
title: 'Component Library'
portfolioOrder: 5
card:
  title: "Component Library"
  summary: "Built comprehensive design system for construction management software spanning web and iOS applications. Created design tokens, component documentation, and prototypes that accelerated development cycles by 25%."
  image: "/assets/img/Storybook-GettingStarted.webp"
  imageAlt: "Getting Started screen on Storybook"
  badges: ["Library", "Design Tokens"]
  group: "Professional"
  featured: true
date: git Last Modified
abbreviation: 'componentlibrary'
description: 'Design System for Construction Management Software'
eleventyNavigation:
  key: ComponentLibrary
  parent: Designs
  order: 4
layout: case-study.njk
motion: true
eyebrow: 'Case study · Design systems'
headline: 'Web and iOS shared no visual language, so I built the first unified design system for construction management software.'
deck: 'A library of design tokens, components, and Storybook documentation for Component Assembly Systems, built for web and iOS.'
heroImage: /assets/img/Storybook-GettingStarted.webp
heroAlt: 'Getting Started screen on Storybook'
facts:
  - { label: Role, value: 'Lead product designer' }
  - { label: Timeline, value: '2024 to present' }
  - { label: Platform, value: 'Web and iOS' }
  - { label: Status, value: 'In active use, documented in Storybook' }
results:
  - { value: 'First', label: 'Unified design system across web and iOS' }
  - { value: '25%', label: 'Faster development cycles, from the project summary' }
  - { value: 'Storybook', label: 'Documentation for design and components' }
camps:
  - { id: top, label: Trailhead }
  - { id: context, label: Context }
  - { id: decisions, label: Design tokens }
  - { id: final, label: Final design }
  - { id: impact, label: Impact }
---
<section id="context" class="cs-step">
<p class="cs-kicker">Step 1 &middot; Context</p>
<h2>Construction management software across web and iOS needed one visual language and one set of reusable parts.</h2>
<p>I built the design system for Component Assembly Systems&rsquo; construction management platform. It spans web and iOS, with a unified visual language, reusable components, and documentation that speeds up development.</p>
</section>

<section id="decisions" class="cs-step cs-band">
<p class="cs-kicker">Step 2 &middot; Design tokens</p>
<h2>Tokens came first, so every component inherits color, type, spacing, and icons from one source.</h2>
<div class="cs-figures ">
<figure class="cs-figure"><img src="/assets/img/CAS-ColorPalette.webp" alt="Component library light color palette" loading="lazy" /><figcaption>Color palette</figcaption></figure>
<figure class="cs-figure"><img src="/assets/img/CAS-Typography.webp" alt="Component library typography" loading="lazy" /><figcaption>Typography</figcaption></figure>
<figure class="cs-figure"><img src="/assets/img/CAS-Icons.webp" alt="Component library icon examples" loading="lazy" /><figcaption>Iconography</figcaption></figure>
</div><div class="cs-card"><h3>Spacing and sizing</h3>
<pre><code>--cas-spacer-xxs: 0.25rem; /* 4px */
--cas-spacer-xs: 0.5rem;   /* 8px */
--cas-spacer-sm: 0.75rem;  /* 12px */
--cas-spacer: 1rem;        /* 16px */
--cas-spacer-md: 1rem;     /* 16px */
--cas-spacer-lg: 1.25rem;  /* 20px */
--cas-spacer-xl: 1.5rem;   /* 24px */
--cas-spacer-xxl: 2rem;    /* 32px */
--cas-spacer-xxxl: 3rem;   /* 48px */</code></pre>
</div>
</section>

<section id="final" class="cs-step">
<p class="cs-kicker">Step 3 &middot; Final design</p>
<h2>Buttons, cards, tables, and form controls, specified so they are ready for production.</h2>
<div class="cs-figures ">
<figure class="cs-figure"><img src="/assets/img/CAS-ButtonExamples.webp" alt="Button examples" loading="lazy" /><figcaption>Buttons</figcaption></figure>
<figure class="cs-figure"><img src="/assets/img/CAS-Cards.webp" alt="Card examples" loading="lazy" /><figcaption>Cards</figcaption></figure>
<figure class="cs-figure"><img src="/assets/img/CAS-Table-Component.webp" alt="Data table component example" loading="lazy" /><figcaption>Data tables</figcaption></figure>
<figure class="cs-figure"><img src="/assets/img/CAS-DropdownExamples.webp" alt="Dropdown examples" loading="lazy" /><figcaption>Dropdowns</figcaption></figure>
<figure class="cs-figure"><img src="/assets/img/CAS-TextInputs.webp" alt="Text input examples" loading="lazy" /><figcaption>Text inputs</figcaption></figure>
</div><p>All design and component documentation lives in Storybook.</p>
<figure class="cs-figure"><img src="/assets/img/Storybook-GettingStarted.webp" alt="Storybook Getting Started page" loading="lazy" /></figure>
<p><a class="btn" href="https://main--6903b2381f768ce7c6da402a.chromatic.com" target="_blank" rel="noopener">View Storybook</a></p>
</section>

<section id="impact" class="cs-step cs-band">
<p class="cs-kicker">Step 4 &middot; Impact</p>
<h2>The first unified design system gave engineering a foundation for faster, more consistent features.</h2>
<ul class="cs-list">
<li>Established the first unified design system across web and iOS</li>
<li>Reduced design-to-development handoff time with production-ready component specifications</li>
<li>Created a foundation for rapid feature development and a consistent user experience</li>
<li>Documented design tokens and usage guidelines for the engineering team</li>
</ul>
</section>

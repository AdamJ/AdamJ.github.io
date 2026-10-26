---
title: 'Color Picker'
portfolioOrder: 7
card:
  title: "Color Picker"
  summary: "As one of the most up-voted feature requests, the goal was to create an accessible option that combined colors with patterns."
  badges: ["A11y", "Components"]
  group: "Professional"
  featured: false
date: git Last Modified
abbreviation: 'colorpicker'
description: 'Accessible color picker combining WCAG compliance with patterns.'
eleventyNavigation:
  key: CaseStudies
  parent: CaseStudies
  order: 3
layout: case-study.njk
motion: true
eyebrow: 'Case study · Accessibility and components'
headline: 'A color picker is not accessible by nature, so I paired WCAG-compliant colors with patterns and icons.'
deck: 'An accessible color picker for the design system, so color is never the only way to tell labels apart.'
heroImage: /assets/img/colorPalette.webp
heroAlt: 'The color palette for the accessible color picker'
facts:
  - { label: Role, value: 'Designer' }
  - { label: Stack, value: 'Figma, CSS, React library' }
  - { label: Status, value: 'Launched' }
results:
  - { value: '44', label: 'Color combinations meeting WCAG AA' }
  - { value: '18', label: 'Of those also meeting WCAG AAA' }
  - { value: 'Launched', label: 'To production, with follow-up design and testing planned' }
camps:
  - { id: top, label: Trailhead }
  - { id: context, label: Context }
  - { id: decisions, label: Key decisions }
  - { id: final, label: Final design }
  - { id: impact, label: Impact }
---
<section id="context" class="cs-step">
<p class="cs-kicker">Step 1 &middot; Context</p>
<h2>One of the most up-voted feature requests had a built-in problem: color alone cannot carry meaning.</h2>
<p>A color picker is not accessible by nature. The goal of this component was to let users choose colors for labels, and to offer alternatives such as patterns and icons.</p>
<blockquote class="cs-quote"><span class="cs-label">Opportunity</span><p>How might label colors stay distinguishable for everyone, whatever they can see?</p></blockquote>
</section>

<section id="decisions" class="cs-step cs-band">
<p class="cs-kicker">Step 2 &middot; Key decisions</p>
<h2>I verified every color against light and dark backgrounds and started with the most ubiquitous component, labels.</h2>
<p>I chose a base set of colors from the design system palette. Each was checked against a light background (#ffffff), a dark background (#010101), and multiple layers.</p>
<blockquote class="cs-quote"><p>In total, 44 combinations met WCAG AA, with 18 meeting WCAG AAA.</p></blockquote>
<figure class="cs-figure"><img src="/assets/img/colorPalette.webp" alt="The verified color palette" loading="lazy" /></figure>
<p>With the PM and development team, we agreed labels were the best place to start, since they are the most common across the system.</p>
<figure class="cs-figure"><img src="/assets/img/colorPalette01.webp" alt="Where labels are used in the product" loading="lazy" /></figure>
</section>

<section id="final" class="cs-step">
<p class="cs-kicker">Step 3 &middot; Final design</p>
<h2>A prototype environment let us test the new labels in real time without exposing unfinished work to production users.</h2>
<p>To compare the current label scheme with the new component, I worked with the development team on a prototype environment. I tested the interactions and visuals there, and tested the component with users.</p>
<figure class="cs-figure"><img src="/assets/img/colorPalette02.webp" alt="Before and after comparison of labels" loading="lazy" /></figure>
</section>

<section id="impact" class="cs-step cs-band">
<p class="cs-kicker">Step 4 &middot; Impact</p>
<h2>The color picker launched to production, and the findings fed another round of design and testing.</h2>
<p>Measured results are not available for this page yet. What I can say is that the component shipped, and the findings from this round became follow-up work.</p>
</section>

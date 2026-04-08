---
layout: markdown.njk
title: 'Color Picker'
date: git Last Modified
abbreviation: 'colorpicker'
description: 'Accessible color picker combining WCAG compliance with patterns.'
eleventyNavigation:
  key: CaseStudies
  parent: CaseStudies
  order: 3
containers: true
---

:::section

## Project Overview

> A native iOS app, built by a coach, who needed fast and reliable game tracking without surrendering data to a third-party platform — designed for the sideline, built in Swift.

:::card

**ROLE**: Designer

**STACK**: Figma, CSS, React library

**STATUS**: Launched

:::

::::section

## Introduction

A color picker, but nature, is not accessible - the goal of this component design was to provide a solution that not only allowed users to select colors for labels, but also provide alternatives such as patterns and icons.

<div class="card">
  <div class="card-body">
    <img src="{{ '/assets/img/colorPalette.webp' | url }}" alt="Image of the color palette" />
  </div>
</div>

::::

::::section

## Getting Started

To start, a basic set of colors were chosen from the available color palette (as defined in the design system). Each color was verified against a light background (`#ffffff`) and a dark background (`#010101`), as well as against multiple layers.

> In total, forty-four (44) combinations met **WCAG AA** compliance, with eighteen (18) meeting **WCAG AAA** compliance.

<div class="card">
  <div class="card-body">
    <img src="{{ '/assets/img/colorPalette.webp' | url }}" alt="Image of the color palette" />
  </div>
</div>

::::

::::section

## Next Steps

After the colors had been established, I worked with the PM and Dev team to determine the first components to test these with.

> It was determined that **Labels** would be the best place to start, as they were the most ubiquitous across the system.

<div class="card">
  <div class="card-body">
    <img src="{{ '/assets/img/colorPalette01.webp' | url }}" alt="Image showing where labels are used" />
  </div>
</div>

::::

::::section

## Comparisons and Testing

Once the basic levels had been configured, I needed to compare the current label coloring scheme to what the new component provided. This required working with the development team to create a prototype environment that allowed the component to be used in real-time without surfacing the in-progress work to the production users.

<div class="card">
  <div class="card-body">
    <img src="{{ '/assets/img/colorPalette02.webp' | url }}" alt="Image comparing before and after labels" />
  </div>
</div>

::::

:::section

## Findings

Once the prototype was up and running, I was able to test out the interactions, visuals, and test the new component with users.

After reviewing the findings, it was determined that another round of design and testing was needed before we could release the color picker to production.

::::

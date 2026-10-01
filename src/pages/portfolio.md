---
title: 'My Work'
date: git Last Modified
abbreviation: 'portfolio'
description: 'Selected projects from AWS, Red Hat, and high-growth B2B companies'
eleventyNavigation:
  key: Portfolio
  order: 1
templateEngineOverride: njk,md
---

<section>
{% set cardItems = collections.portfolioSequence | cardList(null, true) %}
{% include "work-cards.njk" %}
</section>

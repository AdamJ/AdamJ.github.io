---
title: 'Case Studies'
date: git Last Modified
abbreviation: 'casestudies'
description: 'An expanded list of case studies and prior work'
eleventyNavigation:
  key: Casestudies
  order: 6
templateEngineOverride: njk,md
---

{% set btnClass = "btn-secondary" %}
<section>
<h2>Professional</h2>
{% set cardItems = collections.portfolioSequence | cardList("Professional") %}
{% include "work-cards.njk" %}
</section>

<section>
<h2>Personal</h2>
{% set cardItems = collections.portfolioSequence | cardList("Personal") %}
{% include "work-cards.njk" %}
</section>

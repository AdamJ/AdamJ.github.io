---
title: 'CASim: Making Years of Inconsistent Construction Data Answerable'
portfolioOrder: 1
card:
  title: "CASim: Internal AI Assistant"
  summary: "Designed and architected an internal AI assistant, built on a custom MCP server, that makes years of inconsistent construction data answerable. Currently in UAT and beta testing."
  image: "/assets/img/casim-dashboard.webp"
  badges: ["AI", "MCP", "Enterprise"]
  group: "Professional"
  featured: true
date: git Last Modified
abbreviation: 'casim'
description: 'How I designed CASim, an internal AI assistant for a construction software company, and the MCP-based framework that decides what it can reach.'
eleventyNavigation:
  key: CASim
  parent: Portfolio
  order: 1
layout: case-study.njk
motion: true
eyebrow: 'Case study · AI and agent design'
headline: 'Nobody could answer how a project’s budget compared to what it actually cost, so I designed an assistant that could.'
deck: 'CASim is an internal AI assistant that makes years of inconsistent construction data answerable.'
heroImage: /assets/img/casim-dashboard.webp
heroAlt: 'CASim agents dashboard showing 19 agents across 15 domains'
confidential: true
facts:
  - { label: Role, value: 'Creative lead and architect: design, MCP server, agents, prompts, and tooling' }
  - { label: Timeline, value: '9 months, kickoff to UAT' }
  - { label: Worked with, value: 'Executive team on data defaults, development team on data cleanup, IT leadership on the access model' }
  - { label: Status, value: 'In UAT and beta testing' }
results:
  - { value: Answerable, label: 'Budget against final financials, including work orders, change orders, and supply markup' }
  - { value: Source fixed, label: 'Chose to clean the source data over a permanent terminology file' }
  - { value: UAT, label: 'Now in beta testing, so the adoption story is still being written' }
camps:
  - { id: top, label: Trailhead }
  - { id: context, label: Context }
  - { id: research, label: Research }
  - { id: decisions, label: Key decisions }
  - { id: final, label: Final design }
  - { id: impact, label: Impact }
  - { id: learned, label: What I learned }

---

<section id="context" class="cs-step">
<p class="cs-kicker">Step 1 &middot; Context</p>
<h2>One question was close to impossible to answer: how did a project&rsquo;s budget compare to its final financials?</h2>
<p>Every work order, change order, and supply markup existed in our system. Nothing connected them, so answering took manual assembly across screens, and most people didn&rsquo;t try.</p>
<blockquote class="cs-quote"><span class="cs-label">Opportunity</span><p>How might anyone get a trustworthy answer about a project&rsquo;s financials without knowing where the data lives?</p></blockquote>
</section>
<section id="research" class="cs-step cs-band">
<p class="cs-kicker">Step 2 &middot; Research</p>
<h2>I assumed the hard part would be the AI. It was the data, drifted over 20+ years.</h2>
<div class="cs-cards">
<div class="cs-card"><h3>Names slipped</h3><p>The same supply appeared under different names.</p></div>
<div class="cs-card"><h3>Dimensions varied</h3><p>Sizes were written several ways.</p></div>
<div class="cs-card"><h3>No shared identifier</h3><p>Several identifiers meant one product, with no link.</p></div>
</div>
<blockquote class="cs-quote"><p>An assistant on top of inconsistent data inherits every inconsistency, and it answers confidently regardless.</p></blockquote>
<p>I worked with 6 project managers to learn how they rebuilt financials by hand.</p>
</section>
<section id="decisions" class="cs-step">
<p class="cs-kicker">Step 3 &middot; Key decisions</p>
<h2>I rejected the faster fix, a terminology file, because it would harden the mess into a permanent dependency.</h2>
<div class="cs-decision">
<div>
<h3>Fix the source, not the symptom</h3>
<p>A definitions layer would translate every variant on the fly, but someone owns it forever. Executives set the defaults and developers updated the data instead.</p>
</div>
<figure class="cs-figure"><img src="/assets/img/casim-naming-convention.svg" alt="Three different spellings of one supply map to a single convention" width="640" height="360" loading="lazy" /></figure>
</div>
<div class="cs-decision cs-single">
<div>
<h3>Gate the connectors, not the creativity</h3>
<p>A working server let IT leadership see exactly what the assistant could and couldn&rsquo;t reach.</p>
</div>
</div>
<p>The cleanup drew fair pushback about what might be lost. Early results answered it. I also backtracked more than once to cover gaps the first architecture missed.</p>
<div class="cs-assumption">
<div><span class="cs-label">What I assumed</span><p>A terminology file mapping every variant to one meaning was the faster, lower-risk path.</p></div>
<div><span class="cs-label">What I found</span><p>Every new variant would need a new mapping, and answers would only be as good as the last update.</p></div>
<div><span class="cs-label">What I did instead</span><p>Executives set the defaults and developers corrected the data at the source.</p></div>
</div>
</section>
<section id="final" class="cs-step cs-band">
<p class="cs-kicker">Step 4 &middot; Final design</p>
<h2>One server, three clients: Claude Desktop for daily use, MCP Inspector for testing, and a custom interface for everyone else.</h2>
<figure class="cs-figure"><img src="/assets/img/casim-dashboard.webp" alt="CASim agents dashboard" width="1200" height="782" loading="lazy" /><figcaption>Agents grouped by domain, with search and usage totals.</figcaption></figure>
<figure class="cs-figure"><img src="/assets/img/casim-architecture.svg" alt="Three clients connect to one MCP server, which gates access to four project data sources" width="760" height="420" loading="lazy" /><figcaption>One server behind three clients, so a tool can be checked in isolation before judging how it feels in the interface.</figcaption></figure>
</section>
<section id="impact" class="cs-step">
<p class="cs-kicker">Step 5 &middot; Impact</p>
<h2>The question that was nearly impossible became answerable.</h2>
<ul class="cs-results">
<li><span class="cs-result-value">Answerable</span><span>Budget against final financials, including work orders, change orders, and supply markup.</span></li>
<li><span class="cs-result-value">UAT</span><span>Now in beta testing, so the adoption story is still being written.</span></li>
</ul>
</section>
<section id="learned" class="cs-step cs-band">
<p class="cs-kicker">Step 6 &middot; What I learned</p>
<h2>Research first, expect pushback, and fix the source.</h2>
<div class="cs-cards">
<div class="cs-card"><h3>Research before building</h3><p>Extra time up front would have avoided the backtracking.</p></div>
<div class="cs-card"><h3>Expect the data to push back</h3><p>In a 20+ year system, drift is certain.</p></div>
<div class="cs-card"><h3>Fix the source, not the symptom</h3><p>The harder path made the answers trustworthy.</p></div>
</div>
<p>CASim is in UAT and beta testing. I will update this page as adoption results come in.</p>
</section>

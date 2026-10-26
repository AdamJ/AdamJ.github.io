---
title: 'Weekly AI-Powered Work Summary'
portfolioOrder: 2
card:
  title: "Weekly AI-Powered Work Summary"
  summary: "After archiving my work entries for the week, I found myself running a second, separate tool to generate a weekly summary. Now, I start the day, capture tasks, review, and archive, then summarize using AI."
  image: "/assets/img/timetracker-loading-state.webp"
  imageAlt: "Weekly report generation loading state"
  badges: ["AI", "Productivity"]
  group: "Professional"
  featured: true
date: git Last Modified
abbreviation: 'worksummary'
description: 'Start the day, capture tasks, review, and archive, then summarize using AI'
eleventyNavigation:
  key: Development
  parent: Development
  order: 2
layout: case-study.njk
motion: true
eyebrow: 'Case study · AI product design'
headline: 'I skipped my weekly summary because the tooling made it feel like a project, so I built AI summaries into the tool that already knows my week.'
deck: 'A Weekly Report feature for Timetraked, my time tracking PWA, plus a separate generator that turns a summary into a full report.'
heroImage: /assets/img/timetracker-weekly-report.webp
heroAlt: 'Weekly Report screen showing the time period to summarize and tone selection'
facts:
  - { label: Role, value: 'Lead product designer and product manager' }
  - { label: Type, value: 'Feature extension, personal productivity tool' }
  - { label: Stack, value: 'React, TypeScript, Tailwind CSS, Google Gemini API (Timetraked); OpenAI GPT 5.5, Docker (Weekly Report Generator)' }
  - { label: Status, value: 'Shipped and in daily use. The Weekly Report Generator runs in Docker and is currently private, with plans to make it public.' }
results:
  - { value: 'Under 1 min', label: 'To produce a weekly summary, available wherever Timetraked is' }
  - { value: '30 min → 1', label: 'Minutes per full weekly report, from about 30 by hand' }
  - { value: 'Daily', label: 'Timetraked has been in daily use since early 2025' }
camps:
  - { id: top, label: Trailhead }
  - { id: context, label: Context }
  - { id: decisions, label: Key decisions }
  - { id: final, label: Final design }
  - { id: impact, label: Impact }
---
<section id="context" class="cs-step">
<p class="cs-kicker">Step 1 &middot; Context</p>
<h2>Summarizing my week took a second tool, a PDF export, and manual cleanup, so I skipped it.</h2>
<p>Timetraked (formerly TimeTracker Pro) is a Progressive Web App I designed, built, and use every day. It installs like a native app, stores data locally by default, and needs no account. Through the day I create tasks, assign them to projects and categories, and archive each completed day.</p>
<p>I built it because every time tracker I tried was either too complex for personal use or too simple to be useful. It has grown into a small, complete product with export formats, project management, offline support, and invoicing.</p>
<figure class="cs-figure"><img src="/assets/img/timetracker-start.webp" alt="Start screen for Timetraked" loading="lazy" /></figure>
<p>After archiving each week, I ran a second tool to generate a summary. It only accepted PDFs exported from the time tracker, only ran on a local development server, and produced output that always needed manual cleanup.</p>
<div class="cs-cards">
<div class="cs-card"><h3>No real integration</h3><p>The generator only accepted PDFs from the time tracker. The export was the only bridge between them.</p></div>
<div class="cs-card"><h3>Availability</h3><p>It ran on a local Vite server, so it was only reachable from my machine in a single context.</p></div>
<div class="cs-card"><h3>Output needing edits</h3><p>It had no idea who I was writing for, so every summary came out generic and sounded the same week to week.</p></div>
</div>
<blockquote class="cs-quote"><span class="cs-label">Opportunity</span><p>The right tool for summarizing my work week is the tool that already knows my work week.</p></blockquote>
</section>

<section id="decisions" class="cs-step cs-band">
<p class="cs-kicker">Step 2 &middot; Key decisions</p>
<h2>I extended the app instead of building a better standalone tool, and kept the full report generator separate on purpose.</h2>
<h3>Extend, not replace</h3>
<p>A standalone tool would still need an export step, a file upload, or an API connection to reach my time data. It would have to work with any input, which means losing the context that makes a summary useful: what categories mean, which projects are billable, and what a typical week looks like for me.</p>
<p>Extending Timetraked meant the feature reads from the same local data store as the rest of the app, with no synchronization problem and no format negotiation. It also let the feature be opinionated. It excludes break and lunch categories, understands the project and client structure, and groups a week of task descriptions into a narrative instead of a list.</p>
<h3>Two tools, one deliberate boundary</h3>
<p>The short weekly summary and the full weekly report do different jobs. The summary lives inside Timetraked because it reads daily entries from the same database. The Weekly Report Generator is separate: you paste in the summary and the AI writes a full report from a template built into the system.</p>
<p>The hardest question was whether to fold the generator in too. I kept it separate so it works with any summary, not only ones tied to one tool&rsquo;s data format, and so its use cases can grow.</p>
<div class="cs-cards">
<div class="cs-card"><h3>The cost</h3><p>Another repository, another set of dependencies, and a copy-and-paste step between the tools. I accepted all three to keep the generator reusable.</p></div>
<div class="cs-card"><h3>What is next</h3><p>The template is built in for now. Making it easy to customize for different outputs is the next item, and the generator is private for now, with plans to make it public.</p></div>
</div>
</section>

<section id="final" class="cs-step">
<p class="cs-kicker">Step 3 &middot; Final design</p>
<h2>The AI is a visible step in a workflow, not a magic trick: configure on the left, review and edit on the right.</h2>
<h3>Two-panel layout</h3>
<p>At wider viewports, controls sit on the left and output on the right. The interaction has two modes, configuring the request and reviewing the result, and one scrolling column would blur them. The left column handles week navigation, the data breakdown, and tone selection. The right column only reacts, showing one of four states: idle, generating, error, or a draft ready to edit and copy.</p>
<div class="cs-figures ">
<figure class="cs-figure"><img src="/assets/img/timetracker-weekly-report.webp" alt="Report generation preview" loading="lazy" /><figcaption>Select what to include in the report and the desired tone</figcaption></figure>
<figure class="cs-figure"><img src="/assets/img/timetracker-generated-summary.webp" alt="The generated report summary" loading="lazy" /><figcaption>The report summary, ready to copy into any document</figcaption></figure>
</div>
<h3>Generation as a legible transition</h3>
<p>While generating, the right panel names the week being summarized and shows staggered skeleton lines. The idle state uses a dashed container with a short explanation, so the layout never reads as broken on first load. Errors are structured and recoverable: a header naming the failure, a plain-language description, and an inline &ldquo;Try again&rdquo;.</p>
<figure class="cs-figure"><img src="/assets/img/timetracker-loading-state.webp" alt="Report generation loading state" loading="lazy" /><figcaption>Feedback showing the generation of the report</figcaption></figure>
<h3>Tone as a product decision</h3>
<p>The tone selector reflects a real choice I make every week about who I am writing for. Each tone maps to different system prompt instructions and produces meaningfully different output. Changing the tone resets the existing summary, so you never mistake a standup draft for a client-ready one.</p>
<div class="cs-figures ">
<figure class="cs-figure"><img src="/assets/img/timetracker-tone-standup.webp" alt="Standup summary" loading="lazy" /><figcaption>Standup: terse, first-person, focused on what moved and what is in progress</figcaption></figure>
<figure class="cs-figure"><img src="/assets/img/timetracker-tone-client.webp" alt="Client summary" loading="lazy" /><figcaption>Client: outcome-oriented, professional, suitable for sharing progress</figcaption></figure>
<figure class="cs-figure"><img src="/assets/img/timetracker-tone-retro.webp" alt="Retrospective summary" loading="lazy" /><figcaption>Retrospective: reflective, noting themes and shifts across the week</figcaption></figure>
</div>
<h3>Editable output by default</h3>
<p>The summary appears in an editable text area, which frames the AI correctly: it drafts, the human approves. A copy button and a short &ldquo;changes are not saved&rdquo; note complete the model, and a regenerate button sits beside copy for the two things people want to do with a draft: try again or take it.</p>
<h3>Prompt architecture</h3>
<p>The system instruction sets the persona, length (3 to 5 sentences), voice (first-person, no filler), and the instructions for the selected tone. The user message carries the serialized week: task titles, descriptions, project names, and durations. Before sending, serialization strips timestamps, IDs, and non-work categories, so the model sees only what a person would write into a prompt by hand. Sending structured noise returns structured noise.</p>
<p>The prompt is designed to evolve as I notice what I edit or regenerate, and the tone categories can expand, for example to a sprint summary or an executive update.</p>
</section>

<section id="impact" class="cs-step cs-band">
<p class="cs-kicker">Step 4 &middot; Impact</p>
<h2>A ritual I used to skip now takes under a minute.</h2>
<p>I use the standup tone on Monday morning to orient the week and the retrospective tone on Friday to close it out. Before this feature, I skipped that ritual more often than not because the tooling made it feel like work. The summary is available wherever Timetraked is, and the output usually needs one or two edits instead of a rewrite.</p>
<p>The Weekly Report Generator extends the routine. I use it every week, and it produces a full report in under a minute that used to take about 30 minutes to write by hand.</p>
<p>The project shows a specific mix of skills: finding friction in a real workflow, deciding where a feature belongs architecturally, designing the interaction states that make AI output feel trustworthy, and shipping something that has been in daily use since launch.</p>
</section>

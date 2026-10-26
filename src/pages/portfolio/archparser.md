---
title: 'ArchParser: Architectural Drawing Analysis Platform'
portfolioOrder: 3
card:
  title: "ArchParser"
  summary: "Architectural drawing analysis platform for OCR-based architectural drawing management."
  image: "/assets/img/archparser_dashboard1.webp"
  imageAlt: "ArchParser dashboard"
  badges: ["Development", "Claude Code"]
  group: "Professional"
  featured: true
date: git Last Modified
abbreviation: 'archparser'
description: 'Full-stack TypeScript application for OCR-based architectural drawing analysis and management.'
eleventyNavigation:
  key: Development
  parent: Development
  order: 1

layout: case-study.njk
motion: true
eyebrow: 'Case study · OCR and document AI'
headline: 'Project managers hand-copied metadata from 500+ page drawing sets, so I built a tool that reads it for them.'
deck: 'ArchParser extracts drawing numbers, titles, dates, and revisions from architectural PDFs, even when every firm lays out its title block differently.'
heroImage: /assets/img/archparser_dashboard1.webp
heroAlt: 'ArchParser dashboard showing processed drawings across several jobs'
confidential: true
facts:
  - { label: Role, value: 'Product designer and full-stack developer' }
  - { label: Timeline, value: '6 to 8 months, kickoff to demo-ready' }
  - { label: Worked with, value: 'Project planners and managers at Component Assembly Systems, with Claude Code as a development partner' }
  - { label: Status, value: 'Demo-ready, built to test and deploy' }
results:
  - { value: '200+', label: 'Drawings processed in demonstrations' }
  - { value: '4 to 5 hrs', label: 'Estimated savings per drawing set, an estimate from users and not a measured result' }
  - { value: Ready, label: 'To test and deploy on a single source of information' }
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
<h2>Entering drawing numbers and revision dates by hand was slow and error-prone on 500+ page sets, and no tool handled custom title blocks.</h2>
<blockquote class="cs-quote"><span class="cs-label">Opportunity</span><p>How might project managers get drawing metadata without typing it, however each firm lays out its title block?</p></blockquote>
</section>
<section id="research" class="cs-step cs-band">
<p class="cs-kicker">Step 2 &middot; Research</p>
<h2>I interviewed planners and managers before designing anything. Two findings shaped the product.</h2>
<div class="cs-cards">
<div class="cs-card"><h3>Layouts never stand still</h3><p>Title blocks vary by firm, file type, and project size, and projects can&rsquo;t wait on a developer for each one.</p></div>
<div class="cs-card"><h3>Trust is a dial</h3><p>At confidence around 75 out of 100, users generally proceeded, and still reviewed a random sample.</p></div>
</div>
<blockquote class="cs-quote"><p>Users of the manual process estimated about 4 to 5 hours saved per drawing set.</p></blockquote>
<p>I interviewed 2 project managers and 3 planners about how they pull drawing metadata today.</p>
</section>
<section id="decisions" class="cs-step">
<p class="cs-kicker">Step 3 &middot; Key decisions</p>
<h2>Four decisions shaped how people use ArchParser, and one idea held throughout: get users into their jobs quickly.</h2>
<div class="cs-decision">
<div><h3>Users build templates, not developers</h3><p>A visual creator replaced developer-configured templates, so projects never wait on a developer.</p></div>
<figure class="cs-figure"><img src="/assets/img/archparser_template-creator-loaded.webp" alt="Template creator" width="1200" height="753" loading="lazy" /></figure>
</div>
<div class="cs-decision">
<div><h3>Confidence, not blind trust</h3><p>Each extraction shows a score out of 100 and can be fixed inline.</p></div>
<figure class="cs-figure"><img src="/assets/img/archparser_drawing-details.webp" alt="Drawing details with inline editing" width="1200" height="753" loading="lazy" /></figure>
</div>
<div class="cs-decision">
<div><h3>Consistency over novelty</h3><p>I declined AI-suggested layouts that broke patterns users already knew.</p></div>
<figure class="cs-figure"><img src="/assets/img/archparser_dashboard1.webp" alt="ArchParser dashboard" width="1200" height="753" loading="lazy" /></figure>
</div>
<div class="cs-decision cs-single">
<div><h3>AI search is optional</h3><p>It supports Claude, OpenAI, or a local model, and the core product works fully without it.</p></div>
</div>
<div class="cs-figures">
<figure class="cs-figure"><img src="/assets/img/archparser_desktop_0.webp" alt="Early ArchParser desktop design" width="1200" height="753" loading="lazy" /><figcaption>Early</figcaption></figure>
<figure class="cs-figure"><img src="/assets/img/archparser_desktop_1.webp" alt="Mid-progress ArchParser desktop design" width="1200" height="753" loading="lazy" /><figcaption>Mid</figcaption></figure>
<figure class="cs-figure"><img src="/assets/img/archparser_desktop_2.webp" alt="Later ArchParser desktop design" width="1200" height="753" loading="lazy" /><figcaption>Later</figcaption></figure>
</div>
<h3>Real-world tests forced two fixes</h3>
<p>500+ page PDFs ran out of memory, so I moved to adaptive batches. Records lost their links after restarts, so I centralized paths and migrated 373 records.</p>
<div class="cs-assumption">
<div><span class="cs-label">What I assumed</span><p>Claude Code&rsquo;s suggested button placements and layouts might improve the interface.</p></div>
<div><span class="cs-label">What I found</span><p>They differed from patterns already in the system, and changing familiar patterns would hurt people who knew it.</p></div>
<div><span class="cs-label">What I did instead</span><p>I kept the existing patterns. Claude Code sped up implementation, and judgment stayed with me.</p></div>
</div>
</section>
<section id="final" class="cs-step cs-band">
<p class="cs-kicker">Step 4 &middot; Final design</p>
<h2>Users draw regions on a sample PDF, label them, and export a template. The tool works offline.</h2>
<figure class="cs-figure"><img src="/assets/img/archparser_template-creator-loaded.webp" alt="ArchParser template creator with a PDF loaded" width="1200" height="753" loading="lazy" /><figcaption>The template creator with a sample PDF loaded.</figcaption></figure>
<div class="cs-figures">
<figure class="cs-figure"><img src="/assets/img/archparser_drawing-set-details.webp" alt="Drawing set details page" width="1200" height="753" loading="lazy" /><figcaption>Set details</figcaption></figure>
<figure class="cs-figure"><img src="/assets/img/archparser_drawing-list.webp" alt="Drawing list page" width="1200" height="753" loading="lazy" /><figcaption>Drawing list</figcaption></figure>
<figure class="cs-figure"><img src="/assets/img/archparser_drawing-details.webp" alt="Drawing details page with inline editing" width="1200" height="753" loading="lazy" /><figcaption>Drawing details</figcaption></figure>
</div>
</section>
<section id="impact" class="cs-step">
<p class="cs-kicker">Step 5 &middot; Impact</p>
<h2>Demo-ready, and built to cut half a day from each drawing set.</h2>
<ul class="cs-results">
<li><span class="cs-result-value">200+</span><span>Drawings processed in demonstrations.</span></li>
<li><span class="cs-result-value">4 to 5 hrs</span><span>Estimated savings per drawing set. This is an estimate from users, not a measured result.</span></li>
<li><span class="cs-result-value">Ready</span><span>To test and deploy on a single source of information.</span></li>
</ul>
</section>
<section id="learned" class="cs-step cs-band">
<p class="cs-kicker">Step 6 &middot; What I learned</p>
<h2>Test with real data, empower users, and keep judgment human.</h2>
<div class="cs-cards">
<div class="cs-card"><h3>Test with realistic data from the start</h3><p>Small PDFs worked. Real 500+ page sets failed.</p></div>
<div class="cs-card"><h3>Empowering users beat clever engineering</h3><p>The template creator did more for adoption than any optimization.</p></div>
<div class="cs-card"><h3>An AI partner speeds implementation, not judgment</h3><p>Decisions about what users already know stayed with me.</p></div>
</div>
</section>

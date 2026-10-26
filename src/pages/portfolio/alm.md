---
title: 'Application Lifecycle Management'
portfolioOrder: 6
card:
  title: "Application Lifecycle Management"
  summary: "Creating seamless IDE integration and workflow tools for developers managing complex environments."
  badges: ["Developer Tools", "Enterprise"]
  group: "Professional"
  featured: false
date: git Last Modified
abbreviation: 'alm'
description: 'Creating seamless IDE integration and workflow tools for developers managing complex environments.'
eleventyNavigation:
  key: Designs
  parent: Designs
  order: 2
layout: case-study.njk
motion: true
eyebrow: 'Case study · Developer tools'
headline: 'Developers switched tools 20 or more times a day just to manage work items, so I designed tracking that lives inside the IDE.'
deck: 'Application Lifecycle Management (ALM) brought unified work item tracking into the OpenShift.io IDE.'
heroImage: /assets/img/ALM_planner.webp
heroAlt: 'The ALM planner design'
facts:
  - { label: Role, value: 'Senior interaction designer, Red Hat' }
  - { label: Timeline, value: '2017 to 2019' }
  - { label: Worked with, value: '2 product managers, 3 engineers, 2 designers, and the PatternFly design system team' }
  - { label: Status, value: 'Launched as a core feature of OpenShift.io in 2018' }
results:
  - { value: '40%', label: 'Reduction in average work item management time through IDE integration' }
  - { value: '2018', label: 'Launched as a core feature of OpenShift.io' }
  - { value: '6 months', label: 'To adoption by multiple development teams' }
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
<h2>OpenShift developers managed work across 3 or more disconnected tools, and every switch broke their focus.</h2>
<p>Work items lived in GitHub issues, Jira, and internal tracking systems. Developers moved between their IDE, browser tabs, and project management tools, which slowed development and left project managers with visibility gaps.</p>
<ul class="cs-list">
<li>Leave the IDE to check work item status</li>
<li>Manually link code commits to work items across several systems</li>
<li>Update work items in multiple places to keep teams in sync</li>
<li>Context-switch an average of 20 or more times a day for task management</li>
</ul>
<blockquote class="cs-quote"><span class="cs-label">Opportunity</span><p>How might developers create, update, and track work without leaving their code editor?</p></blockquote>
</section>

<section id="research" class="cs-step cs-band">
<p class="cs-kicker">Step 2 &middot; Research</p>
<h2>Three tiers of users, and four things to settle before any visual design.</h2>
<p>With stakeholders and project management, we set the target users in tiers. Before starting, we agreed to cover a list of target users, a user flow, wireframes, and prototypes for user testing and feasibility.</p>
<div class="cs-cards">
<div class="cs-card"><h3>General users</h3><p>Add and interact with issues, update project assets, and work in the tool daily. A mix of designers and developers.</p></div>
<div class="cs-card"><h3>Project managers</h3><p>Organize work and set deadlines and release dates.</p></div>
<div class="cs-card"><h3>Administrators</h3><p>Control integrations, add-ons, and access.</p></div>
</div>
<figure class="cs-figure"><img src="/assets/img/ALM_workflow.webp" alt="The ALM user flow" loading="lazy" /><figcaption>User flows</figcaption></figure>
</section>

<section id="decisions" class="cs-step">
<p class="cs-kicker">Step 3 &middot; Key decisions</p>
<h2>Moving from a work item to code had to take one click, feel unobtrusive, and never replace the primary button.</h2>
<p>For each section of ALM, workflows and wireframes mapped the possible paths before high fidelity mockups. For the path from work items to development, the goals were:</p>
<ul class="cs-list">
<li>Tell users that direct access to developing the work item is one click away</li>
<li>Keep the implementation unobtrusive and imply navigation</li>
<li>Place it where it will not be clicked by accident, with room for line lengths and metadata, and imply moving forward</li>
<li>Order by recommendation and require users to fill in one area before moving on</li>
<li>As a button, give it a prominent place without taking over from a primary button</li>
</ul>
<div class="cs-figures ">
<figure class="cs-figure"><img src="/assets/img/ALM_step1.webp" alt="Step 1 of the ALM wireframes" loading="lazy" /><figcaption>Step 1</figcaption></figure>
<figure class="cs-figure"><img src="/assets/img/ALM_step2.webp" alt="Step 2 of the ALM wireframes" loading="lazy" /><figcaption>Step 2</figcaption></figure>
<figure class="cs-figure"><img src="/assets/img/ALM_step3.webp" alt="Step 3 of the ALM wireframes" loading="lazy" /><figcaption>Step 3</figcaption></figure>
</div>
<p>I annotated the wireframe with call-outs so anyone could follow my thinking without talking to me. That worked especially well with colleagues in other time zones.</p>
<figure class="cs-figure"><img src="/assets/img/ALM_wireframe.webp" alt="Wireframe of the work item to coding experience" loading="lazy" /></figure>
<p>The flows and wireframes raised open questions:</p>
<ul class="cs-list">
<li>How do we keep linking between work items accurate?</li>
<li>If a work item has a file name and line number, is the commit SHA also used to identify the connection?</li>
<li>Can a user type the URL into a browser and reach the work item, or is it generated each time?</li>
</ul>
</section>

<section id="final" class="cs-step cs-band">
<p class="cs-kicker">Step 4 &middot; Final design</p>
<h2>A unified tracker inside the IDE, built with the in-house component library.</h2>
<p>I created a visual design with the in-house component library after the flows and wireframes were complete. The key ideas were:</p>
<ul class="cs-list">
<li>Seamless IDE integration with inline work item creation and updates</li>
<li>Automatic linking between code commits and work items</li>
<li>Real-time synchronization across team members</li>
<li>Flexible categorization supporting multiple team workflows</li>
</ul>
<figure class="cs-figure"><img src="/assets/img/ALM_planner.webp" alt="The ALM planner visual design" loading="lazy" /></figure>
</section>

<section id="impact" class="cs-step">
<p class="cs-kicker">Step 5 &middot; Impact</p>
<h2>Launched in 2018, adopted by several teams in six months, and reused across other Red Hat developer tools.</h2>
<div class="cs-cards">
<div class="cs-card"><h3>Adoption and launch</h3><p>Launched as a core feature of OpenShift.io in 2018, integrated with GitHub, and extended to support Agile, Kanban, and custom workflows.</p></div>
<div class="cs-card"><h3>User feedback</h3><p>Developers praised the IDE integration for removing context-switching. Reported frustration moved from &ldquo;major pain point&rdquo; to &ldquo;barely noticeable&rdquo;.</p></div>
<div class="cs-card"><h3>Business impact</h3><p>Better visibility into progress and status, less time on administrative task management, and patterns and PatternFly components adopted across other Red Hat developer tools.</p></div>
</div>
</section>

<section id="learned" class="cs-step cs-band">
<p class="cs-kicker">Step 6 &middot; What I learned</p>
<h2>Understand the workflow first, make the tool invisible, and treat developer experience as user experience.</h2>
<div class="cs-cards">
<div class="cs-card"><h3>Understand the workflow before designing the tool</h3><p>Weeks observing OpenShift developers surfaced friction I would not have guessed, like the cost of switching tools and protecting flow state.</p></div>
<div class="cs-card"><h3>The best developer tools are invisible</h3><p>ALM worked because it met developers in their IDE instead of asking them to go elsewhere.</p></div>
<div class="cs-card"><h3>Developer experience is user experience</h3><p>Rigorous research and design made a tool developers enjoyed using.</p></div>
<div class="cs-card"><h3>PatternFly had gaps</h3><p>Working on ALM exposed gaps for developer tool use cases and led to new components and patterns for the whole ecosystem.</p></div>
</div>
</section>

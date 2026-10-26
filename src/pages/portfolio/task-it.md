---
title: 'Task Management System'
portfolioOrder: 4
card:
  title: "Task Management System"
  summary: "Lead designer for Task-it, Amazon's internal task management platform. Consolidated 3-4 disparate tracking tools into one unified system, reaching <strong>500 daily active users</strong> across AWS <strong>within 18 months</strong> of launch."
  image: "/assets/img/task-it_product.webp"
  imageAlt: "Task It project illustration"
  badges: ["AWS", "500+ Users", "Enterprise"]
  group: "Professional"
  featured: true
date: git Last Modified
abbreviation: 'task'
description: 'One enterprise task management system to rule them all.'
eleventyNavigation:
  key: Designs
  parent: Designs
  order: 1
layout: case-study.njk
motion: true
eyebrow: 'Case study · Enterprise product design'
headline: 'AWS teams tracked work in 3 or 4 different tools, so I designed one that 500 people chose to use every day.'
deck: 'Task-it is an internal task management platform that consolidated fragmented tracking tools into one system with role-agnostic patterns.'
heroImage: /assets/img/task-it_product.webp
heroAlt: 'Task-it product illustration'
confidential: true
facts:
  - { label: Role, value: 'Senior UX designer and lead designer, Amazon Web Services' }
  - { label: Timeline, value: '2021 to 2023' }
  - { label: Worked with, value: '3 product managers, 8 engineers, and a UX researcher' }
  - { label: Status, value: 'Launched, with patterns adopted in other AWS internal tools' }
results:
  - { value: '500', label: 'Daily active users across 15+ AWS teams within 18 months of launch' }
  - { value: '3 to 4 → 1', label: 'Separate tracking systems consolidated into one platform' }
  - { value: Organic, label: 'Growth came from word of mouth, not mandates from leadership' }
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
<h2>Work lived in Jira, internal systems, and spreadsheets, and nobody could see across teams.</h2>
<p>AWS teams used 3 or 4 different task tracking tools. That meant fragmented workflows, poor cross-team visibility, and real time lost to context-switching. Product managers struggled to get a unified view of work across teams, and individual contributors were frustrated by updating multiple systems.</p>
<blockquote class="cs-quote"><span class="cs-label">Opportunity</span><p>How might one system serve product managers tracking roadmaps, engineers managing technical debt, and support teams triaging customer issues?</p></blockquote>
</section>
<section id="research" class="cs-step cs-band">
<p class="cs-kicker">Step 2 &middot; Research</p>
<h2>Users would not accept a more complicated process, so research came before any wireframe.</h2>
<div class="cs-cards">
<div class="cs-card"><h3>User interviews</h3><p>Their role, the products they use to manage work, and why some avoided the existing internal product.</p></div>
<div class="cs-card"><h3>Competitive analysis</h3><p>What else teams used internally, and what it offered that the internal system did not.</p></div>
<div class="cs-card"><h3>Hands-on testing</h3><p>I worked inside the system we were replacing to find its issues, then compared them against the interviews.</p></div>
<div class="cs-card"><h3>Observation</h3><p>Where users always go, and which tasks they perform every day.</p></div>
</div>
<blockquote class="cs-quote"><p>Anything more complicated than what they had would be a deal-breaker, no matter the directives from management.</p></blockquote>
<h3>Who it was for</h3>
<p>The beta targeted individual contributors, with a mix of high-interaction and low-interaction users in three groups. After discussions with product management, we split them into two tiers.</p>
<div class="cs-assumption">
<div><span class="cs-label">Contributors</span><p>Actively added items to a team&rsquo;s task queue. Tier 1: they used existing tools many times a day and could drive adoption.</p></div>
<div><span class="cs-label">Owners</span><p>Responsible for delivery and success of daily and long-term goals. Not ICs, but they shaped which tasks teams took on.</p></div>
<div><span class="cs-label">Viewers</span><p>Stayed outside day-to-day operations but influenced the work. Tier 2: weekly check-ins, and a likely blocker to adoption if things got harder to find.</p></div>
</div>
</section>
<section id="decisions" class="cs-step">
<p class="cs-kicker">Step 3 &middot; Key decisions</p>
<h2>Every step in every flow had two goals: follow what users expect, and make the process simpler.</h2>
<p>Users expected to create work items, view them, and organize their work in one system. Anything beyond that had to earn its place. I used user flows and states to find where success and failure paths could break the experience before any mockup existed.</p>
<div class="cs-figures">
<figure class="cs-figure"><img src="/assets/img/task-it_user-flow.webp" alt="The Task-it user flow" loading="lazy" /><figcaption>User flows</figcaption></figure>
<figure class="cs-figure"><img src="/assets/img/task-it_user-states.webp" alt="The states in the Task-it user flow" loading="lazy" /><figcaption>User states</figcaption></figure>
</div>
<h3>Let users set the priority</h3>
<p>More attributes were planned, so the Task Details page had to adapt. I ran a card-sorting survey that included existing and future attributes, with one prompt: which attributes are required for you to get your work done most efficiently? Users set the order, not the team.</p>
<figure class="cs-figure"><img src="/assets/img/task-it_user-survey.webp" alt="The card-sorting survey used for attribute priority" loading="lazy" /><figcaption>The card-sorting survey.</figcaption></figure>
</section>
<section id="final" class="cs-step cs-band">
<p class="cs-kicker">Step 4 &middot; Final design</p>
<h2>Wireframes, then mockups, then three revisions driven by what users ranked.</h2>
<p>I start wireframes from existing components, add redacted-script placeholder text and basic headings, and review with product management, development, and fellow designers. Mockups give the full look and feel for user testing and final development review.</p>
<div class="cs-figures">
<figure class="cs-figure"><img src="/assets/img/task-it_task-details_wireframe.webp" alt="The task details wireframe" loading="lazy" /><figcaption>Wireframe</figcaption></figure>
<figure class="cs-figure"><img src="/assets/img/task-it_task-details_mockup1.webp" alt="The first task details mockup" loading="lazy" /><figcaption>Mockup</figcaption></figure>
</div>
<p>After the card sort, I revised the page to match the updated attribute priorities.</p>
<div class="cs-figures">
<figure class="cs-figure"><img src="/assets/img/task-it_task-details_mockup2.webp" alt="Task details revision 1" loading="lazy" /><figcaption>Revision 1</figcaption></figure>
<figure class="cs-figure"><img src="/assets/img/task-it_task-details_mockup3.webp" alt="Task details revision 2" loading="lazy" /><figcaption>Revision 2</figcaption></figure>
<figure class="cs-figure"><img src="/assets/img/task-it_task-details_mockup4.webp" alt="Task details revision 3" loading="lazy" /><figcaption>Revision 3</figcaption></figure>
</div>
</section>
<section id="impact" class="cs-step">
<p class="cs-kicker">Step 5 &middot; Impact</p>
<h2>From 50 pilot users to 500 daily active users in 18 months, mostly by word of mouth.</h2>
<ul class="cs-results">
<li><span class="cs-result-value">500</span><span>Daily active users across 15+ AWS teams within 18 months of launch.</span></li>
<li><span class="cs-result-value">3 to 4 → 1</span><span>Legacy tools consolidated, reducing tool sprawl and maintenance overhead.</span></li>
<li><span class="cs-result-value">Adopted</span><span>Design patterns now used in other AWS internal applications.</span></li>
</ul>
<div class="cs-cards">
<div class="cs-card"><h3>Adoption</h3><p>Pilot teams in Q2 2022, general availability by Q4 2022, and growth across product, engineering, and support organizations.</p></div>
<div class="cs-card"><h3>User feedback</h3><p>Post-launch usability testing showed high satisfaction. &ldquo;Finally, one place to see all my work.&rdquo; &ldquo;Task-it adapts to how I work, not the other way around.&rdquo;</p></div>
<div class="cs-card"><h3>Business impact</h3><p>Better visibility into status, blockers, and dependencies, and a shorter onboarding path with one tool to learn instead of several.</p></div>
</div>
</section>
<section id="learned" class="cs-step cs-band">
<p class="cs-kicker">Step 6 &middot; What I learned</p>
<h2>Give internal tools the same rigor as customer-facing products, stay flexible, and keep researching.</h2>
<div class="cs-cards">
<div class="cs-card"><h3>Internal tools deserve design rigor</h3><p>Research, prototyping, and testing built a tool people wanted to use, with adoption driven by users and not by mandate.</p></div>
<div class="cs-card"><h3>Flexibility beats rigid workflows</h3><p>Role-agnostic patterns that adapted to different team structures were the key to broad adoption.</p></div>
<div class="cs-card"><h3>Continuous research is essential</h3><p>Regular usability tests caught issues early and kept us building what users needed, not what we assumed.</p></div>
</div>
</section>

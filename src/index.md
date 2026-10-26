---
layout: base.njk
motion: true
camps:
  - { id: top, label: Trailhead }
  - { id: work, label: Work }
  - { id: principles, label: How I work }
  - { id: proof, label: Proof }
  - { id: about, label: About }
  - { id: summit, label: Summit }
---

<section id="top" class="hero hero-trail" aria-labelledby="hero-heading">
  {% include 'hero-scene.njk' %}
  <div class="hero-content">
    <p class="hero-kicker">Adam Jolicoeur &middot; Product designer</p>
    <h1 id="hero-heading" class="hero-statement">I design how people review, trust, and correct what AI does.</h1>
    <p>Product designer with 15 years in enterprise software at AWS and Red Hat, now designing AI assistants for enterprise teams.</p>
  </div>
  <a class="hero-cue" href="#work">
    <span>Start the hike</span>
    <i class="fa-solid fa-chevron-down" aria-hidden="true"></i>
  </a>
  <button type="button" class="hero-pause" aria-label="Pause scenery animation" aria-pressed="false" hidden>
    <svg class="hero-pause-icon" viewBox="0 0 16 16" width="16" height="16" aria-hidden="true" focusable="false"><path d="M4 2h3v12H4zM9 2h3v12H9z" fill="currentColor" /></svg>
    <svg class="hero-play-icon" viewBox="0 0 16 16" width="16" height="16" aria-hidden="true" focusable="false"><path d="M4 2l10 6-10 6z" fill="currentColor" /></svg>
  </button>
</section>

<section id="work" class="camp" aria-labelledby="work-heading">
  <p class="camp-kicker">Camp 1 &middot; Selected work</p>
  <h2 id="work-heading" class="text-h2 no-underline">Three projects, from AI to enterprise scale</h2>
  <div class="stack">
    <article class="stack-card" style="--i: 0" data-reveal>
      <img src="{{ '/assets/img/casim-dashboard.webp' | url }}" alt="CASim agents dashboard" width="1200" height="800" loading="lazy" />
      <div class="stack-body">
        <p class="camp-label">AI and agent design</p>
        <h3><a href="{{ '/portfolio/casim' | url }}">CASim: making years of inconsistent construction data answerable</a></h3>
        <p>Designed an AI assistant that answers project questions from years of messy construction records.</p>
        <ul class="chips"><li>Role: creative lead and architect</li><li>Outcome: users ask, the system finds</li></ul>
      </div>
    </article>
    <article class="stack-card" style="--i: 1" data-reveal>
      <img src="{{ '/assets/img/task-it_product.webp' | url }}" alt="Task-it task management product" width="1200" height="800" loading="lazy" />
      <div class="stack-body">
        <p class="camp-label">Enterprise scale</p>
        <h3><a href="{{ '/portfolio/task-it' | url }}">Task-it: one system instead of three, at 500 daily users</a></h3>
        <p>Unified three internal systems into a single workflow.</p>
        <ul class="chips"><li>Role: lead designer, AWS</li><li>Outcome: 500 daily active users</li></ul>
      </div>
    </article>
    <article class="stack-card" style="--i: 2" data-reveal>
      <img src="{{ '/assets/img/archparser_desktop_2.webp' | url }}" alt="ArchParser drawing analysis and review" width="1200" height="800" loading="lazy" />
      <div class="stack-body">
        <p class="camp-label">OCR and document AI</p>
        <h3><a href="{{ '/portfolio/archparser' | url }}">ArchParser: one source of truth for plan data, built and ready to deploy</a></h3>
        <p>Turned scanned plans into searchable, manageable data, designed and built end to end.</p>
        <ul class="chips"><li>Role: product designer and full-stack developer</li><li>Status: ready to test and deploy</li></ul>
      </div>
    </article>
  </div>
  <div class="more-work" aria-labelledby="more-work-heading">
    <p id="more-work-heading" class="camp-kicker">More work</p>
    <ul class="more-grid" data-reveal-group>
      <li><a class="more-tile" href="{{ '/portfolio/component-library' | url }}"><span class="camp-label">Design systems</span><strong>Component library for construction software</strong></a></li>
      <li><a class="more-tile" href="{{ '/portfolio/alm' | url }}"><span class="camp-label">Enterprise</span><strong>Application lifecycle management at Red Hat</strong></a></li>
      <li><a class="more-tile" href="{{ '/portfolio/timetracker' | url }}"><span class="camp-label">AI</span><strong>Weekly AI-powered work summary</strong></a></li>
      <li><span class="more-tile more-tile-soon"><span class="camp-label">Coming later</span><strong>trailpeakdesign</strong></span></li>
    </ul>
  </div>
</section>

<section id="principles" class="camp camp-band" aria-labelledby="principles-heading">
  <p class="camp-kicker">Camp 2 &middot; How I work</p>
  <h2 id="principles-heading" class="text-h2 no-underline principle-quote" data-reveal>Gate the connectors and data scope, not the creativity.</h2>
  <ul class="principles" data-reveal-group>
    <li><h3>Show the work</h3><p>People trust an answer when they can see how it was produced.</p></li>
    <li><h3>Make correcting cheap</h3><p>A wrong answer is survivable when fixing it takes seconds and the fix sticks.</p></li>
    <li><h3>Ask, don't hunt</h3><p>Users should state what they need, not learn where the data lives.</p></li>
  </ul>
</section>

<section id="proof" class="camp" aria-labelledby="proof-heading">
  <p class="camp-kicker">Camp 3 &middot; Proof</p>
  <h2 id="proof-heading" class="visually-hidden">Outcomes</h2>
  <ul class="proof-grid" data-reveal-group>
    <li>
      <a class="proof-card" href="{{ '/portfolio/task-it' | url }}">
        <span class="proof-number">500</span>
        <span class="camp-label">Daily active users</span>
        <span>Three or four tracking tools became one platform, reaching 500 daily users within 18 months of launch.</span>
        <span class="proof-link">AWS &middot; Task-it &rarr;</span>
      </a>
    </li>
    <li>
      <a class="proof-card" href="{{ '/portfolio/component-library' | url }}">
        <span class="proof-number">25%</span>
        <span class="camp-label">Faster development</span>
        <span>Design tokens and documented components cut development cycles across web and iOS.</span>
        <span class="proof-link">Component library &rarr;</span>
      </a>
    </li>
    <li>
      <a class="proof-card" href="{{ '/portfolio/casim' | url }}">
        <span class="proof-number">UAT</span>
        <span class="camp-label">Now in beta testing</span>
        <span>Users stopped learning where data lives and started asking questions. The assistant finds the answers.</span>
        <span class="proof-link">CASim &rarr;</span>
      </a>
    </li>
  </ul>
</section>

<section id="about" class="camp camp-band" aria-labelledby="about-heading">
  <p class="camp-kicker">Camp 4 &middot; About and Brimfield Labs</p>
  <div class="about-camp">
    <div>
      <h2 id="about-heading" class="text-h2 no-underline">I started by fixing technology, then wanted to build it.</h2>
      <p class="text-body-lg">I began on a help desk, moved into software engineering, and found UX design at a startup. That path is why I still ship working prototypes alongside the designs, now in Claude Code every day. I was a core contributor to PatternFly at Red Hat and designed Task-it at AWS. Outside of work I build local-first apps as Brimfield Labs, because I like software that keeps your data yours.</p>
      <ul class="app-tiles" data-reveal-group>
        <li><a class="app-tile" href="{{ '/portfolio/soccertracker' | url }}"><strong>Brimfield Soccer</strong><span>A local-only coaching notebook for volunteer rec coaches.</span></a></li>
        <li><a class="app-tile" href="{{ '/apps/taskstat-privacy' | url }}"><strong>TaskStat</strong><span>A privacy-first task manager, on the App Store.</span></a></li>
        <li><a class="app-tile" href="{{ '/portfolio/timetracker' | url }}"><strong>Timetraked</strong><span>Time tracking as a desktop app and a web PWA.</span></a></li>
      </ul>
      <p><a class="btn btn-secondary" href="{{ '/about/adam' | url }}">More about me</a></p>
    </div>
  </div>
</section>

<section id="summit" class="camp summit" aria-labelledby="summit-heading">
  <p class="camp-kicker">Summit &middot; Contact</p>
  <h2 id="summit-heading" class="text-h2 no-underline">Building AI people can trust? Let&rsquo;s talk.</h2>
  <p class="summit-actions">
    {%- if meta.email != "" %}
    <a class="btn btn-primary" href="mailto:{{ meta.email }}">Email me</a>
    {%- endif %}
    <a class="btn btn-outline" href="{{ '/about/resume' | url }}">Download resume</a>
    <a class="summit-top" href="#top">Back to trailhead &uarr;</a>
  </p>
</section>

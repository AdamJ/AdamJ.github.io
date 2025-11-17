---
layout: base.njk
---

<section class="hero" aria-labelledby="hero-heading" style="height: calc(100vh - 4rem);">
  <h1 id="hero-heading">Adam Jolicoeur</h1>
  <p>Lead Product Manager & Lead Designer with 15+ years crafting enterprise-scale products at AWS, Red Hat, and high-growth startups.</p>
  <p class="text-body" style="font-style: italic; padding: 2rem 0;">-- Adam's working model is highly collaborative and amazingly fast --</p>
</section>
<section id="about" aria-labelledby="about-heading">
  <h2 id="about-heading">About Me</h2>
  <div class="about-card">
    <p>With over 15 years leading product and design at scale, I've helped shape the user experience of enterprise platforms at AWS and Red Hat, while also driving product strategy at innovative startups. My dual expertise in product management and design leadership allows me to bridge strategic vision with exceptional execution.</p>
    <p>I thrive at the intersection of business impact and user needs—whether defining product roadmaps, leading cross-functional teams, or crafting design systems that serve millions of users. My experience spans from 0-to-1 product launches to optimizing mature platforms serving global enterprises.</p>
  </div>
</section>
<section id="work" aria-labelledby="work-heading">
  <h2 id="work-heading">Featured Work</h2>
  <div class="work-grid">
    <article class="showcase-large">
      <img src="{{ '/assets/img/task-it_intro.webp' | url }}" alt="Task It project illustration" class="showcase-image" />
      <div class="showcase-content">
        <h3>Task Management System</h3>
        <p>Led the design and direction with clear presentation and project customization, growing from a dozen users to 500 daily in 18 months.</p>
        <a href="{{ 'designs/task-it' | url }}" class="btn btn-primary" alt="View application lifecycle planning case study">View Case Study</a>
      </div>
    </article>
    <article class="showcase-large">
      <img src="{{ '/assets/img/OSIO-laptop-screen-1200.webp' | url }}" alt="Task It project illustration" class="showcase-image" />
        <div class="showcase-content">
          <h3>Application Lifecycle Planning</h3>
          <p>Creating a single source for team planning, cutting delivery time through simplified project management.</p>
          <a href="{{ '/designs/alm' | url }}" class="btn btn-primary" alt="View application lifecycle planning case study">View Case Study</a>
        </div>
      </article>
    </div>
    <div class="work-grid">
      <div class="small-showcase">
        <article class="showcase-small">
          <h4>Dashboard Analytics</h4>
          <p>Created intuitive data visualization components for B2B analytics platform serving 10K+ users.</p>
        </article>
        <article class="showcase-small">
          <h4>Customer Engagement Platform</h4>
          <p>Informing users how best to reach their customers, improving engagement rates by 10%.</p>
          <a class="btn btn-outline btn-sm" href="{{ '/designs/customer-engagement' | url }}">View Case Study</a>
        </article>
        <article class="showcase-small">
          <h4>Component Library</h4>
          <p>Built and documented reusable component library adopted across a complete product stack.</p>
        </article>
      </div>
  </div>
</section>
<section id="testimonials" aria-labelledby="callouts-heading">
  <h2 id="callouts-heading">What Colleagues Say</h2>
  <div class="callouts-grid">
    <blockquote class="callout">
      <p class="callout-text">[Adam] is self-driven and keeps stakeholders (Project manager, Development manager, Engineers) aligned on UX solutions...design proposals are spot-on and considerate of [our] diverse set of users.</p>
      <cite>
        <span class="callout-role">Product Owner</span>
      </cite>
    </blockquote>
    <blockquote class="callout">
      <p class="callout-text">Adam is highly engaged across 6+ major features at any given time and is somehow never the blocker. Designers like this don't come around often.</p>
      <cite>
        <span class="callout-role">Senior Developer Engineer, AWS</span>
      </cite>
    </blockquote>
    <blockquote class="callout">
      <p class="callout-text">...What stood out to me while working with Adam was his positivity and confidence through every obstacle, pivot, and deadline. He is a true team player.</p>
      <cite>
        <span class="callout-role">Front-End Engineer</span>
      </cite>
    </blockquote>
    <!-- <blockquote class="callout">
      <p class="callout-text">Adam's working model is highly collaborative and amazingly fast.</p>
      <cite>
        <span class="callout-role">Engineering Group</span>
      </cite>
    </blockquote> -->
  </div>
</section>
<section id="opensource" aria-labelledby="opensource-heading">
  <h2 id="opensource-heading">Open Source Contributions</h2>
  <div class="about-card" style="width: 100%;">
    <p class="text-body-lg" style="margin-bottom: 2rem;">Beyond my professional work, I actively contribute to the open source community. My contributions span developer tools, design systems, and infrastructure projects that support the broader tech ecosystem.</p>
    <div class="about-grid">
      <div class="card-simple">
        <h4 style="margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.5rem;">
          <span style="font-size: 1.5rem;">🎮</span>
          Apps and Games
        </h4>
        <p class="text-body-sm" style="margin-bottom: 0.75rem;">
          Created several open source applications and games that showcase innovative use of web technologies, focusing on user engagement and interactive experiences.
        </p>
        <span class="badge">Tooling</span>
        <span class="badge">DX</span>
        <span class="badge">Games</span>
        <span class="badge">Apps</span>
        <div class="row button-row">
          <a href="https://github.com/AdamJ/TimeTrackerPro" alt="Link to the TimeTrackerPro repository" class="btn btn-outline btn-sm" target="_blank" rel="noopener noreferrer" style="margin-top: 0.5rem;">TimeTrackerPro</a>
          <a href="https://github.com/AdamJ/game-tracker" alt="Link to the Game Tracker repository" class="btn btn-outline btn-sm" target="_blank" rel="noopener noreferrer" style="margin-top: 0.5rem;">Game Tracker</a>
        </div>
      </div>
      <div class="card-simple">
        <h4 style="margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.5rem;">
          <span style="font-size: 1.5rem;">🚀</span>
          Tools and Utilities
        </h4>
        <p class="text-body-sm" style="margin-bottom: 0.75rem;">
          Developed and maintained several open source developer tools that enhance productivity and streamline workflows for both designers and software engineers.
        </p>
        <span class="badge">Tooling</span>
        <span class="badge">DX</span>
        <div class="row button-row">
          <a href="" alt="Link to my contributions to the CAS Storybook" class="btn btn-outline btn-sm" target="_blank" rel="noopener noreferrer" style="margin-top: 0.5rem;">Figma Plugins</a>
        </div>
      </div>
      <div class="card-simple">
        <h4 style="margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.5rem;">
          <span style="font-size: 1.5rem;">📚</span>
          Documentation
        </h4>
        <p class="text-body-sm" style="margin-bottom: 0.75rem;">Regular contributor to open source documentation, helping make complex technical concepts more accessible to developers.</p>
        <span class="badge">Documentation</span>
        <span class="badge">Community</span>
        <div class="row button-row">
          <a href="https://6903b2381f768ce7c6da402a-jdnoovaaei.chromatic.com/?path=/docs/introduction--docs" alt="Link to my contributions to the CAS Storybook" class="btn btn-outline btn-sm" target="_blank" rel="noopener noreferrer" style="margin-top: 0.5rem;">CAS Storybook</a>
        </div>
      </div>
      <div class="card-simple">
        <h4 style="margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.5rem;">
          <span style="font-size: 1.5rem;">🔧</span>
          PatternFly
        </h4>
        <p class="text-body-sm" style="margin-bottom: 0.75rem;">Core contributor to Red Hat's enterprise design system, focusing on accessibility improvements and component development.</p>
        <span class="badge">Design Systems</span>
        <span class="badge">React</span>
        <div class="row button-row">
          <a href="https://github.com/patternfly/patternfly/commits/main/?author=AdamJ" alt="Link to my contributions to the PatternFly Core project" class="btn btn-outline btn-sm" target="_blank" rel="noopener noreferrer" style="margin-top: 0.5rem;">PatternFly Core</a>
          <a href="https://github.com/patternfly/patternfly-org/commits/main/?author=AdamJ" alt="Link to my contributions to the PatternFly.org project" class="btn btn-outline btn-sm" target="_blank" rel="noopener noreferrer" style="margin-top: 0.5rem;">PatternFly.org</a>
        </div>
      </div>
    </div>
    <div class="text-center mt-4">
      <a href="https://github.com/AdamJ" class="btn btn-secondary" target="_blank" rel="noopener noreferrer">
        View GitHub Profile
      </a>
    </div>
  </div>
</section>

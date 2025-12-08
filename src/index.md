---
layout: base.njk
---

<section class="hero" aria-labelledby="hero-heading" style="height: calc(100vh - 4rem);">
  <h1 id="hero-heading">Adam Jolicoeur</h1>
  <p>Lead Product Designer specializing in design systems and enterprise applications. 15+ years at AWS, Red Hat, and high-growth startups. </p>
  <p class="text-body" style="font-style: italic; padding: 2rem 0;">— I design products and code prototypes that ship —</p>
</section>
<section id="about" aria-labelledby="about-heading">
  <h2 id="about-heading" class="text-h2 no-underline">About Me</h2>
  <div class="card about-card">
    <div class="card-body">
      <p class="text-body-lg text-center">I'm a Product Designer who ships code—and understands the business side.</p>
      <p>With over 15 years designing enterprise applications at AWS, Red Hat, and high-growth B2B companies, I specialize in design systems and complex, data-intensive interfaces. I've shaped products used by millions of developers and contributed to some of the industry's most respected open-source design systems.</p>
      <p>
        What makes me different:
        <ul>
          <li>I code production-quality prototypes — I build functional prototypes in HTML/CSS/React, which means my designs are validated with real data and ready for engineering handoff. This bridges the gap between design and development, accelerating shipping and reducing costly miscommunication.</li>
          <li>I think like a PM — I've managed product roadmaps, prioritized features, and led cross-functional teams. This dual perspective helps me balance user needs with business objectives and collaborate effectively with product managers and stakeholders.</li>
          <li>Former PatternFly core contributor — I was a core contributor to PatternFly (2016-2021), Red Hat's open-source design system with 20,000+ GitHub stars, used across OpenShift, Ansible, and 50+ products serving millions of developers worldwide.</li>
        </ul>
      </p>
      <p>
        <strong>Currently:</strong> Lead Product Designer at Component Assembly Systems
        <br />
        <strong>Previously:</strong> Amazon Web Services, Red Hat, and high-growth startups
      </p>
    </div>
    <div class="card-footer">
      <a class="btn btn-secondary" href="{{ '/about/adam' | url }}" alt="Link to learn more about Adam">Read more</a>
    </div>
  </div>
</section>
<section id="work" aria-labelledby="work-heading">
  <h2 id="work-heading" class="text-h2 no-underline">Featured Work</h2>
  <div class="work-grid">
    <article class="showcase-large">
      <img src="{{ '/assets/img/task-it_intro.webp' | url }}" alt="Task It project illustration" class="showcase-image" />
      <div class="showcase-content">
        <h3>Task Management System</h3>
        <p>Lead designer for Task-it, Amazon's internal task management platform. Consolidated 3-4 disparate tracking tools into one unified system, reaching <strong>500 daily active users</strong> across AWS <strong>within 18 months</strong> of launch.</p>
        <div class="badges mb-2">
            <span class="badge">AWS</span><span class="badge">500+ Users</span><span class="badge">Enterprise</span>
          </div>
        <a href="{{ '/designs/task-it' | url }}" class="btn btn-primary" alt="View application lifecycle planning case study">View Case Study</a>
      </div>
    </article>
    <article class="showcase-large">
      <img src="{{ '/assets/img/OSIO-laptop-screen-1200.webp' | url }}" alt="Task It project illustration" class="showcase-image" />
        <div class="showcase-content">
          <h3>Application Lifecycle Management</h3>
          <p>Designed enterprise project management for OpenShift teams at Red Hat. Created seamless IDE integration and workflow tools for developers managing complex Kubernetes deployments.</p>
          <div class="badges mb-2">
            <span class="badge">Red Hat</span><span class="badge">Platforms</span>
          </div>
          <a href="{{ '/designs/alm' | url }}" class="btn btn-primary" alt="View application lifecycle planning case study">View Case Study</a>
        </div>
      </article>
    </div>
    <div class="work-grid">
      <div class="small-showcase-cards">
        <article class="card-flex showcase-small">
          <h3 class="text-h4">Component Library</h3>
          <p>Built comprehensive design system for construction management software spanning web and iOS applications. Created design tokens, component documentation, and prototypes that accelerated development cycles by 25%.</p>
          <div class="badges mb-2">
            <span class="badge">Library</span><span class="badge">Design Tokens</span>
          </div>
          <a class="btn btn-outline btn-sm" href="{{ '/designs/component-library' | url }}">View Case Study</a>
        </article>
        <article class="card-flex showcase-small">
          <h3 class="text-h4">Customer Engagement Platform</h3>
          <p>Led complete UX redesign for financial services SaaS platform. Created reusable UI pattern library that reduced design-to-development time by 40% and established design standards for future products.</p>
          <div class="badges mb-2">
            <span class="badge">SaaS</span><span class="badge">Pattern Library</span>
          </div>
          <a class="btn btn-outline btn-sm" href="{{ '/designs/customer-engagement' | url }}">View Case Study</a>
        </article>
        <article class="showcase-small">
          <h3 class="text-h4">Dashboard Analytics</h3>
          <p>Designed real-time data visualization platform for Saylent Technologies. Created intuitive interfaces that helped users identify trends and make data-driven decisions 40% faster.</p>
          <div class="badges mb-2">
            <span class="badge">Visualizations</span><span class="badge">Data-Driven</span>
          </div>
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
  </div>
</section>
<section id="opensource" aria-labelledby="opensource-heading">
  <h2 id="opensource-heading">Open Source Contributions</h2>
  <div>
    <p class="text-body-lg" style="margin-bottom: 2rem;">Beyond my professional work, I actively contribute to the open source community. My contributions span developer tools, design systems, and infrastructure projects that support the broader tech ecosystem.</p>
    <div class="about-grid">
      <div class="card-flex showcase-small">
        <h3 class="text-h4" style="margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.5rem;">
          <span style="font-size: 1.5rem;">🎮</span>
          Apps and Games
        </h3>
        <p class="text-body-sm" style="margin-bottom: 0.75rem;">
          Created several open source applications and games that showcase innovative use of web technologies, focusing on user engagement and interactive experiences.
        </p>
        <div class="badges">
          <span class="badge">Tooling</span>
          <span class="badge">DX</span>
          <span class="badge">Games</span>
          <span class="badge">Apps</span>
        </div>
        <a href="https://github.com/AdamJ/game-tracker" alt="Link to the Game Tracker repository" class="btn btn-outline btn-sm" target="_blank" rel="noopener noreferrer" style="margin-top: 0.5rem;">Game Tracker</a>
      </div>
      <div class="card-flex showcase-small">
        <h3 class="text-h4" style="margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.5rem;">
          <span style="font-size: 1.5rem;">🔧</span>
          PatternFly
        </h3>
        <p class="text-body-sm" style="margin-bottom: 0.75rem;">
          Core contributor to Red Hat's professional design system (2016-2021). Designed accessible, enterprise-grade components for the open-source system now used across OpenShift, Ansible, and 50+ enterprise products <strong>(20,000+ GitHub stars)</strong>.
        </p>
        <div class="badges">
          <span class="badge">HTML</span>
          <span class="badge">CSS</span>
          <span class="badge">JavaScript</span>
          <span class="badge">A11y</span>
        </div>
        <div class="row button-row">
          <a href="https://github.com/patternfly/patternfly/commits/main/?author=AdamJ" alt="Link to my contributions to the PatternFly Core project" class="btn btn-outline btn-sm" target="_blank" rel="noopener noreferrer" style="margin-top: 0.5rem;">PatternFly Core</a>
          <a href="https://github.com/patternfly/patternfly-org/commits/main/?author=AdamJ" alt="Link to my contributions to the PatternFly.org project" class="btn btn-outline btn-sm" target="_blank" rel="noopener noreferrer" style="margin-top: 0.5rem;">PatternFly.org</a>
        </div>
      </div>
      <div class="card-flex showcase-small">
        <h3 class="text-h4" style="margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.5rem;">
          <span style="font-size: 1.5rem;">🚀</span>
          Tools and Utilities
        </h3>
        <p class="text-body-sm" style="margin-bottom: 0.75rem;">
          Developed and maintained several open source developer tools that enhance productivity and streamline workflows for both designers and software engineers.
        </p>
        <div class="badges">
          <span class="badge">Tooling</span>
          <span class="badge">DX</span>
        </div>
          <a href="https://github.com/AdamJ/TimeTrackerPro" alt="Link to the TimeTrackerPro repository" class="btn btn-outline btn-sm" target="_blank" rel="noopener noreferrer" style="margin-top: 0.5rem;">TimeTrackerPro</a>
      </div>
      <div class="card-flex showcase-small">
        <h3 class="text-h4" style="margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.5rem;">
          <span style="font-size: 1.5rem;">📚</span>
          Documentation
        </h3>
        <p class="text-body-sm" style="margin-bottom: 0.75rem;">Regular contributor to open source documentation, helping make complex technical concepts more accessible to developers.</p>
        <div class="badges">
          <span class="badge">Documentation</span>
          <span class="badge">Community</span>
        </div>
        <!-- <div class="row button-row">
          <a href="https://6903b2381f768ce7c6da402a-jdnoovaaei.chromatic.com/?path=/docs/introduction--docs" alt="Link to my contributions to the CAS Storybook" class="btn btn-outline btn-sm" target="_blank" rel="noopener noreferrer" style="margin-top: 0.5rem;">CAS Storybook</a>
        </div> -->
      </div>
    </div>
    <div class="text-center mt-4">
      <a href="https://github.com/AdamJ" class="btn btn-secondary" target="_blank" rel="noopener noreferrer">
        View GitHub Profile
      </a>
    </div>
  </div>
</section>

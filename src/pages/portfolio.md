---
title: 'My Work'
date: git Last Modified
abbreviation: 'portfolio'
description: 'Selected projects from AWS, Red Hat, and high-growth B2B companies'
eleventyNavigation:
  key: Portfolio
  order: 1
---

<section>
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
      <img src="{{ '/assets/img/timetracker-loading-state-screen.webp' | url }}" alt="Task It project illustration" class="showcase-image" />
        <div class="showcase-content">
          <h3>Weekly AI-Powered Work Summary</h3>
          <p>After archiving my work entries for the week, I found myself running a second, separate tool to generate a weekly summary. Now, I start the day, capture tasks, review, and archive - then summarize using AI.</p>
          <div class="badges mb-2">
            <span class="badge">AI</span><span class="badge">Productivity</span>
          </div>
          <a href="{{ '/development/timetracker' | url }}" class="btn btn-primary" alt="View weekly report ai summary generator case study">View Case Study</a>
        </div>
      </article>
    </div>
    <div class="small-showcase-cards">
      <article class="card-flex showcase-small">
        <h4>Archparser</h4>
        <p>Architectural drawing analysis platform for OCR-based architectural drawing analysis management.</p>
        <div class="badges mb-2">
          <span class="badge">Development</span><span class="badge">Claude Code</span>
        </div>
        <a class="btn btn-outline btn-sm" href="{{ '/development/archparser' | url }}">View Case Study</a>
      </article>
      <article class="card-flex showcase-small">
        <h4>Component Library</h4>
        <p>Built comprehensive design system for construction management software spanning web and iOS applications. Created design tokens, component documentation, and prototypes that accelerated development cycles by 25%.</p>
        <div class="badges mb-2">
          <span class="badge">Library</span><span class="badge">Design Tokens</span>
        </div>
        <a class="btn btn-outline btn-sm" href="{{ '/designs/component-library' | url }}">View Case Study</a>
      </article>
      <article class="card-flex showcase-small">
        <h4>Application Lifecycle Management</h4>
        <p>Designed enterprise project management for OpenShift teams at Red Hat. Created seamless IDE integration and workflow tools for developers managing complex Kubernetes deployments.</p>
        <div class="badges mb-2">
          <span class="badge">Red Hat</span><span class="badge">Platforms</span>
        </div>
        <a class="btn btn-outline btn-sm" href="{{ '/designs/alm' | url }}">View Case Study</a>
      </article>
    </div>
  </div>
</section>

---
title: "designs"
abbreviation: "designs"
description: "Collaborate. Learn. Delight."
subheader: "Collaboration is the key to understanding and building trust. Intuition guides my initial direction and decisions, which are backed up by learnings from research and testing. Every decision that is made is done with the goal to delight users as they go about completing their tasks."
eleventyNavigation:
  key: Designs
  order: 2
---

<!-- Task-It! -->
<div class="container mx-auto mx-md-auto py-3 px-0 px-md-5">
  <div class="row mx-0 text-align-center card-cover" style="background-image: url({{ '/img/task-it_product.png' | url }});">
    <div class="col p-md-0 p-lg-5 background-overlay" style="height: 500px;">
      <div style="position: relative; top: 25%;">
        <h1 class="display-3 fw-bold text-white">Task-It!</h1>
        <h3 class="mb-3 text-white">One enterprise task management system to rule them all.</h3>
        <div class="d-flex justify-content-center lead">
          <sl-button href="/designs/task-it" variant="primary" pill>the journey</sl-button>
        </div>
      </div>
    </div>
    <div class="product-device d-none d-md-block"></div>
    <div class="product-device product-device-2 d-none d-md-block"></div>
  </div>
</div>
<!-- Application Lifecycle Management -->
<div class="container py-3 px-0 px-md-5">
  <div class="row mx-0 px-0 px-md-3 align-items-center">
    <div class="col-12 col-md-6">
      <img src="{{ '/img/OSIO-laptop-screen-1200.png' | url }}" class="d-block mx-lg-auto img-fluid" alt="Application Lifecycle Management thumbnail" width="700" height="500" loading="lazy">
    </div>
    <div class="col-12 col-md-6 text-align-center text-md-start">
      <h2>Application Lifecycle Management</h2>
      <p class="text-body-secondary">A one-stop-shop for a team's planning and project lifecycle management.</p>
      <sl-button href="/designs/alm" variant="neutral" pill>the journey</sl-button>
    </div>
  </div>
</div>

<!-- Customer Engagement Application -->
<div class="container py-3 px-0 px-md-5 text-bg-light">
  <div class="row mx-0 px-0 px-md-3 align-items-center">
    <div class="col-12 col-md-6 text-align-center text-md-start">
      <h2>Customer Engagement App</h2>
      <p >End-to-end tracking of customer engagement and marketing campaigns.</p>
      <sl-button href="/designs/customer-engagement" variant="neutral" pill>the journey</sl-button>
    </div>
    <div class="col-12 col-md-6 py-2 py-md-0">
      <img src="{{ '/img/CEA_Dashboard.png' | url }}" class="d-block mx-lg-auto img-fluid img-thumbnail" alt="Customer Engagement App Dashboard thumbnail" width="700" height="500" loading="lazy">
    </div>
  </div>
</div>

<!-- Switchback TimeTrak -->
<div class="container py-3 px-0 px-md-5">
  <div class="row mx-0 px-0 px-md-3 align-items-center">
    <div class="col-12 col-md-6">
      <img src="{{ '/img/Timetrak.png' | url }}" class="d-block mx-lg-auto img-fluid img-thumbnail" alt="Switchback Timetrak thumbnail" width="700" height="500" loading="lazy">
    </div>
    <div class="col-12 col-md-6 text-align-center text-md-start">
      <h2>Switchback TimeTrak</h2>
      <p>The goal of this redesign was to create a simplistic system to easily access recent log entries, active projects, and team calendars. From this dashboard, users can quickly see these items, in addition to providing quick navigation items for in-depth reporting.</p>
      <p class="card-text">
        <sl-tag size="small">Sketch</sl-tag> <sl-tag size="small">Bootstrap</sl-tag> <sl-tag size="small">Font Awesome</sl-tag>
      </p>
    </div>
  </div>
</div>

<!-- Structure Cloud -->
<div class="container py-3 px-0 px-md-5">
  <div class="row mx-0 px-0 px-md-3 align-items-center">
    <div class="col-12 col-md-6 text-align-center text-md-start">
      <h2>Structure Cloud</h2>
      <p>For this project, I was tasked with converting the UI of a COBOL application into something that would work with the modern web. The task was very challenging, in that one of the main requirements was to keep the layout as close to the original application as possible (in order to minimize the amount of relearning existing users would need to do), while also providing a clean UI that would attract new users to the platform.</p>
      <p class="card-text pb-2 pb-md-0">
        <sl-tag size="small">Sketch</sl-tag> <sl-tag size="small">Font Awesome</sl-tag> <sl-tag size="small">Visual Studio</sl-tag>
      </p>
    </div>
    <div class="col-12 col-md-6">
      <img src="{{ '/img/SC_demo.png' | url }}" class="d-block mx-lg-auto img-fluid img-thumbnail" alt="Structure Cloud UI screenshot" width="700" height="500" loading="lazy">
    </div>
  </div>
</div>
<!-- Presentations -->
<div class="container py-3 px-0 px-md-5">
  <div class="row mx-0 px-0 px-md-3 align-items-center">
    <div class="col-md-12 text-align-center text-align-left-medium">
      <h2>Presentations</h2>
      <p>I've created many presentations over the years and recently began to transition them to Figma using the prototyping functionality.
      </p>
    </div>
  </div>
  <div class="row justify-content-center mx-0 py-4 py-md-3">
    <div class="col-12 col-md-6 col-lg-4 mx-0 px-md-3 my-2 my-md-0">
      <sl-card class="card-image">
        <img
          slot="image"
          src="{{ '/img/portfolio/Slide0.png' | url }}"
          alt="Portfolio presentation slide image"
        />
        <sl-button href="/presentations/portfolio/" variant="neutral" size="large" outline class="card-button">Portfolio Review</sl-button>
      </sl-card>
    </div>
    <div class="col-12 col-md-6 col-lg-4 mx-0 px-md-3 my-2 my-md-0">
      <sl-card class="card-image">
        <img
          slot="image"
          src="{{ '/img/colorPicker/slide0.png' | url }}"
          alt="Color Picker presentation slide example"
        />
        <sl-button href="/presentations/color-picker/" variant="neutral" size="large" outline class="card-button">Color Picker</sl-button>
      </sl-card>
      <style>
        .card-image {
          max-width: 300px;
        }
      </style>
    </div>
  </div>
</div>


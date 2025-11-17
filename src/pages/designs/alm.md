---
title: "Application Lifecycle Management"
date: git Last Modified
abbreviation: "alm"
description: "A one-stop-shop for a team's planning and project lifecycle management."
eleventyNavigation:
  key: Designs
  parent: Designs
  order: 2
---

<section>
  <div class="card">
    <div class="mb-3">
      <p class="text-h6">Role</p>
      <div class="badges">
        <span class="badge badge-accent">Interaction Designer</span>
        <span class="badge badge-accent">Prototypes</span>
      </div>
    </div>
    <div class="mb-3">
      <p class="text-h6">Areas</p>
      <div class="badges">
        <span class="badge badge-outline">Areas</span>
        <span class="badge badge-outline">Wireframes</span>
        <span class="badge badge-outline">Usability</span>
        <span class="badge badge-outline">User Paths</span>
        <span class="badge badge-outline">Prototyping</span>
      </div>
    </div>
    <div class="mb-3">
      <p class="text-h6">Challenge</p>
      <p>The greater project team was using multiple project management tools, code repositories, and application development processes, with none of them talking to each other. This project takes all of those areas of concern and brings them together into a single, cohesive interface.</p>
    </div>
  </div>
</section>
<section>
  <h2>The Process</h2>
  <p class="text-h3 mb-4">
    Before starting on the Application Lifecycle Management project, it was determined that the following areas would be need to be covered:
    <div class="row">
      <span class="text-accent text-semibold">list of target users</span>
      <span class="text-secondary text-semibold">a user flow</span>
      <span class="text-accent text-semibold">wireframes</span>
      <span class="text-secondary text-semibold">prototypes for user testings and feasibility</span>
    </div>
  </p>
</section>
<section>
  <h2>Target Users</h2>
  <div class="card mb-4">
    <div class="card-body">
      <p>
        Through discussions with Stakeholders and Project Management, it was decided that the target users would be set in tiers:
        <ol>
          <li>
            <strong>General Users</strong> <ul >
            <li>those who need to add and interact with issues, update project assets, and interact daily - a mix of designers and developers</li>
            </ul>
          </li>
          <li>
            <strong>Project Managers</strong>
            <ul >
              <li>organizers of work, set deadlines and release dates
              </li>
            </ul>
          </li>
          <li>
            <strong>Administrators</strong>
            <ul>
              <li>control any integrations, add-ons, and access</li>
            </ul>
          </li>
        </ol>
      </p>
    </div>
  </div>
</section>
<section>
  <h2>Application Lifecycle Management flow</h2>
  <div class="card mb-4">
    <div class="card-header text-h5">User flows</div>
    <div class="card-body">
      <img src="../../assets/img/ALM_workflow.webp" class="img-fluid rounded" alt="ALM workflow" />
    </div>
  </div>
</section>
<section>
  <h3>Wireframes and Workflows</h3>
  <div class="card mb-4">
    <p>
      For each section of the ALM application, workflows and wireframes were used to identify possible user paths, as well as to strategize initial designs before moving on to high fidelity mockups and prototypes.
    </p>
  </div>
  <div class="highlight-block">
    <divider></divider>
    <h4 class="header-highlight">From Work Items to Development</h4>
    <divider></divider>
  </div>
  <div class="showcase-small mb-4">
    <h5>Goals:</h5>
    <ul class="list">
      <li>Communicates to the user that direct access to developing the Work Item is available in a single click.</li>
      <li>Implementation is unobtrusive and implies navigation.</li>
      <li>Location will not accidentally be clicked, allowing for enough real estate for line lengths and other meta data. The location of the integration should also imply moving forward.</li>
      <li>Ordered by recommendation - require users to fill in one area before moving on.</li>
      <li>As a button, it needs to have a prominent place yet not take the place of a primary button (in style).</li>
    </ul>
  </div>
  <h4>Steps to complete the process</h4>
  <div class="row no-wrap mt-3">
    <div class="card">
      <div class="card-body">
        <img
          alt="Step 1 of the ALM wireframes"
          src="{{ '/assets/img/ALM_step1.webp' | url }}"
          class="figure-img img-fluid rounded"
        />
      </div>
    </div>
    <div class="card">
      <div class="card-body">
        <img
          alt="Step 2 of the ALM wireframes"
          src="{{ '/assets/img/ALM_step2.webp' | url }}"
        />
      </div>
    </div>
    <div class="card">
      <div class="card-body">
        <img
          alt="Step 3 of the ALM wireframes"
          src="{{ '/assets/img/ALM_step3.webp' | url }}"
        />
      </div>
    </div>
  </div>
</section>
<section>
  <div class="card">
    <div class="card-header text-h5">
      Wireframes
    </div>
    <div class="card-body">
      <p>This wireframe was created with call outs in order to communicate my thoughts around the design to anyone who saw it, but could not talk with me. Specifically, this worked extremely well when working with colleagues in other time zones where our working ours did not match up.</p>
      <img src="../../assets/img/ALM_wireframe.webp" class="img-fluid rounded" alt="Wireframe of the work item to coding experience">
    </div>
  </div>
  <div class="card mt-4 mb-4">
    <div class="card-body">
      <p class="text-h5">From these workflows and wireframes, it was determined that additional questions needed to be answered:</p>
      <ol>
        <li>How do we handle accuracy between the linking of work items?</li>
        <li>If the work items has a fine name and line number, is the commit SHA also used to help identify the connection?</li>
        <li>Are we able to type the URL in a browser and navigate to the work item? (Does it have a unique link or is it randomly generated each time?)</li>
      </ol>
    </div>
  </div>
  <div class="card">
    <div class="card-header text-h5">
      Visual Design
    </div>
    <div class="card-body">
      <p>After completing the wireframes and flows, a sample visual design was created. This design was created using the in-house design component library.</p>
      <img src="../../assets/img/ALM_planner.webp" class="img-fluid rounded" alt="ALM workflow">
    </div>
  </div>
</section>
<section>
  <div class="card">
    <div class="card-header">
      <h3 class="p-0">Prototyping</h3>
    </div>
    <div class="card-body">
      <p>
        As part of the testing and usability study process, I created a prototype that demonstrated some of the basic layouts and IA for users to explore and provide feedback on. This process evolved over time and, eventually, became a full-fledged website that utilized static data and was continuously updated as users provided feedback.
      </p>
    </div>
  </div>
</section>
<divider></divider>
<section>
  <div class="card">
    <div class="card-header">
      <h3 class="p-0">Final thoughts</h3>
    </div>
    <div class="card-body">
      <p>
        In review, I believe that this process helped to flush out a great number of questions and concerns, while also demonstrating that their is a solid platform in which to build the full application on.
      </p>
      <p>
        The findings discovered through the process were taken to the Project Stakeholders, which were then used to create additional design stories and discussions with the development teams.
      </p>
      </div>
    </div>
  </div>
</section>

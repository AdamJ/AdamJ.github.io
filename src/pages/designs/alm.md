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
<div class="container px-0 mb-5">
  <div class="row mx-0">
    <div class="col">
      <sl-card class="card-basic" style="--border-color: var(--sl-color-primary-400); --border-width: 2px;">
        <dt class="col-sm-2">Role</dt>
          <dd class="col-sm-10">Interaction Designer, Prototypes</dd>
          <dt class="col-sm-2">Areas</dt>
          <dd class="col-sm-10">Wireframes, user paths, usability, prototyping</dd>
          <dt class="col-sm-2">Challenge</dt>
          <dd class="col-sm-10">The greater project team was using multiple project management tools, code repositories, and application development processes, with none of them talking to each other. This project takes all of those areas of concern and brings them together into a single, cohesive interface.</dd>
      </sl-card>
    </div>
  </div>
  <div class="row mx-0">
    <div class="col">
      <h2>The Process</h2>
      <p>Before starting on the Application Lifecycle Management project, it was determined that the following areas would be need to be covered: list of target users, a user flow, wireframes, and, potentially, prototypes for user testings and feasibility.</p>
      <h3>Target Users</h3>
      <p>Through discussions with Stakeholders and Project Management, it was decided that the target users would be set in tiers - <u>General Users</u> (those who need to add and interact with issues, update project assets, and interact daily - a mix of designers and developers); <u>Project Managers</u> (organizers of work, set deadlines and release dates), and <u>Administrators</u> (control any integrations, add-ons, and access).</p>
      <h3>Application Lifecycle Management flow</h3>
      <div class="text-align-center">
        <sl-dialog label="Dialog" class="alm-workflow" style="--width: 80vw;">
          <img src="../../assets/img/ALM_workflow.webp" class="d-block mx-lg-auto img-fluid" alt="ALM workflow">
          <sl-button slot="footer" variant="neutral">
            Close
          </sl-button>
        </sl-dialog>
        <sl-button><img src="../../assets/img/ALM_workflow.webp" class="d-block mx-lg-auto img-fluid" alt="ALM workflow" width="500" height="300" loading="lazy"></sl-button>
        <script>
          const dialog = document.querySelector('.alm-workflow');
          const openButton = dialog.nextElementSibling;
          const closeButton = dialog.querySelector('sl-button[slot="footer"]');
          openButton.addEventListener('click', () => dialog.show());
          closeButton.addEventListener('click', () => dialog.hide());
        </script>
      </div>
      <h3>Wireframes and Workflows</h3>
      <p>For each section of the ALM application, workflows and wireframes were used to identify possible user paths, as well as to strategize initial designs before moving on to high fidelity mockups and prototypes.</p>
      <h4>From Work Items to Development</h4>
      <p><b>Goals:</b></p>
      <ul>
        <li>Communicates to the user that direct access to developing the Work Item is available in a single click.</li>
        <li>Implementation is unobtrusive and implies navigation.</li>
        <li>Location will not accidentally be clicked, allowing for enough real estate for line lengths and other meta data. The location of the integration should also imply moving forward.</li>
        <li>Ordered by recommendation - require users to fill in one area before moving on.</li>
        <li>As a button, it needs to have a prominent place yet not take the place of a primary button (in style).</li>
      </ul>
      <b>Steps to complete the process:</b>
      <div class="row px-0">
        <div class="col-12 col-md-6 offset-md-3">
          <style>
            .vertical {
              max-height: 400px;
            }
            .vertical img {
              object-fit: contain !important;
            }
            .vertical::part(base) {
              grid-template-areas: 'slides slides pagination';
            }
            .vertical::part(pagination) {
              flex-direction: column;
            }
            .vertical::part(navigation) {
              transform: rotate(90deg);
              display: flex;
            }
            .vertical::slotted(img) {
              object-fit: contain !important;
            }
          </style>
          <sl-carousel class="vertical" pagination orientation="vertical">
            <sl-carousel-item>
              <img
                alt="Step 1 of the ALM wireframes"
                src="{{ '/assets/img/ALM_step1.webp' | url }}"
              />
            </sl-carousel-item>
            <sl-carousel-item>
              <img
                alt="Step 2 of the ALM wireframes"
                src="{{ '/assets/img/ALM_step2.webp' | url }}"
              />
            </sl-carousel-item>
            <sl-carousel-item>
              <img
                alt="Step 3 of the ALM wireframes"
                src="{{ '/assets/img/ALM_step3.webp' | url }}"
              />
            </sl-carousel-item>
          </sl-carousel>
        </div>
      </div>
      <div class="row px-0">
        <sl-card>
          <sl-split-panel>
            <div
              slot="start"
              style="background: var(--sl-color-neutral-50); display: flex; align-items: center; justify-content: center; overflow: hidden;"
            >
              <img src="../../assets/img/ALM_wireframe.webp" class="img-fluid" alt="Wireframe of the work item to coding experience">
            </div>
            <div
              slot="end"
              style="background: var(--sl-color-neutral-50); display: flex; align-items: center; justify-content: center; overflow: hidden; flex-direction: column; gap: var(--sl-spacing-medium); padding: var(--sl-spacing-medium);"
            >
              <p class="h5">Wireframe</p>
              <p>This wireframe was created with call outs in order to communicate my thoughts around the design to anyone who saw it, but could not talk with me. Specifically, this worked extremely well when working with colleagues in other time zones where our working ours did not match up.</p>
            </div>
          </sl-split-panel>
        </sl-card>
      </div>
      <p class="lead mt-3">From these workflows and wireframes, it was determined that additional questions needed to be answered:</p>
      <ul class="px-4 mx-md-4">
        <li>How do we handle accuracy between the linking of work items?</li>
        <li>If the work items has a fine name and line number, is the commit SHA also used to help identify the connection?</li>
        <li>Are we able to type the URL in a browser and navigate to the work item? (Does it have a unique link or is it randomly generated each time?)</li>
      </ul>
      <h3>Visual Design</h3>
      <p>After completing the wireframes and flows, a sample visual design was created. This design was created using the in-house design component library.</p>
      <sl-dialog label="Visual Design" class="alm-planner" style="--width: 80vw;">
        <img src="../../assets/img/ALM_planner.webp" class="d-block mx-lg-auto img-fluid" alt="ALM workflow">
        <sl-button slot="footer" variant="neutral">
          Close
        </sl-button>
      </sl-dialog>
      <sl-button><img src="../../assets/img/ALM_planner.webp" class="d-block mx-lg-auto img-fluid" alt="ALM workflow" width="500" height="300" loading="lazy"></sl-button>
      <script>
        const visualDesign = document.querySelector('.alm-planner');
        const openDesign = visualDesign.nextElementSibling;
        const closeDesign = visualDesign.querySelector('sl-button[slot="footer"]');
        openDesign.addEventListener('click', () => visualDesign.show());
        closeDesign.addEventListener('click', () => visualDesign.hide());
      </script>
      <h3 class="mt-3">Prototyping</h3>
      <p>As part of the testing and usability study process, I created a prototype that demonstrated some of the basic layouts and IA for users to explore and provide feedback on. This process evolved over time and, eventually, became a full-fledged website that utilized static data and was continuously updated as users provided feedback.</p>
      <div class="mt-5 mb-3">
        <sl-card class="card-header">
          <div slot="header">
            <h3 class="p-0">Final thoughts</h3>
          </div>
          <p>
            In review, I believe that this process helped to flush out a great number of questions and concerns, while also demonstrating that their is a solid platform in which to build the full application on.
          </p>
          <p>
            The findings discovered through the process were taken to the Project Stakeholders, which were then used to create additional design stories and discussions with the development teams.</p>
        </sl-card>
        <style>
          .card-header::part(base) {
            background-color: var(--sl-color-neutral-50);
          }
          .card-header [slot='header'] {
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .card-header h3 {
            margin: 0;
          }
          .card-header sl-icon-button {
            font-size: var(--sl-font-size-medium);
          }
        </style>
      </div>
    </div>
  </div>
</div>

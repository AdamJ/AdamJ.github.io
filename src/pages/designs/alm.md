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
<section class="responsive">
  <div class="grid">
    <div class="s12">
      <article class="no-elevate secondary-container">
        <h6 class="col-sm-2">Role</h6>
        <p>Interaction Designer, Prototypes</p>
        <p>Areas</p>
        <p>Wireframes, user paths, usability, prototyping</p>
        <p>Challenge</p>
        <p>The greater project team was using multiple project management tools, code repositories, and application development processes, with none of them talking to each other. This project takes all of those areas of concern and brings them together into a single, cohesive interface.</p>
      </article>
    </div>
  </div>
  <div class="small-space"></div>
  <div class="grid">
    <div class="s12">
      <h2>The Process</h2>
      <p>Before starting on the Application Lifecycle Management project, it was determined that the following areas would be need to be covered: list of target users, a user flow, wireframes, and, potentially, prototypes for user testings and feasibility.</p>
    </div>
    <div class="s12">
      <h2>Target Users</h2>
      <p>Through discussions with Stakeholders and Project Management, it was decided that the target users would be set in tiers - <u>General Users</u> (those who need to add and interact with issues, update project assets, and interact daily - a mix of designers and developers); <u>Project Managers</u> (organizers of work, set deadlines and release dates), and <u>Administrators</u> (control any integrations, add-ons, and access).</p>
    </div>
    <div class="small-space"></div>
    <div class="s12">
      <h3>Application Lifecycle Management flow</h3>
      <div class="grid">
        <div class="s12 md6 l6">
          <article class="no-padding tertiary-container">
            <img class="responsive medium" src="{{ '/img/ALM_workflow.webp' | url }}" alt="Image of the ALM workflow" loading="lazy">
          </article>
          <div class="absolute bottom left right padding bottom-shadow white-text">
            <nav>
              <h5>User flows</h5>
              <div class="max"></div>
              <a href="{{ '/img/ALM_workflow.webp' | url }}" alt="Click to enlarge in new window" target="blank">
                <button class="circle tertiary-border">
                  <i>expand_content</i>
                </button>
              </a>
            </nav>
          </div>
        </div>
      </div>
    </div>
    <div class="small-space"></div>
    <div class="s12">
      <h3>Wireframes and Workflows</h3>
      <p>For each section of the ALM application, workflows and wireframes were used to identify possible user paths, as well as to strategize initial designs before moving on to high fidelity mockups and prototypes.</p>
      <h4>From Work Items to Development</h4>
      <p class="bold">Goals:</p>
      <ul>
        <li>Communicates to the user that direct access to developing the Work Item is available in a single click.</li>
        <li>Implementation is unobtrusive and implies navigation.</li>
        <li>Location will not accidentally be clicked, allowing for enough real estate for line lengths and other meta data. The location of the integration should also imply moving forward.</li>
        <li>Ordered by recommendation - require users to fill in one area before moving on.</li>
        <li>As a button, it needs to have a prominent place yet not take the place of a primary button (in style).</li>
      </ul>
      <p class="bold">Steps to complete the process:</p>
      <div class="grid">
        <div class="s12">
          <article class="no-padding">
            <div class="grid no-space">
              <div class="s12 m4">
                <img src="{{ '/img/ALM_step1.webp' | url }}" class="responsive" alt="Step 1 of the ALM wireframes">
              </div>
              <div class="s12 m4">
                <img src="{{ '/img/ALM_step2.webp' | url }}" class="responsive" alt="Step 2 of the ALM wireframes">
              </div>
              <div class="s12 m4">
                <img src="{{ '/img/ALM_step3.webp' | url }}" class="responsive" alt="Step 3 of the ALM wireframes">
              </div>
            </div>
          </article>
        </div>
      </div>
      <div class="small-space"></div>
      <div class="grid">
        <div class="s12">
          <article class="no-padding fill">
            <div class="grid no-space">
              <div class="s12 m6">
                <img src="{{ '/img/ALM_wireframe.webp' | url }}" class="responsive" alt="Wireframe of the work item to coding experience">
              </div>
              <div class="s12 m6">
                <div class="padding">
                  <h5>Wireframe</h5>
                  <p>This wireframe was created with call outs in order to communicate my thoughts around the design to anyone who saw it, but could not talk with me. Specifically, this worked extremely well when working with colleagues in other time zones where our working ours did not match up.</p>
                </div>
              </div>
            </div>
          </article>
        </div>
        <div class="s12">
          <p>From these workflows and wireframes, it was determined that additional questions needed to be answered:</p>
          <ul>
            <li>How do we handle accuracy between the linking of work items?</li>
            <li>If the work items has a fine name and line number, is the commit SHA also used to help identify the connection?</li>
            <li>Are we able to type the URL in a browser and navigate to the work item? (Does it have a unique link or is it randomly generated each time?)</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div class="medium-space"></div>
  <div class="grid">
    <div class="s12">
      <h3>Visual Design</h3>
      <p>After completing the wireframes and flows, a sample visual design was created. This design was created using the in-house design component library.</p>
      <div class="grid">
        <div class="s12 md6 l6">
          <article class="no-padding tertiary-container">
            <img class="responsive medium" src="{{ '/img/ALM_planner.webp' | url }}" alt="Image of the user flow" loading="lazy">
          </article>
          <div class="absolute bottom left right padding bottom-shadow white-text">
            <nav>
              <h5>Visual Design</h5>
              <div class="max"></div>
              <a href="{{ '/img/ALM_planner.webp' | url }}" alt="Click to enlarge in new window" target="blank">
                <button class="circle tertiary-border">
                  <i>expand_content</i>
                </button>
              </a>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="medium-space"></div>
  <div class="grid">
    <div class="s12">
      <h3>Prototyping</h3>
      <p>As part of the testing and usability study process, I created a prototype that demonstrated some of the basic layouts and IA for users to explore and provide feedback on. This process evolved over time and, eventually, became a full-fledged website that utilized static data and was continuously updated as users provided feedback.</p>
      <!-- Update link to use Cloudflare before showing on site -->
      <!-- <nav>
        <a href="https://www.adamjolicoeur.com/testing_environment/index.html" alt="Open prototype in new window" target="blank">
          <button class="rounded tertiary-border">
            View prototype
            <i>expand_content</i>
          </button>
        </a>
      </nav> -->
    </div>
  </div>
  <div class="medium-space"></div>
  <div class="grid">
    <div class="s12">
      <article class="primary-container">
        <h3>Final thoughts</h3>
        <p>
          In review, I believe that this process helped to flush out a great number of questions and concerns, while also demonstrating that their is a solid platform in which to build the full application on.
        </p>
        <p>
          The findings discovered through the process were taken to the Project Stakeholders, which were then used to create additional design stories and discussions with the development teams.</p>
      </article>
    </div>
  </div>
</div>

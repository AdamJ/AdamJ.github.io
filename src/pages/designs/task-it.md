---
title: "Task-It!"
date: git Last Modified
abbreviation: "task"
description: "One enterprise task management system to rule them all."
---
<script type="module">
  await Promise.allSettled([
    customElements.whenDefined('sl-image-comparer')
  ]);

  // Button, card, and rating are registered now! Add
  // the `ready` class so the UI fades in.
  document.body.classList.add('ready');
</script>
<section class="responsive">
  <div class="grid">
    <div class="s12">
      <article class="no-elevate secondary-container">
        <h6>Role</h6>
        <p>Lead Designer</p>
        <h6>Areas</h6>
        <p>User research, Wireframes, User journeys, Mockups, Prototyping</p>
        <h6>Problem</h6>
        <p>After more than a decade of minimal updates, multiple subscription services, and independent teams, it became apparent that a single, scalable solution was needed. This project was to replace the existing systems, eliminating costs and overhead.</p>
        <h6>Challenge</h6>
        <p>With multiple systems container millions of tasks (both current and historical) as well as a growing need for various integrations, it was apparent that the user base would be the biggest challenge. Creating something that could not only handle all of the various methods of work, but also the vast historical nature of teams, presented a very unique situation. Additionally, the product had to be one that all users could utilize, no matter their working method. This included, but was not limited to, users with accessibility needs, users who preferred "terminal" or "keyboard" commands, and those who relied on standard keyboard-mouse usage.</p>
        <h6>Constraints</h6>
        <p>The biggest constraint was that of time. As each day passed, users were onboarded to either the older solution or to products that required licenses and cost the company money. The team was given one year to put together an initial release to be announced at an upcoming conference.</p>
      </article>
    </div>
  </div>
  <div class="small-space"></div>
  <div class="grid">
    <div class="s12">
      <h3>The Process</h3>
      <p>Before any design work (wireframes, mockups, prototypes) could begin, extensive user research and testing was needed.</p>
      <p>Research methods with example questions:
        <ul>
          <li>User interviews
            <ul>
              <li>Ask users what their role is on their product team.</li>
              <li>What product(s) do they use to manage their work?</li>
              <li>If they do not use the existing internal product, why not?</li>
            </ul>
          </li>
          <li>Competitive analysis
            <ul>
              <li>What products are used internally, besides the previous internal-built system?</li>
              <li>Why are they used? What do they provide that the current internal system does not?</li>
            </ul>
          </li>
          <li>On-hand testing
            <ul>
              <li>As a user, I needed to work within the system we were working to replace so that I can find the issues that currently exist.</li>
              <li>Findings were compared against user interviews. Those interviews were also used as a basis for various testing methods.</li>
            </ul>
          </li>
          <li>Observe users
            <ul>
              <li>Watch how users use the products: where do they always visit? What tasks are they always performing?</li>
            </ul>
          </li>
        </ul>
      </p>
      <p>Once a baseline had been established, the first round of user flow diagrams and analysis took place. Each step in the various user flows had two goals:
        <ol>
          <li>Follow user expectations
            <ul>
              <li>Users expected to be able to perform basic tasks, such as creating work items, viewing work items, and organizing their work in a single system.</li>
            </ul>
          </li>
          <li>Simplify existing processes
            <ul>
              <li>Users would not accept a more complicated process. Interviews taught me that anything more complicated than what they had would be a deal-breaker for switching to, no matter the directives from management.</li>
            </ul>
          </li>
        </ol>
      </p>
    </div>
    <div class="s12">
      <h3>Target Audience</h3>
      <p>For the initial release (scoped internally as a "beta"), the target audience consisted of Individual Contributors (IC), with a mix of high-interaction and low-interaction users. These were categorized as "Contributors", "Owners", and "Viewers".</p>
      <ul>
        <li>Contributor
          <ul>
            <li>Those who actively added items to a team's task queue.</li>
          </ul>
        </li>
        <li>Owner
          <ul>
            <li>Individuals who were, at a high-level, responsible for the delivery and success daily and long-term tasks and goals. While not ICs, <strong>Owners</strong> had a direct hand in what tasks teams took on.</li>
          </ul>
        </li>
        <li>Viewer
          <ul>
            <li>Those who stayed on the "outside" of the day-to-day operations, but could influence the work taking place. <strong>Viewers</strong> were not considered to be a top-level user, but the entire process had to take into account their work. If things became harder for them to see/find, then they were likely to become a blocker to adoption.</li>
          </ul>
        </li>
      </ul>
      <p>After discussions with Project Management (PM), it was determined that the target audience would be broken down into tiers: <strong>Tier 1</strong> and <strong>Tier 2</strong>.
        <ul>
          <li><strong>Tier 1</strong> consisted of those who used the existing solutions multiple times per day and could assist with driving adoption. These were the <u>Contributors</u>.
          </li>
          <li><strong>Tier 2</strong> consisted of those who interactive with existing solutions on a weekly basis, and then only to monitor the work being done by those in Tier 1.
          </li>
        </ul>
      </p>
    </div>
    <div class="s12">
      <h3>User flows, Wireframes, and Mockups</h3>
      <p>For the initial Task Details view, user flows and wireframes were used to identify possible errors. The findings from this work would go on to determine the direction of the final mockups.</p>
      <div class="grid">
        <div class="s12 md6 l6">
          <article class="no-padding tertiary-container">
            <img class="responsive medium" src="{{ '/img/task-it_user-flow.png' | url }}" alt="Image of the user flow" loading="lazy">
          </article>
          <div class="absolute bottom left right padding bottom-shadow white-text">
            <nav>
              <h5>User flows</h5>
              <div class="max"></div>
              <a href="{{ '/img/task-it_user-flow.png' | url }}" alt="Click to enlarge in new window" target="blank">
                <button class="circle tertiary-border">
                  <i>expand_content</i>
                </button>
              </a>
            </nav>
          </div>
        </div>
        <div class="s12 md6 l6">
          <article class="no-padding tertiary-container">
            <img class="responsive medium" src="{{ '/img/task-it_user-states.png' | url }}" alt="Image of the various user flow states" loading="lazy">
          </article>
          <div class="absolute bottom left right padding bottom-shadow white-text">
            <nav>
              <h5>User states</h5>
              <div class="max"></div>
              <a href="{{ '/img/task-it_user-states.png' | url }}" alt="Click to enlarge in new window" target="blank">
                <button class="circle tertiary-border">
                  <i>expand_content</i>
                </button>
              </a>
            </nav>
          </div>
        </div>
      </div>
      <div class="small-space"></div>
      <div class="grid">
        <div class="s12">
          <h3>Initial findings</h3>
          <p>Based off of these user flows, I determined that the success and failures paths needed to be looked at further. Depending on the user, these paths had the potential to break experiences and decrease the usability and delight in the product.
          </p>
        </div>
        <div class="small-space"></div>
        <div class="s12">
          <div class="grid">
            <div class="s6">
              <h4>Wireframes</h4>
              <p>When creating wireframes, I start by taking an existing components (whether already in the application or from the component library in use) and lay out my page. From there, I begin to add some details (using the <code>redacted script</code> font) and basic headings. This is then reviewed with PM, Development, and, if available, fellow UX designers.</p>
            </div>
            <div class="s6">
              <h4>Mockups</h4>
              <p>After reviews have been completed on the wireframes, mockups are created. In my process, I utilize mockups to get the full look/feel of the page without interactions. Once completed, these are used for user testing as well as final review with the development team.</p>
            </div>
          </div>
        </div>
      </div>
      <div class="grid">
        <div class="s12">
          <sl-image-comparer position="50">
            <img
              slot="after"
              src="{{ '/img/task-it_task-details_wireframe.png' | url }}" class="figure-img img-fluid rounded" alt="Image of the task details wireframe" loading="lazy" style="width:100%;">
            <img
              slot="before"
              src="{{ '/img/task-it_task-details_mockup1.png' | url }}" class="figure-img img-fluid rounded" alt="Image of the first version of the task details mockup" loading="lazy" style="width:100%;">
          </sl-image-comparer>
        </div>
      </div>
    </div>
    <div class="small-space"></div>
    <div class="s12">
      <h2>Testing and Revisions</h2>
      <p>As part of the iterative process, I consistently looked at user feedback and heat-mapping to determine if there were any changes needed. From the beginning, it was known that additional attributes would be made available to users and that the Task Details page would have to be able to adapt accordingly.</p>
      <p>As part of the testing process, I created a card-sorting survey for users, where I included all of the existing attributes, as well as some future-planned attributes, and asked users to order them by priority. Priority was determined by the user, with the only prompt being "what attribute(s) are required for you to get your work done in the most efficient manner?".</p>
      <div class="s12 md6 l6">
        <article class="no-padding tertiary-container">
          <img class="responsive medium" src="{{ '/img/task-it_user-survey.png' | url }}" alt="Image of the user testing process" loading="lazy">
        </article>
        <div class="absolute bottom left right padding bottom-shadow white-text">
          <nav>
            <h5>User testing card sorting</h5>
            <div class="max"></div>
            <a href="{{ '/img/task-it_user-survey.png' | url }}" alt="Click to enlarge in new window" target="blank">
              <button class="circle tertiary-border">
                <i>expand_content</i>
              </button>
            </a>
          </nav>
        </div>
      </div>
    </div>
    <div class="small-space"></div>
    <div class="s12">
      <h2>Revisions</h2>
      <p>After analyzing the results of the card-sorting user testing, additional mockups were created to task with the updated attribute priorities.</p>
      <div class="grid">
        <div class="s12 m4">
          <article class="no-padding tertiary-container">
            <img class="responsive medium" src="{{ '/img/task-it_task-details_mockup2.png' | url }}" alt="Image of the user testing process" loading="lazy">
          </article>
          <div class="absolute bottom left right padding bottom-shadow white-text">
            <nav>
              <h5>Version 2</h5>
              <div class="max"></div>
              <a href="{{ '/img/task-it_task-details_mockup2.png' | url }}" alt="Click to enlarge in new window" target="blank">
                <button class="circle tertiary-border">
                  <i>expand_content</i>
                </button>
              </a>
            </nav>
          </div>
        </div>
        <div class="s12 m4">
          <article class="no-padding tertiary-container">
            <img class="responsive medium" src="{{ '/img/task-it_task-details_mockup3.png' | url }}" alt="Image of the user testing process" loading="lazy">
          </article>
          <div class="absolute bottom left right padding bottom-shadow white-text">
            <nav>
              <h5>Version 3</h5>
              <div class="max"></div>
              <a href="{{ '/img/task-it_task-details_mockup3.png' | url }}" alt="Click to enlarge in new window" target="blank">
                <button class="circle tertiary-border">
                  <i>expand_content</i>
                </button>
              </a>
            </nav>
          </div>
        </div>
        <div class="s12 m4">
          <article class="no-padding tertiary-container">
            <img class="responsive medium" src="{{ '/img/task-it_task-details_mockup4.png' | url }}" alt="Image of the user testing process" loading="lazy">
          </article>
          <div class="absolute bottom left right padding bottom-shadow white-text">
            <nav>
              <h5>Version 4</h5>
              <div class="max"></div>
              <a href="{{ '/img/task-it_task-details_mockup4.png' | url }}" alt="Click to enlarge in new window" target="blank">
                <button class="circle tertiary-border">
                  <i>expand_content</i>
                </button>
              </a>
            </nav>
          </div>
        </div>
      </div>
      <div class="medium-space"></div>
      <div class="grid">
        <div class="s12">
          <article class="primary-container">
            <h5>Final thoughts</h5>
            <p>Throughout the design process, it became clear that although the initial design solved many of the problems users faced with existing systems, there was plenty of room in which to improve.
            </p>
            <p>From the user testing sessions, specifically card sorting, I was able to adjust the layout and direction of the task details page without negatively impact user's experiences.</p>
            <p>By working the development team, we were able to quickly role out changes to users and compare the new metrics to those of previous iterations. These metrics became the new baseline for future designs and detail screens across the product.</p>
          </article>
        </div>
      </div>
    </div>
  </div>
</div>

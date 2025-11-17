---
title: "Task-It!"
date: git Last Modified
abbreviation: "task"
description: "One enterprise task management system to rule them all."
---

<section>
  <div class="card">
    <div class="mb-3">
      <p class="text-h6">Role</p>
      <span class="badge badge-accent">Lead Designer</span>
    </div>
    <div class="mb-3">
      <p class="text-h6">Areas</p>
      <div class="badges">
        <span class="badge badge-outline">User research</span><span class="badge badge-outline">Wireframes</span><span class="badge badge-outline">User journeys</span><span class="badge badge-outline">Mockups</span><span class="badge badge-outline">Prototyping</span>
      </div>
    </div>
    <div class="mb-3">
      <p class="text-h6">Problem</p>
      <p>
        After more than a decade of minimal updates, multiple subscription services, and independent teams, it became apparent that a single, scalable solution was needed. This project was to replace the existing systems, eliminating costs and overhead.
      </p>
    </div>
    <div class="mb-3">
      <p class="text-h6 mb-0">Challenge</p>
      <p>
        With multiple systems container millions of tasks (both current and historical) as well as a growing need for various integrations, it was apparent that the user base would be the biggest challenge. Creating something that could not only handle all of the various methods of work, but also the vast historical nature of teams, presented a very unique situation. Additionally, the product had to be one that <i>all</i> users could utilize, no matter their working method. This included, but was not limited to, users with accessibility needs, users who preferred "terminal" or "keyboard" commands, and those who relied on standard keyboard-mouse usage.
      </p>
    </div>
    <div class="mb-3">
      <p class="text-h6">Constraints</p>
      <p>
        The biggest constraint was that of time. As each day passed, users were onboarded to either the older solution or to products that required licenses and cost the company money. The team was given one year to put together an initial release to be announced at an upcoming conference.
      </p>
    </div>
  </div>
</section>
<section>
  <h2>The Process</h2>
  <p class="text-h3 mb-4">Before any design work (wireframes, mockups, prototypes) could begin, extensive user research and testing was needed.</p>
  <div class="card">
    <p class="text-h6">Research methods with example questions:
      <ol class="ml-4">
        <li class="mt-2"><strong>User interviews</strong>
          <ul class="ml-4">
            <li>Ask users what their role is on their product team.</li>
            <li>What product(s) do they use to manage their work?</li>
            <li>If they do not use the existing internal product, why not?</li>
          </ul>
        </li>
        <li class="mt-2"><strong>Competitive analysis</strong>
          <ul class="ml-4">
            <li>What products are used internally, besides the previous internal-built system?</li>
            <li>Why are they used? What do they provide that the current internal system does not?</li>
          </ul>
        </li>
        <li class="mt-2"><strong>On-hand testing</strong>
          <ul class="ml-4">
            <li>As a user, I needed to work within the system we were working to replace so that I can find the issues that currently exist.</li>
            <li>Findings were compared against user interviews. Those interviews were also used as a basis for various testing methods.</li>
          </ul>
        </li>
        <li class="mt-2"><strong>Observe users</strong>
          <ul>
            <li>Watch how users use the products: where do they always visit? What tasks are they always performing?</li>
          </ul>
        </li>
      </ol>
    </p>
  </div>
  <div class="card mt-4">
    <p class="text-h6">Once a baseline had been established, the first round of user flow diagrams and analysis took place. Each step in the various user flows had two goals:
      <ol class="ml-4">
        <li class="mt-2"><strong>Follow user expectations</strong>
          <ul class="ml-4">
            <li>Users expected to be able to perform basic tasks, such as creating work items, viewing work items, and organizing their work in a single system.</li>
          </ul>
        </li>
        <li class="mt-2"><strong>Simplify existing processes</strong>
          <ul class="ml-4">
            <li>Users would not accept a more complicated process. Interviews taught me that anything more complicated than what they had would be a deal-breaker for switching to, no matter the directives from management.</li>
          </ul>
        </li>
      </ol>
    </p>
  </div>
</section>
<section>
  <h2 id="targetaudience">Target Audience</h2>
  <p class="text-h3 mb-4">For the initial release (scoped internally as a "beta"), the target audience consisted of Individual Contributors (IC), with a mix of high-interaction and low-interaction users. These were categorized as "Contributors", "Owners", and "Viewers".</p>
  <div class="card">
    <ol class="ml-4">
      <li><strong>Contributor</strong>
        <ul class="ml-4">
          <li>Those who actively added items to a team's task queue.</li>
        </ul>
      </li>
      <li><strong>Owner</strong>
        <ul class="ml-4">
          <li>Individuals who were, at a high-level, responsible for the delivery and success daily and long-term tasks and goals. While not ICs, <strong>Owners</strong> had a direct hand in what tasks teams took on.</li>
        </ul>
      </li>
      <li><strong>Viewer</strong>
        <ul class="ml-4">
          <li>Those who stayed on the "outside" of the day-to-day operations, but could influence the work taking place. <strong>Viewers</strong> were not considered to be a top-level user, but the entire process had to take into account their work. If things became harder for them to see/find, then they were likely to become a blocker to adoption.</li>
        </ul>
      </li>
    </ol>
  </div>
  <p class="text-h4 mt-4 mb-4">After discussions with Project Management (PM), it was determined that the target audience would be broken down into tiers: <strong>Tier 1</strong> and <strong>Tier 2</strong>.
  </p>
  <div class="card">
    <ol class="ml-4">
      <li>
        <strong>Tier 1</strong> consisted of those who used the existing solutions multiple times per day and could assist with driving adoption. These were the <u>Contributors</u>.
      </li>
      <li>
        <strong>Tier 2</strong> consisted of those who interactive with existing solutions on a weekly basis, and then only to monitor the work being done by those in Tier 1.
      </li>
    </ol>
  </div>
</section>
<section>
  <h2 id="userflows">User flows, Wireframes, and Mockups</h2>
  <p class="text-h3 mb-4">For the initial Task Details view, user flows and wireframes were used to identify possible errors. The findings from this work would go on to determine the direction of the final mockups.</p>
  <div class="card mb-4">
    <div class="card-header text-h5">User flows</div>
    <div class="card-body">
      <figure class="figure">
        <img src="../../assets/img/task-it_user-flow.webp" class="figure-img img-fluid rounded" alt="Image of the user flow" loading="lazy">
      </figure>
    </div>
  </div>
  <div class="card mb-4">
    <div class="card-header text-h5">User states</div>
    <div class="card-body">
      <figure class="figure">
        <img src="../../assets/img/task-it_user-states.webp" class="figure-img img-fluid rounded" alt="Image of the various user flow states" loading="lazy">
      </figure>
    </div>
  </div>
</section>
<section>
  <h2 id="initialfindings">Initial findings</h2>
  <p>Based off of these user flows, I determined that the success and failures paths needed to be looked at further. Depending on the user, these paths had the potential to break experiences and decrease the usability and delight in the product.</p>
  <h3 class="mt-4 mb-2">Wireframes</h3>
  <p>When creating wireframes, I start by taking an existing components (whether already in the application or from the component library in use) and lay out my page. From there, I begin to add some details (using the <code>redacted script</code> font) and basic headings. This is then reviewed with PM, Development, and, if available, fellow UX designers.</p>
  <h3 class="mt-4 mb-2">Mockups</h3>
  <p>After reviews have been completed on the wireframes, mockups are created. In my process, I utilize mockups to get the full look/feel of the page without interactions. Once completed, these are used for user testing as well as final review with the development team.</p>
  <div class="row no-wrap pt-3">
    <div class="card card-simple">
      <div class="card-header text-h5">Wireframe</div>
      <div class="card-body">
        <img
          slot="after"
          src="../../assets/img/task-it_task-details_wireframe.webp" class="figure-img img-fluid rounded" alt="Image of the task details wireframe" loading="lazy">
      </div>
    </div>
    <div class="card card-simple">
      <div class="card-header text-h5">Mockup</div>
      <div class="card-body">
        <img
          slot="before"
          src="../../assets/img/task-it_task-details_mockup1.webp" class="figure-img img-fluid rounded" alt="Image of the first version of the task details mockup" loading="lazy">
      </div>
    </div>
  </div>
</section>
<section>
  <h2 id="testingandrevisions">Testing and Revisions</h2>
  <p class="mb-4">As part of the iterative process, I consistently looked at user feedback and heat-mapping to determine if there were any changes needed. From the beginning, it was known that additional attributes would be made available to users and that the Task Details page would have to be able to adapt accordingly.</p>
  <p class="mb-4">As part of the testing process, I created a card-sorting survey for users, where I included all of the existing attributes, as well as some future-planned attributes, and asked users to order them by priority. Priority was determined by the user, with the only prompt being "what attribute(s) are required for you to get your work done in the most efficient manner?".</p>
  <div class="card card-simple">
    <div class="card-header text-h5">User Survey</div>
    <div class="card-body">
      <img src="../../assets/img/task-it_user-survey.webp" class="rounded" alt="Image of the user testing process" loading="lazy">
    </div>
  </div>
  <h3 class="mt-4 mb-2">Revisions</h3>
  <p class="mb-4">After analyzing the results of the card-sorting user testing, additional mockups were created to task with the updated attribute priorities.</p>
  <div class="row no-wrap pt-3">
    <div class="card">
      <div class="card-header text-h5">Revision 1</div>
      <div class="card-body">
        <img src="../../assets/img/task-it_task-details_mockup2.webp" class="rounded" alt="Image of the first version of the task details mockup">
      </div>
    </div>
    <div class="card">
      <div class="card-header text-h5">Revision 2</div>
      <div class="card-body">
        <img src="../../assets/img/task-it_task-details_mockup3.webp" class="rounded" alt="Image of the second version of the task details mockup">
      </div>
    </div>
    <div class="card">
      <div class="card-header text-h5">Revision 3</div>
      <div class="card-body">
        <img src="../../assets/img/task-it_task-details_mockup4.webp" class="rounded" alt="Image of the third version of the task details mockup">
      </div>
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
      <p>Throughout the design process, it became clear that although the initial design solved many of the problems users faced with existing systems, there was plenty of room in which to improve.
      </p>
      <p>From the user testing sessions, specifically card sorting, I was able to adjust the layout and direction of the task details page without negatively impact user's experiences.</p>
      <p>By working the development team, we were able to quickly role out changes to users and compare the new metrics to those of previous iterations. These metrics became the new baseline for future designs and detail screens across the product.</p>
    </div>
  </div>
</section>

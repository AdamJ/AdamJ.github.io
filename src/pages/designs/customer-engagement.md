---
title: "Customer Engagement App"
date: git Last Modified
abbreviation: "cea"
description: "For this project, I was tasked with improving the overall user experience for tracking customer engagement and marketing campaigns. This project included creating color palettes, new UI components, personas, and user journeys."
eleventyNavigation:
  key: Designs
  parent: Designs
  order: 3
---

<section class="responsive">
  <div class="grid">
    <div class="s12">
      <article class="no-elevate secondary-container">
        <h6>Role</h6>
        <p>Interaction Designer, Visual Designer</p>
        <h6>Areas</h6>
        <p>Wireframes, Visual Designs</p>
        <h6>Challenge</h6>
        <p>For this project, I was tasked with updating an old user interface to increase usability and visual styling to match a more modern aesthetic.</p>
      </article>
    </div>
  </div>
</section>
<div class="small-space"></div>
<section class="responsive">
  <div class="grid">
    <div class="s12">
      <h2>Goals</h2>
      <p>The goals of this project were to <em>improve</em> efficiency, <em>upgrade</em> the visual aesthetic, and <em>enhance</em> visual awareness.</p>
    </div>
    <div class="s12">
      <h3>Sitemap (alpha)</h3>
      <p>Before starting on the updated design for the Customer Engagement App (CEA), I first took to creating an updated sitemap. This allowed me to set a basic path for users to navigate through the application, while also separating the pieces of the application into useful areas.</p>
      <div class="text-align-center">
        <sl-dialog label="Dialog" class="alm-workflow" style="--width: 80vw;">
          <img src="{{ '/img/Sitemap_alpha.png' | url }}" class="d-block mx-lg-auto img-fluid" alt="Sitemap for the alpha version of the Customer Engagement App">
          <sl-button slot="footer" variant="neutral">
            Close
          </sl-button>
        </sl-dialog>
        <sl-button><img src="{{ '/img/Sitemap_alpha.png' | url }}" class="d-block mx-lg-auto img-fluid" alt="Sitemap for the alpha version of the Customer Engagement App" width="500" height="300" loading="lazy"></sl-button>
        <script>
          const dialog = document.querySelector('.alm-workflow');
          const openButton = dialog.nextElementSibling;
          const closeButton = dialog.querySelector('sl-button[slot="footer"]');
          openButton.addEventListener('click', () => dialog.show());
          closeButton.addEventListener('click', () => dialog.hide());
        </script>
      </div>
    </div>
    <div class="s12">
      <h3>Wireframes</h3>
      <p>I created a set of wireframes that could be quickly iterated on for presenting ideas to project stakeholders and other interested parties.</p>
      <div class="text-center">
        <img src="{{ '/img/CEA_wireframe_first.png' | url }}" class="d-block mx-lg-auto img-fluid mb-3"  width="500" height="300" loading="lazy" alt="Example visual design for the navigation variations in the Customer Engagement App">
        <br />
        <sl-button pill href="{{ '/img/CEA_Dashboard_Overview.pdf' | url }}" target="_blank">View PDF<sl-visually-hidden>Open PDF in new window</sl-visually-hidden></sl-button>
        <script>
          const wireframeDialog = document.querySelector('.cea-wireframe');
          const openWireframe = wireframeDialog.nextElementSibling;
          const closeWireframe = wireframeDialog.querySelector('sl-button[slot="footer"]');
          openWireframe.addEventListener('click', () => wireframeDialog.show());
          closeWireframe.addEventListener('click', () => wireframeDialog.hide());
        </script>
      </div>
    </div>
    <div class="s12">
      <h3>Visual Designs</h3>
      <p>These visual designs are a small sampling of the final screens that were implemented as part of the completion of this project. The Dashboard, Reporting screen, and Settings page were considered the high-value items and contained the majority of the different components that would be used across the project. This set the baseline for future screens and allowed the development team to create a component library in which to build upon.</p>
      <div class="grid">
        <div class="s12 m6 l6">
          <article class="no-padding tertiary-container">
            <img class="responsive medium" src="{{ '/img/CEA_Dashboard.png' | url }}" class="d-block mx-lg-auto img-fluid" alt="Example visual design for the primary dashboard in the Customer Engagement App" loading="lazy" />
          </article>
          <div class="absolute bottom left right padding bottom-shadow white-text">
            <nav>
              <h5>Application Dashboard</h5>
              <div class="max"></div>
              <a href="{{ '/img/CEA_Dashboard.png' | url }}" alt="Example visual design for the primary dashboard in the Customer Engagement App" target="blank">
                <button class="circle tertiary-border">
                  <i>expand_content</i>
                </button>
              </a>
            </nav>
          </div>
        </div>
        <div class="s12 m6 l6">
          <article class="no-padding tertiary-container">
            <img class="responsive medium" src="{{ '/img/CEA_Engagement.png' | url }}" class="d-block mx-lg-auto img-fluid" alt="CEA Engagement Dashboard" loading="lazy" />
          </article>
          <div class="absolute bottom left right padding bottom-shadow white-text">
            <nav>
              <h5>Engagement Reporting</h5>
              <div class="max"></div>
              <a href="{{ '/img/CEA_Engagement.png' | url }}" alt="Open the CEA Engagement Dashboard example in a new tab" target="blank">
                <button class="circle tertiary-border">
                  <i>expand_content</i>
                </button>
              </a>
            </nav>
          </div>
        </div>
      </div>
      <div class="grid">
        <div class="s12 m6 l6">
          <article class="no-padding tertiary-container">
            <img class="responsive medium" src="{{ '/img/CEA_Settings.png' | url }}" class="d-block mx-lg-auto img-fluid" alt="Example visual design for the settings page in the Customer Engagement App" loading="lazy" />
          </article>
          <div class="absolute bottom left right padding bottom-shadow white-text">
            <nav>
              <h5>Settings</h5>
              <div class="max"></div>
              <a href="{{ '/img/CEA_Settings.png' | url }}" alt="Open the CEA Settings example in a new tab" target="blank">
                <button class="circle tertiary-border">
                  <i>expand_content</i>
                </button>
              </a>
            </nav>
          </div>
        </div>
      </div>
      <div class="small-space"></div>
      <p class="italic">The color palette and simplified component examples were some of the first items created, in order to provide the development team with a baseline in which to build the environment from.</p>
      <div class="small-space"></div>
      <div class="grid">
        <div class="s12 m6">
          <article class="no-padding tertiary-container">
            <img class="responsive medium" src="{{ '/img/CEA_Palette.png' | url }}" class="d-block mx-lg-auto img-fluid" alt="Example visual design for the settings page in the Customer Engagement App" loading="lazy" />
          </article>
          <div class="absolute bottom left right padding bottom-shadow white-text">
            <nav>
            <h5>Color palette</h5>
            <div class="max"></div>
            <a href="{{ '/img/CEA_Palette.png' | url }}" alt="Open the CEA Color Palette example in a new tab" target="blank">
              <button class="circle tertiary-border">
                <i>expand_content</i>
              </button>
            </a>
          </div>
        </div>
        <div class="s12 m6">
          <article class="no-padding tertiary-container">
            <img class="responsive medium" src="{{ '/img/CEA_AssetExamples.png' | url }}" class="d-block mx-lg-auto img-fluid" alt="An example of the types of components found in the Customer Engagement App" loading="lazy" />
          </article>
          <div class="absolute bottom left right padding bottom-shadow white-text">
            <nav>
            <h5>Component Examples</h5>
            <div class="max"></div>
            <a href="{{ '/img/CEA_AssetExamples.png' | url }}" alt="Open the CEA Assets example in a new tab" target="blank">
              <button class="circle tertiary-border">
                <i>expand_content</i>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="s12">
      <div class="grid">
        <div class="s12 m6">
          <article class="no-padding tertiary-container">
            <img class="responsive medium" src="{{ '/img/CEA_Navigation.png' | url }}" class="d-block mx-lg-auto img-fluid" alt="Example visual design for the navigation variations in the Customer Engagement App" loading="lazy" />
          </article>
          <div class="absolute bottom left right padding bottom-shadow white-text">
            <nav>
            <h5>Component Examples</h5>
            <div class="max"></div>
            <a href="{{ '/img/CEA_Navigation.png' | url }}" alt="Open the CEA navigation example in a new tab" target="blank">
              <button class="circle tertiary-border">
                <i>expand_content</i>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="medium-space"></div>
  <div class="grid">
    <div class="s12">
      <article class="primary-container">
        <h5>Final thoughts</h5>
        <p>I believe that the process used for this project, albeit different, fit within the framework given and met all of the requirements as laid out by the Project Management Team. In the end, a new interface was created that met all of the requirements and was based off of clear steps and proper research. Competitively, this new design met, and often surpassed, expectations when compared to what was in use prior to this project.
        </p>
      </article>
    </div>
  </div>
</section>

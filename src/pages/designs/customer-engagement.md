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
      <dl>
        <dt class="col-sm-2">Role</dt>
        <dd class="col-sm-10">Interaction Designer, Visual Designer</dd>
        <dt class="col-sm-2">Areas</dt>
        <dd class="col-sm-10">Wireframes, Visual Designs</dd>
        <dt class="col-sm-2">Challenge</dt>
        <dd class="col-sm-10">For this project, I was tasked with updating an old user interface to increase usability and visual styling to match a more modern aesthetic.</dd>
      </dl>
      </article>
    </div>
  </div>
</section>
<div class="small-space"></div>
<section class="responsive">
  <div class="grid">
    <div class="s12">
      <h2>Goals</h2>
      <p>The goals of this project were to <i>improve</i> efficiency, <i>upgrade</i> the visual aesthetic, and <i>enhance</i> visual awareness.</p>
    </div>
    <div class="s12">
      <h2>Sitemap (alpha)</h2>
      <p>Before starting on the updated design for the Customer Engagement App (CEA), I first took to creating an updated sitemap. This allowed me to set a basic path for users to navigate through the application, while also separating the pieces of the application into useful areas.</p>
      <div class="text-align-center">
        <sl-dialog label="Dialog" class="alm-workflow" style="--width: 80vw;">
          <img src="../../img/Sitemap_alpha.png" class="d-block mx-lg-auto img-fluid" alt="Sitemap for the alpha version of the Customer Engagement App">
          <sl-button slot="footer" variant="neutral">
            Close
          </sl-button>
        </sl-dialog>
        <sl-button><img src="../../img/Sitemap_alpha.png" class="d-block mx-lg-auto img-fluid" alt="Sitemap for the alpha version of the Customer Engagement App" width="500" height="300" loading="lazy"></sl-button>
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
      <h2>Wireframes</h2>
      <p>I created a set of wireframes that could be quickly iterated on for presenting ideas to project stakeholders and other interested parties.</p>
      <div class="text-center">
        <img src="../../img/CEA_wireframe_first.png" class="d-block mx-lg-auto img-fluid mb-3"  width="500" height="300" loading="lazy" alt="Example visual design for the navigation variations in the Customer Engagement App">
        <sl-button href="../../img/CEA_Dashboard_Overview.pdf" target="_blank">View PDF<sl-visually-hidden>Open PDF in new window</sl-visually-hidden></sl-button>
        <script>
          const wireframeDialog = document.querySelector('.cea-wireframe');
          const openWireframe = wireframeDialog.nextElementSibling;
          const closeWireframe = wireframeDialog.querySelector('sl-button[slot="footer"]');
          openWireframe.addEventListener('click', () => wireframeDialog.show());
          closeWireframe.addEventListener('click', () => wireframeDialog.hide());
        </script>
      </div>
      <h2>Visual Designs</h2>
      <p>These visual designs are a small sampling of the final screens that were implemented as part of the completion of this project. The Dashboard, Reporting screen, and Settings page were considered the high-value items and contained the majority of the different components that would be used across the project. This set the baseline for future screens and allowed the development team to create a component library in which to build upon.</p>
      <div class="row align-items-md-stretch">
        <div class="col-md-6">
          <div class="h-100 p-5 rounded-3" style="background-color: #333742;">
            <h2 class="text-align-center text-white">Application Dashboard</h2>
            <div class="text-align-center">
              <sl-dialog label="CEA Application Dashboard" class="cea-dashboard" style="--width: 80vw;">
                <img src="../../img/CEA_Dashboard.png" class="d-block mx-lg-auto img-fluid" alt="Example visual design for the primary dashboard in the Customer Engagement App">
                <sl-button slot="footer" variant="neutral">
                  Close
                </sl-button>
              </sl-dialog>
              <sl-button><img src="../../img/CEA_Dashboard.png" class="d-block mx-lg-auto img-fluid" alt="Example visual design for the primary dashboard in the Customer Engagement App" width="500" height="300" loading="lazy"></sl-button>
              <script>
                const dashboardDialog = document.querySelector('.cea-dashboard');
                const openDashboardButton = dashboardDialog.nextElementSibling;
                const closeDashboardButton = dashboardDialog.querySelector('sl-button[slot="footer"]');
                openDashboardButton.addEventListener('click', () => dashboardDialog.show());
                closeDashboardButton.addEventListener('click', () => dashboardDialog.hide());
              </script>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="h-100 p-5 text-dark bg-light rounded-3">
            <h2>Engagement Reporting</h2>
            <div class="text-align-center">
              <sl-dialog label="CEA Engagement Dashboard" class="cea-engagement" style="--width: 80vw;">
                <img src="../../img/CEA_Engagement.png" class="d-block mx-lg-auto img-fluid" alt="Example visual design for the engagement dashboard in the Customer Engagement App">
                <sl-button slot="footer" variant="neutral">
                  Close
                </sl-button>
              </sl-dialog>
              <sl-button><img src="../../img/CEA_Engagement.png" class="d-block mx-lg-auto img-fluid" alt="Example visual design for the engagement dashboard in the Customer Engagement App" width="500" height="300" loading="lazy"></sl-button>
              <script>
                const engagementDialog = document.querySelector('.cea-engagement');
                const openEngagementButton = engagementDialog.nextElementSibling;
                const closeEngagementButton = engagementDialog.querySelector('sl-button[slot="footer"]');
                openEngagementButton.addEventListener('click', () => engagementDialog.show());
                closeEngagementButton.addEventListener('click', () => engagementDialog.hide());
              </script>
            </div>
          </div>
        </div>
      </div>
      <div class="row align-items-md-stretch">
        <div class="col-md-6">
          <div class="h-100 p-5 text-dark bg-light rounded-3">
            <h2 class="text-align-center">Settings</h2>
            <div class="text-align-center">
              <sl-dialog label="CEA Settings" class="cea-settings" style="--width: 80vw;">
                <img src="../../img/CEA_Settings.png" class="d-block mx-lg-auto img-fluid" alt="Example visual design for the settings page in the Customer Engagement App">
                <sl-button slot="footer" variant="neutral">
                  Close
                </sl-button>
              </sl-dialog>
              <sl-button><img src="../../img/CEA_Settings.png" class="d-block mx-lg-auto img-fluid" alt="Example visual design for the settings page in the Customer Engagement App" width="500" height="300" loading="lazy"></sl-button>
              <script>
                const settingsDialog = document.querySelector('.cea-settings');
                const openSettingsButton = settingsDialog.nextElementSibling;
                const closeSettingsButton = settingsDialog.querySelector('sl-button[slot="footer"]');
                openSettingsButton.addEventListener('click', () => settingsDialog.show());
                closeSettingsButton.addEventListener('click', () => settingsDialog.hide());
              </script>
            </div>
          </div>
        </div>
      </div>
      <br>
      <p class="lead">The color palette and simplified component examples were some of the first items created, in order to provide the development team with a baseline in which to build the environment from.</p>
      <div class="row align-items-md-stretch">
        <div class="col-md-6">
          <div class="h-100 p-5 rounded-3" style="background-color: #333742;">
            <h2 class="text-align-center text-white">Color Palette</h2>
            <div class="text-align-center">
              <sl-dialog label="Color palette" class="cea-palette" style="--width: 80vw;">
                <img src="../../img/CEA_Palette.png" class="d-block mx-lg-auto img-fluid" alt="Color palette created for the Customer Engagement App">
                <sl-button slot="footer" variant="neutral">
                  Close
                </sl-button>
              </sl-dialog>
              <sl-button><img src="../../img/CEA_Palette.png" class="d-block mx-lg-auto img-fluid" alt="Color palette created for the Customer Engagement App" width="500" height="300" loading="lazy"></sl-button>
              <script>
                const paletteDialog = document.querySelector('.cea-palette');
                const openPaletteButton = paletteDialog.nextElementSibling;
                const closePaletteButton = paletteDialog.querySelector('sl-button[slot="footer"]');
                openPaletteButton.addEventListener('click', () => paletteDialog.show());
                closePaletteButton.addEventListener('click', () => paletteDialog.hide());
              </script>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="h-100 p-5 text-dark bg-light rounded-3">
            <h2>Component Examples</h2>
            <div class="text-align-center">
              <sl-dialog label="Asset examples" class="cea-assets" style="--width: 80vw;">
                <img src="../../img/CEA_AssetExamples.png" class="d-block mx-lg-auto img-fluid" alt="An example of the types of components found in the Customer Engagement App">
                <sl-button slot="footer" variant="neutral">
                  Close
                </sl-button>
              </sl-dialog>
              <sl-button><img src="../../img/CEA_AssetExamples.png" class="d-block mx-lg-auto img-fluid" alt="An example of the types of components found in the Customer Engagement App" width="500" height="300" loading="lazy"></sl-button>
              <script>
                const assetsDialog = document.querySelector('.cea-assets');
                const openAssetsButton = assetsDialog.nextElementSibling;
                const closeAssetsButton = assetsDialog.querySelector('sl-button[slot="footer"]');
                openAssetsButton.addEventListener('click', () => assetsDialog.show());
                closeAssetsButton.addEventListener('click', () => assetsDialog.hide());
              </script>
            </div>
          </div>
        </div>
      </div>
      <div class="row align-items-md-stretch">
        <div class="col-md-6">
          <div class="h-100 p-5 text-dark bg-light rounded-3">
            <h2>Navigation</h2>
            <div class="text-align-center">
              <sl-dialog label="Navigation" class="cea-navigation" style="--width: 80vw;">
                <img src="../../img/CEA_Navigation.png" class="d-block mx-lg-auto img-fluid" alt="Example visual design for the navigation variations in the Customer Engagement App">
                <sl-button slot="footer" variant="neutral">
                  Close
                </sl-button>
              </sl-dialog>
              <sl-button><img src="../../img/CEA_Navigation.png" class="d-block mx-lg-auto img-fluid" alt="Example visual design for the navigation variations in the Customer Engagement App" width="500" height="300" loading="lazy"></sl-button>
              <script>
                const navigationDialog = document.querySelector('.cea-navigation');
                const openNavigationButton = navigationDialog.nextElementSibling;
                const closeNavigationButton = navigationDialog.querySelector('sl-button[slot="footer"]');
                openNavigationButton.addEventListener('click', () => navigationDialog.show());
                closeNavigationButton.addEventListener('click', () => navigationDialog.hide());
              </script>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-5 mb-3">
        <sl-card class="card-header">
          <div slot="header">
            <h3 class="p-0">Final thoughts</h3>
          </div>
          <p>I believe that the process used for this project, albeit different, fit within the framework given and met all of the requirements as laid out by the Project Management Team. In the end, a new interface was created that met all of the requirements and was based off of clear steps and proper research. Competitively, this new design met, and often surpassed, expectations when compared to what was in use prior to this project.</p>
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

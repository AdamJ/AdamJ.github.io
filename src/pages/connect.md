---
title: "connect"
abbreviation: "connect"
description:
header: "Reach out, let's connect"
---
<div class="container px-0 mx-0 mx-md-auto">
  <div class="row px-0 mx-0">
    <div class="col-12 col-md-4 offset-md-4">
      <sl-card class="card-image py-2">
        <img
          slot="image"
          src="{{ '/img/linkedin_card.png' | url }}"
          alt="Banner image from LinkedIn profile"
        />
        <sl-button href="https://www.linkedin.com/in/ajjolicoeur/" target="_blank" style="width: 100%;" size="large"><sl-icon name="linkedin"></sl-icon> Connect on LinkedIn</sl-button>
      </sl-card>
      <sl-card class="card-image py-2">
        <img
          slot="image"
          src="https://github-readme-stats.vercel.app/api?username=adamj&rank_icon=github&show_icons=true"
          alt="GitHub statistics widget"
        />
        <sl-button href="https://github.com/AdamJ" target="_blank" style="width: 100%;" size="large"><sl-icon name="github"></sl-icon> README on GitHub</sl-button>
      </sl-card>
    </div>
  </div>
</div>
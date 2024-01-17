---
title: "contact"
abbreviation: "contact"
description: "make first contact"
---

<div class="container-xxl mb-2 py-2 px-md-5">
  <div class="row px-3 pb-3 justify-content-between gap-2">
    <div class="col-12 col-md card mb-3 px-0">
      <div class="row g-0">
        <div class="col-12 col-lg-4">
          <img src="{{ "/img/headshot-hires.jpg" | url }}" class="img-fluid rounded-start" alt="Headshot image" height="150px" width="234px">
        </div>
        <div class="col-12 col-lg-8">
          <div class="card-body">
            <h5 class="card-title">LinkedIn</h5>
            <p class="card-text">{{ meta.linkedinDescription }}</p>
            <a class="btn btn-dark" href="{{ meta.linkedinURL | url }}" target="top" alt="Link to my LinkedIn profile">View profile</a>
          </div>
        </div>
      </div>
    </div>
    <div class="col-12 col-md card mb-3 px-0">
      <div class="row g-0">
        <div class="col-12 col-lg-4">
          <img src="{{ "/img/avatar-hires.jpg" | url }}" class="img-fluid rounded-start" alt="Avatar image">
        </div>
        <div class="col-12 col-lg-8">
          <div class="card-body">
            <h5 class="card-title">GitHub</h5>
            <p class="card-text">{{ meta.githubDescription }}</p>
            <a class="btn btn-dark" href="{{ meta.githubURL | url }}" target="top" alt="Link to my GitHub profile">View profile</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- <div class="container-xxl mb-2 py-2 px-md-5">
  <div class="row px-3 pb-3 justify-content-center">
    <div class="col-12 col-md-8 col-lg-6">
      <div class="card">
        <h5 class="card-header">
          Contact form
        </h5>
        <div class="card-body">
          <script charset="utf-8" type="text/javascript" src="//js.hsforms.net/forms/embed/v2.js"></script>
          <script>
            hbspt.forms.create({
              region: "na1",
              portalId: "39536419",
              formId: "5a4a2b2c-734a-47e2-ad79-26ad4c69e172"
            });
          </script>
        </div>
      </div>
    </div>
  </div>
</div> -->

---
title: "contact"
abbreviation: "contact"
description:
header: "Reach out, let's connect"
---

<div class="container-xxl mb-2 py-2 px-md-5">
  <div class="row">
    <div class="col-8">
      <div class="row mb-2">
        <div class="">
          <div class="card-body">
            <h2 class="card-title">{{ header }}</h2>
            <hr />
            <ul class="list-group pb-2">
              <li class="list-group-item d-flex align-items-center gap-2">
                <i class="fa-brands fa-linkedin fa-2x"></i>
                <div class="ms-2 me-auto">
                  <div class="fw-bold">
                    LinkedIn
                  </div>
                  <a class="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover" href="{{ meta.linkedinURL | url }}" target="top" alt="Link to my LinkedIn profile">AJJolicoeur</a>
                </div>
              </li>
            </ul>
            <ul class="list-group pb-2">
              <li class="list-group-item d-flex align-items-center gap-2">
                <i class="fa-brands fa-github fa-2x"></i>
                <div class="ms-2 me-auto">
                  <div class="fw-bold">GitHub</div>
                  <a class="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover" href="{{ meta.githubURL | url }}" target="top" alt="View my GitHub profile">
                    AdamJ
                  </a>
                </div>
              </li>
            </ul>
            <ul class="list-group pb-2">
              <li class="list-group-item d-flex align-items-center gap-2">
                <i class="fa-brands fa-dev fa-2x"></i>
                <div class="ms-2 me-auto">
                  <div class="fw-bold">
                    Dev
                  </div>
                  <a class="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover" href="{{ meta.devtoURL | url }}" target="top" alt="Link to my Dev.To profile">AdamJ</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="col-4">
      <div class="row">
        <div class="col-12 pb-4 text-align-center">
          <img src="{{ "/img/headshot-hires.jpg" | url }}" class="img-thumbnail img-fluid rounded" alt="Headshot image" width="50%">
        </div>
      </div>
    </div>
  </div>
</div>

---
pagination:
  data: designs
  size: 1
  alias: design
permalink: "/designs/{{ design.slug | slugify }}/"
layout: "layouts/base.njk"
description: "{{ design.thumbnailDescription }}"
---

<article>
  <div class="wa-flank wa-align-items-start">
    <wa-avatar
        image="{{ design.thumbnailImage }}"
        label="thumbnail"
    ></wa-avatar>
    <div class="wa-stack wa-gap-3xs">
      <h1>{{ design.title }}</h1>
      <section class="design-description">
        {{ design.fullDescription }}
      </section>
    </div>
  </div>
  <div class="wa-stack">
    {% if design.technologies %}
    <section class="design-technologies">
      <h2>Technologies Used</h2>
      <ul>
        {% for tech in design.technologies %}
          <li>{{ tech }}</li>
        {% endfor %}
      </ul>
    </section>
    {% endif %}
    <section class="design-images">
      <h2>Visuals</h2>
      <div class="image-gallery">
        {% for image in design.largeImages %}
          <figure class="gallery-item">
            <a href="{{ image.src }}" data-modal-target="#image-modal" data-modal-image="{{ image.src }}" data-modal-alt="{{ image.alt }}" data-modal-caption="{{ image.caption }}" class="image-link" aria-label="Open larger view of {{ image.caption }}">
              <picture>
                <source srcset="{{ image.src }}" type="image/webp">
                <img src="{{ image.src }}" alt="{{ image.alt }}" loading="lazy" width="600" height="400">
              </picture>
          </a>
          {% if image.caption %}
            <figcaption>{{ image.caption }}</figcaption>
          {% endif %}
        </figure>
        {% endfor %}
      </div>
    </section>
  </div>
</article>

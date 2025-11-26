---
title: "Color Picker"
date: git Last Modified
collections: presentations
abbreviation: "ColorPicker"
description: "Creating an accessible color picker."
eleventyNavigation:
  key: colorPicker
  parent: Presentations
  order: 2
image1: "/assets/img/colorPicker0.webp"
image1-thumb: "/assets/img/colorPicker0-thumb.webp"
image1-alt: "Introduction to the color picker"
image2: "/assets/img/colorPicker1.webp"
image2-thumb: "/assets/img/colorPicker1-thumb.webp"
image2-alt: "Color picker feature request"
image3: "/assets/img/colorPicker2.webp"
image3-thumb: "/assets/img/colorPicker2-thumb.webp"
image3-alt: "Getting started with the color picker"
image4: "/assets/img/colorPicker3.webp"
image4-thumb: "/assets/img/colorPicker3-thumb.webp"
image4-alt: "Next steps after color selection"
image5: "/assets/img/colorPicker4.webp"
image5-thumb: "/assets/img/colorPicker4-thumb.webp"
image5-alt: "Comparisons and testing"
image6: "/assets/img/colorPicker5.webp"
image6-thumb: "/assets/img/colorPicker5-thumb.webp"
image6-alt: "Findings of the component examination"
---

<section>
  <div class="carousel-container">
    <div class="carousel">
      <input type="radio" name="slides" checked="checked" id="slide-1">
      <input type="radio" name="slides" id="slide-2">
      <input type="radio" name="slides" id="slide-3">
      <input type="radio" name="slides" id="slide-4">
      <input type="radio" name="slides" id="slide-5">
      <input type="radio" name="slides" id="slide-6">
      <ul class="carousel__slides">
        <li class="carousel__slide">
          <figure>
            <div>
              <source media="(width < 600px)" srcset="{{ image1-thumb }}" />
              <source media="(width >= 800px)" srcset="{{ image1 }}" />
              <img
                srcset="{{ image1-thumb }} 600w, {{ image1 }} 800w"
                sizes="(width <= 800px) 600px, 800px"
                src="{{ image1 }}"
                style="width: 100%;"
                alt="{{ image1-alt }}"
              />
            </div>
            <figcaption>
              <span class="credit">{{ image1-alt }}</span>
            </figcaption>
          </figure>
        </li>
        <li class="carousel__slide">
          <figure>
            <div>
              <source media="(width < 600px)" srcset="{{ image2-thumb }}" />
              <source media="(width >= 800px)" srcset="{{ image2 }}" />
              <img
                srcset="{{ image2-thumb }} 600w, {{ image2 }} 800w"
                sizes="(width <= 800px) 600px, 800px"
                src="{{ image2 }}"
                style="width: 100%;"
                alt="{{ image2-alt }}"
              />
            </div>
            <figcaption>
              <span class="">{{ image2-alt }}</span>
            </figcaption>
          </figure>
        </li>
        <li class="carousel__slide">
          <figure>
            <div>
              <source media="(width < 600px)" srcset="{{ image3-thumb }}" />
              <source media="(width >= 800px)" srcset="{{ image3 }}" />
              <img
                srcset="{{ image3-thumb }} 600w, {{ image3 }} 800w"
                sizes="(width <= 800px) 600px, 800px"
                src="{{ image3 }}"
                style="width: 100%;"
                alt="{{ image3-alt }}"
              />
            </div>
            <figcaption>
              <span class="">{{ image3-alt }}</span>
            </figcaption>
          </figure>
        </li>
        <li class="carousel__slide">
          <figure>
            <div>
              <source media="(width < 600px)" srcset="{{ image4-thumb }}" />
              <source media="(width >= 800px)" srcset="{{ image4 }}" />
              <img
                srcset="{{ image4-thumb }} 600w, {{ image4 }} 800w"
                sizes="(width <= 800px) 600px, 800px"
                src="{{ image4 }}"
                style="width: 100%;"
                alt="{{ image4-alt }}"
              />
            </div>
            <figcaption>
              <span class="">{{ image4-alt }}</span>
            </figcaption>
          </figure>
        </li>
        <li class="carousel__slide">
          <figure>
            <div>
              <source media="(width < 600px)" srcset="{{ image5-thumb }}" />
              <source media="(width >= 800px)" srcset="{{ image5 }}" />
              <img
                srcset="{{ image5-thumb }} 600w, {{ image5 }} 800w"
                sizes="(width <= 800px) 600px, 800px"
                src="{{ image5 }}"
                style="width: 100%;"
                alt="{{ image5-alt }}"
              />
            </div>
            <figcaption>
              <span class="">{{ image5-alt }}</span>
            </figcaption>
          </figure>
        </li>
        <li class="carousel__slide">
          <figure>
            <div>
              <source media="(width < 600px)" srcset="{{ image6-thumb }}" />
              <source media="(width >= 800px)" srcset="{{ image6 }}" />
              <img
                srcset="{{ image6-thumb }} 600w, {{ image6 }} 800w"
                sizes="(width <= 800px) 600px, 800px"
                src="{{ image6 }}"
                style="width: 100%;"
                alt="{{ image6-alt }}"
              />
            </div>
            <figcaption>
              <span class="">{{ image6-alt }}</span>
            </figcaption>
          </figure>
        </li>
      </ul>
      <ul class="carousel__thumbnails">
        <li>
          <label for="slide-1"><img src="{{ image1-thumb }}" alt="{{ image1-alt }}"></label>
        </li>
        <li>
          <label for="slide-2"><img src="{{ image2-thumb }}" alt="{{ image2-alt }}"></label>
        </li>
        <li>
          <label for="slide-3"><img src="{{ image3-thumb }}" alt="{{ image3-alt }}"></label>
        </li>
        <li>
          <label for="slide-4"><img src="{{ image4-thumb }}" alt="{{ image4-alt }}"></label>
        </li>
        <li>
          <label for="slide-5"><img src="{{ image5-thumb }}" alt="{{ image5-alt }}"></label>
        </li>
        <li>
          <label for="slide-6"><img src="{{ image6-thumb }}" alt="{{ image6-alt }}"></label>
        </li>
      </ul>
    </div>
  </div>
</section>

---
title: "Portfolio"
date: git Last Modified
collections: presentations
abbreviation: "Portfolio"
description: ""
eleventyNavigation:
  key: portfolio
  parent: Presentations
  order: 1
image0: /assets/img/portfolio0.webp
image0-thumb: /assets/img/portfolio0.webp
image1: /assets/img/portfolio1.webp
image1-alt: "Adam's background and experience"
image1-thumb: /assets/img/portfolio1.webp
image2: /assets/img/portfolio2-5.webp
image2-alt: "Today's presentation - Task-It!"
image2-thumb: /assets/img/portfolio2-5.webp
image3: /assets/img/portfolio2.webp
image3-alt: "Product designs across my portfolio"
image3-thumb: /assets/img/portfolio2.webp
image4: /assets/img/portfolio3.webp
image4-alt: "Task-It problem space and constraints"
image4-thumb: /assets/img/portfolio3.webp
image5: /assets/img/portfolio4.webp
image5-alt: "Design process around Task-It"
image5-thumb: /assets/img/portfolio4.webp
image6: /assets/img/portfolio5.webp
image6-alt: "Timeline to design Task-It"
image6-thumb: /assets/img/portfolio5.webp
image7: /assets/img/portfolio6.webp
image7-alt: "Target audience of Task-It"
image7-thumb: /assets/img/portfolio6.webp
image8: /assets/img/portfolio7.webp
image8-alt: "Competitive analysis across the product space"
image8-thumb: /assets/img/portfolio7.webp
image9: /assets/img/portfolio10.webp
image9-alt: "Getting started with wireframes and mockups"
image9-thumb: /assets/img/portfolio10.webp
image10: /assets/img/portfolio11.webp
image10-alt: "Vertification of ideas and releases"
image10-thumb: /assets/img/portfolio11.webp
image11: /assets/img/portfolio12.webp
image11-alt: "Reviewing findings from the design process"
image11-thumb: /assets/img/portfolio12.webp
image12: /assets/img/portfolio13.webp
image12-alt: "Conclusion summary"
image12-thumb: /assets/img/portfolio13.webp
image13: /assets/img/portfolio14.webp
image13-alt: "Pause for any questions"
image13-thumb: /assets/img/portfolio14.webp
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
      <input type="radio" name="slides" id="slide-7">
      <input type="radio" name="slides" id="slide-8">
      <input type="radio" name="slides" id="slide-9">
      <input type="radio" name="slides" id="slide-10">
      <input type="radio" name="slides" id="slide-11">
      <input type="radio" name="slides" id="slide-12">
      <input type="radio" name="slides" id="slide-13">
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
        <li class="carousel__slide">
          <figure>
            <div>
              <source media="(width < 600px)" srcset="{{ image7-thumb }}" />
              <source media="(width >= 800px)" srcset="{{ image7 }}" />
              <img
                srcset="{{ image7-thumb }} 600w, {{ image7 }} 800w"
                sizes="(width <= 800px) 600px, 800px"
                src="{{ image7 }}"
                style="width: 100%;"
                alt="{{ image7-alt }}"
              />
            </div>
            <figcaption>
              <span class="">{{ image7-alt }}</span>
            </figcaption>
          </figure>
        </li>
        <li class="carousel__slide">
          <figure>
            <div>
              <source media="(width < 600px)" srcset="{{ image8-thumb }}" />
              <source media="(width >= 800px)" srcset="{{ image8 }}" />
              <img
                srcset="{{ image8-thumb }} 600w, {{ image8 }} 800w"
                sizes="(width <= 800px) 600px, 800px"
                src="{{ image8 }}"
                style="width: 100%;"
                alt="{{ image8-alt }}"
              />
            </div>
            <figcaption>
              <span class="">{{ image8-alt }}</span>
            </figcaption>
          </figure>
        </li>
        <li class="carousel__slide">
          <figure>
            <div>
              <source media="(width < 600px)" srcset="{{ image9-thumb }}" />
              <source media="(width >= 800px)" srcset="{{ image9 }}" />
              <img
                srcset="{{ image9-thumb }} 600w, {{ image9 }} 800w"
                sizes="(width <= 800px) 600px, 800px"
                src="{{ image9 }}"
                style="width: 100%;"
                alt="{{ image9-alt }}"
              />
            </div>
            <figcaption>
              <span class="">{{ image9-alt }}</span>
            </figcaption>
          </figure>
        </li>
        <li class="carousel__slide">
          <figure>
            <div>
              <source media="(width < 600px)" srcset="{{ image10-thumb }}" />
              <source media="(width >= 800px)" srcset="{{ image10 }}" />
              <img
                srcset="{{ image10-thumb }} 600w, {{ image10 }} 800w"
                sizes="(width <= 800px) 600px, 800px"
                src="{{ image10 }}"
                style="width: 100%;"
                alt="{{ image10-alt }}"
              />
            </div>
            <figcaption>
              <span class="">{{ image10-alt }}</span>
            </figcaption>
          </figure>
        </li>
        <li class="carousel__slide">
          <figure>
            <div>
              <source media="(width < 600px)" srcset="{{ image11-thumb }}" />
              <source media="(width >= 800px)" srcset="{{ image11 }}" />
              <img
                srcset="{{ image11-thumb }} 600w, {{ image11 }} 800w"
                sizes="(width <= 800px) 600px, 800px"
                src="{{ image11 }}"
                style="width: 100%;"
                alt="{{ image11-alt }}"
              />
            </div>
            <figcaption>
              <span class="">{{ image11-alt }}</span>
            </figcaption>
          </figure>
        </li>
        <li class="carousel__slide">
          <figure>
            <div>
              <source media="(width < 600px)" srcset="{{ image12-thumb }}" />
              <source media="(width >= 800px)" srcset="{{ image12 }}" />
              <img
                srcset="{{ image12-thumb }} 600w, {{ image12 }} 800w"
                sizes="(width <= 800px) 600px, 800px"
                src="{{ image12 }}"
                style="width: 100%;"
                alt="{{ image12-alt }}"
              />
            </div>
            <figcaption>
              <span class="">{{ image12-alt }}</span>
            </figcaption>
          </figure>
        </li>
        <li class="carousel__slide">
          <figure>
            <div>
              <source media="(width < 600px)" srcset="{{ image13-thumb }}" />
              <source media="(width >= 800px)" srcset="{{ image13 }}" />
              <img
                srcset="{{ image13-thumb }} 600w, {{ image13 }} 800w"
                sizes="(width <= 800px) 600px, 800px"
                src="{{ image13 }}"
                style="width: 100%;"
                alt="{{ image13-alt }}"
              />
            </div>
            <figcaption>
              <span class="">{{ image13-alt }}</span>
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
        <li>
          <label for="slide-7"><img src="{{ image7-thumb }}" alt="{{ image7-alt }}"></label>
        </li>
        <li>
          <label for="slide-8"><img src="{{ image8-thumb }}" alt="{{ image8-alt }}"></label>
        </li>
        <li>
          <label for="slide-9"><img src="{{ image9-thumb }}" alt="{{ image9-alt }}"></label>
        </li>
        <li>
          <label for="slide-10"><img src="{{ image10-thumb }}" alt="{{ image10-alt }}"></label>
        </li>
        <li>
          <label for="slide-11"><img src="{{ image11-thumb }}" alt="{{ image11-alt }}"></label>
        </li>
        <li>
          <label for="slide-12"><img src="{{ image12-thumb }}" alt="{{ image12-alt }}"></label>
        </li>
        <li>
          <label for="slide-13"><img src="{{ image13-thumb }}" alt="{{ image13-alt }}"></label>
        </li>
      </ul>
    </div>
  </div>
</section>

<section>
  <div class="row justify-content-between">
    <a href="{{ '/presentations/' | url }}" class="btn btn-outline btn-sm" alt="Navigate to the presentation list">To Presentation List</a>
    <a href="{{ '/presentations/color-picker' | url }}" class="btn btn-outline btn-sm" alt="Navigate to the color picker slides">Color Picker Slides</a>
  </div>
</section>

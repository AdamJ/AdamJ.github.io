---
title: "Portfolio"
collections: presentations
abbreviation: "Portfolio"
description: ""
eleventyNavigation:
  key: portfolio
  parent: Presentations
  order: 1
image0: /img/portfolio/Slide0.png
image1: /img/portfolio/Slide1.png
image1-alt: Slide 1 alt text
image25: /img/portfolio/Slide2-5.png
image2: /img/portfolio/Slide2.png
image3: /img/portfolio/Slide3.png
image4: /img/portfolio/Slide4.png
image5: /img/portfolio/Slide5.png
image6: /img/portfolio/Slide6.png
image7: /img/portfolio/Slide7.png
image8: /img/portfolio/Slide8.png
image9: /img/portfolio/Slide9.png
image10: /img/portfolio/Slide10.png
image11: /img/portfolio/Slide11.png
image12: /img/portfolio/Slide12.png
image13: /img/portfolio/Slide13.png
image14: /img/portfolio/Slide14.png
---

<div class="container my-3">
  <div class="button-group-toolbar">
    <sl-button-group label="Controls">
      <sl-tooltip content="Back to Designs">
        <sl-button href="/designs/">
          <sl-icon name="arrow-left-short" label="Back to Designs"></sl-icon>
        </sl-button>
      </sl-tooltip>
      <sl-tooltip content="View on GitHub">
        <sl-button href="https://github.com/AdamJ/AdamJ.github.io/tree/main/docs/img/portfolio/">
          <sl-icon name="github" label="View on GitHub"></sl-icon>
          <sl-visually-hidden>View slide on GitHub</sl-visually-hidden>
        </sl-button>
      </sl-tooltip>
    </sl-button-group>
  </div>
</div>
<div class="container mb-3">
  <sl-carousel class="carousel-thumbnails" navigation loop style="--aspect-ratio: 3/2;">
    <sl-carousel-item>
      <img
        alt="{{ image0-alt }}"
        src="{{ image0 }}"
      />
    </sl-carousel-item>
    <sl-carousel-item>
      <img
        alt="{{ image1-alt }}"
        src="{{ image1 }}"
      />
    </sl-carousel-item>
    <sl-carousel-item>
      <img
        alt="{{ image25-alt }}"
        src="{{ image25 }}"
      />
    </sl-carousel-item>
    <sl-carousel-item>
      <img
        alt="{{ image1-alt }}"
        src="{{ image2 }}"
      />
    </sl-carousel-item>
    <sl-carousel-item>
      <img
        alt="{{ image1-alt }}"
        src="{{ image3 }}"
      />
    </sl-carousel-item>
    <sl-carousel-item>
      <img
        alt="{{ image1-alt }}"
        src="{{ image4 }}"
      />
    </sl-carousel-item>
    <sl-carousel-item>
      <img
        alt="{{ image1-alt }}"
        src="{{ image5 }}"
      />
    </sl-carousel-item>
    <sl-carousel-item>
      <img
        alt="{{ image1-alt }}"
        src="{{ image6 }}"
      />
    </sl-carousel-item>
    <sl-carousel-item>
      <img
        alt="{{ image1-alt }}"
        src="{{ image7 }}"
      />
    </sl-carousel-item>
    <sl-carousel-item>
      <img
        alt="{{ image1-alt }}"
        src="{{ image8 }}"
      />
    </sl-carousel-item>
    <sl-carousel-item>
      <img
        alt="{{ image1-alt }}"
        src="{{ image9 }}"
      />
    </sl-carousel-item>
    <sl-carousel-item>
      <img
        alt="{{ image1-alt }}"
        src="{{ image10 }}"
      />
    </sl-carousel-item>
    <sl-carousel-item>
      <img
        alt="{{ image1-alt }}"
        src="{{ image11 }}"
      />
    </sl-carousel-item>
    <sl-carousel-item>
      <img
        alt="{{ image1-alt }}"
        src="{{ image12 }}"
      />
    </sl-carousel-item>
    <sl-carousel-item>
      <img
        alt="{{ image1-alt }}"
        src="{{ image13 }}"
      />
    </sl-carousel-item>
  </sl-carousel>

  <div class="thumbnails">
    <div class="thumbnails__scroller">
      <img alt="{{image0-alt}}" class="thumbnails__image active" src="{{image0}}" />
      <img alt="{{image1-alt}}" class="thumbnails__image" src="{{image1}}" />
      <img alt="{{image25-alt}}" class="thumbnails__image" src="{{image25}}" />
      <img alt="{{image2-alt}}" class="thumbnails__image" src="{{image2}}" />
      <img alt="{{image3-alt}}" class="thumbnails__image" src="{{image3}}" />
      <img alt="{{image4-alt}}" class="thumbnails__image" src="{{image4}}" />
      <img alt="{{image5-alt}}" class="thumbnails__image" src="{{image5}}" />
      <img alt="{{image6-alt}}" class="thumbnails__image" src="{{image6}}" />
      <img alt="{{image7-alt}}" class="thumbnails__image" src="{{image7}}" />
      <img alt="{{image8-alt}}" class="thumbnails__image" src="{{image8}}" />
      <img alt="{{image9-alt}}" class="thumbnails__image" src="{{image9}}" />
      <img alt="{{image10-alt}}" class="thumbnails__image" src="{{image10}}" />
      <img alt="{{image11-alt}}" class="thumbnails__image" src="{{image11}}" />
      <img alt="{{image12-alt}}" class="thumbnails__image" src="{{image12}}" />
      <img alt="{{image13-alt}}" class="thumbnails__image" src="{{image13}}" />
    </div>
  </div>

  <style>
    .carousel-thumbnails {
      --slide-aspect-ratio: 3 / 2;
    }

    .thumbnails {
      display: flex;
      justify-content: center;
    }

    .thumbnails__scroller {
      display: flex;
      gap: var(--sl-spacing-small);
      overflow-x: auto;
      scrollbar-width: none;
      scroll-behavior: smooth;
      scroll-padding: var(--sl-spacing-small);
    }

    .thumbnails__scroller::-webkit-scrollbar {
      display: none;
    }

    .thumbnails__image {
      width: 64px;
      height: 32px;
      object-fit: cover;

      opacity: 0.3;
      will-change: opacity;
      transition: 250ms opacity;

      cursor: pointer;
    }

    .thumbnails__image.active {
      opacity: 1;
    }
  </style>

  <script>
    {
      const carousel = document.querySelector('.carousel-thumbnails');
      const scroller = document.querySelector('.thumbnails__scroller');
      const thumbnails = document.querySelectorAll('.thumbnails__image');

      scroller.addEventListener('click', e => {
        const target = e.target;

        if (target.matches('.thumbnails__image')) {
          const index = [...thumbnails].indexOf(target);
          carousel.goToSlide(index);
        }
      });

      carousel.addEventListener('sl-slide-change', e => {
        const slideIndex = e.detail.index;

        [...thumbnails].forEach((thumb, i) => {
          thumb.classList.toggle('active', i === slideIndex);
          if (i === slideIndex) {
            thumb.scrollIntoView({
              block: 'nearest'
            });
          }
        });
      });
    }
  </script>
</div>

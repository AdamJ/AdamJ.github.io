/*
** Page motion, opted into with `motion: true` in front matter: hero parallax
** and trail hiker (homepage scene), plus scroll reveals for marked or templated content.
** Everything here is progressive enhancement. Without JS, or with
** prefers-reduced-motion, the page renders fully static and visible.
*/
(function () {
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (reduceMotion.matches) return;

  var root = document.documentElement;

  var hero = document.querySelector('.hero-trail');
  var scene = hero && hero.querySelector('.hero-scene');
  if (!scene) hero = null;

  if (hero) {
    // Hero parallax: expose scroll distance to CSS, each layer scales it by its --depth
    var ticking = false;
    var update = function () {
      scene.style.setProperty('--parallax', Math.min(window.scrollY, hero.offsetHeight).toFixed(1));
      ticking = false;
    };
    window.addEventListener('scroll', function () {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    }, { passive: true });
    update();

    // Pause control for the looping scenery (clouds, flag), WCAG 2.2.2
    var pause = hero.querySelector('.hero-pause');
    if (pause) {
      pause.hidden = false;
      pause.addEventListener('click', function () {
        var paused = hero.classList.toggle('is-paused');
        pause.setAttribute('aria-pressed', String(paused));
      });
    }

    // Hiker: follows the tip of the trail as the CSS draw animation reveals it.
    // Starts hidden behind the foothills; without JS it stands at the summit.
    var hiker = hero.querySelector('.hero-hiker');
    var figure = hiker && hiker.querySelector('.hero-hiker-figure');
    var trail = hero.querySelector('.hero-trail-path');
    var reveal = hero.querySelector('.hero-trail-reveal');
    if (hiker && figure && trail && reveal && trail.getTotalLength) {
      var length = trail.getTotalLength();
      var lastX = null;
      var walking = false;
      var place = function (progress) {
        var pt = trail.getPointAtLength(length * progress);
        // Step aside from the flagpole as the summit gets close
        var x = pt.x - 10 * Math.pow(progress, 6);
        hiker.setAttribute('transform', 'translate(' + x.toFixed(1) + ' ' + pt.y.toFixed(1) + ')');
        if (lastX !== null && Math.abs(x - lastX) > 0.3) {
          figure.setAttribute('transform', x < lastX ? 'scale(-1.25 1.25)' : 'scale(1.25)');
        }
        lastX = x;
      };
      var walk = function () {
        if (!walking) return;
        var offset = parseFloat(window.getComputedStyle(reveal).strokeDashoffset) || 0;
        place(Math.min(Math.max(1 - offset, 0), 1));
        window.requestAnimationFrame(walk);
      };
      place(0);
      reveal.addEventListener('animationstart', function () {
        walking = true;
        hiker.classList.add('is-walking');
        window.requestAnimationFrame(walk);
      });
      reveal.addEventListener('animationend', function () {
        walking = false;
        hiker.classList.remove('is-walking');
        place(1);
        figure.setAttribute('transform', 'scale(1.25)');
      });
    }
  }

  // Scroll reveals: single elements and staggered groups
  if (!('IntersectionObserver' in window)) return;

  var targets = Array.prototype.slice.call(document.querySelectorAll('[data-reveal]'));
  var addGroup = function (group, maxIndex) {
    Array.prototype.forEach.call(group.children, function (child, i) {
      child.style.setProperty('--reveal-index', Math.min(i, maxIndex));
      targets.push(child);
    });
  };
  document.querySelectorAll('[data-reveal-group]').forEach(function (group) {
    addGroup(group, Infinity);
  });

  // Auto reveals for templated pages: card grids stagger card by card,
  // other top-level sections reveal their children in a short cascade
  document.querySelectorAll('[data-reveal-auto]').forEach(function (container) {
    var sections = container.matches('section') ? [container] : container.querySelectorAll(':scope > section');
    Array.prototype.forEach.call(sections, function (section) {
      var grids = section.querySelectorAll('.work-grid');
      if (grids.length) {
        grids.forEach(function (grid) { addGroup(grid, Infinity); });
      } else {
        addGroup(section, 4);
      }
    });
  });
  if (!targets.length) return;

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { rootMargin: '0px 0px -10% 0px', threshold: 0.1 });

  targets.forEach(function (el) {
    el.classList.add('reveal');
    observer.observe(el);
  });
  root.classList.add('js-reveal');
})();

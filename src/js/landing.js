/*
** Landing page motion: hero parallax + scroll reveals.
** Everything here is progressive enhancement. Without JS, or with
** prefers-reduced-motion, the page renders fully static and visible.
*/
(function () {
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (reduceMotion.matches) return;

  var root = document.documentElement;

  // Hero parallax: expose scroll distance to CSS, each layer scales it by its --depth
  var hero = document.querySelector('.hero-trail');
  var scene = hero && hero.querySelector('.hero-scene');
  if (scene) {
    var ticking = false;
    var update = function () {
      var y = Math.min(window.scrollY, hero.offsetHeight);
      scene.style.setProperty('--parallax', y.toFixed(1));
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
  }

  // Scroll reveals: single elements and staggered groups
  if (!('IntersectionObserver' in window)) return;

  var targets = Array.prototype.slice.call(document.querySelectorAll('[data-reveal]'));
  document.querySelectorAll('[data-reveal-group]').forEach(function (group) {
    Array.prototype.forEach.call(group.children, function (child, i) {
      child.style.setProperty('--reveal-index', i);
      targets.push(child);
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

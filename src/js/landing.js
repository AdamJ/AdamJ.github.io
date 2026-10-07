/*
** Landing page motion: hero parallax, trail hiker, topo drift, and scroll reveals.
** Everything here is progressive enhancement. Without JS, or with
** prefers-reduced-motion, the page renders fully static and visible.
*/
(function () {
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (reduceMotion.matches) return;

  var root = document.documentElement;

  var hero = document.querySelector('.hero-trail');
  var scene = hero && hero.querySelector('.hero-scene');

  // Scroll-linked motion: hero layers scale --parallax by their --depth,
  // the topo texture drifts by --topo-shift across the full page height
  var ticking = false;
  var update = function () {
    var y = window.scrollY;
    if (scene) {
      scene.style.setProperty('--parallax', Math.min(y, hero.offsetHeight).toFixed(1));
    }
    var scrollable = root.scrollHeight - window.innerHeight;
    var progress = scrollable > 0 ? Math.min(y / scrollable, 1) : 0;
    root.style.setProperty('--topo-shift', (progress * window.innerHeight * 0.2).toFixed(1));
    ticking = false;
  };
  window.addEventListener('scroll', function () {
    if (!ticking) {
      window.requestAnimationFrame(update);
      ticking = true;
    }
  }, { passive: true });
  update();

  if (hero) {
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

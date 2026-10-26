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
      // Modes: 'intro' (timed load animation), 'summit' (idle at the peak),
      // 'resetting' (fading between scenes), 'hike' (scroll drives the trail)
      var mode = 'intro';
      var fadeMs = 200;
      var walkTimer = null;
      var faceForward = function () { figure.setAttribute('transform', 'scale(1.25)'); };

      place(0);
      reveal.addEventListener('animationstart', function () {
        if (mode !== 'intro') return;
        walking = true;
        hiker.classList.add('is-walking');
        window.requestAnimationFrame(walk);
      });
      reveal.addEventListener('animationend', function () {
        if (mode !== 'intro') return;
        walking = false;
        mode = 'summit';
        hiker.classList.remove('is-walking');
        place(1);
        faceForward();
      });

      // Hero scroll distance carries the hiker: one value drives trail and hiker
      // The climb finishes while the peak is still on screen, so it takes a
      // fraction of the hero height. The foothills hide the first stretch of
      // trail, so the walk starts where the path clears them.
      var climbRatio = 0.4;
      var trailStart = (function () {
        for (var i = 0; i <= 100; i++) {
          if (trail.getPointAtLength(length * (i / 100)).y < 420) return i / 100;
        }
        return 0;
      })();
      // The hiker always reappears at the trailhead, so the climb is measured
      // from wherever the first scroll had reached when the scenes swapped
      var anchor = 0;
      var heroProgress = function () {
        var distance = Math.max(hero.offsetHeight * climbRatio, 1);
        return Math.min(Math.max((window.scrollY - anchor) / distance, 0), 1);
      };
      var applyHike = function (progress) {
        var t = trailStart + (1 - trailStart) * progress;
        reveal.style.strokeDashoffset = String(1 - t);
        place(t);
        hero.classList.toggle('is-planted', progress >= 0.995);
      };

      // Fade the hiker, flag, and trail out, swap scenes while hidden, fade back in
      var swapScene = function (apply, next) {
        mode = 'resetting';
        hero.classList.add('is-resetting');
        window.setTimeout(function () {
          apply();
          window.requestAnimationFrame(function () {
            hero.classList.remove('is-resetting');
            mode = next;
            if (next === 'hike') sync();
          });
        }, fadeMs);
      };
      var takeControl = function () {
        walking = false;
        hiker.classList.remove('is-walking');
        hero.classList.add('is-scrubbing');
      };
      var toTrailhead = function () {
        takeControl();
        anchor = window.scrollY;
        applyHike(0);
        faceForward();
        lastX = null;
      };
      var toSummit = function () {
        applyHike(1);
        faceForward();
        lastX = null;
      };

      var sync = function () {
        var y = window.scrollY;
        if (mode === 'summit' || mode === 'intro') {
          if (y > 4) swapScene(toTrailhead, 'hike');
        } else if (mode === 'hike') {
          if (y <= 1) {
            swapScene(toSummit, 'summit');
            return;
          }
          var before = lastX;
          applyHike(heroProgress());
          if (before !== lastX) {
            hiker.classList.add('is-walking');
            window.clearTimeout(walkTimer);
            walkTimer = window.setTimeout(function () { hiker.classList.remove('is-walking'); }, 140);
          }
        }
      };
      var hikeTicking = false;
      window.addEventListener('scroll', function () {
        if (!hikeTicking) {
          hikeTicking = true;
          window.requestAnimationFrame(function () { hikeTicking = false; sync(); });
        }
      }, { passive: true });

      // Loaded already scrolled (reload or deep link): skip the intro and go straight to the hike
      if (window.scrollY > 4) {
        takeControl();
        mode = 'hike';
        applyHike(heroProgress());
      }
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

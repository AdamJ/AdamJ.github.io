/*
** Trail progress, opted into with a `camps` list in front matter.
** Page progress (0 to 1) moves the rail hiker on desktop and the track hiker on phones,
** and the camp ticks mark where you are. Under prefers-reduced-motion the hiker steps
** between camps instead of tracking every scroll frame. Without JS the ticks are plain links.
*/
(function () {
  var ticks = document.querySelector('.trail-ticks');
  if (!ticks) return;

  var root = document.documentElement;
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  var links = Array.prototype.slice.call(ticks.querySelectorAll('a[data-camp]'));
  var camps = links
    .map(function (link) { return document.getElementById(link.getAttribute('data-camp')); })
    .filter(Boolean);
  if (camps.length < 2) return;

  var count = ticks.querySelector('[data-trail-count]');
  var last = links.length - 1;
  var track = document.querySelector('[data-trail-track]');
  var targets = [ticks, document.querySelector('[data-trail-rail]'), track];
  var active = -1;
  var progress = -1;
  var ticking = false;

  root.classList.add('js-trail');

  var pageProgress = function () {
    var range = document.documentElement.scrollHeight - window.innerHeight;
    return range > 0 ? Math.min(Math.max(window.scrollY / range, 0), 1) : 0;
  };

  // The active camp is the last one whose top has passed 40% of the viewport
  var activeCamp = function () {
    var line = window.innerHeight * 0.4;
    var index = 0;
    camps.forEach(function (camp, i) {
      if (camp.getBoundingClientRect().top <= line) index = i;
    });
    return index;
  };

  var setProgress = function (value) {
    if (value === progress) return;
    progress = value;
    targets.forEach(function (el) {
      if (el) el.style.setProperty('--trail-p', value.toFixed(4));
    });
    if (track) track.setAttribute('aria-valuenow', String(Math.round(value * 100)));
  };

  var update = function () {
    ticking = false;
    var index = activeCamp();
    var p = pageProgress();

    // Reduced motion: the hiker steps to each camp, with no tracking between them
    setProgress(reduceMotion.matches ? index / last : p);

    if (index !== active) {
      active = index;
      links.forEach(function (link, i) {
        link.classList.toggle('is-past', i < index);
        if (i === index) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
      if (count) count.textContent = 'Camp ' + index + ' / ' + last;
    }

    // The rail fades in as the hero leaves; the flag plants at the summit
    root.classList.toggle('trail-rail-on', window.scrollY > window.innerHeight * 0.35);
    root.classList.toggle('trail-at-summit', index === last || p >= 0.985);
  };

  var request = function () {
    if (!ticking) {
      ticking = true;
      window.requestAnimationFrame(update);
    }
  };

  window.addEventListener('scroll', request, { passive: true });
  window.addEventListener('resize', request);
  if (reduceMotion.addEventListener) reduceMotion.addEventListener('change', request);
  update();
})();

/*
** Topographic background drift: exposes --topo-shift so the fixed contour
** texture (see sass/_topo.scss) moves slightly with scroll progress.
** Skipped for prefers-reduced-motion; the texture then stays still.
*/
(function () {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  var root = document.documentElement;
  var ticking = false;
  var update = function () {
    var scrollable = root.scrollHeight - window.innerHeight;
    var progress = scrollable > 0 ? Math.min(window.scrollY / scrollable, 1) : 0;
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
})();

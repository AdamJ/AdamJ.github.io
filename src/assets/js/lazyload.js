// Example: Minimal lazy loading for images without native lazy loading
document.addEventListener('DOMContentLoaded', () => {
  if ('IntersectionObserver' in window) {
      let lazyImages = document.querySelectorAll('img[loading="lazy"]');
      let imageObserver = new IntersectionObserver(function(entries, observer) {
          entries.forEach(function(entry) {
              if (entry.isIntersecting) {
                  let img = entry.target;
                  // For demonstration, assuming you want to swap src based on some condition
                  // If just using native lazy loading, this JS might not be strictly necessary
                  // if your `src` is already correct.
                  // This example assumes you might add dynamic srcsets or other attributes.
                  observer.unobserve(img);
              }
          });
      });

      lazyImages.forEach(function(img) {
          imageObserver.observe(img);
      });
  }
});

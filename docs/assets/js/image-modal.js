document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('image-modal');
  const modalImage = modal.querySelector('.modal-image');
  const modalCaption = modal.querySelector('.modal-caption');
  const closeModalBtn = modal.querySelector('.modal-close');
  const imageLinks = document.querySelectorAll('.image-link');
  let previouslyFocusedElement;

  const openModal = (e) => {
      e.preventDefault();
      previouslyFocusedElement = document.activeElement; // Store element that opened modal

      const imageSrc = e.currentTarget.dataset.modalImage;
      const imageAlt = e.currentTarget.dataset.modalAlt;
      const imageCaption = e.currentTarget.dataset.modalCaption || '';

      modalImage.src = imageSrc;
      modalImage.alt = imageAlt;
      modalCaption.textContent = imageCaption;

      modal.classList.add('is-open');
      modal.setAttribute('aria-hidden', 'false');
      modal.focus(); // Focus the modal itself
      document.body.style.overflow = 'hidden'; // Prevent scrolling body when modal open
  };

  const closeModal = () => {
      modal.classList.remove('is-open');
      modal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = ''; // Restore body scrolling
      if (previouslyFocusedElement) {
          previouslyFocusedElement.focus(); // Return focus
      }
  };

  imageLinks.forEach(link => {
      link.addEventListener('click', openModal);
  });

  closeModalBtn.addEventListener('click', closeModal);

  modal.addEventListener('click', (e) => {
      if (e.target === modal) { // Click outside content to close
          closeModal();
      }
  });

  document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.classList.contains('is-open')) {
          closeModal();
      }
      // Add focus trapping logic here (more complex, consider a library for production)
      // Example: If tabbed out of modal, loop focus back in.
  });
});

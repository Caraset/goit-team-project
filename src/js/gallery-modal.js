(() => {
  const openModalImg = document.querySelectorAll('[data-preview-photo-lazy]');
  const previewList = document.querySelector('[data-preview-list]');
  const overlay = document.querySelector('[data-gallery-overlay]');
  const modalNextBtn = document.querySelector('[data-gallery-next]');
  const htmlAndBody = document.querySelectorAll('[data-no-scroll]');

  const toggleOverlay = () => {
    const isModalOpen = previewList.getAttribute('aria-expanded') === 'true';
    previewList.setAttribute('aria-expanded', !isModalOpen),
      overlay.classList.toggle('is-hidden'), // MUST HAVE
      htmlAndBody[0].classList.toggle('no-scroll'),
      htmlAndBody[1].classList.toggle('no-scroll');
  };

  const focusLog = targetElem => {
    // Чарівництво
    setTimeout(() => {
      if (targetElem !== null) targetElem.focus();
    }, 250);
  };

  const closeOverlay = e => {
    (((e.which === 27 || e.key === 'Escape') && !overlay.classList.contains('is-hidden')) ||
      e.target.matches('[data-gallery-overlay]')) &&
      (toggleOverlay(),
      focusLog,
      overlay.removeEventListener('keyup', closeOverlay),
      overlay.removeEventListener('mousedown', closeOverlay));
  };

  const openOverlay = e => {
    e.currentTarget === previewList &&
      overlay.classList.contains('is-hidden') &&
      ((toggleOverlay(), focusLog(modalNextBtn)),
      overlay.addEventListener('keyup', closeOverlay),
      overlay.addEventListener('mousedown', closeOverlay));
  };

  // event.target = картинка.    if (e.target.nodeName !== 'IMG') return;
  // event.currentTarget = previewList.
  previewList.addEventListener('click', openOverlay);
})();

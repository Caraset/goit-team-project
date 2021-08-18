(() => {
  // Image src replace (for lazy-loading)
  const refs = {
    initiator: document.querySelector('[data-photos-list]'),
    modal: document.querySelector('[data-gallery-modal]'),
    targetsBigImages: document.querySelectorAll('[data-gallery-image]'),
    targets: document.querySelectorAll('[data-photos-lazy]'),
  };

  const lazyLoad = target => {
    const io = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;

          img.setAttribute('src', '#'); //img starts to load after scr is set to "#".

          img.classList.add('appear');
          console.log('imageLoaded');
          observer.disconnect(); // after loading the img - remove the observer from the main thread.
        }
      });
    });

    io.observe(target);
  };
  refs.targets.forEach(lazyLoad);

  refs.initiator.addEventListener('click', event => {
    event.target === refs.initiator &&
      !refs.modal.classList.contains('is-hidden') &&
      refs.targetsBigImages.forEach(lazyLoad);
    refs.initiator.removeEventListener('click');
  });
})();

(() => {
  // Image src replace (for lazy-loading)
  const refs = {
    openModalList: document.querySelector('[data-photos-list]'),
    modal: document.querySelector('[data-gallery-modal]'),
    galleryList: document.querySelector('[data-gallery-list]'),
    targetsBigImages: document.querySelectorAll('[data-gallery-image]'),
    targets: document.querySelectorAll('[data-photos-lazy]'),
  };

  const lazyLoad = target => {
    const io = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;

          img.setAttribute('src', '#'); //img starts to load after scr is set to "#".

          entry.target.closest('[data-gallery-list]') !== refs.galleryList &&
            img.classList.add('appear');

          console.log('imageLoaded');
          observer.disconnect(); // after loading the img - remove the observer from the main thread.
        }
      });
    });

    io.observe(target);
  };

  setTimeout(() => {
    refs.targets.forEach(lazyLoad);
  }, 250);

  const listIsClicked = event => {
    event.currentTarget == refs.openModalList &&
      refs.modal.classList.contains('is-hidden') &&
      refs.targetsBigImages.forEach(lazyLoad);
    setTimeout(() => {
      refs.openModalList.removeEventListener('click', listIsClicked);
    }, 250);
  };

  refs.openModalList.addEventListener('click', listIsClicked);
})();

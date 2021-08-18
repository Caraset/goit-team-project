(() => {
  // Image src replace (for lazy-loading)
  const refs = {
    openModalList: document.querySelector('[data-photos-list]'),
    modal: document.querySelector('[data-gallery-modal]'),
    galleryList: document.querySelector('[data-gallery-list]'),
    targetsBigImages: document.querySelectorAll('[data-gallery-image]'),
    galleryModalItems: document.querySelectorAll('[data-gallery-item]'),
    targets: document.querySelectorAll('[data-photos-lazy]'),
    galleryNextBtn: document.querySelector('[data-gallery-next]'),
    galleryBackBtn: document.querySelector('[data-gallery-back]'),
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

  // carousel for refs.targetsBigImages

  refs.galleryNextBtn.addEventListener('click', () => {
    // change class for image without is-hidden

    for (let i = 0; i < refs.galleryModalItems.length; i++) {
      const element = refs.galleryModalItems[i];

      if (element.classList.contains('current-slide')) {
        console.log(element.className);
        element.classList.toggle('current-slide'), element.classList.toggle('is-hidden');

        let nextElem = 0;
        if (i === refs.galleryModalItems.length - 1) {
          nextElem = refs.galleryModalItems[0];
        } else {
          nextElem = refs.galleryModalItems[i + 1];
        }

        nextElem.classList.toggle('is-hidden'), nextElem.classList.toggle('current-slide');
        return;
      }
    }
  });
})();

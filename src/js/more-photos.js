(() => {
  // Image src replace (for lazy-loading)
  const refs = {
    openModalList: document.querySelector('[data-photos-list]'),
    modal: document.querySelector('[data-gallery-modal]'),
    galleryList: document.querySelector('[data-gallery-list]'),
    targetsBigImages: document.querySelectorAll('[data-gallery-image]'),
    belowFoldItems: document.querySelectorAll('[data-li-below-fold]'),
    belowFoldImages: document.querySelectorAll('[data-photos-below-fold]'),
    galleryModalItems: document.querySelectorAll('[data-gallery-item]'),
    targets: document.querySelectorAll('[data-photos-lazy]'),
    galleryNextBtn: document.querySelector('[data-gallery-next]'),
    galleryBackBtn: document.querySelector('[data-gallery-back]'),
    svgLoaderWrapper: document.querySelector('[data-photos-loader]'),
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
          observer.disconnect(); // after loading the img - it removes the observer from the main thread.
        }
      });
    });

    io.observe(target);
  };

  setTimeout(() => {
    // change to = onReadystatechange or smth similar - instead of timeout.
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

  function mq(w) {
    if (!w.matches) return;
    refs.svgLoaderWrapper.addEventListener('click', () => {
      refs.belowFoldImages.forEach(lazyLoad); // change to download 3 items per 1 time.
      refs.belowFoldItems.classList.remove('is-hidden');
    });
  }

  let tablet = window.matchMedia('(min-width: 768px)');
  tablet.addEventListener('change', mq(tablet));

  // closes mobile window on screen rotation. Use if need. Delete if not.
  // tablet.addEventListener('change', e => {
  //   if (!e.matches) return;
  //   (!refsMobile.menu.classList.contains('is-hidden') ||
  //     refsMobile.openMenuBtn.getAttribute('aria-expanded') === 'true') &&
  //     closeMenuAndFocusLog(refsMobile.focusTarget);
  // });

  // carousel for refs.targetsBigImages
  // toggle classes for next listItem without 'is-hidden' = slide forwards
  refs.galleryNextBtn.addEventListener('click', () => {
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

  // toggle classes for back listItem without 'is-hidden' = slide backwards
  refs.galleryBackBtn.addEventListener('click', () => {
    for (let i = refs.galleryModalItems.length - 1; i >= 0; i--) {
      const element = refs.galleryModalItems[i];

      if (element.classList.contains('current-slide')) {
        console.log(element.className);
        element.classList.toggle('current-slide'), element.classList.toggle('is-hidden');

        let backElem = 0;
        if (i === 0) {
          backElem = refs.galleryModalItems[refs.galleryModalItems.length - 1];
        } else {
          backElem = refs.galleryModalItems[i - 1];
        }

        backElem.classList.toggle('is-hidden'), backElem.classList.toggle('current-slide');
        return;
      }
    }
  });
})();

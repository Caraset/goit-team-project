'use strict';
// self envoking arrow function
(() => {
  console.log('1. self envoking in script');
})();
console.log('2.' + document.readyState); // logs "loading" first
window.onload = function () {
  console.log('onload'); // I fire later
};
document.addEventListener('DOMContentLoaded', function () {
  console.log('DOMContentLoaded');
});
document.addEventListener('readystatechange', function () {
  if (document.readyState == 'loading') {
    //document is loading, does not fire here since no change from "loading" to "loading"
  }
  if (document.readyState == 'interactive') {
    //document fully read. fires before DOMContentLoaded
  }
  if (document.readyState == 'complete') {
    //document fully read and all resources (like images) loaded. fires after DOMContentLoaded
  }
  console.log(document.readyState);
});

(() => {
  const previewList = document.querySelector('[data-preview-list]');
  const photosLoaderBtn = document.querySelector('[data-photos-loader]');
  const liBelowFold = document.querySelectorAll('[data-li-below-fold]');
  const photosBelowFold = document.querySelectorAll('[data-photos-below-fold]');
  const liBelowFoldCount = liBelowFold.length - 1;

  let photosHaveSrc = 0;
  const loadPhotos = () => {
    for (let i = 0; i <= 2; ++i) {
      liBelowFold[photosHaveSrc].classList.remove('is-hidden');
      photosBelowFold[photosHaveSrc].setAttribute('src', '#');
      // console.log(`Attribute 'src' has been set ${photosHaveSrc + 1} times`);
      photosBelowFold[photosHaveSrc].removeAttribute('data-photos-below-fold');
      if (photosHaveSrc < liBelowFoldCount) ++photosHaveSrc;
    }

    photosHaveSrc === liBelowFoldCount && photosLoaderBtn.removeEventListener('click', loadPhotos);
  };

  photosLoaderBtn.addEventListener('click', loadPhotos);
})();

(() => {
  // Image src replace (for lazy-loading)
  const refs = {
    openModalList: document.querySelector('[data-photos-list]'),
    modal: document.querySelector('[data-gallery-overlay]'),
    modalGalleryList: document.querySelector('[data-gallery-list]'),
    targetsBigImages: document.querySelectorAll('[data-gallery-image]'),
    belowFoldItems: document.querySelectorAll('[data-li-below-fold]'),
    belowFoldImages: document.querySelectorAll('[data-photos-below-fold]'),
    galleryModalItems: document.querySelectorAll('[data-gallery-item]'),
    targets: document.querySelectorAll('[data-photos-lazy]'),
    galleryNextBtn: document.querySelector('[data-gallery-next]'),
    galleryBackBtn: document.querySelector('[data-gallery-back]'),
    svgLoaderWrapper: document.querySelector('[data-photos-loader]'),
  };

  // carousel for refs.targetsBigImages
  // toggle classes for next listItem without 'is-hidden' = slide forwards
  refs.galleryNextBtn.addEventListener('click', () => {
    for (let i = 0; i < refs.galleryModalItems.length; i++) {
      const element = refs.galleryModalItems[i];

      if (element.classList.contains('current-slide')) {
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

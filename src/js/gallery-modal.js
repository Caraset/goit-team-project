(function () {
  const refs = {
    openModalImg: document.querySelector('[data-photos-lazy]'),
    modal: document.querySelector('[data-gallery-modal]'),
    htmlAndBody: document.querySelectorAll('[data-no-scroll]'),
  };

  function toggleModal() {
    const isModalOpen = refs.openModalImg.getAttribute('aria-expanded') === 'true' || false;

    refs.openModalImg.setAttribute('aria-expanded', !isModalOpen);
    refs.modal.classList.toggle('is-hidden');
    refs.htmlAndBody[0].classList.toggle('no-scroll');
    refs.htmlAndBody[1].classList.toggle('no-scroll');
  }

  for (let i = refs.formInputs.length - 1; i >= 0; i--) {
    refs.formInputs[i].addEventListener('focusin', e => {
      e.currentTarget.placeholder = e.currentTarget.dataset.placeholder;
    });

    refs.formInputs[i].addEventListener('focusout', e => {
      e.currentTarget.placeholder = ` `;
    });
  }

  var isFocused = 0;
  function focusLog(targetElem = refs.openModalImg) {
    /* Чарівництво */
    setTimeout(() => {
      targetElem.focus();
      isFocused = document.activeElement === targetElem;
      console.log(`${targetElem.className} isFocused: ${isFocused}`);
    }, 250);
  }

  function openModal(focusTarget = refs.modal) {
    toggleModal(), focusLog(focusTarget);
  }

  function closeModal() {
    toggleModal(), focusLog();
  }

  refs.openModalImg.addEventListener('click', function () {
    refs.modal.classList.contains('is-hidden') && openModal();
  });

  refs.closeModalBtn.addEventListener('click', event => {
    closeModal();
  });

  refs.modal.addEventListener('keyup', event => {
    (event.which === 27 || event.key === 'Escape') &&
      !refs.modal.classList.contains('is-hidden') &&
      closeModal();
  });

  refs.modal.addEventListener('mousedown', event => {
    event.target.matches('[data-modal]') && closeModal();
  });
})();

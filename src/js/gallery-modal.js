(() => {
  document.onload().console.log(`I'm Alive`);

  const refs = {
    openModalImg: document.querySelectorAll('[data-photos-lazy]'),
    openModalList: document.querySelectorAll('[data-photos-list]'),
    modal: document.querySelector('[data-gallery-modal]'),
    modalImage: document.querySelectorAll('[data-gallery-image]'),
    htmlAndBody: document.querySelectorAll('[data-no-scroll]'),
  };

  function toggleModal() {
    const isModalOpen = refs.openModalList.getAttribute('aria-expanded') === 'true' || false;
    refs.openModalList.setAttribute('aria-expanded', !isModalOpen);

    refs.modal.classList.toggle('is-hidden'); // MUST HAVE

    refs.htmlAndBody[0].classList.toggle('no-scroll');
    refs.htmlAndBody[1].classList.toggle('no-scroll');
  }

  var isFocused = 0;
  function focusLog(targetElem = refs.openModalImg[0]) {
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
  // по event.target будет картинка а срабатывание произойдет на event.currentTarget
  // Сделать проверку if(event.target !== img) {return}
  refs.openModalList.addEventListener('click', event => {
    if (event.currentTarget == refs.openModalImg || event.currentTarget == refs.openModalList) {
      console.log('😍');
    }
    (refs.modal.classList.contains('is-hidden') || isModalOpen) && openModal();
  });

  // refs.closeModalBtn.addEventListener('click', event => {
  //   closeModal();
  // });

  // refs.modal.addEventListener('keyup', event => {
  //   (event.which === 27 || event.key === 'Escape') &&
  //     !refs.modal.classList.contains('is-hidden') &&
  //     closeModal();
  // });

  refs.modal.addEventListener('mousedown', event => {
    event.target.matches('[data-gallery-modal]') && closeModal();
  });
})();

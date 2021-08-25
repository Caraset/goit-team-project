const telBlock = document.querySelector('.connect-mobile__box');
const icon = document.querySelector('.connect-mobile');
icon.addEventListener('click', onIconClick);
function onIconClick() {
  telBlock.classList.toggle('is-hidden');
  document.removeEventListener('scroll', onScroll);
  document.addEventListener('scroll', onScroll);
}
function onScroll() {
  telBlock.classList.add('is-hidden');
  document.removeEventListener('scroll', onScroll);
}

(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    hideBurgerBtn: document.querySelector('.js-hide-modal-btn'),
    modal: document.querySelector('[data-modal]'),
    hideCloseIcon: document.querySelector('.js-hide-close-btn'),
    htmlAndBody: document.querySelectorAll('[data-no-scroll]'),

    bg: document.querySelector('.bg-elements-container'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.hideCloseIcon.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    refs.hideBurgerBtn.classList.toggle('is-hidden');
    refs.hideCloseIcon.classList.toggle('is-hidden');
    refs.htmlAndBody[0].classList.toggle('no-scroll');
    refs.htmlAndBody[1].classList.toggle('no-scroll');
    isCurrent();

    refs.bg.classList.toggle('menu-bg');
  }
})();

function isCurrent() {
  const links = document.querySelectorAll('.menu-nav__link');
  links.forEach(item => {
    if (item.href == window.location.href) {
      item.classList.add('is-current');
    }
  });
}

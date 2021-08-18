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
    body: document.querySelector('body'),

    bg: document.querySelector('.bg-elements-container'),
    menuDecor: document.querySelector('.hidden-element'),

    screenWidth: window.screen.width,
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.hideCloseIcon.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    refs.hideBurgerBtn.classList.toggle('is-hidden');
    refs.hideCloseIcon.classList.toggle('is-hidden');
    refs.body.classList.toggle('scroll-disabled');
    isCurrent();

    refs.bg.classList.toggle('menu-bg');

    if (refs.screenWidth >= 768) {
      refs.menuDecor.classList.toggle('is-hidden');
    }
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

// const telBlock = document.querySelector('.connect-mobile__box');
// const icon = document.querySelector('.connect-mobile');
// console.log(icon);
// console.log(telBlock);
// icon.addEventListener('click', onIconClick);
// function onIconClick() {
//   telBlock.classList.toggle('is-hidden');
//   document.removeEventListener('scroll', onScroll);
//   document.addEventListener('scroll', onScroll);
// }
// function onScroll() {
//   telBlock.classList.add('is-hidden');
//   document.removeEventListener('scroll', onScroll);
// }

// (() => {
//   const refs = {
//     openModalBtn: document.querySelector('[data-modal-open]'),
//     closeModalBtn: document.querySelector('[data-modal-close]'),
//     hideBurgerBtn: document.querySelector('[hide-modal-btn]'),
//     modal: document.querySelector('[data-modal]'),
//     hideCloseIcon: document.querySelector('[hide-close-icon]'),
//     body: document.querySelector('body'),
//   };

//   refs.openModalBtn.addEventListener('click', toggleModal);
//   refs.closeModalBtn.addEventListener('click', toggleModal);
//   refs.hideCloseIco.addEventListener('click', toggleModal);

//   function toggleModal() {
//     refs.modal.classList.toggle('is-hidden');
//     refs.hideBurgerBtn.classList.toggle('is-hidden');
//     refs.hideCloseIcon.classList.toggle('is-hidden');
//     refs.body.classList.toggle('scroll-disabled');
//   }
// })();

// sdfsdfsdfsdf

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
    hideBurgerBtn: document.querySelector('[hide-modal-btn]'),
    modal: document.querySelector('[data-modal]'),
    hideCloseIcon: document.querySelector('[hide-close-icon]'),
    body: document.querySelector('body'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.hideCloseIcon.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    refs.hideBurgerBtn.classList.toggle('is-hidden');
    refs.hideCloseIcon.classList.toggle('is-hidden');
    refs.body.classList.toggle('scroll-disabled');
  }
})();

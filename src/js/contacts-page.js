import '../sass/main.scss';

const input = document.querySelector('.contact-form__loading-file');
const labelOf = document.querySelector('.contact-form__loading-file-label');

input.addEventListener('change', () => {
  labelOf.classList.toggle('active');
});

import '../sass/main.scss';

const selected = document.querySelector('.select__title');
const optionsContainer = document.querySelector('.select__container');
const optionsList = document.querySelectorAll('.select__options');

selected.addEventListener('click', () => {
  optionsContainer.classList.toggle('active');
});

optionsList.forEach(o => {
  o.addEventListener('click', () => {
    selected.innerHTML = o.querySelector('label').innerHTML;
    optionsContainer.classList.remove('active');
  });
});

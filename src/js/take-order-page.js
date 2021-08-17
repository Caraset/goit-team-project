import '../sass/main.scss';

// select1
const selected_1 = document.querySelector('.js-opt-title-1');
const optionsContainer_1 = document.querySelector('.js-opt-container-1');
const optionsList_1 = document.querySelectorAll('.js-opt-option-1');

selected_1.addEventListener('click', () => {
  optionsContainer_1.classList.toggle('active');
});
optionsList_1.forEach(o => {
  document.addEventListener('scroll', () => optionsContainer_1.classList.remove('active'));
  o.addEventListener('click', () => {
    selected_1.innerHTML = o.querySelector('.js-label-1').innerHTML;
    optionsContainer_1.classList.remove('active');
    document.removeEventListener('scroll', () => optionsContainer_1.classList.remove('active'));
  });
});

// select2

const selected_2 = document.querySelector('.js-opt-title-2');
const optionsContainer_2 = document.querySelector('.js-opt-container-2');
const optionsList_2 = document.querySelectorAll('.js-opt-option-2');

selected_2.addEventListener('click', () => {
  optionsContainer_2.classList.toggle('active');
});
optionsList_2.forEach(o => {
  document.addEventListener('scroll', () => optionsContainer_2.classList.remove('active'));
  o.addEventListener('click', () => {
    selected_2.innerHTML = o.querySelector('.js-label-2').innerHTML;
    optionsContainer_2.classList.remove('active');
    document.removeEventListener('scroll', () => optionsContainer_2.classList.remove('active'));
  });
});

// select3

const selected_3 = document.querySelector('.js-opt-title-3');
const optionsContainer_3 = document.querySelector('.js-opt-container-3');
const optionsList_3 = document.querySelectorAll('.js-opt-option-3');

selected_3.addEventListener('click', () => {
  optionsContainer_3.classList.toggle('active');
});
optionsList_3.forEach(o => {
  document.addEventListener('scroll', () => optionsContainer_3.classList.remove('active'));
  o.addEventListener('click', () => {
    selected_3.innerHTML = o.querySelector('.js-label-3').innerHTML;
    optionsContainer_3.classList.remove('active');
    document.removeEventListener('scroll', () => optionsContainer_3.classList.remove('active'));
  });
});

//

const input = document.querySelector('.of__loading-file');
const labelOf = document.querySelector('.of__loading-file-label');

input.addEventListener('change', () => {
  labelOf.classList.toggle('active');
});

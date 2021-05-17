import './styles.css';

const refs = {
  bodyNode: document.querySelector('body'),
  strtButtonNode: document.querySelector('button[data-action="start"]'),
  stpButtonNode: document.querySelector('button[data-action="stop"]'),
};

refs.strtButtonNode.addEventListener('click', changeColoronStartClick);

refs.stpButtonNode.addEventListener('click', stopChangeColoronStartClick);

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const colorsLength = colors.length - 1;
let counter = null;

function changeColoronStartClick() {
  refs.strtButtonNode.setAttribute('disabled', 'disabled');
  counter = setInterval(() => {
    let randomColor = randomIntegerFromInterval(1, colorsLength);

    refs.bodyNode.style.backgroundColor = colors[randomColor];
  }, 1000);
}

function stopChangeColoronStartClick() {
  refs.strtButtonNode.removeAttribute('disabled');
  clearInterval(counter);
}

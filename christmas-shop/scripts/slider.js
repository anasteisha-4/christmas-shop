const sliderElement = document.getElementById('slide');
const leftButtonElement = document.getElementById('left-arrow');
const rightButtonElement = document.getElementById('right-arrow');

let clickCount;
let currentClickCount;
let position;
let offsetValue;

const resetSlider = function () {
  position = 0;
  currentClickCount = 0;
  let sliderRect = sliderElement.getBoundingClientRect();
  let sliderFullWidth = Math.max(sliderElement.scrollWidth, sliderRect.width);
  let sliderVisibleWidth = Math.max(
    0,
    Math.min(sliderRect.right, window.innerWidth) - Math.max(sliderRect.left, 0)
  );
  if (document.documentElement.clientWidth >= 768) {
    clickCount = 3;
  } else {
    clickCount = 6;
  }

  offsetValue = (sliderFullWidth - sliderVisibleWidth) / clickCount;
  sliderElement.style.transform = `TranslateX(${position}px)`;
  toggleActiveButtons();
};

const toggleActiveButtons = function () {
  if (currentClickCount === 0) {
    leftButtonElement.removeEventListener('click', leftButtonSlide);
    leftButtonElement.classList.add('inactive');
  } else {
    leftButtonElement.addEventListener('click', leftButtonSlide);
    leftButtonElement.classList.remove('inactive');
  }
  if (currentClickCount === clickCount) {
    rightButtonElement.removeEventListener('click', rightButtonSlide);
    rightButtonElement.classList.add('inactive');
  } else {
    rightButtonElement.addEventListener('click', rightButtonSlide);
    rightButtonElement.classList.remove('inactive');
  }
};

const leftButtonSlide = function () {
  position += offsetValue;
  currentClickCount--;
  sliderElement.style.transform = `TranslateX(${position}px)`;
  toggleActiveButtons();
};

const rightButtonSlide = function () {
  position -= offsetValue;
  currentClickCount++;
  sliderElement.style.transform = `TranslateX(${position}px)`;
  toggleActiveButtons();
};

resetSlider();
if (!leftButtonElement.classList.contains('inactive')) {
  leftButtonElement.addEventListener('click', leftButtonSlide);
}
if (!rightButtonElement.classList.contains('inactive')) {
  rightButtonElement.addEventListener('click', rightButtonSlide);
}

window.addEventListener('resize', resetSlider);

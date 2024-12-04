const sliderElement = document.getElementById('slide');
const leftButtonElement = document.getElementById('left-arrow');
const rightButtonElement = document.getElementById('right-arrow');

let clickCount = 0;
let currentClickCount = 0;
let position = 0;
let offsetValue = 0;

const resetSlider = function () {
  position = 0;
  currentClickCount = 0;
  const sliderRect = sliderElement.getBoundingClientRect();
  const sliderFullWidth = sliderElement.scrollWidth;
  const sliderVisibleWidth = sliderRect.width;
  if (document.documentElement.clientWidth > 768) {
    clickCount = 3;
  } else {
    clickCount = 6;
  }

  offsetValue = (sliderFullWidth - sliderVisibleWidth) / clickCount;
  sliderElement.style.transform = `translateX(${position}px)`;
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

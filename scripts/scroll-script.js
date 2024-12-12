let scrollArrowElement = document.getElementById('scroll-arrow');

function toggleScrollArrow() {
  if (window.scrollY >= 300 && document.documentElement.clientWidth <= 768) {
    scrollArrowElement.classList.add('active');
  } else {
    scrollArrowElement.classList.remove('active');
  }
}

function setButton() {
  if (document.documentElement.clientWidth <= 768) {
    toggleScrollArrow();
    window.addEventListener('scroll', toggleScrollArrow);
    scrollArrowElement.addEventListener('click', () => {
      window.scrollTo({ top: 0, right: 0, behavior: 'smooth' });
    });
  } else {
    scrollArrowElement.classList.remove('active');
  }
}

setButton();
window.addEventListener('resize', () => {
  setButton();
});

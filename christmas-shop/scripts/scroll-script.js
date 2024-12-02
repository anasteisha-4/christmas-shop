if (document.documentElement.clientWidth <= 768) {
  function toggleScrollArrow() {
    if (window.scrollY >= 300) {
      scrollArrowElement.classList.add('active');
    } else {
      scrollArrowElement.classList.remove('active');
    }
  }

  let scrollArrowElement = document.getElementById('scroll-arrow');
  toggleScrollArrow();
  window.addEventListener('scroll', toggleScrollArrow);
  scrollArrowElement.addEventListener('click', () => {
    window.scrollTo({ top: 0, right: 0, behavior: 'smooth' });
  });
}

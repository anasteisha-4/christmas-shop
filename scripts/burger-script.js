function changeBurgerActivity() {
  this.classList.toggle('active');
  let menu = document.querySelector('.menu');
  menu.classList.toggle('active');

  if (this.classList.contains('active')) {
    window.scrollTo({ top: 0, right: 0 });
    document.body.style.overflow = 'hidden';
  } else {
    window.scrollTo({ top: 0, right: 0 });
    document.body.style.overflow = 'scroll';
  }
}

let burger = document.querySelector('.menu-burger-mobile');
burger.addEventListener('click', changeBurgerActivity);

let menu = document.querySelector('.menu');
menu.addEventListener(
  'click',
  (event) => {
    if (
      event.target instanceof HTMLAnchorElement ||
      event.target instanceof HTMLSpanElement
    ) {
      document.body.style.overflow = 'scroll';
      burger.classList.remove('active');
      menu.classList.remove('active');
      window.scrollTo({ top: 0, right: 0 });
    }
  },
  true
);
window.addEventListener('resize', () => {
  if (document.documentElement.clientWidth > 768) {
    document.body.style.overflow = 'scroll';
  } else if (burger.classList.contains('active')) {
    window.scrollTo({ top: 0, right: 0, behavior: 'instant' });
    document.body.style.overflow = 'hidden';
  }
});

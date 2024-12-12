function openModal(event) {
  const targetGift = event.target.closest('.gift');
  if (targetGift) {
    const targetGiftName = targetGift.querySelector('.gift-name').textContent;
    let giftInfo = giftsDataMap.get(targetGiftName);
    createModal(giftInfo);
  }
}

function createModal(giftInfo) {
  const modalElement = document.getElementById('modal');
  const modalContentElement = document.getElementById('modal-content');
  const category = giftInfo.category;
  const imageElement = modalContentElement.children[1];
  const panelElement = modalContentElement.lastElementChild;
  const categoryElement = panelElement.firstElementChild.querySelector('h4');
  const nameElement = panelElement.firstElementChild.querySelector('h3');
  const descriptionElement = panelElement.firstElementChild.querySelector('p');
  const ratingElements =
    panelElement.lastElementChild.lastElementChild.children;
  for (let i = 0; i < 4; i++) {
    const currentElement = ratingElements[i];
    const snowflakesElements =
      currentElement.querySelector('.snowflakes').children;
    let [criteria, score] = Object.entries(giftInfo.superpowers)[i];
    currentElement.firstElementChild.textContent =
      criteria[0].toUpperCase() + criteria.slice(1);
    currentElement.children[1].textContent = score;
    let startNum = +score[1];
    for (let j = 0; j < 5; j++) {
      if (j >= startNum) {
        snowflakesElements[j].style.opacity = '0.1';
      } else {
        snowflakesElements[j].style.opacity = '1';
      }
    }
  }

  categoryElement.textContent = category;
  nameElement.textContent = giftInfo.name;
  descriptionElement.textContent = giftInfo.description;

  switch (category) {
    case 'For Work':
      imageElement.className = 'img-for-work';
      categoryElement.className = 'header-4 for-work';
      break;
    case 'For Health':
      imageElement.className = 'img-for-health';
      categoryElement.className = 'header-4 for-health';
      break;
    case 'For Harmony':
      imageElement.className = 'img-for-harmony';
      categoryElement.className = 'header-4 for-harmony';
      break;
  }
  modalElement.style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

function closeModal(modalElement) {
  modalElement.style.display = 'none';
  document.body.style.overflow = 'scroll';
}

let giftsData;
let giftsDataMap;
const giftsContainerElement_ = document.querySelector('.gifts-container');

loadGiftsData().then(() => {
  giftsContainerElement_.addEventListener('click', (event) => openModal(event));
  const modalElement = document.getElementById('modal');
  modalElement.addEventListener('click', (event) => {
    if (event.target === modalElement) {
      closeModal(modalElement);
    }
  });
  const exitElement = modalElement.querySelector('.exit');
  exitElement.addEventListener('click', () => closeModal(modalElement));
});

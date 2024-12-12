async function addAll(giftsContainerElement) {
  const response = await fetch('./gifts.json');
  let giftsData = await response.json();
  giftsData.sort(() => Math.random() - 0.5);

  for (let gift of giftsData) {
    const giftElement = document.createElement('div');
    giftElement.className = 'gift';

    const giftImageElement = document.createElement('div');
    giftImageElement.className = 'gift-image';

    const giftPanelElement = document.createElement('div');
    giftPanelElement.className = 'bottom-panel';

    const categoryElement = document.createElement('h4');
    categoryElement.className = 'header-4';
    const category = gift.category;
    categoryElement.textContent = category;

    const giftNameElement = document.createElement('h3');
    giftNameElement.className = 'header-3 gift-name';
    giftNameElement.textContent = gift.name;

    switch (category) {
      case 'For Work':
        giftImageElement.classList.add('img-for-work');
        categoryElement.classList.add('for-work');
        break;
      case 'For Health':
        giftImageElement.classList.add('img-for-health');
        categoryElement.classList.add('for-health');
        break;
      case 'For Harmony':
        giftImageElement.classList.add('img-for-harmony');
        categoryElement.classList.add('for-harmony');
        break;
    }

    giftPanelElement.append(categoryElement, giftNameElement);
    giftElement.append(giftImageElement, giftPanelElement);
    giftsContainerElement.append(giftElement);
  }
}

function showCategoryGifts(category) {
  for (let element of giftsContainerElement.children) {
    if (
      element.lastElementChild.firstElementChild.textContent === category ||
      category === 'All'
    ) {
      element.style.display = '';
    } else {
      element.style.display = 'none';
    }
  }
}

function changeCategory(event) {
  const buttonElement = event.target;
  changeActiveButton(buttonElement);
  if (
    ['For Work', 'For Health', 'For Harmony', 'All'].includes(
      buttonElement.textContent
    )
  ) {
    showCategoryGifts(buttonElement.textContent);
  }
}

function changeActiveButton(activeTargetElement) {
  for (let element of buttonContainerElement.children) {
    if (element.textContent === activeTargetElement.textContent) {
      element.classList.add('active');
    } else {
      element.classList.remove('active');
    }
  }
}

const buttonContainerElement = document.getElementById('tabs');
const giftsContainerElement = document.querySelector('.gifts-container');
addAll(giftsContainerElement);

buttonContainerElement.addEventListener('click', (event) => {
  changeCategory(event, giftsContainerElement);
});

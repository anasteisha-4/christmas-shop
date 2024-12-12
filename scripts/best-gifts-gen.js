async function generateRandomGifts() {
  const giftsContainerElement = document.querySelector('.gifts-container');
  const giftsElements = giftsContainerElement.children;
  for (let i = 0; i < 4; i++) {
    const category = giftsData[i].category;
    const currentGiftElement = giftsElements[i];
    currentGiftElement.lastElementChild.firstElementChild.textContent =
      category;
    currentGiftElement.lastElementChild.lastElementChild.textContent =
      giftsData[i].name;

    switch (category) {
      case 'For Work':
        currentGiftElement.firstElementChild.classList.add('img-for-work');
        currentGiftElement.lastElementChild.firstElementChild.classList.add(
          'for-work'
        );
        break;
      case 'For Health':
        currentGiftElement.firstElementChild.classList.add('img-for-health');
        currentGiftElement.lastElementChild.firstElementChild.classList.add(
          'for-health'
        );
        break;
      case 'For Harmony':
        currentGiftElement.firstElementChild.classList.add('img-for-harmony');
        currentGiftElement.lastElementChild.firstElementChild.classList.add(
          'for-harmony'
        );
        break;
    }
  }
}

loadGiftsData().then(() => generateRandomGifts());

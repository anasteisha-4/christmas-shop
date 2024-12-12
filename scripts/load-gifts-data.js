async function loadGiftsData() {
  const response = await fetch('./gifts.json');
  giftsData = await response.json();
  giftsData.sort(() => Math.random() - 0.5);

  giftsDataMap = new Map();
  for (let gift of giftsData) {
    giftsDataMap.set(gift.name, gift);
  }
}

function updateTime() {
  const ONE_DAY_MS = 24 * 60 * 60 * 1000;
  const ONE_HOUR_MS = 60 * 60 * 1000;
  const ONE_MINUTE_MS = 60 * 1000;
  const ONE_SECOND_MS = 1000;

  const NOW = new Date();
  const NOW_UTC = Date.UTC(
    NOW.getUTCFullYear(),
    NOW.getUTCMonth(),
    NOW.getUTCDate(),
    NOW.getUTCHours(),
    NOW.getUTCMinutes(),
    NOW.getUTCSeconds()
  );
  const NEW_YEAR = Date.UTC(2025, 0, 1, 0, 0, 0, 0);
  const DIFFERENCE_MS = NEW_YEAR > NOW_UTC ? NEW_YEAR - NOW_UTC : 0;

  const DAYS = Math.floor(DIFFERENCE_MS / ONE_DAY_MS);
  const HOURS = Math.floor((DIFFERENCE_MS - DAYS * ONE_DAY_MS) / ONE_HOUR_MS);
  const MINUTES = Math.floor(
    (DIFFERENCE_MS - DAYS * ONE_DAY_MS - HOURS * ONE_HOUR_MS) / ONE_MINUTE_MS
  );
  const SECONDS = Math.floor(
    (DIFFERENCE_MS -
      DAYS * ONE_DAY_MS -
      HOURS * ONE_HOUR_MS -
      MINUTES * ONE_MINUTE_MS) /
      ONE_SECOND_MS
  );

  const timerElements = document
    .getElementById('timer')
    .querySelectorAll('.time');

  timerElements[0].firstElementChild.textContent = DAYS;
  timerElements[1].firstElementChild.textContent = HOURS;
  timerElements[2].firstElementChild.textContent = MINUTES;
  timerElements[3].firstElementChild.textContent = SECONDS;
  console.log(timerElements);

  console.log(DAYS, HOURS, MINUTES, SECONDS);
}
setInterval(updateTime, 1000);

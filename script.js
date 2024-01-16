const hrHandEl = document.querySelector(".hr-hand");
const minHandEl = document.querySelector(".min-hand");
const secHandEl = document.querySelector(".sec-hand");

const hrHand = document.querySelector(".hr-hand");

function startClock() {
  const timer = setInterval(function () {
    const time = new Date();

    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();

    console.log(hours, minutes, seconds);

    const hrDeg = (hours / 12) * 360;
    const minDeg = (minutes / 60) * 360;
    const secDeg = (seconds / 60) * 360;

    console.log(hrDeg);

    secHandEl.style.transform = `rotate(${secDeg - 90}deg)`;
    minHandEl.style.transform = `rotate(${minDeg - 90}deg)`;
    hrHandEl.style.transform = `rotate(${hrDeg - 90}deg)`;
  }, 100);
}

startClock();

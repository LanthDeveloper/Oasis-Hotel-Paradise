const carouselButton = document.getElementById('btn_carouselFadeHero');

function simulateClick() {
  carouselButton.click();
}

setInterval(simulateClick, 5000);
// Obtener el botón por su ID
const carouselButton = document.getElementById('btn_carouselFadeHero');

// Función para simular el clic en el botón
function simulateClick() {
  carouselButton.click();
}

// Llamar a la función simulateClick cada n segundos
setInterval(simulateClick, 5000);
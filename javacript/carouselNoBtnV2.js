const carouselItems = document.querySelectorAll('#carouselNoBtnV2>.carousel_list>.carousel_item');

function isMobileDevice() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

if (!isMobileDevice()) {
  window.addEventListener('load', () => {
    carouselItems.forEach(item => {
      item.style.opacity = '1';
    });
  });

  carouselItems.forEach(item => {
    item.addEventListener('mouseover', () => {
      carouselItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.style.opacity = '0.5';
        }
      });
    });

    item.addEventListener('mouseout', () => {
      carouselItems.forEach(otherItem => {
        otherItem.style.opacity = '1';
      });
    });
  });
}
document.addEventListener("DOMContentLoaded", function () {
  let isDown = false;
  let startX;
  let scrollLeft;

  const carousels = document.querySelectorAll(".carousel_list");

  carousels.forEach((carousel) => {
      carousel.addEventListener("mousedown", (e) => {
          isDown = true;
          carousel.classList.add("active");
          startX = e.pageX - carousel.offsetLeft;
          scrollLeft = carousel.scrollLeft;
      });

      carousel.addEventListener("mouseleave", () => {
          isDown = false;
          carousel.classList.remove("active");
      });

      carousel.addEventListener("mouseup", () => {
          isDown = false;
          carousel.classList.remove("active");
          const cards = carousel.querySelectorAll(".carousel_item>a");
          cards.forEach((card) => {
              card.style.pointerEvents = "auto";
          });
      });

      carousel.addEventListener("mousemove", (e) => {
          if (!isDown) return;
          e.preventDefault();

          const x = e.pageX - carousel.offsetLeft;
          const walk = x - startX;
          carousel.scrollLeft = scrollLeft - walk;
          const cards = carousel.querySelectorAll(".carousel_item>a");
          cards.forEach((card) => {
              card.style.pointerEvents = "none";
          });
      });
  });

  function toggleButtonsVisibility(carousel) {
      var btnPrevious = carousel.parentElement.querySelector(".btn_prev");
      var btnNext = carousel.parentElement.querySelector(".btn_next");

      if (btnPrevious && btnNext) {
          // Si el scroll está en la posición más a la izquierda, mostrar solo el botón de Next
          if (carousel.scrollLeft <= 0) {
              btnPrevious.style.display = "none";
              btnNext.style.display = "inline-block";
          }
          // Si el scroll está en la posición más a la derecha, mostrar solo el botón de Previous
          else if (carousel.scrollLeft >= carousel.scrollWidth - carousel.offsetWidth) {
              btnPrevious.style.display = "inline-block";
              btnNext.style.display = "none";
          }
          // Si el scroll está en cualquier otra posición, mostrar ambos botones
          else {
              btnPrevious.style.display = "inline-block";
              btnNext.style.display = "inline-block";
          }
      }
  }
  carousels.forEach((carousel) => {
      var btnNext = carousel.parentElement.querySelector(".btn_next");
      var btnPrevious = carousel.parentElement.querySelector(".btn_prev");

      if (btnNext) {
          btnNext.addEventListener("click", function () {
              var firstCard = carousel.querySelector(".card");
              var itemWidth = firstCard.offsetWidth + parseInt(window.getComputedStyle(firstCard).marginRight);
              smoothScrollCarousel(carousel, itemWidth, true);
              toggleButtonsVisibility(carousel);
          });
      }

      if (btnPrevious) {
          btnPrevious.addEventListener("click", function () {
              var firstCard = carousel.querySelector(".card");
              var itemWidth = firstCard.offsetWidth + parseInt(window.getComputedStyle(firstCard).marginRight);
              smoothScrollCarousel(carousel, -itemWidth, true);
              toggleButtonsVisibility(carousel);
          });
      }

      toggleButtonsVisibility(carousel);
      carousel.addEventListener("scroll", () => toggleButtonsVisibility(carousel));
  });

  function smoothScrollCarousel(carousel, distance, isNext) {
      var startingPosition = carousel.scrollLeft;
      var endingPosition = isNext ? startingPosition + distance : startingPosition - distance;

      var animationDuration = 1200; // Duración de la animación en milisegundos
      var startTime = null;

      function animate(currentTime) {
          if (!startTime) startTime = currentTime;
          var elapsed = currentTime - startTime;
          var progress = Math.min(elapsed / animationDuration, 1);
          var ease = easeOutQuart(progress);

          carousel.scrollLeft = startingPosition + (endingPosition - startingPosition) * ease;

          if (progress < 1) {
              requestAnimationFrame(animate);
          }
      }

      requestAnimationFrame(animate);
  }

  function easeOutQuart(x) {
      return 1 - Math.pow(1 - x, 4);
  }
});

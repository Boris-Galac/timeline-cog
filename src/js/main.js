const cog = document.querySelector(".cog");

let previousIndex = 0;

const swiper = new Swiper(".timeline-cog", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  initialSlide: 1, // Početni slajd je 2014. (drugi slajd)
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  on: {
    slideChange: function () {
      const currentIndex = this.activeIndex;

      // ROTATE COG
      if (currentIndex > previousIndex) {
        rotateCog(30);
      } else if (currentIndex < previousIndex) {
        rotateCog(-30);
      }

      // REMOVE previous highlight
      document
        .querySelectorAll(".timeline-card__year")
        .forEach((el) => el.classList.remove("timeline-card__year--current"));

      // ADD class to current
      const currentSlide = this.slides[currentIndex];
      const yearEl = currentSlide.querySelector(".timeline-card__year");
      if (yearEl) {
        yearEl.classList.add("timeline-card__year--current");
      }

      previousIndex = currentIndex;
    },
  },
});

// helper function
function rotateCog(degrees) {
  if (!cog) return;

  // get current rotation
  const currentRotation = cog.dataset.rotation
    ? parseFloat(cog.dataset.rotation)
    : 0;

  const newRotation = currentRotation + degrees;

  cog.style.transform = `rotate(${newRotation}deg)`;
  cog.dataset.rotation = newRotation; // store new value
}

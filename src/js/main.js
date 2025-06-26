// var swiper = new Swiper(".timeline-cog", {
//   effect: "coverflow",
//   grabCursor: true,
//   centeredSlides: true,
//   slidesPerView: "auto",
//   coverflowEffect: {
//     rotate: 50,
//     stretch: 0,
//     depth: 100,
//     modifier: 1,
//     slideShadows: true,
//   },
//   pagination: {
//     el: ".swiper-pagination",
//   },
// });

const cog = document.querySelector(".cog");

let previousIndex = 0;

const swiper = new Swiper(".timeline-cog", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
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
  on: {
    slideChange: function () {
      const currentIndex = this.activeIndex;

      if (currentIndex > previousIndex) {
        // swipe right → rotate cog right
        rotateCog(30); // rotate 30deg clockwise
      } else if (currentIndex < previousIndex) {
        // swipe left → rotate cog left
        rotateCog(-30); // rotate 30deg counterclockwise
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

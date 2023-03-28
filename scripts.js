const carouselWrapper = document.querySelector('.carousel-wrapper');
const carouselSlides = document.querySelectorAll('.carousel-slide');
const carouselPrev = document.querySelector('.carousel-prev');
const carouselNext = document.querySelector('.carousel-next');

let slideIndex = 0;
const slideWidth = carouselSlides[0].clientWidth;

carouselPrev.addEventListener('click', () => {
  slideIndex--;
  if (slideIndex < 0) {
    slideIndex = carouselSlides.length - 1;
  }
  carouselWrapper.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
});

carouselNext.addEventListener('click', () => {
  slideIndex++;
  if (slideIndex > carouselSlides.length - 1) {
    slideIndex = 0;
  }
  carouselWrapper.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
});
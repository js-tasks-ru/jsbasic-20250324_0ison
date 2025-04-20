function initCarousel() {
  const prevButton = document.querySelector('.carousel__arrow_left');
  const nextButton = document.querySelector('.carousel__arrow_right');
  const container = document.querySelector('.carousel__inner');
  const slides = Array.from(document.querySelectorAll('.carousel__slide'));

  prevButton.style.display = 'none';
  nextButton.style.display = 'none';

  let currentIndex = 0;

  function updateSlider() {
    let offset = 0;

    for (let i = 0; i < currentIndex; i++) {
      offset += slides[i].offsetWidth;
    }

    container.style.transform = `translateX(-${offset}px)`;

    if (currentIndex === 0) {
      prevButton.style.display = 'none';
    } else {
      prevButton.style.display = '';
    }

    if (currentIndex === slides.length - 1) {
      nextButton.style.display = 'none';
    } else {
      nextButton.style.display = '';
    }
  }

  nextButton.addEventListener("click", () => {
    currentIndex = currentIndex + 1;
    updateSlider();
  });

  prevButton.addEventListener("click", () => {
    currentIndex = currentIndex - 1;
    updateSlider();
  });

  updateSlider();
}

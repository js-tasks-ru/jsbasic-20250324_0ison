import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  constructor(slides) {
    this.slides = slides;
    this.currentSlideIndex = 0;
    this.elem = this.render();
    this.initCarousel();
  }

  render() {
    const carousel = createElement(`
      <div class="carousel">
        <div class="carousel__arrow carousel__arrow_right">
          <img src="/assets/images/icons/angle-icon.svg" alt="icon">
        </div>
        <div class="carousel__arrow carousel__arrow_left" style="display: none">
          <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
        </div>
        <div class="carousel__inner">
          ${this.slides.map(slide => `
            <div class="carousel__slide" data-id="${slide.id}">
              <img src="/assets/images/carousel/${slide.image}" class="carousel__img" alt="slide">
              <div class="carousel__caption">
                <span class="carousel__price">€${slide.price.toFixed(2)}</span>
                <div class="carousel__title">${slide.name}</div>
                <button type="button" class="carousel__button">
                  <img src="/assets/images/icons/plus-icon.svg" alt="icon">
                </button>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `);

    return carousel;
  }

  initCarousel() {
    const prevButton = this.elem.querySelector('.carousel__arrow_left');
    const nextButton = this.elem.querySelector('.carousel__arrow_right');
    const container = this.elem.querySelector('.carousel__inner');
    const slides = Array.from(this.elem.querySelectorAll('.carousel__slide'));

    prevButton.style.display = 'none';
    nextButton.style.display = 'none';

    let currentIndex = 0;

    const updateSlider = () => {
      let offset = 0;

      for (let i = 0; i < currentIndex; i++) {
        offset += slides[i].offsetWidth;
      }

      container.style.transform = `translateX(-${offset}px)`;

      prevButton.style.display = currentIndex === 0 ? 'none' : '';
      nextButton.style.display = currentIndex === slides.length - 1 ? 'none' : '';
    };

    nextButton.addEventListener("click", () => {
      currentIndex += 1;
      updateSlider();
    });

    prevButton.addEventListener("click", () => {
      currentIndex -= 1;
      updateSlider();
    });

    this.elem.addEventListener('click', (event) => {
      if (event.target.closest('.carousel__button')) {
        const slideId = event.target.closest('.carousel__slide').dataset.id;
        this.elem.dispatchEvent(new CustomEvent('product-add', {
          detail: slideId,
          bubbles: true,
        }));
      }
    });

    updateSlider();
  }
}

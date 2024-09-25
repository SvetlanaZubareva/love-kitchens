import Swiper from '../vendor/package/swiper-bundle.min.mjs';
const swiperContainer = document.querySelector('.swiper');
const swiperContainer2 = document.querySelector('.swiper2');
// первый слайдер

const slider = () => {
  if (!swiperContainer) {
      return ;
  };
  }
  
  const swiper = new Swiper(swiperContainer, {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 4.5,
    observer: true,
    spaceBetween: 30,
    breakpoints: {
      400: {
          slidesPerView: 1.5,
          spaceBetween: 15,
      },
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
  });

  // второй слайдер

  const slider2 = () => {
    if (!swiperContainer2) {
        return ;
    };
    }
    
    const swiper2 = new Swiper(swiperContainer2, {
      direction: 'horizontal',
      centerInsufficientSlides: false,
      slidesPerView: 3,
      observer: true,
      spaceBetween: 30,
      
      navigation: {
          nextEl: '.swiper-button-next2',
          prevEl: '.swiper-button-prev2',
      },
    });

    window.onload = () => {
      slider();
      slider2();
      observer();
  }

  export { slider, slider2 }
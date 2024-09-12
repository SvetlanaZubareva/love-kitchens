import Swiper from './vendor/package/swiper-bundle.min.mjs';

// код для первого слайдера

const swiperContainer = document.querySelector('.swiper');
const swiperContainer2 = document.querySelector('.swiper2');

document.addEventListener(
    'DOMContentLoaded',
    () => {
      debugger
        slider();
        slider2();
    },
    true
)

const slider = () => {
  if (!swiperContainer) {
      return ;
  };

  const swiper = new Swiper(swiperContainer, {
    direction: 'horizontal',
    slidesPerView: 3,
    observer: true,
    spaceBetween: 15,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });
}

// код для второго слайдера
const slider2 = () => {
  if (!swiperContainer2) {
      return ;
  };

  const swiper = new Swiper(swiperContainer2, {
    direction: 'horizontal',
    slidesPerView: 7,
    observer: true,
    spaceBetween: 15,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next2',
      prevEl: '.swiper-button-prev2',
    }
  });
}

export {slider};
let menu = ['North Shore', 'South Shore', 'West Shore', 'East Shore'];



const headerSwiper = new Swiper('.header__content', {
    slideClass: 'header__slider-item',
    wrapperClass: 'header__slider',
    effect: "fade",
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".header__slider-button-next",
        prevEl: ".header__slider-button-prev",
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
            return '\
          <div class="box ' + className + '">\
          <div class="bigNumber">' + (index < 10 ? '0' + (index + 1) : (index + 1)) + '</div>\
          <div class="text">' + (menu[index]) + '</div>\
          </div>';
        },
    },
    autoplay: {
        delay: 5000,
    },

});


const swiper2 = new Swiper('.surf-slider__content', {
    slideClass: 'surf-box',
    wrapperClass: 'surf-slider',
    slidesPerView: 4,
    navigation: {
        nextEl: ".surf-slider__button-next",
        prevEl: ".surf-slider__button-prev",
    },
});


const dotsMap = document.querySelectorAll('.slider-dots');


dotsMap.forEach(dot => {
    dot.addEventListener('click', () => {
        if (!dot.classList.contains('slider-dots--active')) {
            dot.classList.add('slider-dots--active');

        } else {
            dot.classList.remove('slider-dots--active');
        }
    });
});

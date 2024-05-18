var menu = ['North Shore', 'South Shore', 'West Shore', 'East Shore']

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
    /*     autoplay: {
            delay: 5000,
        }, */

});


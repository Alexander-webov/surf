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
    loop: true,
    navigation: {
        nextEl: ".surf-slider__button-next",
        prevEl: ".surf-slider__button-prev",
    },
});


const swiperTravel = new Swiper('.travel__slider', {
    slideClass: 'travel__slider-item',
    wrapperClass: 'travel__slider-content',
    slidesPerView: 1,
    loop: true,

    navigation: {
        nextEl: ".travel__slider-button-next",
        prevEl: ".travel__slider-button-prev",
    },
});


const swiperSleep = new Swiper('.sleep__slider', {
    slideClass: 'sleep__slider-item',
    wrapperClass: 'sleep__slider-content',
    slidesPerView: 1,
    loop: true,

    navigation: {
        nextEl: ".sleep__slider-button-next",
        prevEl: ".sleep__slider-button-prev",
    },
});


const swiperShop = new Swiper('.shop__slider', {
    slideClass: 'shop__slider-item',
    wrapperClass: 'shop__slider-content',
    slidesPerView: 1,
    loop: true,

    navigation: {
        nextEl: ".shop__slider-button-next",
        prevEl: ".shop__slider-button-prev",
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
const surfBox = document.querySelectorAll('.surf-box');

surfBox.forEach(el => {
    el.addEventListener('click', () => {
        if (!el.classList.contains('swiper-slide-active')) {
            el.classList.add('swiper-slide-active');

        } else {
            el.classList.remove('swiper-slide-active');
        }
    })
})


/* input calc */
jQuery('<div class="quantity-nav"><div class="quantity-button quantity-up">+</div><div class="quantity-button quantity-down">-</div></div>').insertAfter('.quantity input');
jQuery('.quantity').each(function () {
    var spinner = jQuery(this),
        input = spinner.find('input[type="number"]'),
        btnUp = spinner.find('.quantity-up'),
        btnDown = spinner.find('.quantity-down'),
        min = input.attr('min'),
        max = input.attr('max');

    btnUp.click(function () {
        var oldValue = parseFloat(input.val());
        if (oldValue >= max) {
            var newVal = oldValue;
        } else {
            var newVal = oldValue + 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
    });

    btnDown.click(function () {
        var oldValue = parseFloat(input.val());
        if (oldValue <= min) {
            var newVal = oldValue;
        } else {
            var newVal = oldValue - 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
    });

});


/* calc  */



const quantityButton = document.querySelectorAll('.quantity-button');
const nights = document.querySelector('.nights');
const guests = document.querySelector('.guests');
const sum = document.querySelector('.sum');
let total = nights.value * sum.getAttribute('data-nights') + (guests.value - 1) * sum.getAttribute('data-guests');;



const calculator = () => {
    sum.innerHTML = total;
    quantityButton.forEach(el => {
        el.addEventListener('click', () => {
            total = nights.value * sum.getAttribute('data-nights') + (guests.value - 1) * sum.getAttribute('data-guests');
            sum.innerHTML = total;
        })
    })
}

calculator();



const surfboardBoxCircle = document.querySelectorAll('.surfboard-box__circle');
const circle = document.querySelector('.surfboard-box__circle-row.active');
const surfboardBoxContent = document.querySelectorAll('.surfboard-box__content');

surfboardBoxCircle.forEach((el, key) => {

    el.addEventListener('click', () => {
        circle.classList.toggle('active');
        surfboardBoxContent[key].classList.toggle('active');
    });
})


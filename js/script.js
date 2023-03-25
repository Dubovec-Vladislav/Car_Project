$(document).ready(function () {
    $('.header__burger').click(function (event) {
        $('.header__burger,.header__list-link').toggleClass('active');
        $('body').toggleClass('lock')
    });
});



let myCarSlider = new Swiper('.body__slider', {
    navigation: {
        nextEl: '.body-button-next',
        prevEl: '.body-button-prev',
    },

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        type: 'bullets',
    },

    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
    },

    keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true,
    },

    mousewheel: {
        sensitivity: 1,
    },

    speed: 600,
    // loop: true,
});

let mySliderAllSlides = document.querySelector('.body__slider-total');
let mySliderCurrentSlide = document.querySelector('.body__slider-current');

mySliderAllSlides.innerHTML = myCarSlider.slides.length;

myCarSlider.on('slideChange', function () {
    let currentSlide = ++myCarSlider.realIndex;
    mySliderCurrentSlide.innerHTML = currentSlide;
});
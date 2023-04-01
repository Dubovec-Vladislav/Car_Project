$(document).ready(function () {
    $('.header__burger').click(function (event) {
        $('.header__burger,.header__list-link').toggleClass('active');
        $('body').toggleClass('lock');
    });
    $('.bid__link').click(function (event) {
        $('.popup').toggleClass('active');
        $('.popup__body').toggleClass('active');
        $('body').toggleClass('lock');
    });
    $('.popup__close').click(function (event) {
        $('.popup').toggleClass('active');
        $('.popup__body').toggleClass('active');
        $('body').toggleClass('lock');
    });
});

let myCarSlider = new Swiper('.body__slider', {
    navigation: {
        nextEl: '.navigation__button-next',
        prevEl: '.navigation__button-prev',
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
// -------------------------------------------------- //


// -------------------------------------------------- //
const circle = document.querySelector('.progress-ring__circle');
const radius = circle.r.baseVal.value;
const circumference = 2 * Math.PI * radius;
const input = document.querySelector('.percent');

const mySliderAllSlides = myCarSlider.slides.length;

circle.style.strokeDasharray = `${circumference} ${circumference}`;
circle.style.strokeDashoffset = circumference;
circle.style.display = 'block';

function setProgress(percent) {
    const offset = circumference - percent / 100 * circumference;
    circle.style.strokeDashoffset = offset;
}

let mySliderLineHeight = 1 / mySliderAllSlides * 100;
setProgress(mySliderLineHeight);

myCarSlider.on('slideChange', function () {
    let mySliderCurrentSlide = ++myCarSlider.realIndex;
    let mySliderLineHeight = mySliderCurrentSlide / mySliderAllSlides * 100;
    setProgress(mySliderLineHeight);
});
// -------------------------------------------------- //


// -------------------------------------------------- //
// Элементы формы
const PriceInput = document.querySelector('#price-input');
const PriceRange = document.querySelector('#price-range');

const InitialPriceInput = document.querySelector('#initial-price-input');
const InitialPriceRange = document.querySelector('#initial-price-range');

const TimeInput = document.querySelector('#time-input');
const TimeRange = document.querySelector('#time-range');

const inputs = document.querySelectorAll('input');

const totalProcentElement = document.querySelector('#total-procent');
const totalPriceElement = document.querySelector('#total-price');
const totalPriceMonthElement = document.querySelector('#total-price-month');

// Связка range c тектовым полем
PriceRange.addEventListener('input', function () {
    PriceInput.value = PriceRange.value;
});

InitialPriceRange.addEventListener('input', function () {
    InitialPriceInput.value = InitialPriceRange.value;
});

TimeRange.addEventListener('input', function () {
    TimeInput.value = TimeRange.value;
});

// Связка текстового поля с range
PriceInput.addEventListener('input', function () {
    PriceRange.value = PriceInput.value;
});

InitialPriceInput.addEventListener('input', function () {
    InitialPriceRange.value = InitialPriceInput.value;
});

TimeInput.addEventListener('input', function () {
    TimeRange.value = TimeInput.value;
});

// Функция расчета стоимости
function calculate() {
    let totalProcent = (Math.round(InitialPriceInput.value / PriceInput.value * 100) + '%');
    totalProcentElement.innerText = totalProcent;

    let minPrice = parseInt(InitialPriceInput.value) * 2;
    let maxInitialPrice = parseInt(PriceInput.value) / 2;
    console.log(maxInitialPrice);

    PriceRange['min'] = minPrice;
    InitialPriceRange['max'] = maxInitialPrice;

    let procent = TimeInput.value / 15;
    let totalPrice = Math.round((PriceInput.value  - InitialPriceInput.value) * procent / 100 * TimeInput.value);
    totalPriceElement.innerText = totalPrice;

    let totalPriceMonth = totalPrice / TimeInput.value;
    totalPriceMonthElement.innerText = Math.round(totalPriceMonth);
}

// Вызов функции расчета стоимости
calculate();

// Остлеживание всех инпутов на стрице
for (const input of inputs) {
    input.addEventListener('input', function () {
        calculate(); // Когда изменятся хоть один инпут повторно вызвываетя функция
    });
};
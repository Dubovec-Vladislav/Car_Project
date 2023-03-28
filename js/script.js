$(document).ready(function () {
    $('.header__burger').click(function (event) {
        $('.header__burger,.header__list-link').toggleClass('active');
        $('body').toggleClass('lock')
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
    const formatter = new Intl.NumberFormat('ru');

    let totalProcent = (Math.round(parseInt(InitialPriceInput.value) / parseInt(PriceInput.value) * 100) + '%');
    totalProcentElement.innerText = totalProcent;

    let totalPrice = (parseInt(PriceInput.value) - parseInt(InitialPriceInput.value)) * 2.6 / 100 * parseInt(TimeInput.value) ;
    totalPriceElement.innerText = formatter.format(totalPrice);

    let totalPriceMonth = parseInt(totalPrice) / parseInt(TimeInput.value);
    totalPriceMonthElement.innerText = formatter.format(totalPriceMonth);
}

// Вызов функции расчета стоимости
calculate();

// Остлеживание всех инпутов на стрице
for (const input of inputs) {
    input.addEventListener('input', function () {
        calculate(); // Когда изменятся хоть один инпут повторно вызвываетя функция
    });
};
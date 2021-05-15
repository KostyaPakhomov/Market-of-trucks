"use strict"

/* Индекс слайда по умолчанию */
let slideIndexTrucks = 1;
showSlidesTrucks(slideIndexTrucks);

/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function minusSlideTrucks() {
    showSlidesTrucks(slideIndexTrucks -= 1);
}

/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function plusSlideTrucks() {
    showSlidesTrucks(slideIndexTrucks += 1);
}

/* Устанавливает текущий слайд */
function currentSlideTrucks(n) {
    showSlidesTrucks(slideIndexTrucks = n);
}

/* Основная функция слайдера */
function showSlidesTrucks(n) {
    let i;
    const slidesTrucks = document.getElementsByClassName("listTrucks");
    const dotsTrucks = document.getElementsByClassName("slider-dots_itemTrucks");
    if (n > slidesTrucks.length) {
        slideIndexTrucks = 1
    }
    if (n < 1) {
        slideIndexTrucks = slidesTrucks.length;
    }
    for (i = 0; i < slidesTrucks.length; i++) {
        slidesTrucks[i].style.visibility = "hidden";
    }
    for (i = 0; i < dotsTrucks.length; i++) {
        dotsTrucks[i].className = dotsTrucks[i].className.replace(" active", "");
    }
    slidesTrucks[slideIndexTrucks - 1].style.visibility = "visible";
    dotsTrucks[slideIndexTrucks - 1].className += " active";
}


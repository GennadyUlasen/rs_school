console.log("Вёрстка соответствует макету. Ширина экрана 768px +26\nНи на одном из разрешений до 640px включительно не появляется горизонтальная полоса прокрутки. Весь контент страницы при этом сохраняется: не обрезается и не удаляется +12\nНа ширине экрана 768рх реализовано адаптивное меню +12\nОценка за задание 50 баллов");

let burger = document.querySelector(".burger");
let close = document.querySelector(".close-burger");
let nav = document.querySelector(".head-container nav");
let menu = document.querySelector(".menu-ul");
let menuLi = document.querySelector(".menu-ul li");
let mobileIcons = document.querySelector(".mobile-icons");
let displayUl = document.querySelector(".head-container ul")


burger.addEventListener('click', function(){
    nav.classList.toggle('mobile-nav');
    menu.classList.toggle('burger-ul');
    menuLi.classList.toggle('burger-li');
    mobileIcons.classList.toggle('burger-icons');
    nav.classList.toggle('animation');
});

close.addEventListener('click', function(){
    nav.classList.toggle('mobile-nav');
    menu.classList.toggle('burger-ul');
    menuLi.classList.toggle('.burger-li');
    mobileIcons.classList.toggle('burger-icons');
});

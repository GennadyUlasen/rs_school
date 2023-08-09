console.log("Вёрстка валидная +10\nВёрстка семантическая +16\nВёрстка соответствует макету +54\nОбщие требования к верстке +20\n")

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

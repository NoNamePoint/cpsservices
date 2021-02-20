import '../scss/style.scss';


let burgerButton = document.querySelector('.header__wrapper-button');
let nav = document.querySelector('.aside');
let section = document.querySelector(".section")
let header = document.querySelector(".header")  

function toggleMenu() {
    nav.classList.toggle('aside--active');
    section.classList.toggle('section--blured');
    header.classList.toggle('header--active');
};

    
burgerButton.addEventListener('click', toggleMenu);

import '../scss/style.scss';



if (window.innerWidth <= 767) {
    let swiper = new Swiper('.swiper-container', {
        slidesPerView: "auto",
        spaceBetween: 16,
        pagination: {
            el: '.swiper-pagination',
        },
    });
};

const page = document.getElementsByTagName('body')[0]

const buttonAboutCompany = document.querySelector('.about-company__btn');
const showMoreAboutLink = document.querySelector('.about-company__link');
const textAboutCompany = document.getElementById("text2")
const blockAboutCompany = document.querySelector('.about-company__text'); 


const contentBrands = document.querySelector('.brands');
const buttonBrands = document.querySelector('.brands__button');
const showMoreBrandsLink = document.querySelector('.brands__button-link');

const contentGoods = document.querySelector('.goods');
const buttonGoods = document.querySelector('.goods__button');
const showMoreGoodsLink = document.querySelector('.goods__button-link');


const headerButton = document.querySelector('.functional-btns__button');
const menuClose = document.querySelector('.functional-btns__menu');
const blur = document.querySelector('.blur');
const menu = document.querySelector('.menu');


const modalCall = document.querySelector('.modal-call');
const modalFeedback = document.querySelector('.modal-feed');


function showText(blockToShow, buttonlink, text) {
    let maxheight = getElementStyle("max-height", blockToShow)
    let minheight = getElementStyle("min-height", blockToShow)
    
    if(maxheight != 'none'){
        blockToShow.style.minHeight = `${maxheight}`;
        blockToShow.style.maxHeight = "none";
        text.style.display = 'inline-block';
        buttonlink.innerHTML = "Скрыть";
    } else {
        blockToShow.style.minHeight = maxheight;
        blockToShow.style.maxHeight = minheight;
        text.style.display = 'none';
        buttonlink.innerHTML = "Читать далее";
    }
    

    buttonlink.classList.toggle('about-company__link--showless')
};

buttonAboutCompany.addEventListener('click', (e) => {
    e.preventDefault();
    showText(blockAboutCompany, showMoreAboutLink, textAboutCompany);
});



function showMoreLess(blockToShow, buttonlink, button) { 

    let blockHeight = getElementStyle("max-height", blockToShow) // получить высоту блока и передать в переменную

    if (blockHeight != "none") {
        blockToShow.style.maxHeight = "none";
        buttonlink.innerHTML = "Скрыть";
        
    } else {
        blockToShow.style.maxHeight = "160px";
        buttonlink.innerHTML = "Показать все";
    };

    brandsButtonToggleClass(buttonlink, button);
      
};

function getElementStyle(style, element) {
    let elementStyle = window.getComputedStyle(element);
    return elementStyle.getPropertyValue(style)
}; // метод получения высоты блока



function brandsButtonToggleClass(button, buttonlink){
    buttonlink.classList.toggle(`${buttonlink}` + "--showless");
    button.classList.toggle(`${button}` + "--less"); //"brands__button--less"
}; // метод изменения класса елемента

// ==BRANDSBUTTON==

buttonBrands.addEventListener('click', (e)=>{
    e.preventDefault();
    showMoreLess(contentBrands, showMoreBrandsLink, buttonBrands);
});

// ==GOODSBUTTON==

buttonGoods.addEventListener('click', (e) => {
    e.preventDefault();
    showMoreLess(contentGoods, showMoreGoodsLink, buttonGoods);
});



// ==MENU==

function headerToggleClass() {
    menu.classList.toggle("menu--active");
    blur.classList.toggle("blur--active");
};


headerButton.addEventListener('click', function(){
    headerToggleClass(); 
});


menuClose.addEventListener('click', function () {  

    menu.classList.remove("menu--active");
    blur.classList.remove("blur--active");
     
});

// ==MENU==

// ==MODALS==
document.addEventListener('click', (event)=>{

    if (event.target.parentNode.matches('.socials__btn-call') || event.target.matches('.price__btn') || event.target.matches('.price-button__link')) {
        modalCall.classList.add('modal-call--active')
        blur.classList.add('blur--active')
        menu.classList.remove('menu--active')
        page.style.position = 'fixed'
    }

    if(event.target.parentNode.matches('.socials__btn-feedback')){
        modalFeedback.classList.add('modal-call--active')
        blur.classList.add('blur--active')
        menu.classList.remove('menu--active')
        page.style.position = 'fixed'
    }

    if (event.target.matches('.modal-call__close') || event.target.matches('.blur')) {
        modalCall.classList.remove('modal-call--active')
        modalFeedback.classList.remove('modal-call--active')
        blur.classList.remove('blur--active')
        menu.classList.remove('menu--active')
        page.style.position = 'inherit'
    }

});


// ==MODALS==


 
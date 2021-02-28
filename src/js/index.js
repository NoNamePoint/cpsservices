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



let contentBrands = document.querySelector('.brands');
let buttonBrands = document.querySelector('.brands__button');
let showMoreButtonLink = document.querySelector('.brands__button-link');
let headerButton = document.querySelector('.functional-btns__button');
let menuClose = document.querySelector('.functional-btns__menu');
let blur = document.querySelector('.blur');
let menu = document.querySelector('.menu');



function showMoreLess() { 
    let contentBrandsHeight = getElementStyle("max-height", contentBrands)
    console.log(contentBrandsHeight)

    if (contentBrandsHeight != "none") {
        contentBrands.style.maxHeight = "none";
        showMoreButtonLink.innerHTML = "Скрыть";
        
    } else {
        contentBrands.style.maxHeight = "160px";
        showMoreButtonLink.innerHTML = "Показать все";
    };

    brandsButtonToggleClass();
      
};

function getElementStyle(style, element){
    let elementStyle = window.getComputedStyle(element);
    return elementStyle.getPropertyValue(style)
};

function brandsButtonToggleClass(){
    showMoreButtonLink.classList.toggle("brands__button-link--showless");
    buttonBrands.classList.toggle("brands__button--less");
};

function headerToggleClass() {
    menu.classList.toggle("menu--active");
    blur.classList.toggle("blur--active");
};



buttonBrands.addEventListener('click', (e)=>{
    e.preventDefault();
    showMoreLess();
});



headerButton.addEventListener('click', function(){
    headerToggleClass(); 
});


menuClose.addEventListener('click', function () {  

    
    menu.classList.remove("menu--active");
    blur.classList.remove("blur--active");
     
});







 
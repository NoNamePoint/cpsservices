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
let showMoreButtonLink = document.querySelector('.showmore-button__link');



function showMoreLess() { 
    let contentBrandsHeight = getElementStyle("max-height", contentBrands)

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
    showMoreButtonLink.classList.toggle("showmore-button__link--showless");
    buttonBrands.classList.toggle("brands__button--less");
};


buttonBrands.addEventListener('click', showMoreLess);






 
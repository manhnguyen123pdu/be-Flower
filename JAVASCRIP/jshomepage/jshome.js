function shownav() {
    document.querySelector('.header__overlay').classList.add('shownav')
}
function hindNav() {
    document.querySelector('.header__overlay').classList.remove('shownav')

}

//  đổi mầu nav
addEventListener('scroll', function () {
    if (pageYOffset > 180) {
        document.querySelector('.header__content').style.backgroundColor = ' #0d302ef0'
    }
    else {
        document.querySelector('.header__content').style.backgroundColor = 'transparent'
    }
})

// RENDER PRODUCT
function rederProduct() {
    let JsonListProduct = JSON.parse(window.localStorage.getItem('localListProduct'));
    let content = "";
    for (i = 0; i < JsonListProduct.length; i++) {
        content += `
        <div class="item">
            <img src="${JsonListProduct[i].image}"
            alt="">
            <h4>${JsonListProduct[i].nameProduct}</h4>
            <span>$${Number(JsonListProduct[i].price.substr(0,1)).toFixed(2)}-$${Number(JsonListProduct[i].price.substr(2,2)).toFixed(2)}  </span>
         </div> `
    }
    document.querySelector('.owl-carousel').innerHTML=content;
}

rederProduct()
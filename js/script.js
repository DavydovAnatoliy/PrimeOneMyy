let w = window.innerWidth;
if (w < 768) {
    let topLang = document.body.querySelector('.header-top-lang');
    let arrBotMenu = document.body.querySelectorAll('.header-bottom-menu');
    let headerContBurger = document.body.querySelector('.header__contBurger');
    console.log(topLang);
    console.log(arrBotMenu);
    headerContBurger.append(topLang, ...arrBotMenu);
}

let headerTopBurger = document.querySelector(".header-top__burger");
headerTopBurger.addEventListener('click', function () {
    headerTopBurger.classList.toggle("activve");
    document.body.querySelector('.header__contBurger').classList.toggle("activve");
   
    document.body.classList.toggle("lock");
    
})

function ibg(){

let ibg=document.querySelectorAll(".ibg");
    for (let elem of ibg) {
        let img = elem.querySelector('img');
if(img){
elem.style.backgroundImage = 'url('+img.getAttribute('src')+')';
}
}
}

ibg();
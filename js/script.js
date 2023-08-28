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
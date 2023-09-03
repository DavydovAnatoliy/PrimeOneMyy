

let flag = false;
    let topLang = document.body.querySelector('.header-top-lang');
    let arrBotMenu = document.body.querySelectorAll('.header-bottom-menu');
    let headerContBurger = document.body.querySelector('.header__contBurger');
let headerTop = document.querySelector('.header-top');
let headerBottomColumn = document.querySelector('.header-bottom__column');
let headerBottomColumnRight = document.querySelector('.header-bottom__column_right');
 function pow () {
let w = window.innerWidth;
    if (w < 769&&!flag) {
        headerContBurger.append(topLang, ...arrBotMenu);
        flag = true;
    } else if (w>768&&flag) {
        headerTop.prepend(topLang);
        for (let column of arrBotMenu) {
            if (column.matches('.header-bottom-menu_right')) {
                  headerBottomColumnRight.append(column);
                
            } else {
              headerBottomColumn.append(column);
            }
        }
        flag = false;
}
}
pow();
window.onresize = pow;


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
//         ymaps.ready(init);
//         function init(){
//             var myMap = new ymaps.Map("map-Saratov", {
//                  center: [51.54613356464546,46.01758835192867],
//                 zoom: 14
//             });
// }
let inputValueCollection = document.querySelectorAll('input');
for(let input of inputValueCollection){
    input.addEventListener('focus', function () {
        this.value = '';
})
}
let textValueCollection = document.querySelectorAll('textarea.input');
for (let textarea of textValueCollection) {
    textarea.addEventListener('focus', function () {
        this.firstChild.data = '';
})
}


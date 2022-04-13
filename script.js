'use strict'

let burgerBtn = document.querySelector('.burger_btn');
let burgerMenu = document.querySelector('.burger_menu');
let logoBg = document.querySelector('.burger_logo');
let headerHidden = document.getElementById('hedaer_hidden');
let body = document.body

function toogleBurger(){
    burgerMenu.classList.toggle('open');
    burgerBtn.classList.toggle('open');
    if(burgerMenu.classList.contains('open')){
        body.style.overflow = 'hidden';
        body.style.height = '100%';
        logoBg.classList.add('open');
    } else {
        body.style.overflow = 'auto';
        body.style.height = 'auto';
        logoBg.classList.remove('open');
    }
    setTimeout( () => {headerHidden.style.display = 'none'}, 500)
}


burgerBtn.addEventListener('click', toogleBurger);


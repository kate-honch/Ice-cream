const menuBtnOpen = document.querySelector('.header__menu');
const menu  = document.querySelector('.menu');
const menuBtnClose = document.querySelector('.menu__close');

menuBtnOpen.addEventListener('click', () => {
    menu.classList.add('active');
})

menuBtnClose.addEventListener('click', () => {
    menu.classList.remove('active');
})

console.log('djdj')
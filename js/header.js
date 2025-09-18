'use strict'

// burger-menu

document.addEventListener('DOMContentLoaded', () => {
    const burgerBtn = document.querySelector('.burger-btn');
    const menu = document.querySelector('.menu');
    const toggleMenu = () => {
        menu.classList.toggle('open');
        burgerBtn.setAttribute('id', 'burger-btn-close');
        if (!menu.classList.contains('open')) {
            burgerBtn.removeAttribute('id', 'burger-btn-close');
        }
    }

    burgerBtn.addEventListener("click", (el) => {
        el.stopPropagation();
        toggleMenu();
    });

    document.addEventListener("click", (el) => {
        const target = el.target;
        const ItsMenu = target == menu || menu.contains(target);
        const ItsBtnMenu = target == burgerBtn;
        const menuIsActive = menu.classList.contains('open');

        if (!ItsMenu && !ItsBtnMenu && menuIsActive) {
            toggleMenu();
        }
    });

})
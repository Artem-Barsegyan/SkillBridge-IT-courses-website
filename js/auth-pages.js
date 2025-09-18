'use strict'

// testimonials-slider

const swiper = new Swiper(".my-swiper", {
  loop: true,
  navigation: {
    nextEl: ".next-btn",
    prevEl: ".prev-btn",
  },
});


// pass-visibility-switch

const showPassBtn = document.querySelector('.pass-visibility-switch');
const passInput = document.querySelector('#password');

showPassBtn.addEventListener('click', () => {
  if (passInput.type === 'password') {
    passInput.type = 'text';
    showPassBtn.setAttribute('id', 'eye-pass-hide');
  } else {
    passInput.type = "password";
    showPassBtn.removeAttribute('id', 'eye-pass-hide');
  }
})


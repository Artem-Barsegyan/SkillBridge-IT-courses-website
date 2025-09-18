'use strict'

// price-btn

const monthlyBtn = document.querySelector('.monthly-btn');
const yearlyBtn = document.querySelector('.yearly-btn');
const freeNum = document.querySelector('.free-num');
const proNum = document.querySelector('.pro-num');
const freePlanoPeriod = document.querySelector('.free-plan-period');
const proPlanPeriod = document.querySelector('.pro-plan-period');

yearlyBtn.addEventListener('click', () => {
    monthlyBtn.removeAttribute('id', 'price-active-btn');
    yearlyBtn.setAttribute('id', 'price-active-btn');
    freeNum.textContent = '$474';
    freePlanoPeriod.textContent = ' /year';
    proNum.textContent = '$948';
    proPlanPeriod.textContent = ' /year';
})

monthlyBtn.addEventListener('click', () => {
    yearlyBtn.removeAttribute('id', 'price-active-btn');
    monthlyBtn.setAttribute('id', 'price-active-btn');
    freeNum.textContent = '$0';
    freePlanoPeriod.textContent = ' /month';
    proNum.textContent = '$79';
    proPlanPeriod.textContent = ' /month';
})
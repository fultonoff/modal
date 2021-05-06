'use strict';

const mondal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

// console.log(btnOpenModal);
const openModal = function () {
  mondal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

const closeMondal = function () {
  mondal.classList.add('hidden');
  overlay.classList.add('hidden');
};
btnCloseModal.addEventListener('click', closeMondal);

overlay.addEventListener('click', closeMondal);


document.addEventListener('keydown', function(e){
    if(e.key === 'Escape' && !mondal.classList.contains('hidden')){

            closeMondal();
    }
})
'use strict';

const switcher = document.querySelector('.theme-button');
switcher.addEventListener('click', function() {
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');
    switcher.classList.toggle('switched');
});



function showAlert() {
    alert('Work-in-progress! Check back later.');
}

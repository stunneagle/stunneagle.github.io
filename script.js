'use strict';

const switcher = document.querySelector('.theme-button');
switcher.addEventListener('click', function() {
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');
    switcher.classList.toggle('switched');
});



function showAlert() {
    alert('Update in Progress!. Please Check back later.');
}

document.addEventListener('DOMContentLoaded', () => {
    const textElement = document.getElementById('typing-text2');
    
    const textToType = "Welcome to my Personal Website!";
    

    function typeText() {
        textElement.textContent = textToType.substring(0, textElement.textContent.length + 1);
        
    }

    setInterval(typeText, 200);
});

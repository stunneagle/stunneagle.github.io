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

document.addEventListener('DOMContentLoaded', () => {
    const textElement = document.getElementById('typing-text');
    const textToType = "Hi there! I'm Sulaiman.\nWelcome to My Personal Website!";
    const typingContainer = document.getElementById('typing-section');

    function typeText() {
        textElement.textContent = textToType.substring(0, textElement.textContent.length + 1);
        const bgColor = `rgb(${255 - textElement.textContent.length * 5}, ${255 - textElement.textContent.length * 5}, ${255 - textElement.textContent.length * 5})`;
        typingContainer.style.backgroundColor = bgColor;
    }

    setInterval(typeText, 200);
});

'use strict';

document.addEventListener("DOMContentLoaded", function(){
    header();
    loader();
   
});

function loader() {
    const loader = document.getElementById('loader');
        loader.style.display = 'flex';
        setTimeout(function() {
            loader.style.display = 'none';
            texType();
        }, 1500);
}


function header(){
    fetch('header.html')
    .then(response => {
        if (!response.ok){
            throw new Error('Network response was not okay!');
        }
        return response.text();
    })
    .then(data => {
        document.getElementById('header').innerHTML = data;
        const switcher = document.querySelector('.theme');
        const sunMoon = document.getElementById('sun-moon');
const switcherButton = document.querySelector('.theme-button');
switcher.addEventListener('click', function() {
    
    setTimeout(function() {
        
        switcherButton.classList.toggle('switched');
        
    }, 10);
    if (sunMoon.classList.contains('fa-moon')) {
        sunMoon.classList.remove('fa-moon');
        sunMoon.classList.add('fa-sun');
      } else {
        sunMoon.classList.remove('fa-sun');
        sunMoon.classList.add('fa-moon');
      }
       
    loader();
    
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');
});
    })
    .catch(error => console.error('Error fetching header'));
}
function toggleMenu() {
    const sidebar = document.getElementById("sidebar");
    const sidebarLinks = document.querySelectorAll("#sidebar li");
    
   
    sidebar.classList.toggle("show");
   
    sidebarLinks.forEach((item, index) => {
       
        setTimeout(() => {
           
            item.classList.toggle("slide-and-rotate");
        }, index * 400); 
    });
}



function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    const windowWidth = window.innerWidth || document.documentElement.clientWidth;
    
    // Calculate the thresholds for top, bottom, left, and right
    const topThreshold = windowHeight * 0.7; // 70% of the window height
    const bottomThreshold = windowHeight * 0.3; // 30% of the window height
    const leftThreshold = windowWidth * 0.7; // 70% of the window width
    const rightThreshold = windowWidth * 0.3; // 30% of the window width
    
    return (
        rect.top <= topThreshold &&
        rect.bottom >= bottomThreshold &&
        rect.left <= leftThreshold &&
        rect.right >= rightThreshold
    );
}

  
  // Get the element
  const cS = document.getElementById('certifications');
  const aB = document.getElementById('about');
  
 // Function to handle scroll event
function handleScroll() {
    if (isInViewport(cS)) {
        cS.classList.add('slide-and-rotate');
    }
    if (isInViewport(aB)) {
        aB.classList.add('slide-in');
    }
}
  
  // Add event listener to handle scroll
  window.addEventListener('scroll', handleScroll);



function showAlert() {
    alert('Update in Progress!. Please Check back later.');
}

function texType()  {
    const textElement = document.getElementById('typing-text2');
    const textToType = "Welcome to my Personal Website!💻";
    
    function typeText() {
        textElement.textContent = textToType.substring(0, textElement.textContent.length + 1);
        
    }

    setInterval(typeText, 200);
}


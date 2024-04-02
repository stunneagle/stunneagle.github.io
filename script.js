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
        }, 1200);
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
const switcherButton = document.querySelector('.theme-button');
switcher.addEventListener('click', function() {
    
    setTimeout(function() {
        switcherButton.classList.toggle('switched');
        
    }, 10);
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
    
    // Toggle the 'show' class for the sidebar
    sidebar.classList.toggle("show");
    //sidebar.classList.toggle("hide");
    
    // Add the 'slideIn' class to each list item in the sidebar
    sidebarLinks.forEach((item, index) => {
        // Delay the addition of 'slideIn' class to create a sequential animation
        setTimeout(() => {
           
            item.classList.toggle("slide-and-rotate");
        }, index * 400); // Adjust the delay time as needed
    });
}


// Function to check if an element is in the viewport
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

  
    // Get the current page URL
    var currentPage = window.location.href;

    // Update the active class based on the current page
    document.addEventListener("DOMContentLoaded", function() {
        var navLinks = document.querySelectorAll('header nav ul li a');
        navLinks.forEach(function(link) {
            // Check if the current page URL matches the link's href attribute
            if (link.href === currentPage) {
                // Add active class to the link
                link.classList.add('active');
                
                // Add active class to the parent menu item (if it has one)
                var parentMenu = link.closest('.menu-opt');
                if (parentMenu) {
                    parentMenu.querySelector('a').classList.add('active');
                }

                
            }
        });
        
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


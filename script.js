"use strict";
document.cookie = "cookieName=cookieValue; SameSite=Strict";


document.addEventListener("DOMContentLoaded", function () {
  header();
  loader();
  setTimeout(texType, 1500);

  

  const filterBtns = document.querySelectorAll(".filter-btn");
  const projectTiles = document.querySelectorAll(".project-tile");

  function filterProjects(category) {
    projectTiles.forEach((tile) => {
      if (category === "all") {
        tile.style.display = "block";
      } else if (tile.getAttribute("data-category") === category) {
        tile.style.display = "block";
      } else {
        tile.style.display = "none";
      }
    });
  }

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      filterBtns.forEach((btn) => btn.classList.remove("active"));
      this.classList.add("active");
      const category = this.getAttribute("data-filter");
      filterProjects(category);
    });
  });
  filterProjects("all");
});

function applyTheme() {
  const cookieValues = document.cookie.split("; ").reduce((acc, cookie) => {
    const [key, value] = cookie.split("=");
    acc[key] = value;
    return acc;
  }, {});

  const theme = cookieValues.theme || "light-theme";

  // Apply the theme to the body class
  document.body.className = theme;

  // Apply the switched class and the sun-moon icon class if they exist in the cookie
  const switcherButton = document.getElementById("theme-button");
  const sunMoon = document.getElementById("sun-moon");

  if (cookieValues.switched === "switched") {
    switcherButton.classList.add("switched");
  }
  if (cookieValues.sunMoon === "fa-moon") {
    sunMoon.classList.remove("fa-sun");
    sunMoon.classList.add("fa-moon");
  } else if (cookieValues.sunMoon === "fa-sun") {
    sunMoon.classList.remove("fa-moon");
    sunMoon.classList.add("fa-sun");
  }
}

function switchTheme(theme) {
  const newTheme = theme === "light-theme" ? "dark-theme" : "light-theme";
  document.body.className = newTheme;
  const sunMoon = document.getElementById("sun-moon");
  const switcherButton = document.getElementById("theme-button");
  const switchedClass = switcherButton.classList.contains("switched")
    ? ""
    : "switched";
  const sunMoonClass = sunMoon.classList.contains("fa-moon")
    ? "fa-sun"
    : "fa-moon";
  // Set individual cookie attributes
  document.cookie = `theme=${newTheme}; path=/; max-age=${60 * 60 * 24 * 365}`;
  document.cookie = `switched=${switchedClass}; path=/; max-age=${
    60 * 60 * 24 * 365
  }`;
  document.cookie = `sunMoon=${sunMoonClass}; path=/; max-age=${
    60 * 60 * 24 * 365
  }`;

  setTimeout(function () {
    switcherButton.classList.toggle("switched");
    sunMoon.classList.toggle("fa-moon");
    sunMoon.classList.toggle("fa-sun");
  }, 10);

  loader();
}
function loader() {
  const loader = document.getElementById("loader");
  loader.style.display = "flex";
  setTimeout(function () {
    loader.style.display = "none";
  }, 1500);
}

function header() {
  fetch("header.html")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not okay!");
      }
      return response.text();
    })
    .then((data) => {
      document.getElementById("header").innerHTML = data;
      const switcher = document.getElementById("theme");

      applyTheme();
      // Get the theme from the cookie
      switcher.addEventListener("click", () => {
        const newThemeCookie = document.cookie
          .split("; ")
          .find((row) => row.startsWith("theme="));
        const oldTheme = newThemeCookie
          ? newThemeCookie.split("=")[1]
          : "light-theme";
        switchTheme(oldTheme);
      });
    })
    .catch((error) => console.error("Error fetching header"));
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
  const windowHeight =
    window.innerHeight || document.documentElement.clientHeight;
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
const cS = document.getElementById("certifications");
const aB = document.getElementById("about");

// Function to handle scroll event
function handleScroll() {
  if (isInViewport(cS)) {
    cS.classList.add("slide-and-rotate");
  }
  if (isInViewport(aB)) {
    aB.classList.add("slide-in");
  }
}

// Add event listener to handle scroll
window.addEventListener("scroll", handleScroll);

function showAlert() {
  alert("Update in Progress!. Please Check back later.");
}

function texType() {
  const textElement = document.getElementById("typing-text2");
  const texts = [
    "I'm Sulaiman, a full stack developer!💻",
    "Let's create something amazing together! 🚀",
  ];
  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 80;
  let deletingSpeed = 5;

  function typeText() {
    const currentText = texts[textIndex];
    if (isDeleting) {
      if (charIndex > 0) {
        charIndex--;
        textElement.textContent = currentText.substring(0, charIndex);
      } else {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
      }
    } else {
      if (charIndex < currentText.length) {
        charIndex++;
        textElement.textContent = currentText.substring(0, charIndex);
      } else {
        setTimeout(() => {
          isDeleting = true;
        }, 3000);
      }
    }

    if (textIndex >= texts.length) {
      textIndex = 0;
    }
  }

  setInterval(typeText, isDeleting ? deletingSpeed : typingSpeed);
}

function initMap() {
  const myLatLng = { lat: 52.95428, lng: -1.1581 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: myLatLng,
  });
  new google.maps.Marker({
    position: myLatLng,
    map,
    title: "Nottingham, UK",
  });
}
function onSubmit(token) {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;
  let submitMsg = document.getElementById("submitMsg");
  if (name == "" || email == "" || message == "") {
    submitMsg.style.color = "red";
    submitMsg.innerText = "Please fill in all the fields";
    return;
  } else if (email.indexOf("@") == -1 || email.indexOf(".") == -1) {
    submitMsg.style.color = "red";
    submitMsg.innerText = "Please enter a valid email address";
    return;
  } else {
    submitMsg.style.color = "green";
    submitMsg.innerText =
      "Thank you for contacting me! I will get back to you soon.";
  }
  document.getElementById("contact-form").submit();
}

// script.js

document.addEventListener("DOMContentLoaded", function() {
    // Code to run when the DOM content is fully loaded
    
    // Example: Adding functionality to the navigation toggle button
    const navToggle = document.querySelector(".nav-toggle");
    const navMenu = document.querySelector(".nav-menu");
  
    if (navToggle && navMenu) {
      navToggle.addEventListener("click", function() {
        navMenu.classList.toggle("nav-menu--open");
      });
    }
    
    // Add more JavaScript functionality here as needed
  });
  
  
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

  function searchStock() {
    var stockName = document.getElementById('stock-input').value.trim();
    if (stockName) {
      console.log("Search for:", stockName);
      // Update the API URL with the stockName parameter
      var apiKey = 'NEWS_API_KEY'; // Replace 'YOUR_API_KEY' with your actual API key
      var url = 'https://newsapi.org/v2/everything?' +
        'q=' + stockName + '&' +
        'from=2024-04-19&' +
        'sortBy=popularity&' +
        'apiKey=' + apiKey;
  
      var req = new Request(url);
  
      fetch(req)
        .then(function(response) {
          return response.json();
        })
        .then(function(data) {
          console.log(data); // Do something with the API response data
        })
        .catch(function(error) {
          console.error('Error fetching data:', error);
        });
    } else {
      alert("Please enter a stock name to search.");
    }
  }
  
  

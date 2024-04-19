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
  
  // Initialize the chatbot
  const chatbot = new Chatbot();
  
  // Handle user input
  const chatbotInput = document.querySelector('.chatbot-input input');
  chatbotInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      const message = e.target.value;
      chatbot.sendMessage(message);
      e.target.value = '';
    }
  });
  
  // Display chatbot messages
  chatbot.on('message', (message) => {
    const chatbotMessages = document.querySelector('.chatbot-messages');
    const messageElement = document.createElement('div');
    messageElement.classList.add('chatbot-message');
    messageElement.classList.add(message.type === 'user' ? 'chatbot-message--user' : 'chatbot-message--bot');
    messageElement.innerHTML = message.content;
    chatbotMessages.appendChild(messageElement);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
  });
  
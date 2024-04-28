
// Serarch for news articles related to a stock and display them on the page

document.addEventListener("DOMContentLoaded", function() {
  // Example: Adding functionality to the navigation toggle button
  const navToggle = document.querySelector(".nav-toggle");
  const navMenu = document.querySelector(".nav-menu");

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", function() {
      navMenu.classList.toggle("nav-menu--open");
    });
  }
  
  // Adding functionality to the stock search button
  const searchButton = document.getElementById("search-button");
  if (searchButton) {
    searchButton.addEventListener("click", searchStock);
  }
});

function searchStock() {
  var stockName = document.getElementById('stock-input').value.trim();
  if (stockName) {
    console.log("Search for:", stockName);
    // Update the API URL with the stockName parameter
    var apiKey = '1d57b75982f34579aaa830f5cbde9c68'; // Replace 'YOUR_API_KEY' with your actual API key
    var url = 'https://newsapi.org/v2/everything?' +
      'q=' + stockName + '&' +
      'from=2024-04-19&' +
      'sortBy=popularity,publishedAt&' +
      'apiKey=' + apiKey;

    var req = new Request(url);

    fetch(req)
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        displayNews(data.articles); // Call displayNews function to render articles
      })
      .catch(function(error) {
        console.error('Error fetching data:', error);
      });
  } else {
    alert("Please enter a stock name to search.");
  }
}

function displayNews(articles) {
  const newsContainer = document.getElementById('news-articles');
  newsContainer.innerHTML = ''; // Clear previous search results

  if (!articles || articles.length === 0) {
    newsContainer.innerHTML = '<p>No news articles found.</p>';
    return;
  }

  // Filter out removed articles
  const validArticles = articles.filter(article => {
    return !article.isSafe || (article.isSafe && article.isSafe === true);
  });

  if (validArticles.length === 0) {
    newsContainer.innerHTML = '<p>No valid news articles found.</p>';
    return;
  }

  validArticles.forEach(article => {
    const articleElement = document.createElement('div');
    articleElement.classList.add('article');

    const titleElement = document.createElement('h2');
    const titleLink = document.createElement('a');
    titleLink.href = article.url;
    titleLink.textContent = article.title;
    titleElement.appendChild(titleLink);

    const descriptionElement = document.createElement('p');
    descriptionElement.textContent = article.description || 'No description available.';

    const imageElement = document.createElement('img');
    imageElement.src = article.urlToImage || 'placeholder.jpg';
    imageElement.alt = article.title;

    const publishedAtElement = document.createElement('p');
    publishedAtElement.textContent = 'Published at: ' + new Date(article.publishedAt).toLocaleString();

    const sourceElement = document.createElement('p');
    sourceElement.textContent = 'Source: ' + article.source.name;

    articleElement.appendChild(titleElement);
    articleElement.appendChild(descriptionElement);
    articleElement.appendChild(imageElement);
    articleElement.appendChild(publishedAtElement);
    articleElement.appendChild(sourceElement);

    newsContainer.appendChild(articleElement);
  });
}

// Trending Stocks Names display from API 
// Trending Stocks Names display from API 
var apiKey = '1d57b75982f34579aaa830f5cbde9c68'; // Replace 'YOUR_API_KEY' with your actual API key
var url = 'https://newsapi.org/v2/top-headlines?' +
  'country=us&' +
  'category=business&' +
  'apiKey=' + apiKey;

var req = new Request(url);

fetch(req)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    displayTrendingStocks(data); // Call displayTrendingStocks function to render trending stocks
  })
  .catch(function(error) {
    console.error('Error fetching data:', error);
  });

  function displayTrendingStocks(data) {
    const trendingStocksContainer = document.getElementById('trending-stocks');
    trendingStocksContainer.innerHTML = ''; // Clear previous trending stocks
  
    if (!data || data.length === 0) {
      trendingStocksContainer.innerHTML = '<p>No trending stocks found.</p>';
      return;
    }
  
    data.articles.forEach(stock => {
      const stockElement = document.createElement('div');
      stockElement.classList.add('stock');
  
      const nameElement = document.createElement('h3');
      const nameLink = document.createElement('a');
      nameLink.href = stock.url;
      nameLink.textContent = stock.title;
      nameElement.appendChild(nameLink);
  
      const descriptionElement = document.createElement('p');
      descriptionElement.textContent = stock.description || 'No description available.';
  
      const imageElement = document.createElement('img');
      imageElement.src = stock.urlToImage || 'placeholder.jpg';
      imageElement.alt = stock.title;
  
      const publishedAtElement = document.createElement('p');
      publishedAtElement.textContent = 'Published at: ' + new Date(stock.publishedAt).toLocaleString();
  
      const sourceElement = document.createElement('p');
      sourceElement.textContent = 'Source: ' + stock.source.name;
  
      stockElement.appendChild(nameElement);
      stockElement.appendChild(descriptionElement);
      stockElement.appendChild(imageElement);
      stockElement.appendChild(publishedAtElement);
      stockElement.appendChild(sourceElement);
  
      trendingStocksContainer.appendChild(stockElement);
    });
  }


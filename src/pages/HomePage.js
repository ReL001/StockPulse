import React, { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import NewsArticles from '../components/NewsArticles';
import TrendingStocks from '../components/TrendingStocks';
import '../styles/homePage.css'; // Import the CSS file for styling

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term) => {
    setSearchTerm(term);
  };
  
  const [showTrendingStocks, setShowTrendingStocks] = useState(false);
  useEffect(() => {
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    // Calculate the scroll position to trigger showing Trending Stocks
    const scrollPosition = window.scrollY;
    const triggerPosition = 25; // Adjust as needed

    if (scrollPosition > triggerPosition) {
      setShowTrendingStocks(true);
    }
  };

  return (
    <div>
      <header className="showcase">
        {/* Homepage content */}
        <div className="container">
          <div className="text-content">
            <h1>Latest Stock News and Analysis</h1>
            <p>
              Get the latest updates on stocks, market trends, and analysis to make informed investment decisions.
            </p>
            <SearchBar onSearch={handleSearch} />
          </div>
        </div>
      </header>
      {/* Remaining homepage content */}
      <NewsArticles searchTerm={searchTerm} />
      {/* Trending Stocks section */}
      <TrendingStocks show={showTrendingStocks} />
    </div>
  );
};

export default HomePage;

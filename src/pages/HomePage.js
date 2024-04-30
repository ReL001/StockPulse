import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import NewsArticles from '../components/NewsArticles';
import TrendingStocks from '../components/TrendingStocks';


const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <div>
      <header className="showcase">
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
      <NewsArticles searchTerm={searchTerm} />
      <TrendingStocks />
    </div>
  );
};

export default HomePage;
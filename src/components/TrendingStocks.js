import React, { useState, useEffect } from 'react';
import { getTrendingStocks } from '../services/newsAPIService';
import '../styles/trendingStocks.css';

const TrendingStocks = () => {
  const [trendingStocks, setTrendingStocks] = useState([]);

  useEffect(() => {
    const fetchTrendingStocks = async () => {
      try {
        const fetchedStocks = await getTrendingStocks();
        setTrendingStocks(fetchedStocks);
      } catch (error) {
        console.error('Error fetching trending stocks:', error);
      }
    };

    fetchTrendingStocks();
  }, []);

  return (
    <section className="categories2 top-gainers">
      <div className="container2">
        <h1 className="editor-h1">Trending News</h1>
        <div id="trending-stocks" className="collections-container gainers-container">
          {trendingStocks.length === 0 ? (
            <p>No trending stocks found.</p>
          ) : (
            trendingStocks.map((stock) => (
              <div key={stock.url} className="stock">
                <h3>
                  <a href={stock.url} target="_blank" rel="noopener noreferrer">
                    {stock.title}
                  </a>
                </h3>
                <p>{stock.description}</p>
                <img src={stock.urlToImage} alt={stock.title} />
                <p>Published at: {new Date(stock.publishedAt).toLocaleString()}</p>
                <p>Source: {stock.source.name}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default TrendingStocks;
import React, { useState, useEffect } from 'react';
import { getNewsArticles } from '../services/newsAPIService';
import '../styles/newsArticles.css';

const NewsArticles = ({ searchTerm }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchNewsArticles = async () => {
      try {
        const fetchedArticles = await getNewsArticles(searchTerm);
        setArticles(fetchedArticles);
      } catch (error) {
        console.error('Error fetching news articles:', error);
      }
    };

    if (searchTerm) {
      fetchNewsArticles();
    } else {
      setArticles([]);
    }
  }, [searchTerm]);

  return (
    <section id="news-articles">
      {articles.length === 0 ? (
        <p>No news articles found.</p>
      ) : (
        articles.map((article) => (
          <div key={article.url} className="article">
            <h2>
              <a href={article.url} target="_blank" rel="noopener noreferrer">
                {article.title}
              </a>
            </h2>
            <p>{article.description}</p>
            <img src={article.urlToImage} alt={article.title} />
            <p>Published at: {new Date(article.publishedAt).toLocaleString()}</p>
            <p>Source: {article.source.name}</p>
          </div>
        ))
      )}
    </section>
  );
};

export default NewsArticles;

import axios from 'axios';

const API_KEY = '1d57b75982f34579aaa830f5cbde9c68'; // Replace with your actual API key

export const getNewsArticles = async (searchTerm) => {
  try {
    const response = await axios.get(`https://newsapi.org/v2/everything`, {
      params: {
        q: searchTerm,
        from: '2024-04-19',
        sortBy: 'popularity,publishedAt',
        apiKey: API_KEY,
      },
    });

    return response.data.articles;
  } catch (error) {
    console.error('Error fetching news articles:', error);
    return [];
  }
};

export const getTrendingStocks = async () => {
  try {
    const response = await axios.get(`https://newsapi.org/v2/top-headlines`, {
      params: {
        country: 'us',
        category: 'business',
        apiKey: API_KEY,
      },
    });

    return response.data.articles;
  } catch (error) {
    console.error('Error fetching trending stocks:', error);
    return [];
  }
};
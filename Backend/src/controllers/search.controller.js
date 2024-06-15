const express = require('express');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 3000;

// Replace with your API key from Alpha Vantage or any other stock API service
const API_KEY = STOCK_INFO_API_KEY;
const BASE_URL = STOCK_INFO_URL;

app.get('/api/stock', async (req, res) => {
  const { symbol } = req.query;
  try {
    const response = await axios.get(`${BASE_URL}`, {
      params: {
        function: 'TIME_SERIES_DAILY',
        symbol,
        apikey: API_KEY,
      },
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch stock data' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

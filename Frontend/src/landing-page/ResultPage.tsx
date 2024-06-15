import React from 'react';
import { useLocation } from 'react-router-dom';
import { Container, Typography, Box } from '@mui/material';

export default function Result() {
  const location = useLocation();
  const { stockData } = location.state || {};

  if (!stockData) {
    return (
      <Container>
        <Typography variant="h4" align="center" mt={5}>
          No stock data available.
        </Typography>
      </Container>
    );
  }

  return (
    <Container>
      <Typography variant="h4" align="center" mt={5}>
        Stock Information
      </Typography>
      <Box mt={3}>
        <Typography variant="h6">Symbol: {stockData['Meta Data']['2. Symbol']}</Typography>
        <Typography variant="h6">Last Refreshed: {stockData['Meta Data']['3. Last Refreshed']}</Typography>
        {/* Display more stock details as needed */}
      </Box>
    </Container>
  );
}

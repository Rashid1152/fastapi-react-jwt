import React from 'react';
import { Typography, Box, Container } from '@mui/material';
import { Navigate } from 'react-router-dom';

const Home = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  if (!user) {
    return <Navigate to="/login" />;
  }

  return (
    <Container>
      <Box sx={{ mt: 4, textAlign: 'center' }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Welcome to Dashboard
        </Typography>
        <Typography variant="h6" color="primary">
          You are logged in as: {user.username || 'User'}
        </Typography>
      </Box>
    </Container>
  );
};

export default Home; 
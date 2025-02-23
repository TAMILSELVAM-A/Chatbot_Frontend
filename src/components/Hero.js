import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';

const Hero = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        height: 'calc(100vh - 80px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '80px',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'url(https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.7)',
        },
      }}
    >
      <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
        <Box sx={{ textAlign: 'center', color: 'white' }}>
          <Typography variant="h1" component="h1" gutterBottom sx={{
            fontWeight: 'bold',
            textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
            fontSize: { xs: '3rem', md: '4.5rem' },
            mb: 4,
          }}>
            Experience Luxury Like Never Before
          </Typography>
          <Typography variant="h5" gutterBottom sx={{ mb: 4, textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>
            Indulge in comfort, style, and world-class service
          </Typography>
          <Button variant="contained" size="large" sx={{ mr: 2, borderRadius: 1 }}>
            Book Now
          </Button>
          <Button variant="outlined" size="large" sx={{
            color: 'white',
            borderColor: 'white',
            '&:hover': {
              borderColor: 'secondary.light',
              color: 'secondary.light',
            },
          }}>
            Take a Tour
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;

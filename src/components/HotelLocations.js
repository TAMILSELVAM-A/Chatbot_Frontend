import React from 'react';
import { Box, Typography, Card, CardContent, CardMedia, Button, Container } from '@mui/material';
import { styled } from '@mui/material/styles';

const locations = [
  { city: 'Chennai', image: 'https://images.unsplash.com/photo-1600441745082-2264ed362b9d?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { city: 'Bangalore', image: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { city: 'New Delhi', image: 'https://images.unsplash.com/photo-1592639296346-560c37a0f711?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmV3JTIwZGVsaGl8ZW58MHx8MHx8fDA%3D' },
  { city: 'Udaipur', image: 'https://images.unsplash.com/photo-1589901164570-f9de6556e1c1?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { city: 'Kovalam', image: 'https://images.unsplash.com/photo-1602072254265-3d32678fe9c9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8a292YWxhbXxlbnwwfHwwfHx8MA%3D%3D' },
  { city: 'Agra', image: 'https://images.unsplash.com/photo-1604214932030-7821ab71fe81?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGFncmF8ZW58MHx8MHx8fDA%3D' },
  { city: 'Kolkata', image: 'https://images.unsplash.com/photo-1603813507806-0d311a6eecd1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8a29sa2F0YXxlbnwwfHwwfHx8MA%3D%3D' },
];

const ScrollContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  overflowX: 'auto',
  padding: theme.spacing(2, 0),
  '&::-webkit-scrollbar': {
    height: 6,
  },
  '&::-webkit-scrollbar-track': {
    backgroundColor: theme.palette.grey[200],
  },
  '&::-webkit-scrollbar-thumb': {
    backgroundColor: theme.palette.primary.main,
    borderRadius: 3,
  },
}));

const LocationCard = styled(Card)(({ theme }) => ({
  minWidth: 280,
  maxWidth: 280,
  margin: theme.spacing(0, 1),
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.05)',
  },
}));

const HotelLocations = () => {
  return (
    <Box sx={{ py: 8, backgroundColor: '#f5f5f5' }}>
      <Container>
        <Typography variant="h3" component="h2" align="center" gutterBottom sx={{ mb: 4 }}>
          Our Locations
        </Typography>
        <ScrollContainer>
          {locations.map((location, index) => (
            <LocationCard key={index} elevation={3}>
              <CardMedia
                component="img"
                height="180"
                image={location.image}
                alt={location.city}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {location.city}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  Experience luxury in the heart of {location.city}.
                </Typography>
                <Button variant="outlined" color="primary" fullWidth>
                  Explore
                </Button>
              </CardContent>
            </LocationCard>
          ))}
        </ScrollContainer>
      </Container>
    </Box>
  );
};

export default HotelLocations;

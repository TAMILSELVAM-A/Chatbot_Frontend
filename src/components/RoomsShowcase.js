import React, { useState } from 'react';
import { Container, Typography, Button, Box, Paper } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import { ArrowBack, ArrowForward } from '@mui/icons-material';

const rooms = [
  {
    name: 'Deluxe Suite',
    image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    description: 'Experience unparalleled luxury in our spacious Deluxe Suite with breathtaking views.'
  },
  {
    name: 'Presidential Room',
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    description: 'Perfect for business travelers, our Executive Room offers both comfort and functionality.',
  },
  {
    name: 'Family Suite',
    image: 'https://images.unsplash.com/photo-1586105251261-72a756497a11?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    description: 'Ideal for family getaways, this suite provides ample space and amenities for everyone.',
  },
  {
    name: 'Deluxe Sea View Room',
    image: 'https://media-cdn.tripadvisor.com/media/photo-s/0e/16/d5/0c/deluxe-double-room-with.jpg',
    description: 'Reflecting the golden tones of sunrise, accompanied with stunning sea views through its floor-to-ceiling windows, this spacious room is furnished with custom-designed furniture and local nuances, plush carpets with tropical motifs, and an elegant bathroom equipped with a rain shower and bath.',
  },
];

const RoomsShowcase = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? rooms.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === rooms.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <Box sx={{ py: 8, backgroundColor: '#f5f5f5' }}>
      <Container maxWidth="lg">
        <Typography variant="h3" component="h2" align="center" gutterBottom sx={{ mb: 6 }}>
          Our Exquisite Rooms
        </Typography>
        <Box sx={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Button onClick={handlePrev} sx={{ position: 'absolute', left: 0, zIndex: 2, backgroundColor: 'rgba(0,0,0,0.5)', color: 'white', '&:hover': { backgroundColor: 'rgba(0,0,0,0.7)' } }}>
            <ArrowBack />
          </Button>
          <Paper
            elevation={3}
            sx={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${rooms[currentIndex].image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: 500,
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Box sx={{ color: 'white', textAlign: 'center', p: 4 }}>
              <Typography variant="h4" component="h3" gutterBottom>
                {rooms[currentIndex].name}
              </Typography>
              <Typography variant="body1" sx={{ mb: 2 }}>
                {rooms[currentIndex].description}
              </Typography>
            </Box>
          </Paper>
          <Button onClick={handleNext} sx={{ position: 'absolute', right: 0, zIndex: 2, backgroundColor: 'rgba(0,0,0,0.5)', color: 'white', '&:hover': { backgroundColor: 'rgba(0,0,0,0.7)' } }}>
            <ArrowForward />
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default RoomsShowcase;
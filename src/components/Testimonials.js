import React from 'react';
import { Container, Typography, Box, Avatar, Grid } from '@mui/material';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

const testimonials = [
  { name: 'John Doe', comment: 'An unforgettable experience. The service was impeccable and the amenities were top-notch.', avatar: 'https://i.pravatar.cc/150?img=1' },
  { name: 'Jane Smith', comment: 'The attention to detail in every aspect of our stay was remarkable. We can\'t wait to return!', avatar: 'https://i.pravatar.cc/150?img=5' },
  { name: 'Mike Johnson', comment: 'From the moment we arrived, we felt like royalty. The staff went above and beyond to ensure our comfort.', avatar: 'https://i.pravatar.cc/150?img=8' },
];

const Testimonials = () => {
  return (
    <Box sx={{ py: 8, backgroundColor: '#f5f5f5' }}>
      <Container maxWidth="lg">
        <Typography variant="h3" component="h2" align="center" gutterBottom>
          What Our Guests Say
        </Typography>
        <Grid container spacing={4}>
          {testimonials.map((testimonial, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Box sx={{ textAlign: 'center', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <Box>
                  <FormatQuoteIcon sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />
                  <Typography variant="body1" gutterBottom>
                    "{testimonial.comment}"
                  </Typography>
                </Box>
                <Box sx={{ mt: 2 }}>
                  <Avatar src={testimonial.avatar} sx={{ width: 64, height: 64, margin: '0 auto', mb: 1 }} variant='rounded' />
                  <Typography variant="subtitle1" component="h3">
                    {testimonial.name}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Testimonials;
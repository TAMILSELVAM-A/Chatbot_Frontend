import React from 'react';
import { Container, Grid, Card, CardContent, CardMedia, Typography, Box } from '@mui/material';
const features = [
  { 
    icon: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', 
    title: 'Spa & Wellness', 
    description: 'Relax and rejuvenate with our world-class spa treatments.' 
  },
  { 
    icon: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', 
    title: 'Fine Dining', 
    description: 'Savor exquisite cuisine prepared by award-winning chefs.' 
  },
  { 
    icon: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', 
    title: 'Swiming Pool', 
    description: 'Enjoy breathtaking views from our pool.' 
  },
  { 
    icon: 'https://images.unsplash.com/photo-1522798514-97ceb8c4f1c8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', 
    title: 'High-Speed Wi-Fi', 
    description: 'Stay connected with complimentary high-speed internet access.' 
  },
];

const Features = () => {
  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <Typography variant="h3" component="h2" align="center" gutterBottom sx={{ mb: 6 }}>
          Amenities
        </Typography>
        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card elevation={3} sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={feature.icon}
                  alt={feature.title}
                />
                <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
                  <Typography variant="h5" component="h3" gutterBottom>
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Features;

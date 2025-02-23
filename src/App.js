import React, { useRef } from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import RoomsShowcase from './components/RoomsShowcase';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import HotelLocations from './components/HotelLocations';

const theme = createTheme({
  palette: {
    primary: {
      main: '#000000',
      light: '#333333',
      dark: '#000000',
    },
    secondary: {
      main: '#b8860b',
      light: '#daa520',
      dark: '#8b6914',
    },
    background: {
      default: '#f8f8f8',
    },
  },
  typography: {
    fontFamily: 'Cormorant Garamond, serif',
    h1: {
      fontFamily: 'Playfair Display, serif',
    },
    h2: {
      fontFamily: 'Playfair Display, serif',
    },
    h3: {
      fontFamily: 'Playfair Display, serif',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          padding: '10px 30px',
        },
        contained: {
          backgroundColor: '#000000',
          color: 'white',
          '&:hover': {
            backgroundColor: '#333333',
          },
        },
        outlined: {
          borderColor: '#000000',
          color: '#000000',
          '&:hover': {
            borderColor: '#333333',
            color: '#333333',
          },
        },
      },
    },
  },
});

function App() {
  const heroRef = useRef(null);
  const featuresRef = useRef(null);
  const hotelLocationsRef = useRef(null);
  const roomsRef = useRef(null);
  const testimonialsRef = useRef(null);
  const footerRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header
        onNavigate={(section) => {
          switch (section) {
            case 'hero':
              scrollToSection(heroRef);
              break;
            case 'features':
              scrollToSection(featuresRef);
              break;
            case 'locations':
              scrollToSection(hotelLocationsRef);
              break;
            case 'rooms':
              scrollToSection(roomsRef);
              break;
            case 'testimonials':
              scrollToSection(testimonialsRef);
              break;
            case 'footer':
              scrollToSection(footerRef);
              break;
            default:
              break;
          }
        }}
      />
      <section ref={heroRef}>
        <Hero />
      </section>
      <section ref={featuresRef}>
        <Features />
      </section>
      <section ref={hotelLocationsRef}>
        <HotelLocations />
      </section>
      <section ref={roomsRef}>
        <RoomsShowcase />
      </section>
      <section ref={testimonialsRef}>
        <Testimonials />
      </section>
      <section ref={footerRef}>
        <Footer />
      </section>
      <Chatbot />
    </ThemeProvider>
  );
}

export default App;

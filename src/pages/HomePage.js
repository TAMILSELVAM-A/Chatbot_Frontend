import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  Box,
  TextField,
  Fab,
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  List,
  ListItem,
  ListItemText,
  Avatar,
} from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";
import CloseIcon from "@mui/icons-material/Close";
import SendIcon from "@mui/icons-material/Send";
import MenuIcon from "@mui/icons-material/Menu";

const HomePage = () => {
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState("");

  const handleChatOpen = () => {
    setChatOpen(true);
  };

  const handleChatClose = () => {
    setChatOpen(false);
  };

  const handleSendMessage = () => {
    if (inputText.trim() !== "") {
      const newMessage = { text: inputText, sender: "user" };
      setMessages([...messages, newMessage]);
      setInputText("");

      // Simulate a bot response
      setTimeout(() => {
        const botResponse = { text: "Thank you for your message! How can I assist you?", sender: "bot" };
        setMessages((prevMessages) => [...prevMessages, botResponse]);
      }, 1000);
    }
  };

  return (
    <Box>
      {/* Navbar */}
      <AppBar position="static" sx={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ fontWeight: "bold" }}>
            Leela Palace
          </Typography>
          <Button color="inherit" sx={{ textTransform: "none" }}>Home</Button>
          <Button color="inherit" sx={{ textTransform: "none" }}>Rooms & Suites</Button>
          <Button color="inherit" sx={{ textTransform: "none" }}>Dining</Button>
          <Button color="inherit" sx={{ textTransform: "none" }}>Experiences</Button>
          <Button color="inherit" sx={{ textTransform: "none" }}>Contact</Button>
        </Toolbar>
      </AppBar>

      {/* Hero Section */}
      <Box
        sx={{
          backgroundImage: "url('https://plus.unsplash.com/premium_photo-1661962571049-792ae9be2d79?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          textAlign: "center",
        }}
      >
        <Box sx={{ backgroundColor: "rgba(0, 0, 0, 0.5)", padding: "40px", borderRadius: "10px" }}>
          <Typography variant="h2" sx={{ fontWeight: "bold", mb: 2 }}>
            Welcome to Leela Palace
          </Typography>
          <Typography variant="h5" sx={{ mb: 4 }}>
            Experience the epitome of luxury and hospitality
          </Typography>
          <Button variant="contained" color="primary" size="large">
            Book Now
          </Button>
        </Box>
      </Box>

      {/* Rooms & Suites Section */}
      <Container sx={{ py: 8 }}>
        <Typography variant="h4" sx={{ textAlign: "center", fontWeight: "bold", mb: 4 }}>
          Rooms & Suites
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="240"
                image="https://plus.unsplash.com/premium_photo-1661914368757-a57361d31b45?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Deluxe Room"
              />
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  Deluxe Room
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Spacious and elegant, our deluxe rooms offer a perfect blend of comfort and style.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="240"
                image="https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Executive Suite"
              />
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  Executive Suite
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Indulge in the ultimate luxury with our executive suites, designed for discerning travelers.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="240"
                image="https://images.unsplash.com/photo-1595576508898-0ad5c879a061?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Presidential Suite"
              />
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  Presidential Suite
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  The pinnacle of luxury, our presidential suite offers unparalleled opulence and comfort.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

      {/* Footer */}
      <Box sx={{ backgroundColor: "#333", color: "white", textAlign: "center", padding: "40px" }}>
        <Typography variant="body1">© 2023 Leela Palace. All rights reserved.</Typography>
      </Box>

      {/* Chat Icon */}
      <Fab
        color="primary"
        aria-label="chat"
        onClick={handleChatOpen}
        sx={{ position: "fixed", bottom: 20, right: 20 }}
      >
        <ChatIcon />
      </Fab>

      {/* Chatbot Drawer */}
      <Drawer anchor="right" open={chatOpen} onClose={handleChatClose}>
        <Box sx={{ width: 350, height: "100%", display: "flex", flexDirection: "column" }}>
          {/* Chat Header */}
          <Box
            sx={{
              backgroundColor: "#1976d2",
              color: "white",
              padding: "16px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography variant="h6">Chat Support</Typography>
            <IconButton onClick={handleChatClose} sx={{ color: "white" }}>
              <CloseIcon />
            </IconButton>
          </Box>

          {/* Chat Messages */}
          <Box
            sx={{
              flexGrow: 1,
              overflowY: "auto",
              padding: "16px",
              backgroundColor: "#f5f5f5",
            }}
          >
            <List>
              {messages.map((message, index) => (
                <ListItem key={index} sx={{ justifyContent: message.sender === "user" ? "flex-end" : "flex-start" }}>
                  {message.sender === "bot" && (
                    <Avatar sx={{ bgcolor: "#1976d2", mr: 2 }}>B</Avatar>
                  )}
                  <Box
                    sx={{
                      backgroundColor: message.sender === "user" ? "#1976d2" : "#e0e0e0",
                      color: message.sender === "user" ? "white" : "black",
                      borderRadius: "12px",
                      padding: "8px 12px",
                      maxWidth: "70%",
                    }}
                  >
                    <ListItemText primary={message.text} />
                  </Box>
                </ListItem>
              ))}
            </List>
          </Box>

          {/* Chat Input */}
          <Box sx={{ display: "flex", padding: "16px", backgroundColor: "white", borderTop: "1px solid #e0e0e0" }}>
            <TextField
              fullWidth
              placeholder="Type a message..."
              variant="outlined"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
            />
            <IconButton color="primary" onClick={handleSendMessage}>
              <SendIcon />
            </IconButton>
          </Box>
        </Box>
      </Drawer>
    </Box>
  );
};

export default HomePage;
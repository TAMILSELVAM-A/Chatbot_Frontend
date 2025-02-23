import React, { useState, useRef, useEffect } from 'react';
import { Box, Fab, Drawer, Typography, TextField, Button, List, ListItem, ListItemText, Avatar, Zoom, Grow, IconButton, Collapse, Chip } from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';
import SendIcon from '@mui/icons-material/Send';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import { BsChatDotsFill } from "react-icons/bs";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const faqQuestions = [
  "Check-in/out times?",
  "Airport transfers?",
  "Available amenities?",
  "Room prices?",
];

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const handleSend = async (text) => {
    const messageText = text || input;
    if (messageText.trim()) {
      const userMessage = { text: messageText, sender: "user" };
      setMessages((prev) => [...prev, userMessage]);
      setInput("");
    }
    try {
      // const response = await fetch("http://localhost:8000/chat", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify({ user_id: "user1", query: messageText }),
      // });

      const response = await fetch("https://chatbot-backend-rqd4.onrender.com", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user_id: "user1", query: messageText }),
      });

      const data = await response.json();
      let botMessage = { text: data.response || "Sorry, I didn't understand that.", sender: "bot" };

      if (data.response.includes("Available locations:")) {
        // const locations = data.response
        //   .split("Available locations:")[1]
        //   .split("\n")
        //   .map(loc => loc.trim())
        //   .filter(loc => loc);
        const locations = ['New Delhi', "Bengaluru", "Udaipur", 'Chennai', 'Mumbai', 'Goa', 'Jaipur', 'Kovalam', 'Hyderabad', 'Gurugram', 'Agra', 'Kolkata']

        botMessage = { text: "Which location are you looking to book a hotel in?", sender: "bot", locations };
      }

      else if (data.response.includes("Available room types in")) {
        // const locations = data.response
        //   .split("Please select a room type.")[0] // Remove unnecessary text
        //   .split("\n")
        //   .slice(1) // Skip the first line (which contains "Available room types in XYZ")
        //   .map(room => room.trim())
        //   .filter(room => room);
        const locations = ['Deluxe Sea View Room', "Premier Ocean Suite", "Presidential Suite", 'Deluxe Room', 'Premier Suite']
        botMessage = { text: "Please select a room type:", sender: "bot", locations };
      }

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Error fetching response:", error);
      setMessages((prev) => [...prev, { text: "Something went wrong. Please try again later.", sender: "bot" }]);
    }
  };


  return (
    <>
      <Zoom in={!isOpen}>
        <Fab
          color="primary"
          aria-label="chat"
          sx={{ position: 'fixed', bottom: 24, right: 24, boxShadow: '0 4px 20px rgba(0,0,0,0.2)' }}
          onClick={toggleDrawer}
        >
          <ChatIcon />
        </Fab>
      </Zoom>

      <Drawer
        anchor="right"
        open={isOpen}
        onClose={toggleDrawer}
        PaperProps={{ sx: { width: { xs: '100%', sm: 380 }, borderTopLeftRadius: { xs: 0, sm: 20 }, borderBottomLeftRadius: { xs: 0, sm: 20 } } }}
      >
        <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
          <Box sx={{ p: 2, bgcolor: 'primary.main', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <BsChatDotsFill size={24} style={{ marginRight: "10px" }} />
              <Typography variant="h6">Chat Support</Typography>
            </Box>
            <Button color="inherit" onClick={toggleDrawer}>
              <CloseIcon />
            </Button>
          </Box>

          <Box sx={{ flexGrow: 1, overflow: 'auto', p: 2, backgroundColor: '#f5f5f5' }}>
            {messages.length === 0 && (
              <>
                <Typography variant='subtitle2' sx={{ mb: 1 }}>FAQ's</Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {faqQuestions.map((faq, index) => (
                    <Chip key={index} label={faq} color="primary" variant="outlined" sx={{ borderRadius: 0 }} icon={<AddIcon />} onClick={() => handleSend(faq)} />
                  ))}
                </Box>
              </>
            )}
            <List>
              {messages.map((message, index) => (
                <Grow in={true} key={index} timeout={500}>
                  <ListItem sx={{ justifyContent: message.sender === 'user' ? 'flex-end' : 'flex-start', mb: 1 }}>
                    {message.locations ? (
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                        {message.locations.map((location, locIndex) => (
                          <Chip
                            key={locIndex}
                            label={location}
                            color="primary"
                            onClick={() => handleSend(location)}
                            sx={{ cursor: "pointer", borderRadius: 0 }}
                            variant='outlined'
                          />
                        ))}
                      </Box>
                    ) : (
                      <ListItemText
                        primary={message.sender === 'bot' ? (
                          <ReactMarkdown remarkPlugins={[remarkGfm]}>
                            {message.text}
                          </ReactMarkdown>
                        ) : (
                          message.text
                        )}
                        sx={{
                          bgcolor: message.sender === 'user' ? 'primary.main' : 'white',
                          color: message.sender === 'user' ? 'white' : 'text.primary',
                          p: 2,
                          borderRadius: message.sender === 'user' ? '20px 20px 0 20px' : '20px 20px 20px 0',
                          maxWidth: '75%',
                          boxShadow: '0 1px 2px rgba(0,0,0,0.1)',
                        }}
                      />
                    )}
                  </ListItem>
                </Grow>
              ))}
              <div ref={messagesEndRef} />
            </List>
          </Box>

          <Box sx={{ p: 2, borderTop: 1, borderColor: 'divider', backgroundColor: 'white' }}>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Type a message"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              InputProps={{
                endAdornment: (
                  <Button onClick={() => handleSend()} color="primary">
                    <SendIcon />
                  </Button>
                ),
                sx: { borderRadius: 30, pr: 0.5 }
              }}
            />
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

export default Chatbot;
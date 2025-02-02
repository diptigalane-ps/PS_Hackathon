import React, { useState } from "react";
import { Box, TextField, IconButton, Paper, Typography } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import CloseIcon from "@mui/icons-material/Close"; // Import the CloseIcon

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [open, setOpen] = useState(false);

  const handleSend = () => {
    if (input.trim() === "") return;

    const userMessage = { text: input, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    // Simulated bot response
    setTimeout(() => {
      const botResponse = {
        text: "This is a response from the AI chatbot.",
        sender: "bot",
      };
      setMessages((prev) => [...prev, botResponse]);
    }, 1000);
  };

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 20,
        right: 20,
        width: 300,
        zIndex: 9999, // Ensures it's above other content
      }}
    >
      {!open && (
        <IconButton
          onClick={() => setOpen(true)}
          sx={{
            backgroundColor: "primary.main",
            color: "white",
            borderRadius: "50%",
            boxShadow: 3, // Adds a shadow for better visibility
          }}
        >
          <ChatBubbleOutlineIcon />
        </IconButton>
      )}

      {open && (
        <Paper elevation={3} sx={{ p: 2, maxHeight: 400, overflowY: "auto" }}>
          <Typography variant="h6" sx={{ textAlign: "center", mb: 1 }}>
            Wealth Assistant
          </Typography>
          <Box sx={{ position: "absolute", top: 10, right: 10 }}>
            <IconButton
              onClick={() => setOpen(false)}
              sx={{ color: "grey.600" }}
            >
              <CloseIcon />
            </IconButton>
          </Box>
          <Box sx={{ maxHeight: 300, overflowY: "auto" }}>
            {messages.map((msg, index) => (
              <Box
                key={index}
                sx={{
                  textAlign: msg.sender === "user" ? "right" : "left",
                  mb: 1,
                }}
              >
                <Paper
                  sx={{
                    display: "inline-block",
                    p: 1,
                    backgroundColor:
                      msg.sender === "user" ? "primary.light" : "grey.200",
                  }}
                >
                  {msg.text}
                </Paper>
              </Box>
            ))}
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
            <TextField
              fullWidth
              variant="outlined"
              size="small"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()} // Updated to onKeyDown
            />

            <IconButton color="primary" onClick={handleSend}>
              <SendIcon />
            </IconButton>
          </Box>
        </Paper>
      )}
    </Box>
  );
};

export default Chatbot;

'use client'
import React, { useState } from "react";
import { Fab, Box, TextField, Button, Typography, Paper } from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";

const Chat: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState("");

  const toggleChat = () => {
    setOpen(!open);
  };

  const handleSendMessage = () => {
    if (input.trim()) {
      setMessages((prevMessages) => [...prevMessages, input.trim()]);
      setInput("");
    }
  };

  return (
    <>
      {/* Floating Action Button */}
      <Fab
        color="primary"
        aria-label="chat"
        sx={{
          position: "fixed",
          bottom: 16,
          right: 16,
        }}
        onClick={toggleChat}
      >
        <ChatIcon />
      </Fab>

      {/* Chat Box */}
      {open && (
        <Paper
          elevation={3}
          sx={{
            position: "fixed",
            bottom: 80, // Positioned just above the Fab
            right: 16,
            width: 300,
            maxHeight: 400,
            display: "flex",
            flexDirection: "column",
            borderRadius: 2,
            overflow: "hidden",
          }}
        >
          <Box
            sx={{
              backgroundColor: "primary.main",
              color: "white",
              padding: 1,
              textAlign: "center",
            }}
          >
            <Typography variant="h6">Chat</Typography>
          </Box>
          <Box
            sx={{
              flex: 1,
              overflowY: "auto",
              padding: 1,
              backgroundColor: "#f9f9f9",
            }}
          >
            {messages.length === 0 ? (
              <Typography variant="body2" color="text.secondary" textAlign="center">
                No messages yet
              </Typography>
            ) : (
              messages.map((msg, index) => (
                <Box key={index} sx={{ marginBottom: 1 }}>
                  <Typography
                    variant="body2"
                    sx={{
                      padding: 1,
                      backgroundColor: "primary.light",
                      color: "white",
                      borderRadius: 1,
                      maxWidth: "80%",
                      margin: "auto",
                      textAlign: "left",
                    }}
                  >
                    {msg}
                  </Typography>
                </Box>
              ))
            )}
          </Box>
          <Box sx={{ display: "flex", padding: 1, borderTop: "1px solid #ddd" }}>
            <TextField
              variant="outlined"
              size="small"
              fullWidth
              placeholder="Type a message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <Button
              variant="contained"
              color="primary"
              sx={{ marginLeft: 1 }}
              onClick={handleSendMessage}
            >
              Send
            </Button>
          </Box>
        </Paper>
      )}
    </>
  );
};

export default Chat;

'use client'
import { Box, Button, Grid2, InputAdornment, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
export const validateEmail = (email: string): boolean => {
    
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    if (!email) return false;
    if (email.length > 254) return false;
    
    return emailRegex.test(email);
  }
  
  
const JoinOurNewsLetter = () => {
    const [email, setEmail] = useState("");
    const handleSubscribe = () => {
        console.log(email)
    }

  return (
    <Grid2 container display={"flex"} justifyContent={"center"} zIndex={10} mb={-7} >
      <Grid2 size={{ xs: 12 }} display={"flex"} justifyContent={"center"} sx={{
            maxWidth: "900px",
            backgroundColor: "white",
            borderRadius: "5px",
            boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.02), 0px 0px 20px rgba(0, 0, 0,0.1)"
          }}>
        <Grid2
          container
          spacing={5}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          p={5}
        >
          <Grid2 size={{ xs: 12, md: 6 }}>
          <Typography
              fontSize={30}
              fontFamily={"Noto Sans"}
              fontWeight={800}
              sx={{ color: "#A4DB08" }}
            >
              Join Our Newsletter
            </Typography>
            <Typography
                          fontSize={14}
                          fontFamily={"Noto Sans"}
                          fontWeight={300}
                          sx={{ color: "#081334" }}
                        >
                          {`Signup to receive email updates on new product announcements, special promotions, sales and more.`}
                        </Typography>
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }}>
          <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: 2,
      }}
    >
      <TextField
        variant="outlined"
        size="medium"
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        sx={{ flex: 1, maxWidth: 400 }}

        slotProps={{
            input: {
                endAdornment: (
                  <InputAdornment position="end">
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleSubscribe}
                      sx={{ height: "100%", textTransform: "none", boxShadow: "none", backgroundColor: "#A4DB08" }}
                      disabled={!validateEmail(email)}
                    >
                      Subscribe
                    </Button>
                  </InputAdornment>
                ),
              }
        }}
      />
    </Box>
          </Grid2>
        </Grid2>
      </Grid2>
    </Grid2>
  );
};

export default JoinOurNewsLetter;

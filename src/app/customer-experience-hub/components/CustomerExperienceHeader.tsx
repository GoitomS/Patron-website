"use client";
import PatronButton from "@/components/PatronButton";
import { Grid2, Typography, useMediaQuery } from "@mui/material";
import React from "react";

const CustomerExperienceHeader = () => {
  const isMobile = useMediaQuery("(max-width: 800px)");
  return (
    <Grid2
      container
      sx={{
        backgroundImage: !isMobile
          ? "url('/customer-experience-banner.svg')"
          : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "560px",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        color: "black",
        textAlign: "center",
        padding: "20px",
        position: "relative",
        overflow: "hidden",
        marginTop: "89px",
        backgroundColor: isMobile ? "#f9f9f9" : "",
      }}
    >
      <Grid2
        display={"flex"}
        flexDirection={"column"}
        alignItems={!isMobile ? "flex-start" : "center"}
        size={{ xs: isMobile ? 12 : 6 }}
      >
        <Typography
         fontSize={26}
         fontFamily={"Noto Sans"}
         fontWeight={900}
         sx={{ color: "#081334" }}
         textAlign={!isMobile ? "left" : "center"}
        >
          patron<span style={{fontWeight: 400, color: "#A4DB08" }}>CC</span>
        </Typography>
        <Typography
          fontSize={40}
          fontFamily={"Noto Sans"}
          fontWeight={200}
          sx={{ color: "#081334" }}
          textAlign={!isMobile ? "left" : "center"}
        >
          Omnichannel Cloud
          <br />
          <span
            style={{
              fontSize: 40,
              fontWeight: 800,
              fontFamily: "Noto Sans",
              color: "#A4DB08",
            }}
          >
            Contact Center
          </span>
          <br />
          Solution
        </Typography>
      </Grid2>
      <Grid2
        display={"flex"}
        flexDirection={"column"}
        alignItems={!isMobile ? "flex-start" : "center"}
        size={{ xs: isMobile ? 12 : 6 }}
      >
        <Typography
          textAlign={!isMobile ? "left" : "center"}
          sx={{ color: "grey", maxWidth: "450px" }}
          fontFamily={"Noto Sans"}
          fontWeight={300}
        >
          Our innovative omnichannel contact center solution, ensures that your customers receive exceptional service, fostering loyalty and satisfaction. With seamless integrations and advanced features, we help you create a customer journey that stands out! 
        </Typography>

        <Grid2 display={"flex"} mt={4} gap={3}>
          <Grid2>
            <PatronButton variant="contained" name={"View Prices & Plans"} />
          </Grid2>

          <Grid2>
            <PatronButton variant="outlined" name={"Contact Sales"} />
          </Grid2>
        </Grid2>
      </Grid2>
    </Grid2>
  );
};

export default CustomerExperienceHeader;

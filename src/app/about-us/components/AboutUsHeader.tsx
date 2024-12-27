"use client";
import PatronButton from "@/components/PatronButton";
import { Grid2, Typography, useMediaQuery } from "@mui/material";
import React from "react";

const AboutUsHeader = () => {
  const isMobile = useMediaQuery("(max-width: 800px)");
  return (
    <Grid2
      container
      sx={{
        backgroundImage: !isMobile
          ? "url('/about-us-header.svg')"
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
          fontSize={40}
          fontFamily={"Noto Sans"}
          fontWeight={200}
          sx={{ color: "#081334" }}
          textAlign={!isMobile ? "left" : "center"}
        >
          {`Discover Our`}
          <br />
          <span
            style={{
              fontSize: 40,
              fontWeight: 800,
              fontFamily: "Noto Sans",
              color: "#A4DB08",
            }}
          >
            Journey and Vision
          </span>

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
          sx={{ color: "grey", maxWidth: "350px" }}
          fontFamily={"Noto Sans"}
          fontWeight={300}
        >
{`Join us as we continue to push the boundaries and shape the future together.`}
        </Typography>
        <Grid2 display={"flex"} mt={4} gap={3}>
        </Grid2>
      </Grid2>
    </Grid2>
  );
};

export default AboutUsHeader;

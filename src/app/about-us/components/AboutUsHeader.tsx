"use client";
import { Grid2, Typography, useMediaQuery } from "@mui/material";
import Image from "next/image";
import React from "react";

const AboutUsHeader = () => {
  const isMobile = useMediaQuery("(max-width: 800px)");
  return (
    <Grid2
      container
      sx={{
        backgroundImage: !isMobile ? "url('/background-image.png')" : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "560px",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        // flexDirection: "column",
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
        size={{ xs: 12 }}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        sx={{ maxWidth: 900 }}
        mx={4}
      >
        <Grid2 container>
          <Grid2
            display={"flex"}
            flexDirection={"column"}
            alignItems={!isMobile ? "flex-start" : "center"}
            size={{ xs: isMobile ? 12 : 7 }}

          >
            <Typography
              fontSize={40}
              fontFamily={"Noto Sans"}
              fontWeight={200}
              sx={{ color: "#081334"}}
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
            <Typography
              textAlign={!isMobile ? "left" : "center"}
              sx={{ color: "grey" }}
              fontFamily={"Noto Sans"}
              fontWeight={300}
            >
              {`Join us as we continue to push the boundaries and shape the future together.`}
            </Typography>
          </Grid2>
        </Grid2>

        {!isMobile && (
          <Grid2
            display={"flex"}
            flexDirection={"column"}
            alignItems={!isMobile ? "flex-start" : "center"}
            size={{ xs: isMobile ? 12 : 5 }}
          >
            <Image
              src="/about-us-header.png"
              alt="About Us Image"
              width={300}
              height={300}
            />
          </Grid2>
        )}
      </Grid2>
    </Grid2>
  );
};

export default AboutUsHeader;

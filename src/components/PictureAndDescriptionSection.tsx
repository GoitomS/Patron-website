"use client";
import { Grid2, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import PatronButton from "./PatronButton";
import Image from 'next/image';

const PictureAndDescriptionSection = ({imageSrc, title, description, primaryButtonText, primaryButtonLink, secondaryButtonLink, altText}) => {
  const isMobile = useMediaQuery("(max-width: 900px)");
  return (
    <Grid2
      container
      display={"flex"}
      justifyContent={"center"}
      p={4}
      alignItems={"center"}
      bgcolor={"#f9f9f9"}
    >
      <Grid2
        py={10}
        container
        sx={{ maxWidth: "950px" }}
        spacing={4}
        display={"flex"}
        alignItems={"flex-start"}
      >
        <Grid2
          size={{ xs: 12, md: 6 }}
          display={"flex"}
          justifyContent={isMobile ? "center" : "flex-end"}
        >
          <Image 
      src={imageSrc}
      alt={altText}
      width={400}
      height={500} 
      style={{ objectFit: 'contain' }}
    />
        </Grid2>
        <Grid2
          size={{ xs: 12, md: 6 }}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={isMobile ? "center" : "flex-start"}
        >
          {title}
          <Typography
            fontSize={14}
            fontFamily={"Noto Sans"}
            fontWeight={300}
            sx={{ color: "#081334", maxWidth: !isMobile ? "400px" : "100%" }}
            lineHeight={2.2}
          >
            {description}
          </Typography>
          <Grid2 display={"flex"} mt={5} gap={3} ml={3}>
            <Grid2>
              <PatronButton
                variant="contained"
                name={primaryButtonText}
                color="darkBlue"
                icon=""
                link={primaryButtonLink}
              />
            </Grid2>

            <Grid2>
              <PatronButton
                variant="outlined"
                name={"Watch Video"}
                color="darkBlue"
                icon={"video"}
                link={secondaryButtonLink}
              />
            </Grid2>
          </Grid2>
        </Grid2>
      </Grid2>
    </Grid2>
  );
};

export default PictureAndDescriptionSection;

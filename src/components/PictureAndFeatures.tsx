"use client";
import { Grid2, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import PatronButton from "./PatronButton";
import Image from 'next/image';
import SvgIcon from "./SvgIcon";

const PictureAndFeatures = ({features, imageSrc, altText, title }) => {
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
        sx={{ maxWidth: "850px" }}
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
          <Grid2
                container
                display={"flex"}
                justifyContent={"space-between"}
                mt={5}
                spacing={3}
              >
                {features?.map((feature, index) => {
                  return (
                    <Grid2
                      key={index}
                      size={{ xs: isMobile ? 12 : 6 }}
                      display={"flex"}
                      alignItems={"top"}
                      gap={1}
                    >
                      <SvgIcon />
                      <Typography>{feature}</Typography>
                    </Grid2>
                  );
                })}
              </Grid2>
          <Grid2 display={"flex"} mt={5} gap={3} ml={3}>
            <Grid2>
              <PatronButton
                variant="contained"
                name={"Contact Sales"}
                color="darkBlue"
                icon=""
                link="/"
              />
            </Grid2>

            <Grid2>
              <PatronButton
                variant="outlined"
                name={"Watch Video"}
                color="darkBlue"
                icon={"video"}
                link="/"
              />
            </Grid2>
          </Grid2>
        </Grid2>
      </Grid2>
    </Grid2>
  );
};

export default PictureAndFeatures;

"use client";
import { Grid2, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import PatronButton from "./PatronButton";
import Image from 'next/image';

const PictureAndDescriptionSection = () => {
  const isMobile = useMediaQuery("(max-width: 900px)");
  const handleRequestDemoClick = () => {};
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
      src="/woman-on-phone.svg"
      alt="Woman holding a phone"
      width={400}
      height={500} // Use actual aspect ratio of your SVG
      style={{ objectFit: 'contain' }}
    />
        </Grid2>
        <Grid2
          size={{ xs: 12, md: 6 }}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={isMobile ? "center" : "flex-start"}
        >
          <Typography
            fontSize={30}
            fontFamily={"Noto Sans"}
            fontWeight={800}
            sx={{ color: "#081334" }}
          >
            Customized <span style={{ color: "#A4DB08" }}>solutions</span> for
            every sector
          </Typography>
          <Typography
            fontSize={14}
            fontFamily={"Noto Sans"}
            fontWeight={300}
            sx={{ color: "#081334", maxWidth: !isMobile ? "400px" : "100%" }}
            lineHeight={2.2}
          >
            {`We are commited to providing tailored solutions that meet the unique needs of various industries. Whether you're in healthcare, finance, retail, or any other sector, our technology is designed to adapt and deliver exceptional results. 
We understand that each industry has its own set of challenges and requirements, and our solutions are crafted to address these specific needs. 
By leveraging our expertise and innovative approach, we ensure that your business can thrive and achieve its goals with the right tools and support. 
Experience the difference with our customized solutions for every sector.`}
          </Typography>
          <Grid2 display={"flex"} mt={5} gap={3} ml={3}>
            <Grid2>
              <PatronButton
                variant="contained"
                name={"View Details"}
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

export default PictureAndDescriptionSection;

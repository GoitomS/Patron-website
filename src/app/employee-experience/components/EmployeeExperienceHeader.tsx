"use client";
import PatronButton from "@/components/PatronButton";
import { Grid2, Typography, useMediaQuery } from "@mui/material";
import React from "react";

const EmployeeExperienceHeader = () => {
  const isMobile = useMediaQuery("(max-width: 800px)");
  return (
    <Grid2
      container
      sx={{
        backgroundImage: !isMobile
          ? "url('/truck-driver-phone.svg')"
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
          patron<span style={{fontWeight: 400, color: "#A4DB08" }}>EX</span>
        </Typography>
        <Typography
          fontSize={40}
          fontFamily={"Noto Sans"}
          fontWeight={200}
          sx={{ color: "#081334" }}
          textAlign={!isMobile ? "left" : "center"}
        >
          Your trusted
          <br />
          <span
            style={{
              fontSize: 40,
              fontWeight: 800,
              fontFamily: "Noto Sans",
              color: "#A4DB08",
            }}
          >
            Business Phone
          </span>
          <br />
          system
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
          Stay connected with your clients and team members effortlessly. <br/>Trusted performance, unparalleled clarity and convenience in every call.
        </Typography>

        <Grid2 display={"flex"} mt={4} gap={3}>
          <Grid2>
            <PatronButton variant="contained" name={"Request a Demo"} />
          </Grid2>

          <Grid2>
            <PatronButton variant="outlined" name={"Contact Sales"} />
          </Grid2>
        </Grid2>
      </Grid2>
    </Grid2>
  );
};

export default EmployeeExperienceHeader;

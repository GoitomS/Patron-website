"use client";
import PatronButton from "@/components/PatronButton";
import { Grid2, Typography, useMediaQuery } from "@mui/material";
import React from "react";

const PartnershipHeader = () => {
  const isMobile = useMediaQuery("(max-width: 800px)");
  return (
    <Grid2
      container
      sx={{
        backgroundImage: !isMobile
          ? "url('/partnership-header.svg')"
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
          {`Let's build`}
          <br />
          <span
            style={{
              fontSize: 40,
              fontWeight: 800,
              fontFamily: "Noto Sans",
              color: "#A4DB08",
            }}
          >
            Success
          </span>
          <br />
          together
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
          Partner with us, gain access to cutting-edge solutions, innovative tools, and a shared vision for delivering exceptional value to customers.<br/>{`Let's grow together!`}
        </Typography>

        <Grid2 display={"flex"} mt={4} gap={3}>
          <Grid2>
            <PatronButton variant="contained" name={"Get started"} />
          </Grid2>

        </Grid2>
      </Grid2>
    </Grid2>
  );
};

export default PartnershipHeader;

"use client";
import { Grid2, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import Image from "next/image";

const DedicatedSupport = () => {
  const isMobile = useMediaQuery("(max-width: 600px)");
  return (
    <Grid2
      container
      display={"flex"}
      justifyContent={"center"}
      px={4}
      alignItems={"center"}
    >
      <Grid2
        sx={{ maxWidth: "950px" }}
        display={"flex"}
        flexDirection={isMobile ? "column" : "row"}
        alignItems={"center"}
        py={4}
      >
        <Grid2 size={{ xs: isMobile ? 10 : 6 }}>
          <Typography
            fontSize={30}
            fontFamily={"Noto Sans"}
            fontWeight={800}
            sx={{ color: "#081334" }}
          >
            Dedicated expert <br />
            <span style={{ color: "#A4DB08" }}>Support,</span>
            <br />
            everytime!
          </Typography>
        </Grid2>
        <Grid2
          size={{ xs: isMobile ? 10 : 6 }}
          ml={isMobile ? 0 : 3}
          mt={isMobile ? 3 : 0}
          textAlign={"center"}
        >
          {!isMobile && <Image
            src={"/24-7-support.svg"}
            alt={"24/7 support"}
            width={400}
            height={400}
            style={{ objectFit: "contain" }}
          />}{" "}
        </Grid2>
      </Grid2>
    </Grid2>
  );
};

export default DedicatedSupport;

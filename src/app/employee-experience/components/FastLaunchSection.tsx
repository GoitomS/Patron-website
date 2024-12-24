import { Grid2, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const FastLaunchSection = () => {
  return (
    <Grid2
      container
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      sx={{ padding: "40px 0px" }}
    >
      <Typography
        fontSize={30}
        fontFamily={"Noto Sans"}
        fontWeight={800}
        sx={{ color: "#081334"}}
        
      >
        Launch in a <span style={{ color: "#A4DB08" }}>flash!</span>
      </Typography>
      <Typography
        fontSize={14}
        fontFamily={"Noto Sans"}
        fontWeight={300}
        sx={{ color: "grey", maxWidth: "800px" }}
        textAlign={"center"}
        lineHeight={2}
      >
        {`With our intuitive design and user-friendly interface, you'll be up and running in no time, enjoying seamless connectivity and top-notch performance.`}
        <br />
        {`Say goodbye to long installation processes and hello to instant productivity!!`}
      </Typography>
      <Image src={"/desktop-mobile-screens.svg"} alt="desktop-mobile-screen" width={0} height={0} sizes="100vw" style={{ width: "80%", height: "auto", maxWidth:"900px", marginTop: "30px", marginBottom: "30px" }} />
    </Grid2>
  );
};

export default FastLaunchSection;

import { Grid2 } from "@mui/material";
import Image from "next/image";
import React from "react";
interface FastLaunchSectionProps {
  title: React.ReactNode;
  description: React.ReactNode | string;
  imageSrc: string;
  altText: string;
}
const FastLaunchSection = ({title, description, imageSrc, altText}: FastLaunchSectionProps) => {
  return (
    <Grid2
      container
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      sx={{ padding: "40px 0px" }}
    >
        {title}
      {description}
      <Image src={imageSrc} alt={altText} width={0} height={0} sizes="100vw" style={{ width: "80%", height: "auto", maxWidth:"900px", marginTop: "30px", marginBottom: "30px" }} />
    </Grid2>
  );
};

export default FastLaunchSection;

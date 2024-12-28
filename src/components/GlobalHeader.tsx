import { Grid2, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import PatronButton from "./PatronButton";
interface GlobalHeaderProps {
  backgroundImage: string;
  title: React.ReactNode;
  description: string;
  sideImageUrl?: string;
  altText?: string;
  primaryButton?: string;
  primaryLink?: string;
  secondaryButton?: string;
  secondaryLink?: string;
}
const GlobalHeader = ({
  backgroundImage,
  title,
  description,
  sideImageUrl,
  altText,
  primaryButton,
  primaryLink,
  secondaryButton,
  secondaryLink,
}: GlobalHeaderProps) => {
  return (
    <Grid2
      container
      sx={{
        backgroundImage: {
            xs: 'none',
            md: `url(${backgroundImage})`,
        },
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "560px",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "black",
        textAlign: "center",
        padding: "20px",
        position: "relative",
        overflow: "hidden",
        marginTop: "89px",
        backgroundColor: {
            xs: "#f9f9f9",
            md: "none",
        },
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
            alignItems={"center"}
            justifyContent={"center"}
            size={{ xs: 12, sm: 7 }}
          >
            <Grid2>
              {title}
              <Typography
                sx={{ color: "grey", textAlign: { xs: "center", md: "left" } }}
                fontFamily={"Noto Sans"}
                fontWeight={300}
              >
                {description}
              </Typography>
            </Grid2>

            {primaryButton && (
              <Grid2 display={"flex"} mt={4} gap={3}>
                <Grid2>
                  <PatronButton
                    variant="contained"
                    name={primaryButton || ""}
                    link={primaryLink || ""}
                  />
                </Grid2>

                <Grid2>
                  <PatronButton
                    variant="outlined"
                    name={secondaryButton || ""}
                    link={secondaryLink || ""}
                  />
                </Grid2>
              </Grid2>
            )}
          </Grid2>
        </Grid2>

        <Grid2
          display={"flex"}
          flexDirection={"column"}
          size={{ xs: 12, sm: 5 }}
          sx={{
            display: {
              xs: "none",
              sm: "flex",
            },
            alignItems: {
              xs: "flex-start",
              sm: "center",
            },
          }}
        >
          <Image
            src={sideImageUrl || ""}
            alt={altText || ""}
            width={350}
            height={0}
            style={{
              height: "auto",
              width: "350px",
            }}
          />
        </Grid2>
      </Grid2>
    </Grid2>
  );
};

export default GlobalHeader;

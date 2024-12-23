import React from "react";
import { Box, Button, Grid2, IconButton, Typography } from "@mui/material";
import styles from "./Footer.module.css"; // Assuming you have a CSS module
import Image from "next/image";
import logo from "../../public/logo-white-text.svg";
import Link from "next/link";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailIcon from '@mui/icons-material/Mail';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import JoinOurNewsLetter from "./JoinOurNewsLetter";
const Footer: React.FC = () => (
  <>
    <Grid2>
        <JoinOurNewsLetter/>
    </Grid2>
    <Box component="footer" className={styles.footer} sx={{paddingTop: "80px"}}>
      <Grid2 container spacing={4} justifyContent="center" mb={10}>
        <Grid2 display={"flex"} flexDirection={"column"} gap={1}>
          <Image
            className={styles.logo}
            src={logo} // Use the imported logo
            alt="Logo"
            //   width={100}
            height={50}
            priority
          />
          <Typography fontSize={"13px"} sx={{ color: "lightGrey" }}>
            Tailored Solutions for Enhanced Customer Experience
          </Typography>
          <Typography
            fontWeight={"bold"}
            fontSize={"30px"}
            sx={{ color: "#A4DB08", marginTop: "40px", textAlign: "left" }}
          >
            We're here to help!
          </Typography>
          <Typography fontSize={"16px"} sx={{ color: "lightGrey", display: "flex", alignItems: "center" }}>
            <MailIcon sx={{color: "#A4DB08", marginRight: "10px"}}/> help@patron-cx.com
          </Typography>
          <Typography fontSize={"16px"} sx={{ color: "lightGrey", display: "flex", alignItems: "center" }}>
            <LocalPhoneIcon sx={{color: "#A4DB08", marginRight: "10px"}}/> +1 (888) 123-4567
          </Typography>

          <Grid2 alignItems={"center"} gap={2} mt={2}>
            <Link href={"/"}>
              <LinkedInIcon sx={{ color: "#fff", width: "25px", marginX: "10px" }} />
            </Link>
            <Link href={"/"}>
              <FacebookIcon sx={{ color: "#fff", width: "25px", marginX: "10px" }} />
            </Link>
            <Link href={"/"}>
              <InstagramIcon sx={{ color: "#fff", width: "25px", marginX: "10px" }} />
            </Link>
            <Link href={"/"}>
              <XIcon sx={{ color: "#fff", width: "25px", marginX: "10px" }} />
            </Link>
          </Grid2>
        </Grid2>
        <Grid2
          display={"flex"}
          flexDirection={"column"}
          gap={2}
          alignItems={"flex-start"}
        >
          <Typography fontWeight={"bold"} fontSize={"20px"} sx={{}}>
            Products
          </Typography>
          <Link style={{ color: "lightGrey" }} href="/">
            Business Phone
          </Link>
          <Link style={{ color: "lightGrey" }} href="/">
            Contact Center
          </Link>
          <Link style={{ color: "lightGrey" }} href="/">
            CRM
          </Link>
          <Link style={{ color: "lightGrey" }} href="/">
            Case Management
          </Link>
          <Link style={{ color: "lightGrey" }} href="/">
            Chat
          </Link>
          <Link style={{ color: "lightGrey" }} href="/">
            Workflow Management
          </Link>
          <Link style={{ color: "lightGrey" }} href="/">
            Virtual Numbers
          </Link>
          <Link style={{ color: "lightGrey" }} href="/">
            Integrations
          </Link>
        </Grid2>
        <Grid2
          display={"flex"}
          flexDirection={"column"}
          gap={2}
          alignItems={"flex-start"}
        >
          <Typography fontWeight={"bold"} fontSize={"20px"} sx={{}}>
            Useful Links
          </Typography>
          <Link style={{ color: "lightGrey" }} href="/">
            Patron App Login
          </Link>
          <Link style={{ color: "lightGrey" }} href="/">
            Get a Business Phone
          </Link>
          <Link style={{ color: "lightGrey" }} href="/">
            Features
          </Link>
          <Link style={{ color: "lightGrey" }} href="/">
            Careers
          </Link>
          <Link style={{ color: "lightGrey" }} href="/">
            Privacy Policy
          </Link>
          <Link style={{ color: "lightGrey" }} href="/">
            Terms of Use
          </Link>
          <Link style={{ color: "lightGrey" }} href="/">
            Support
          </Link>
          <Link style={{ color: "lightGrey" }} href="/">
            FAQs
          </Link>
          <Link style={{ color: "lightGrey" }} href="/">
            Contact Us
          </Link>
        </Grid2>
        <Grid2
          display={"flex"}
          flexDirection={"column"}
          gap={2}
          alignItems={"flex-start"}
        >
          <Typography fontWeight={"bold"} fontSize={"20px"} sx={{}}>
            About Us
          </Typography>
          <Link style={{ color: "lightGrey" }} href="/">
            Our Company
          </Link>
          <Link style={{ color: "lightGrey" }} href="/">
            Leadership
          </Link>
          <Link style={{ color: "lightGrey" }} href="/">
            Support Center
          </Link>
          <Link style={{ color: "lightGrey" }} href="/">
            Corporate Responsibility
          </Link>
        </Grid2>
      </Grid2>

      <Typography variant="body1" fontSize={12} sx={{margintop: "50px"}}>
      © 2024 Patron LLC. All rights reserved.
    </Typography>
    </Box>
  </>
);

export default Footer;

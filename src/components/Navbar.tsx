"use client";
import theme from "@/theme";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Grid2,
  useMediaQuery,
  Typography,
  SwipeableDrawer,
} from "@mui/material";
import React, { useState } from "react";
import logo from "../../public/logo.svg";
import styles from "../app/page.module.css";
import Image from "next/image";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MenuIcon from "@mui/icons-material/Menu";
import ProductsMenu from "./ProductsMenu";
import ServicesMenu from "./ServicesMenu";
import SwipeableDrawerContent from "./SwipeableDrawerContent";
import Link from "next/link";
const Navbar = () => {
  const isMobile = useMediaQuery("(max-width: 900px)");
  const [selected, setSelected] = useState(0);
  const [open, setOpen] = useState(false);
  const [openServices, setOpenServices] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClose = () => {
    setAnchorEl(null);
    setOpen(false);
    setOpenServices(false)
    setSelected(0)
  };
  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        component="nav"
        sx={{
          height: "29px",
          backgroundColor: theme.palette.secondary.main,
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "0px",
          }}
        >
          <IconButton>
            <LinkedInIcon
              sx={{ color: "#fff", width: "17px", marginTop: "-5px" }}
            />
          </IconButton>
          <IconButton>
            <FacebookRoundedIcon
              sx={{ color: "#fff", width: "17px", marginTop: "-5px" }}
            />
          </IconButton>
          <IconButton>
            <InstagramIcon
              sx={{ color: "#fff", width: "17px", marginTop: "-5px" }}
            />
          </IconButton>
          <IconButton>
            <XIcon sx={{ color: "#fff", width: "17px", marginTop: "-5px" }} />
          </IconButton>
        </Box>
      </AppBar>
      <AppBar
        position="fixed"
        elevation={0}
        component="nav"
        // color="neutral"
        sx={{
          height: "60px",
          marginTop: "29px",
          zIndex: (theme) => theme.zIndex.drawer + 1,
          backgroundColor: "white",
        }}
      >
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            <Link href="/">
            <Box sx={{ paddingLeft: "30px", "&:hover": { cursor: "pointer"} }} onClick={()=>{window.location.href = "/"}}>
              <Image
                className={styles.logo}
                src={logo}
                alt="Logo"
                height={35}
                priority
              />
            </Box>
            </Link>
          </Box>
          {!isMobile && (
            <Grid2 display={"flex"} mr={8}>
              <Box sx={{ marginX: "5px" }}>
                <IconButton
                  sx={{
                    color:
                      selected === 1
                        ? theme.palette.primary.main
                        : theme.palette.secondary.main,
                  }}
                >
                  <Grid2
                    display={"flex"}
                    alignItems={"center"}
                    onClick={(e: React.MouseEvent<HTMLElement>) => {
                        setAnchorEl(e.currentTarget);
                        setOpen(true)
                      setSelected(1);
                    }}
                  >
                    <Typography fontWeight={selected === 1 && "bold"}>
                      Products
                    </Typography>
                    <KeyboardArrowDownIcon />
                  </Grid2>
                </IconButton>
              </Box>
              <Box
                sx={{ marginX: "5px", alignItems: "center", display: "flex" }}
              >
                <IconButton
                  sx={{
                    color:
                      selected === 2
                        ? theme.palette.primary.main
                        : theme.palette.secondary.main,
                  }}
                >
                  <Grid2
                    display={"flex"}
                    alignItems={"center"}
                    onClick={() => {
                      setSelected(2);
                      setOpenServices(true);
                    }}
                  >
                    <Typography fontWeight={selected === 2 && "bold"}>
                      Services
                    </Typography>
                    <KeyboardArrowDownIcon />
                  </Grid2>
                </IconButton>
              </Box>
              <Box sx={{ marginX: "5px" }}>
                <IconButton sx={{ color: theme.palette.secondary.main }}>
                  <Grid2 display={"flex"} alignItems={"center"}>
                    <Typography>Pricing</Typography>
                  </Grid2>
                </IconButton>
              </Box>
              <Box sx={{ marginX: "5px" }}>
                <IconButton sx={{ color: theme.palette.secondary.main }}>
                  <Grid2 display={"flex"} alignItems={"center"}>
                    <Typography>Partners</Typography>
                  </Grid2>
                </IconButton>
              </Box>
              <Box sx={{ marginX: "5px" }}>
                <IconButton sx={{ color: theme.palette.secondary.main }}>
                  <Grid2 display={"flex"} alignItems={"center"}>
                    <Typography>Resources</Typography>
                  </Grid2>
                </IconButton>
              </Box>
              <Box sx={{ marginX: "5px" }}>
                <IconButton sx={{ color: theme.palette.secondary.main }}>
                  <Grid2 display={"flex"} alignItems={"center"}>
                    <Typography>About us</Typography>
                  </Grid2>
                </IconButton>
              </Box>
            </Grid2>
          )}
          {isMobile && (
            <IconButton
              onClick={() => {
                setSelected(3);
              }}
            >
              <MenuIcon sx={{ width: "25px" }} />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>
      <SwipeableDrawer
        anchor={"top"}
        open={selected === 3}
        onClose={() => {
          setSelected(0);
        }}
        onOpen={() => {
          setSelected(3);
        }}
        sx={{ zIndex: 10000 }}
      >
        <Grid2 ><SwipeableDrawerContent handleClose={handleClose}/></Grid2>
      </SwipeableDrawer>
      <ProductsMenu anchorEl={anchorEl} open={open} handleClose={handleClose} />
      <ServicesMenu anchorEl={anchorEl} open={openServices} handleClose={handleClose} />
    </>
  );
};

export default Navbar;

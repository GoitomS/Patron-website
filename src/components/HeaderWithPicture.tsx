'use client'
import { Grid2, Typography, useMediaQuery } from '@mui/material'
import React, { useState } from 'react'
import PatronButton from './PatronButton'
import RequestDemoModal from './RequestDemoModal'

const HeaderWithPicture = () => {
    const isMobile = useMediaQuery("(max-width: 800px)");
    const [openModal, setOpenModal] = useState(false);
  const handleRequestDemoModalClose = () =>{
    setOpenModal(false)
  }

  return (
    <Grid2 container sx={{
      backgroundImage: !isMobile ? "url('/homepage-banner-image.svg')": "",
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
      backgroundColor: isMobile ? "#f9f9f9": "",
    }}>
        <Grid2 display={"flex"} flexDirection={"column"} alignItems={!isMobile ? "flex-start": "center"} size={{xs: isMobile ? 12 : 6}}>
        <Typography fontSize={40} fontFamily={"Noto Sans"} fontWeight={200} sx={{color: "#081334"}} textAlign={!isMobile && "left"}>Enhance<br/><span style={{fontSize: 40, fontWeight: 800, fontFamily: 'Noto Sans', color: "#A4DB08"}}>Customer Experience</span><br/>at every touch-point</Typography>
        </Grid2>
        <Grid2 display={"flex"} flexDirection={"column"} alignItems={!isMobile ? "flex-start": "center"} size={{xs: isMobile ? 12 : 6}} >
        <Typography textAlign={!isMobile ? "left": "center"} sx={{color: "#081334", maxWidth: "350px"}}>Stay relevant by following industry trends. Be proactive, anticipate customer needs, and be accessible through convenient channels.</Typography>

        <Grid2 display={"flex"} mt={4} gap={3}>
            <Grid2>
                <PatronButton variant='contained' name={"Request a Demo"} handleClick={() => setOpenModal(true)}/>
            </Grid2>
            
            <Grid2>
            <PatronButton variant='outlined' name={"Contact Sales"}/>
            </Grid2>
        </Grid2>
        </Grid2>
        <RequestDemoModal open={openModal} handleClose={handleRequestDemoModalClose} />
    </Grid2>
  )
}

export default HeaderWithPicture
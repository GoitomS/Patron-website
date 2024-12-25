'use client'
import { Grid2, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import PatronButton from './PatronButton'
interface PatronCallToActionProps {
  background: string;
  majorText: React.ReactNode;
  minorText: string;
  buttonText: string;
  buttonLink: string;
}
const PatronCallToAction = ({background, majorText, minorText, buttonText, buttonLink}: PatronCallToActionProps) => {
  const isMobile = useMediaQuery('(max-width: 600px)');
  return (
    <Grid2 container sx={{backgroundColor: background}} display={"flex"} justifyContent={"center"} p={4} alignItems={"center"}>
      <Grid2 sx={{maxWidth: "950px"}} display={"flex"} flexDirection={isMobile? "column" : "row"} alignItems={"center"} py={4} >
        <Grid2 size={{ xs: isMobile ? 10 : 6 }}>

        {majorText}
            <Typography
                          fontSize={14}
                          fontFamily={"Noto Sans"}
                          fontWeight={300}
                          sx={{ color: "white", maxWidth: "550px" }}
                        >
                          {minorText}
                        </Typography>
      </Grid2>
      <Grid2 size={{ xs: isMobile ? 10 : 6 }} ml={isMobile ? 0 : 3} mt={isMobile ? 3 : 0} textAlign={"center"}>
        <PatronButton color={background === "#081334" ? 'green' : 'darkBlue'} variant='contained' name={buttonText} link={buttonLink}/>
      </Grid2>
      </Grid2>
    </Grid2>
  )
}

export default PatronCallToAction
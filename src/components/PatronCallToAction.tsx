'use client'
import { Grid2, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import PatronButton from './PatronButton'

const PatronCallToAction = ({background, majorText, minorText, buttonText, buttonLink}) => {
  const isMobile = useMediaQuery('(max-width: 600px)');
  return (
    <Grid2 container sx={{backgroundColor: background}} display={"flex"} justifyContent={"center"} p={4} alignItems={"center"}>
      <Grid2 sx={{maxWidth: "850px"}} display={"flex"} flexDirection={isMobile? "column" : "row"} alignItems={"center"} py={4} >
        <Grid2 size={{ xs: isMobile ? 10 : 6 }}>
        <Typography
              fontSize={30}
              fontFamily={"Noto Sans"}
              fontWeight={800}
              sx={{ color: "white" }}
            >
              Simplify the way you connect with <span style={{color: "#081334"}}>Customers</span>
            </Typography>
            <Typography
                          fontSize={14}
                          fontFamily={"Noto Sans"}
                          fontWeight={300}
                          sx={{ color: "white", maxWidth: "400px" }}
                        >
                          {minorText}
                        </Typography>
      </Grid2>
      <Grid2 size={{ xs: isMobile ? 10 : 6 }} ml={isMobile ? 0 : 3} mt={isMobile ? 3 : 0} textAlign={"center"}>
        <PatronButton variant='contained' name={buttonText} link={buttonLink}/>
      </Grid2>
      </Grid2>
      
    </Grid2>
  )
}

export default PatronCallToAction
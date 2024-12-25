'use client'
import { Button, Grid2, Typography } from '@mui/material';
import React from 'react'
import PricePlanCard from './PricePlanCard';
interface selectedTabType {
    selectedTab: "businessPhones" | "contactCenter" | "events"
}
const PricesAndPlansSection = () => {
    const [selectedTab, setSelectedTab] = React.useState<selectedTabType["selectedTab"]>("businessPhones")
  return (
    <Grid2
      container
      textAlign={"center"}
      display={"flex"}
      justifyContent={"center"}
      my={3}
      mt={20}
    >
      <Grid2 size={{ xs: 12 }} sx={{ maxWidth: "850px" }} px={4}>
        <Typography
          fontSize={40}
          fontFamily={"Noto Sans"}
          fontWeight={800}
          sx={{ color: "#081334" }}
        >
          Prices & Plans
        </Typography>
      </Grid2>
      <Grid2 size={{ xs: 12 }}>
        <Grid2
          container
          display={"flex"}
          justifyContent={"center"}
          gap={10}
          mt={4}
          mb={2}
        >
          <Grid2
            size={{ xs: 12 }}
            sx={{
              border: "1px solid lightGrey",
              borderRadius: "5px",
              maxWidth: "600px",
            }}
            p={1}
            display={"flex"}
            justifyContent={"space-between"}
          >
            <Button
              sx={{
                textTransform: "none",
                borderRadius: "5px",
                backgroundColor: selectedTab === "businessPhones" ? "#A4DB08" : "",
                color: selectedTab === "businessPhones" ? "white" : "#081334",
                boxShadow: "none",
                "&:hover": {
                  boxShadow: "none",
                  backgroundColor: selectedTab !== "businessPhones" ? "#E8F1D1" : "",
                },
              }}
              onClick={() => {
                setSelectedTab("businessPhones");
              }}
            >
              Business Phones
            </Button>
            <Button
              sx={{
                textTransform: "none",
                borderRadius: "5px",
                backgroundColor: selectedTab === "contactCenter" ? "#A4DB08" : "",
                color: selectedTab === "contactCenter" ? "white" : "#081334",
                boxShadow: "none",
                "&:hover": {
                  boxShadow: "none",
                  backgroundColor: selectedTab !== "contactCenter" ? "#E8F1D1" : "",
                },
              }}
              onClick={() => {
                setSelectedTab("contactCenter");
              }}
            >
              Contact Center
            </Button>
            <Button
              sx={{
                textTransform: "none",
                borderRadius: "5px",
                backgroundColor: selectedTab === "events" ? "#A4DB08" : "",
                color: selectedTab === "events" ? "white" : "#081334",
                boxShadow: "none",
                "&:hover": {
                  boxShadow: "none",
                  backgroundColor:
                    selectedTab !== "events" ? "#E8F1D1" : "",
                },
              }}
              onClick={() => {
                setSelectedTab("events");
              }}
            >
              Events
            </Button>
          </Grid2>
        </Grid2>
      </Grid2>
      <Grid2 size={{ xs: 12 }} display={"flex"} justifyContent={"center"}   >
      <Grid2 container >
        <Grid2 size={{ xs: 12, md: 4 }} display={"flex"} justifyContent={"center"} alignItems={"flex-start"} >
            <PricePlanCard selectedTab={selectedTab} plan={"Basic"}/>
            </Grid2>
        <Grid2 size={{ xs: 12, md: 4 }} display={"flex"} justifyContent={"center"} alignItems={"flex-start"}>
            <PricePlanCard selectedTab={selectedTab} plan={"Premium"}/>
            </Grid2>
        <Grid2 size={{ xs: 12, md: 4 }} display={"flex"} justifyContent={"center"} alignItems={"flex-start"}>
            <PricePlanCard selectedTab={selectedTab} plan={"PremiumPlus"}/>
            </Grid2>
      </Grid2>
      
      </Grid2>
    </Grid2>
  )
}

export default PricesAndPlansSection
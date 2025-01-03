"use client";
import { Button, Grid2, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import SvgIcon from "./SvgIcon";
import PatronButton from "./PatronButton";
type TitleDescription = {
    title: string;
    description: string;
  };
  interface ListOfTitlesWithDescriptionsTypes {
    calls: TitleDescription;
    chats: TitleDescription;
    caseManagement: TitleDescription;
    CRM: TitleDescription;
  }
const listOfCallFeatures = {
    calls: [
        "Easy setup and deployment",
        "user-fiendly UI",
        "Inbound/Outbound",
        "Advanced call center features",
        "call detail records",
        "Highly customizable",
        "Dashboards and Reports",
        "Integrations",
      ],
    chats: [
        "Easy setup and deployment",
        "user-fiendly UI",
        "Similar Interface for all channels",
        "Dynamic Bot builder",
        "Dynamic chat flows and forms",
        "Highly customizable",
        "Reporting and Analytics",
        "Integrations",
      ],
    caseManagement: [
        "Easy setup and deployment",
        "user-fiendly UI",
        "Workflow automation",
        "Collaboration tools",
        "Multichannel support",
        "Highly customizable",
        "Reports and Analytics",
        "Integrations",
      ],
    CRM: [
        "Easy setup and deployment",
        "user-fiendly UI",
        "Inbound/Outbound",
        "Advanced call center features",
        "call detail records",
        "Highly customizable",
        "Dashboards and Reports",
        "Integrations",
      ],
};
const listOfTitlesWithDescriptions: ListOfTitlesWithDescriptionsTypes = {
    calls: {
        title: "A Reliable Communication Platform for a seamless Customer Experience",
        description: `Business phone systems for exceptional employee experience and an even more robust contact center solution to enhance customer experience.`
    },
    chats: {
        title: `Seamless customer conversations across all channels with a single sign-in.`,
        description: `Engage with your customers seamlessly across various chat platforms. Our solution ensures a unified and efficient communication experience, enhancing both customer satisfaction and operational efficiency.`
    },
    caseManagement: {
        title: `Effortless ticketing and tracking for seamless issue resolution`,
        description: `Streamline your support process with our Case Management system. Efficiently track and resolve customer issues, ensuring a smooth and satisfying experience for both your team and your customers.`
    },
    CRM: {
        title: `Efficiently manage customer records for a personalized experience.`,
        description: `Enhance your customer interactions with our Customer Records Management tool. Keep track of customer information effortlessly, ensuring personalized and efficient service that boosts satisfaction and loyalty.`
    },
}
interface selectedTabType {
    selectedTab: string;
}
const ProductTabsOnHomePage = () => {
  const [selectedTab, setSelectedTab] = React.useState<keyof ListOfTitlesWithDescriptionsTypes>("calls");
  const isMobile = useMediaQuery("(max-width: 700px)");
  return (
    <Grid2
      container
      textAlign={"center"}
      display={"flex"}
      justifyContent={"center"}
      my={3}
      
    >
      <Grid2 size={{ xs: 12 }} sx={{ maxWidth: "850px" }} px={4}>
        <Typography
          fontSize={40}
          fontFamily={"Noto Sans"}
          fontWeight={800}
          sx={{ color: "#081334" }}
        >
          Stay relevant, with exceptional{" "}
          <span style={{ color: "#A4DB08" }}>employee</span> and{" "}
          <span style={{ color: "#A4DB08" }}>customer experiences</span>
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
                backgroundColor: selectedTab === "calls" ? "#A4DB08" : "transparent",
                color: selectedTab === "calls" ? "white" : "#081334",
                boxShadow: "none",
                "&:hover": {
                  boxShadow: "none",
                  backgroundColor: selectedTab !== "calls" ? "#E8F1D1" : "#A4DB08",
                },
              }}
              onClick={() => {
                setSelectedTab("calls");
              }}
            >
              Calls
            </Button>
            <Button
              sx={{
                textTransform: "none",
                borderRadius: "5px",
                backgroundColor: selectedTab === "chats" ? "#A4DB08" : "transparent",
                color: selectedTab === "chats" ? "white" : "#081334",
                boxShadow: "none",
                "&:hover": {
                  boxShadow: "none",
                  backgroundColor: selectedTab !== "chats" ? "#E8F1D1" : "#A4DB08",
                },
              }}
              onClick={() => {
                setSelectedTab("chats");
              }}
            >
              Chats
            </Button>
            <Button
              sx={{
                textTransform: "none",
                borderRadius: "5px",
                backgroundColor: selectedTab === "caseManagement" ? "#A4DB08" : "transparent",
                color: selectedTab === "caseManagement" ? "white" : "#081334",
                boxShadow: "none",
                "&:hover": {
                  boxShadow: "none",
                  backgroundColor: selectedTab !== "caseManagement" ? "#E8F1D1" : "#A4DB08",
                },
              }}
              onClick={() => {
                setSelectedTab("caseManagement");
              }}
            >
              Case Management
            </Button>
            <Button
              sx={{
                textTransform: "none",
                borderRadius: "5px",
                backgroundColor: selectedTab === "CRM" ? "#A4DB08" : "transparent",
                color: selectedTab === "CRM" ? "white" : "#081334",
                boxShadow: "none",
                "&:hover": {
                  boxShadow: "none",
                  backgroundColor: selectedTab !== "CRM" ? "#E8F1D1" : "#A4DB08",
                },
              }}
              onClick={() => {
                setSelectedTab("CRM");
              }}
            >
              CRM
            </Button>
          </Grid2>
        </Grid2>
      </Grid2>
      <Grid2 size={{ xs: 12 }} sx={{ maxWidth: "850px", border: "1px solid", borderColor: "#A4DB08" }} >
        <Grid2 container>
          <Grid2 size={{ xs: 10, md: 8 }} p={5} textAlign={"left"} px={4}>
            <Typography
              fontSize={32}
              fontFamily={"Noto Sans"}
              fontWeight={800}
              sx={{ color: "#081334" }}
            >
              {listOfTitlesWithDescriptions[selectedTab].title}
            </Typography>
            <Typography
              fontSize={14}
              fontFamily={"Noto Sans"}
              fontWeight={300}
              sx={{ color: "#081334", maxWidth: "400px" }}
            >
              {listOfTitlesWithDescriptions[selectedTab].description}
            </Typography>
            <Grid2 size={{ xs: 12 }}>
              <Grid2
                container
                display={"flex"}
                justifyContent={"space-between"}
                mt={5}
                spacing={3}
              >
                {listOfCallFeatures[selectedTab].map((feature, index) => {
                  return (
                    <Grid2
                      key={index}
                      size={{ xs: isMobile ? 12 : 6 }}
                      display={"flex"}
                      alignItems={"top"}
                      gap={1}
                    >
                      <SvgIcon />
                      <Typography>{feature}</Typography>
                    </Grid2>
                  );
                })}
              </Grid2>
            </Grid2>
            <Grid2 display={"flex"} mt={5} gap={3} ml={3}>
              <Grid2>
                <PatronButton link="" variant="contained" name={"View Details"} />
              </Grid2>

              <Grid2>
                <PatronButton link="" variant="outlined" name={"Watch Video"} icon={"video"} />
              </Grid2>
            </Grid2>
          </Grid2>
          <Grid2 size={{ xs: 2, md: 4 }} bgcolor={"#A4DB08"}>
            
          </Grid2>
        </Grid2>
      </Grid2>
    </Grid2>
  );

};export default ProductTabsOnHomePage;

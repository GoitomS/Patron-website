'use client'
import PatronButton from "@/components/PatronButton";
import { Grid2, List, ListItem, ListItemText, Typography } from "@mui/material";
import React from "react";
import CheckIcon from "@mui/icons-material/Check";
const listOfFeatures = {
  businessPhones: {
    Basic: [
      "Unlimited domestic calling",
      "SMS and MMS",
      "IVR",
      "Integrations",
      "Basic queue management",
    ],
    Premium: [
      "Call recording",
      "Call barging",
      "Call whispering",
      "Call spying",
      "Admin portal",
      "Advanced queue management",
      "Advanced call routing",
    ],
    PremiumPlus: [
      "Unlimited storage for call recordings",
      "Call analytics",
      "Customizable Reports & Analytics",
    ],
  },
  contactCenter: {
    Basic: [],
    Premium: [],
    PremiumPlus: [],
  },
  events: {
    Basic: [],
    Premium: [],
    PremiumPlus: [],
  },
};
const listOfPrices = {
  businessPhones: {
    Basic: 19,
    Premium: 24,
    PremiumPlus: 34,
  },
  contactCenter: {
    Basic: 10,
    Premium: 20,
    PremiumPlus: 30,
  },
  events: {
    Basic: 10,
    Premium: 20,
    PremiumPlus: 30,
  },
};

interface PricePlanCardProps {
  selectedTab: "businessPhones" | "contactCenter" | "events";
  plan: "Basic" | "Premium" | "PremiumPlus";
}

const PricePlanCard = ({ selectedTab, plan }: PricePlanCardProps) => {
const [users, setUsers] = React.useState<number>(10);
  return (
    <Grid2
      container
      sx={{ border: plan === "Premium" ? "2px solid #A4DB08" : "1px solid lightGrey", borderRadius: "15px", width: 330, boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.02), 0px 0px 20px rgba(0, 0, 0,0.1)" }}
      m={1}
      p={2}
      px={3}
      textAlign={"left"}
      height={600}
      display={"flex"}
      flexDirection={"column"}
    >
      <Grid2 size={{ xs: 12 }}>
        <Typography
          fontWeight={800}
          fontFamily={"Noto Sans"}
          fontSize={26}
          sx={{
            color: "#081334",
            borderBottom: "1px solid lightGrey",
            paddingBottom: 2,
            marginBottom: 3,
          }}
        >
          {plan === "Basic" ? "Basic" : "Premium"}
          <span style={{ color: "#A4DB08" }}>
            {plan === "PremiumPlus" && "Plus"}
          </span>{plan === "Premium" && <span style={{ color: "white", fontSize: 16, fontWeight: 300, marginLeft: 40, backgroundColor: "#A4DB08", padding: 4, borderRadius: 5 }}>
            Popular
          </span>}
        </Typography>
        <Typography
          fontWeight={800}
          fontFamily={"Noto Sans"}
          fontSize={40}
          sx={{ color: "#A4DB08" }}
        >
          ${listOfPrices?.[selectedTab][plan]}
          <span style={{ color: "#081334", fontSize: 16, fontWeight: 300 }}>
            /user/month
          </span>
        </Typography>
        <Grid2
          size={{ xs: 12 }}
          mt={3}
          display={"flex"}
          justifyContent={"center"}
          gap={2}
        >
          <PatronButton
            name="Buy"
            variant="contained"
            color={plan === "Premium" ? "green" : "darkBlue"}
            link="/"
            icon=""
          />
          <PatronButton
            name="Start Trial"
            variant="outlined"
            color={plan === "Premium" ? "green": "darkBlue"}
            link="/"
            icon=""
          />
        </Grid2>
      </Grid2>
      <Grid2 size={{ xs: 12 }} mt={8} >
        <Grid2 container display={"flex"} flexDirection={"column"} justifyContent={"flex-start"} alignItems={"flex-start"}>
        <Grid2 size={{ xs: 12 }}>
            <Typography fontWeight={800} fontFamily={"Noto Sans"} fontSize={20}>
          Features
        </Typography>
        </Grid2>
        <Grid2 size={{ xs: 12 }}>
        <List>
          {listOfFeatures?.[selectedTab][plan].map((feature, index) => (
            <ListItem key={index} disablePadding>
              <CheckIcon sx={{ fontSize: 12, marginRight: 1 }} />
              <ListItemText primary={feature} />
            </ListItem>
          ))}
        </List>
        </Grid2>
        </Grid2>
      </Grid2>
    </Grid2>
  );
};

export default PricePlanCard;

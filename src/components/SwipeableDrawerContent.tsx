"useClient";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Grid2,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { useEffect } from "react";
import MenuList, { MenuListHeader } from "./MenuList";
import { listOfMenus } from "./ProductsMenu";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { listOfServiceMenus } from "./ServicesMenu";
import Link from "next/link";

const SwipeableDrawerContent = ({handleClose}) => {
  const [expanded, setExpanded] = React.useState<string | false>(false);
  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
    const isMobile = useMediaQuery("(max-width: 900px)");
    useEffect(()=>{
      if(!isMobile){
          handleClose()
      }
    }, [isMobile])
  return (
    <Grid2
      container
      display={"flex"}
      flexDirection={"column"}
      alignItems={"flex-start"}
      p={4}
    >
      <Typography textAlign={"left"} fontWeight="bold">
        Products
      </Typography>
      <Accordion
        sx={{ width: "100%" }}
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="contact-center"
          sx={{ height: "50px", paddingTop: "15px" }}
        >
          <MenuListHeader group={"CC"} />
        </AccordionSummary>
        <AccordionDetails>
          <MenuList group={"CC"} listOfMenus={listOfMenus.CC} isMobile={true} handleClose={handleClose}/>
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{ width: "100%" }}
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="case-management"
          id="case-management"
          sx={{ height: "50px", paddingTop: "15px" }}
        >
          <MenuListHeader group={"CM"} />
        </AccordionSummary>
        <AccordionDetails>
          <MenuList group={"CM"} listOfMenus={listOfMenus.CM} isMobile={true} handleClose={handleClose}/>
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{ width: "100%" }}
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="chat"
          id="chat"
          sx={{ height: "50px", paddingTop: "15px" }}
        >
          <MenuListHeader group={"Chat"} />
        </AccordionSummary>
        <AccordionDetails>
          <MenuList
            group={"Chat"}
            listOfMenus={listOfMenus.Chat}
            isMobile={true}
            handleClose={handleClose}
          />
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{ width: "100%" }}
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="crm"
          id="crm"
          sx={{ height: "50px", paddingTop: "15px" }}
        >
          <MenuListHeader group={"CRM"} />
        </AccordionSummary>
        <AccordionDetails>
          <MenuList
            group={"CRM"}
            listOfMenus={listOfMenus.CRM}
            isMobile={true}
            handleClose={handleClose}
          />
        </AccordionDetails>
      </Accordion>
      <Typography
        textAlign={"left"}
        fontWeight="bold"
        sx={{ marginTop: "20px" }}
      >
        Services
      </Typography>
      <Accordion
        sx={{ width: "100%" }}
        expanded={expanded === "panel5"}
        onChange={handleChange("panel5")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="industry"
          id="industry"
          sx={{ height: "50px", paddingTop: "15px" }}
        >
          <MenuListHeader group={"Industry"} service={true} />
        </AccordionSummary>
        <AccordionDetails>
          <MenuList
            group={"Industry"}
            listOfMenus={listOfServiceMenus.Industry}
            isMobile={true}
            handleClose={handleClose}
          />
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{ width: "100%" }}
        expanded={expanded === "panel6"}
        onChange={handleChange("panel6")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="size"
          id="size"
          sx={{ height: "50px", paddingTop: "15px" }}
        >
          <MenuListHeader group={"Size"} service={true} />
        </AccordionSummary>
        <AccordionDetails>
          <MenuList
            group={"Size"}
            listOfMenus={listOfServiceMenus.Industry}
            isMobile={true}
            handleClose={handleClose}
          />
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{ width: "100%" }}
        expanded={expanded === "panel7"}
        onChange={handleChange("panel7")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="events"
          id="events"
          sx={{ height: "50px", paddingTop: "15px" }}
        >
          <MenuListHeader group={"Events"} service={true} />
        </AccordionSummary>
        <AccordionDetails>
          <MenuList
            group={"Events"}
            listOfMenus={listOfServiceMenus.Events}
            isMobile={true}
            handleClose={handleClose}
          />
        </AccordionDetails>
      </Accordion>
      <Link
        style={{ marginTop: "10px", marginBottom: "10px", fontWeight: "bold" }}
        href={"/"}
      >
        Pricing
      </Link>
      <Link
        style={{ marginTop: "10px", marginBottom: "10px", fontWeight: "bold" }}
        href={"/"}
      >
        Partners
      </Link>
      <Link
        style={{ marginTop: "10px", marginBottom: "10px", fontWeight: "bold" }}
        href={"/"}
      >
        Resources
      </Link>
      <Link
        style={{ marginTop: "10px", marginBottom: "10px", fontWeight: "bold" }}
        href={"/"}
      >
        About Us
      </Link>
    </Grid2>
  );
};

export default SwipeableDrawerContent;

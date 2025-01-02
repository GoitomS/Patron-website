import {
    Dialog,
    DialogContent,

    Grid2,
    Paper,
    styled,
  } from "@mui/material";
  import React from "react";
  import MenuList from "./MenuList";
  export const listOfServiceMenus = {
      Industry: [
        {
          name: "Healthcare",
          link: "/services/healthcare",
        },
        {
          name: "Government",
          link: "/services/government",
        },
        {
          name: "IT Support",
          link: "/services/it-support",
        },
        {
          name: "Trucking & Logistics",
          link: "/services/trucking-and-logistics",
        },
        {
          name: "Financial Services",
          link: "/services/financial-services",
        },
        {
          name: "Hospitality",
          link: "/services/hospitality",
        },
        {
          name: "Automotive",
          link: "/services/automotive",
        },
        {
          name: "Religious Instituution",
          link: "/services/religious-institutions",
        },
        {
          name: "Nonprofit",
          link: "/services/nonprofit",
        },
  
      ],
      Size: [
          {
              name: "Small Business",
              link: "/service10",
            },
            {
              name: "Enterprise",
              link: "/service11",
            },
            {
              name: "Individuals",
              link: "/service12",
            },
      ],
      Events: [
          {
              name: "Political Campaigns",
              link: "/service13",
            },
            {
              name: "Exhibitions and Fairs",
              link: "/service14",
            },
            {
              name: "Concerts & Live events",
              link: "/service15",
            },
            {
              name: "Emergency outreach",
              link: "/service16",
            },
      ]
    };
  interface ServicesMenuProps {
    anchorEl: HTMLElement | null;
    open: boolean;
    handleClose: () => void;
  }
  
  const CustomPaper = styled(Paper)(() => ({
    position: "absolute",
    top: "calc(-50% + 300px)",
    
  }));
  
  export const ServicesMenu = ({
    open,
    handleClose,
  }: ServicesMenuProps) => {
    
    return (
      <Dialog
        onClose={handleClose}
        open={open}
        maxWidth="xl"
        PaperProps={{ component: CustomPaper, style: {
          boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.02), 0px 0px 20px rgba(0, 0, 0,0.1)"
        } }}
        slotProps={{ backdrop: { style: {
          backgroundColor: "rgba(0,0,0,0)",
          boxShadow: "none",
        } }, 
        }}
      >
        <DialogContent>
        <Grid2 container spacing={2}>
          <MenuList group={"Industry"} listOfMenus={listOfServiceMenus.Industry} service={true} handleClose={handleClose}/>
          <MenuList group={"Size"} listOfMenus={listOfServiceMenus.Size} service={true} handleClose={handleClose}/>
          <MenuList group={"Events"} listOfMenus={listOfServiceMenus.Events} service={true} handleClose={handleClose}/>
        </Grid2>
          
        </DialogContent>
      </Dialog>
    );
  };
  
  export default ServicesMenu;
  
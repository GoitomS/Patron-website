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
          link: "/service1",
        },
        {
          name: "Government",
          link: "/service2",
        },
        {
          name: "IT Support",
          link: "/service3",
        },
        {
          name: "Trucking & Logistics",
          link: "/service4",
        },
        {
          name: "Financial Services",
          link: "/service5",
        },
        {
          name: "Hospitality",
          link: "/service6",
        },
        {
          name: "Automotive",
          link: "/service7",
        },
        {
          name: "Religious Instituution",
          link: "/service8",
        },
        {
          name: "Nonprofit",
          link: "/service9",
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
  
  const CustomPaper = styled(Paper)(({ theme }) => ({
    position: "absolute",
    top: "calc(-50% + 300px)",
    
  }));
  
  export const ServicesMenu = ({
    anchorEl,
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
          <MenuList group={"Industry"} listOfMenus={listOfServiceMenus.Industry} service={true}/>
          <MenuList group={"Size"} listOfMenus={listOfServiceMenus.Size} service={true}/>
          <MenuList group={"Events"} listOfMenus={listOfServiceMenus.Events} service={true}/>
        </Grid2>
          
        </DialogContent>
      </Dialog>
    );
  };
  
  export default ServicesMenu;
  
import {
  Dialog,
  DialogContent,
  DialogTitle,
  Grid2,
  Paper,
  styled,
} from "@mui/material";
import React from "react";
import MenuList from "./MenuList";
export const listOfMenus = {
    CC: [
      {
        name: "Business Phone",
        link: "/product1",
        description: "Seamlessly connect with clients and colleagues"
      },
      {
        name: "Call Center Solution",
        link: "/product2",
        description: "Deliver exceptional support & streamline operations"
      },
      {
        name: "Robo-calls",
        link: "/product2",
        description: "Automate your outreach"
      },
      {
        name: " Call flow designer",
        link: "/product2",
        description: "Customize call paths & enhance customer interactions"
      },
      {
        name: " Campaigns",
        link: "/product2",
        description: "Drive engagement and achieve your goals"
      },
      {
        name: " Dynamic IVR builder",
        link: "/product2",
        description: " User-friendly IVR builder"
      },

    ],
    CM: [
        {
            name: " Workflow Automation",
            link: "/product1",
            description: "small description 1"
          },
          {
            name: " Dynamic Forms",
            link: "/product2",
            description: "small description 2"
          },
          {
            name: " Help Desk Management",
            link: "/product2",
            description: "small description 2"
          },
          {
            name: "Reports and Analytics",
            link: "/product2",
            description: "small description 2"
          },
          {
            name: "Customized Notifications",
            link: "/product2",
            description: "small description 2"
          },
          {
            name: "SLA Management",
            link: "/product2",
            description: "small description 2"
          },
    ],
    Chat: [
        {
            name: " Omni-Channel",
            link: "/product2",
            description: "small description 2"
          },
          {
            name: "Dynamic Bot builders",
            link: "/product2",
            description: "small description 2"
          },
          {
            name: " Integrations",
            link: "/product2",
            description: "small description 2"
          },
          {
            name: "Template Generator",
            link: "/product2",
            description: "small description 2"
          },
    ],
    CRM: [
        {
            name: " Dynamic Data Capture",
            link: "/product2",
            description: "small description 2"
          },
          {
            name: "Security",
            link: "/product2",
            description: "small description 2"
          },
          {
            name: "Integrations",
            link: "/product2",
            description: "small description 2"
          },
    ],
  };
interface ProductsMenuProps {
  anchorEl: HTMLElement | null;
  open: boolean;
  handleClose: () => void;
}

const CustomPaper = styled(Paper)(({ theme }) => ({
  position: "absolute",
  top: "calc(-50% + 320px)",
  
}));

export const ProductsMenu = ({
  anchorEl,
  open,
  handleClose,
}: ProductsMenuProps) => {
  console.log(anchorEl);
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
        <MenuList group={"CC"} listOfMenus={listOfMenus.CC}/>
        <MenuList group={"CM"} listOfMenus={listOfMenus.CM}/>
        <MenuList group={"Chat"} listOfMenus={listOfMenus.Chat}/>
        <MenuList group={"CRM"} listOfMenus={listOfMenus.CRM}/>
      </Grid2>
        
      </DialogContent>
    </Dialog>
  );
};

export default ProductsMenu;

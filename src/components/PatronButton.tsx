import { Button } from "@mui/material";
import React from "react";
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
interface PatronButtonProps {
  variant: "contained" | "outlined" | "text";
  color?: "green" | "darkBlue";
  name: string;
  link: string;
  icon?: string;
  handleClick?: () => void;
}
const listOfIcons = {
    video: <PlayCircleOutlineIcon sx={{marginRight: "5px"}}/>
}
const PatronButton = ({ variant, color = "darkBlue", name, link, icon = "", handleClick }: PatronButtonProps) => {
  return (
    <Button
      variant={variant}
      href={link}
      sx={{
        textTransform: "none",
        borderRadius: "5px",
        backgroundColor: variant === "contained" ? (color === "green" ? "#A4DB08" : "#081334"): "",
        color: variant === "outlined" ? (color === "green" ? "#A4DB08" : "#081334") : "",
        borderColor: variant === "outlined" ? (color === "green" ? "#A4DB08" : "#081334") : "",
        boxShadow: "none",
        "&:hover": {
          boxShadow: "none",
          backgroundColor: variant === "contained" ? (color === "green" ? "#8BAF28" : "#132D7D") : (color === "green" ? "#E8F1D1" : "#CCD5F4"),
        }
      }}
      onClick={handleClick}
    >
      {icon && icon in listOfIcons && listOfIcons[icon as keyof typeof listOfIcons]}{name}
    </Button>
  );
};
export default PatronButton;

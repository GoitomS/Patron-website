import { Grid2, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import ExtensionIcon from "@mui/icons-material/Extension";
import AssignmentIcon from "@mui/icons-material/Assignment";
import ChatRoundedIcon from "@mui/icons-material/ChatRounded";
import theme from "@/theme";

export const MenuListHeader = ({group, service = false}) => {
return (
    <Grid2 pb={1} mb={2} display={"flex"} alignItems={"center"} gap={1} >
        {group ==="CC" ? <HeadsetMicIcon sx={{color: theme.palette.primary.main}}/> : group ==="CM" ? <AssignmentIcon sx={{color: theme.palette.primary.main}}/> : group ==="Chat" ? <ChatRoundedIcon sx={{color: theme.palette.primary.main}}/> : group ==="CRM" ? <ExtensionIcon sx={{color: theme.palette.primary.main}}/> : ""}
        <Typography fontWeight={"bold"}>{service ? group : `patron`}{!service && <span style={{color: theme.palette.primary.main}}>{group}</span>}</Typography>
      </Grid2>
)
}
const MenuList = ({ listOfMenus, group, service = false, isMobile = false }) => {
  return (
    <Grid2 container display={"flex"} flexDirection={"column"}>
      {!isMobile && <Grid2 pb={1} mb={2} display={"flex"} alignItems={"center"} gap={1} sx={{borderBottom: "1px solid lightGrey"}}>
        {group ==="CC" ? <HeadsetMicIcon sx={{color: theme.palette.primary.main}}/> : group ==="CM" ? <AssignmentIcon sx={{color: theme.palette.primary.main}}/> : group ==="Chat" ? <ChatRoundedIcon sx={{color: theme.palette.primary.main}}/> : group ==="CRM" ? <ExtensionIcon sx={{color: theme.palette.primary.main}}/> : ""}
        <Typography fontWeight={"bold"}>{service ? group : `patron`}{!service && <span style={{color: theme.palette.primary.main}}>{group}</span>}</Typography>
      </Grid2>}
      {listOfMenus?.map((menu, index) => {
        return (
          <Grid2 key={index} my={1} width={250} px={1}>
            <Link href={menu.link}>
              <Typography fontSize={14} fontWeight={"bold"}>{menu.name}</Typography>
              <Typography fontSize={12} sx={{ color: "lightGrey" }}>
                {menu?.description}
              </Typography>
            </Link>
          </Grid2>
        );
      })}
    </Grid2>
  );
};

export default MenuList;

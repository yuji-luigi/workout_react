import { useState } from "react";
import WorkoutSetting from "./WorkoutSetting";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import { Icon } from "@mui/material";
import useStyles from "./styles/styles";

export default function SettingList({ statusArray }) {
  return (
    <List
      sx={{
        width: "100%",
        maxWidth: 360,
        bgcolor: "background.paper",
        position: "absolute",
      }}
    >
      <div className=" ae bg-blue-100 flex-grow">
        {statusArray.map((key, index) => (
          <WorkoutSetting key={key.id} index={index} status={key} />
        ))}
      </div>
    </List>
  );
}

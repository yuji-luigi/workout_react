import { useState } from "react";
import { InputLabel, MenuItem, FormControl, Select } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import { Icon } from "@mui/material";
import useStyles from "./styles/styles";
import SettingInputs from "./SettingInputs";

const WorkoutSetting = ({ status, index, statusSetting }) => {
  const classes = useStyles();

  const [showInputs, toggleShowInputs] = useState(false);
  const [inputs, setInputs] = useState({});

  const onClick = (status) => {
    console.log(status);
    toggleShowInputs(!showInputs);
    setInputs(status);
  };
  return (
    <>
      <ListItem
        status={status.id}
        onClick={() => onClick(status)}
        className={classes.listItem}
      >
        <ListItemAvatar>
          <h1>Set{index + 1}</h1>
          <Avatar sx={{ bgcolor: "orange" }}>
            <Icon>fitness_center</Icon>
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={status.name}
          secondary={`${status.reps.length}sets of ${status.goalReps}`}
        />
      </ListItem>
      {showInputs && <SettingInputs />}
    </>
  );
};

export default WorkoutSetting;

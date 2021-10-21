import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  listItem: {
    cursor: "pointer",
    margin: "5px 0",
    background: "lightBlue",
  },
  icon: {
    background: "red",
  },
  avatar: {
    backgroundColor: "green",
    color: "green",
  },
  listItemAvatar: {
    // background: "green",
  },
}));

export default useStyles;

import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(theme => ({
  paper: {
    position: "absolute",
    width: 300,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    textAlign: "center"
  },
  buttons: {
    display: "flex",
    marginTop: theme.spacing(2),
    justifyContent: "space-evenly"
  }
}));

export function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
}

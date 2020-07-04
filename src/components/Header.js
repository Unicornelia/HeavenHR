import React from "react";
import { Link } from "react-router-dom";

import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
    textTransform: "upperCase"
  }
}));

const Header = ({ isHomePage }) => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          Friends
        </Typography>
        {isHomePage ? (
          <Link to="/add">
            <Button variant="contained" color="secondary">
              Add Friend
            </Button>
          </Link>
        ) : <Link to="/">
          <Button variant="contained" color="secondary">
            Back Home
          </Button>
        </Link>}
      </Toolbar>
    </AppBar>
  );
};

export default Header;

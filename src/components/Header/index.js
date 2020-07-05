import React from "react";
import { Link } from "react-router-dom";

import { Toolbar, Typography, Button, AppBar } from "@material-ui/core";

import { useStyles } from "./styles";

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
        ) : (
          <Link to="/">
            <Button variant="contained" color="secondary">
              Back Home
            </Button>
          </Link>
        )}
      </Toolbar>
    </AppBar>
  );
};

Header.displayName = "Header";

export default Header;

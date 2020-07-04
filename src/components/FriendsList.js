import React, { useState } from "react";
import * as PropTypes from "prop-types";

import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import { fade, makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";

import FriendsTableBody from "./FriendsTableBody";
import TableHeader from "./TableHeader";

const { shape, arrayOf } = PropTypes;

const useStyles = makeStyles(theme => ({
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.primary.light, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    width: "40%",
    [theme.breakpoints.up("sm")]: {}
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch"
    }
  }
}));

const FriendsList = ({ friends }) => {
  const classes = useStyles();
  const [filterText, setFilterText] = useState("");

  return (
    <>
      <Paper className="m-4 mt-0">
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Search…"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput
            }}
            inputProps={{ "aria-label": "search" }}
            onChange={e => setFilterText(e.target.value)}
          />
        </div>
        <Table className="p-2">
          <TableHeader
            first={"id"}
            second={"name"}
            third={"gender"}
            fourth={"status"}
            fifth={"delete"}
          />
          <FriendsTableBody friends={friends} filterText={filterText} />
        </Table>
      </Paper>
    </>
  );
};

FriendsList.propTypes = {
  friends: arrayOf(shape({}))
};

FriendsList.defaultProps = {
  friends: []
};

export default FriendsList;

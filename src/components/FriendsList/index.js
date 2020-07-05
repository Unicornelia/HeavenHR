import React, { useState } from "react";
import * as PropTypes from "prop-types";

import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";

import FriendsTableBody from "../FriendsTableBody";
import TableHeader from "../TableHeader";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import { useStyles } from './styles'

const { shape, arrayOf } = PropTypes;

const FriendsList = ({ friends }) => {
  const classes = useStyles();
  const [filterText, setFilterText] = useState("");
  const [gender, setGender] = useState("all");
  const [status, setStatus] = useState("all");

  const handleGenderChange = e => {
    setGender(e.target.value);
  };

  const handleStatusChange = e => {
    setStatus(e.target.value);
  };

  return (
    <>
      <Paper className="m-4 mt-0">
        <div className={classes.options}>
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
        </div>
        <Table className="p-2">
          <TableHead>
            <TableRow>
              <TableCell className="text-uppercase">Sort by id</TableCell>
              <TableCell className="text-uppercase">Sort by name</TableCell>
              <TableCell>
                <Select value={gender} onChange={handleGenderChange}>
                  <MenuItem value={"male"}>Male</MenuItem>
                  <MenuItem value={"female"}>Female</MenuItem>
                  <MenuItem value={"all"}>All</MenuItem>
                </Select>
              </TableCell>
              <TableCell>
                <Select value={status} onChange={handleStatusChange}>
                  <MenuItem value={true}>True</MenuItem>
                  <MenuItem value={false}>False</MenuItem>
                  <MenuItem value={'all'}>All</MenuItem>
                </Select>
              </TableCell>
              <TableCell className="text-uppercase" />
            </TableRow>
          </TableHead>
          <TableHeader />
          <FriendsTableBody
            friends={friends}
            filterText={filterText}
            selectedGender={gender}
            selectedStatus={status}
          />
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

import React, { useState } from "react";
import * as PropTypes from "prop-types";

import SearchIcon from "@material-ui/icons/Search";
import {
  InputBase,
  Paper,
  Table,
  Select,
  MenuItem,
  TableHead,
  TableRow,
  TableCell
} from "@material-ui/core";

import { useStyles } from "./styles";
import FriendsTableBody from "../FriendsTableBody";
import TableHeader from "../TableHeader";
import Pagination from '../Pagination'

const { shape, arrayOf } = PropTypes;

const FriendsList = ({ friends }) => {
  const classes = useStyles();
  const [filterText, setFilterText] = useState("");
  const [gender, setGender] = useState("all");
  const [status, setStatus] = useState("all");
  const [idOrder, setIdOrder] = useState("all");
  const [nameOrder, setNameOrder] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const indexOfLastFriend = currentPage * itemsPerPage;
  const indexOfFirstFriend = indexOfLastFriend - itemsPerPage;

  const paginate = pageNumber => {
    setCurrentPage(pageNumber);
  };

  const handleGenderChange = e => {
    setGender(e.target.value);
  };

  const handleStatusChange = e => {
    setStatus(e.target.value);
  };

  const handleIdOrderChange = e => {
    setIdOrder(e.target.value)
  }

  const handleNameOrderChange = e => {
    setNameOrder(e.target.value)
  }

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
              <TableCell>
                <Select value={idOrder} onChange={handleIdOrderChange}>
                  <MenuItem value={"ascending"}>Ascending</MenuItem>
                  <MenuItem value={"descending"}>Descending</MenuItem>
                  <MenuItem value={"all"}>Sort by ID</MenuItem>
                </Select>
              </TableCell>
              <TableCell>
                <Select value={nameOrder} onChange={handleNameOrderChange}>
                  <MenuItem value={"ascending"}>Ascending</MenuItem>
                  <MenuItem value={"descending"}>Descending</MenuItem>
                  <MenuItem value={"all"}>Sort by name</MenuItem>
                </Select>
              </TableCell>
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
                  <MenuItem value={"all"}>All</MenuItem>
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
            selectedIdOrder={idOrder}
            selectedNameOrder={nameOrder}
            indexOfFirstFriend={indexOfFirstFriend}
            indexOfLastFriend={indexOfLastFriend}
          />
        </Table>
        <Pagination
          itemsPerPage={itemsPerPage}
          total={friends.length}
          paginate={paginate}
        />
      </Paper>
    </>
  );
};

FriendsList.propTypes = {
  friends: arrayOf(
    shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      gender: PropTypes.string.isRequired,
      isStarred: PropTypes.bool.isRequired
    })
  )
};

FriendsList.defaultProps = {
  friends: []
};

FriendsList.displayName = "FriendsList";

export default FriendsList;

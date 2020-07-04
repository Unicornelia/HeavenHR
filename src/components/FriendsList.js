import React from "react";
import * as PropTypes from "prop-types";

import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";

import FriendsTableBody from "./FriendsTableBody";
import TableHeader from "./TableHeader";

const { shape, arrayOf } = PropTypes;

const FriendsList = ({ friends }) => {
  return (
    <>
      <Paper className="m-4 mt-0">
        <Table className="p-2">
          <TableHeader />
          <FriendsTableBody friends={friends} />
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

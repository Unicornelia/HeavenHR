import React from "react";
import * as PropTypes from "prop-types";

import TableBody from "@material-ui/core/TableBody";
import FriendItem from "./FriendItem";

const { shape, arrayOf } = PropTypes;

const FriendsTableBody = ({ friends }) => (
  <TableBody>
    {friends.map(({ id, name, gender, isStarred }) => (
      <FriendItem key={id} id={id} name={name} gender={gender} isStarred={isStarred} />
    ))}
  </TableBody>
);

FriendsTableBody.propTypes = {
  friends: arrayOf(shape({}))
};

FriendsTableBody.defaultProps = {
  friends: []
};

export default FriendsTableBody;

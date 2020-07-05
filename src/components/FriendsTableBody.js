import React from "react";
import * as PropTypes from "prop-types";

import TableBody from "@material-ui/core/TableBody";
import FriendItem from "./FriendItem";

const { shape, arrayOf } = PropTypes;

const FriendsTableBody = ({
  friends,
  filterText,
  selectedGender,
  selectedStatus
}) => {
  const filteredList = friends
    .filter(friend => {
      return friend.name.toLowerCase().indexOf(filterText.toLowerCase()) >= 0;
    })
    .filter(friend => {
      return selectedGender !== "all"
        ? friend.gender === selectedGender
        : friend.gender;
    }).filter(friend => {
      return selectedStatus !== "all"
        ? friend.isStarred ? selectedStatus
        : friend.isStarred : friend.isStarred;
    });

  return (
    <>
      <TableBody>
        {filteredList.map(({ id, name, gender, isStarred }) => (
          <FriendItem
            key={id}
            id={id}
            name={name}
            gender={gender}
            isStarred={isStarred}
          />
        ))}
      </TableBody>
    </>
  );
};

FriendsTableBody.propTypes = {
  friends: arrayOf(shape({}))
};

FriendsTableBody.defaultProps = {
  friends: []
};

export default FriendsTableBody;

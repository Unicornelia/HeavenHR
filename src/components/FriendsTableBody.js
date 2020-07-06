import React from "react";
import * as PropTypes from "prop-types";

import { TableBody } from "@material-ui/core";
import FriendItem from "./FriendItem/index";
import { sort_by } from "../utils/genericSorter";

const FriendsTableBody = ({
  friends,
  filterText,
  selectedGender,
  selectedStatus,
  selectedIdOrder,
  selectedNameOrder,
  indexOfFirstFriend,
  indexOfLastFriend
}) => {
  const sortByName = sort_by(
    "name",
    selectedNameOrder === "descending",
    a => a
  );

  const sortById = sort_by("id", selectedIdOrder === "descending", a => a);

  const filteredList = friends
    .filter(friend => {
      return friend.name.toLowerCase().indexOf(filterText.toLowerCase()) >= 0;
    })
    .filter(friend => {
      return selectedGender === "all"
        ? friend.gender
        : friend.gender === selectedGender;
    })
    .filter(friend => {
      return selectedStatus === true ? friend.isStarred : !friend.isStarred;
    })
    .sort( sortByName || sortById);

  const currentFriends = filteredList.slice(
    indexOfFirstFriend,
    indexOfLastFriend
  );

  return (
    <>
      <TableBody>
        {currentFriends.map(({ id, name, gender, isStarred }) => (
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

const { shape, arrayOf } = PropTypes;

FriendsTableBody.propTypes = {
  friends: arrayOf(
    shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      gender: PropTypes.string.isRequired,
      isStarred: PropTypes.bool.isRequired
    })
  )
};

FriendsTableBody.defaultProps = {
  friends: []
};

export default FriendsTableBody;

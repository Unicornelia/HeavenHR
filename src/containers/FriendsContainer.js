import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import FriendsList from "../components/FriendsList/index";
import Header from "../components/Header";
import Pagination from "../components/Pagination";

const { shape, arrayOf } = PropTypes;

const FriendsContainer = ({ friends }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);

  //Get current friends
  const indexOfLastFriend = currentPage * itemsPerPage;
  const indexOfFirstFriend = indexOfLastFriend - itemsPerPage;
  const currentFriends = friends.slice(indexOfFirstFriend, indexOfLastFriend);

  const paginate = pageNumber => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <Header isHomePage={true} />
      <FriendsList friends={currentFriends} />
      <Pagination
        itemsPerPage={itemsPerPage}
        total={friends.length}
        paginate={paginate}
      />
    </>
  );
};

FriendsContainer.propTypes = {
  friends: arrayOf(shape({}))
};

FriendsContainer.defaultProps = {
  friends: []
};

const mapStateToProps = state => {
  return {
    friends: state.friends
  };
};

export default connect(mapStateToProps)(FriendsContainer);

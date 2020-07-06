import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import FriendsList from "../components/FriendsList/index";
import Header from "../components/Header/index";

const { shape, arrayOf } = PropTypes;

const FriendsContainer = ({ friends }) => {
  return (
    <>
      <Header isHomePage={true} />
      <FriendsList friends={friends} />
    </>
  );
};

FriendsContainer.propTypes = {
  friends: arrayOf(
    shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      gender: PropTypes.string.isRequired,
      isStarred: PropTypes.bool.isRequired
    })
  )
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

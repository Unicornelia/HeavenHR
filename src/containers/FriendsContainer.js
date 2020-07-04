import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import FriendsList from "../components/FriendsList";
import Header from "../components/Header";

const { shape, arrayOf } = PropTypes;

const FriendsContainer = props => {
  const { friends } = props;

  return (
    <>
      <Header isHomePage={true} />
      <FriendsList friends={friends} />
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

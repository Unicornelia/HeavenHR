import axios from "axios";
import { ADD_FRIEND, FETCH_FRIEND, UPDATE_FRIEND } from "./types";

const friendsListUrl = "http://localhost:3020/friends";

export const addFriend = ({ id, name, gender, isStarred }) => {
  const request = axios({
    method: "POST",
    url: `${friendsListUrl}`,
    data: { id, name, gender, isStarred }
  });

  return dispatch => {
    return request
      .then(response => {
        dispatch(addFriendSuccess(response.data));
      })
      .catch(error => {
        throw error;
      });
  };
};

export const addFriendSuccess = data => {
  return {
    type: ADD_FRIEND,
    payload: {
      id: data.id,
      name: data.name,
      gender: data.gender,
      isStarred: data.isStarred
    }
  };
};

export const updateFriend = friend => {
  const request = axios({
    method: "PUT",
    url: `${friendsListUrl}/${friend.id}`,
    data: friend
  });

  return dispatch => {
    return request
      .then(response => {
        dispatch(updateFriendSuccess(response.data));
      })
      .catch(error => {
        throw error;
      });
  };
};

export const updateFriendSuccess = data => {
  return {
    type: UPDATE_FRIEND,
    payload: { ...data, name: data.name }
  };
};

export const fetchFriend = friends => {
  return {
    type: FETCH_FRIEND,
    friends
  };
};

export const fetchAllFriends = () => {
  const request = axios({
    method: "GET",
    url: `${friendsListUrl}`
  });

  return dispatch => {
    return request
      .then(response => {
        dispatch(
          fetchFriend(
            response.data.map(friend => ({
              id: friend.id,
              name: friend.name,
              gender: friend.gender,
              isStarred: friend.isStarred
            }))
          )
        );
      })
      .catch(error => {
        throw error;
      });
  };
};

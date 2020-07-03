import axios from "axios";
import { FETCH_FRIEND } from "./types";

const friendsListUrl = "http://localhost:3020/friends";

export const fetchFriend = friends => {
  return {
    type: FETCH_FRIEND,
    friends
  };
};

export const fetchAllFriends = () => {
  return dispatch => {
    return axios
      .get(friendsListUrl)
      .then(response => {
        dispatch(
          fetchFriend(
            response.data.map(friend => ({
              id: `${friend.id}`,
              name: `${friend.Name}`,
              sex: `${friend.sex}`,
              isStared: `${friend.isStared}`
            }))
          )
        );
      })
      .catch(error => {
        throw error;
      });
  };
};

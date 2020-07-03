import { ADD_FRIEND, DELETE_FRIEND, FETCH_FRIEND } from "../actions/types";

export default function friendsReducer(state = [], action) {
  switch (action.type) {
    case ADD_FRIEND:
      return [...state, action.payload];
    case DELETE_FRIEND:
      return state.filter(friend => friend.id !== action.payload.id);
    case FETCH_FRIEND:
      return action.friends;
    default:
      return state;
  }
}

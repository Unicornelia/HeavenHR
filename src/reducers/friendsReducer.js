import {
  ADD_FRIEND,
  FETCH_FRIEND,
  UPDATE_FRIEND
} from "../actions/types";

export default function friendsReducer(state = [], action) {
  switch (action.type) {
    case ADD_FRIEND:
      return [...state, action.payload];
    case UPDATE_FRIEND: {
      return [
        ...state.filter(friend => friend.id !== action.payload.id),
        Object.assign({}, action.payload)
      ];
    }
    case FETCH_FRIEND:
      return action.friends;
    default:
      return state;
  }
}

import { combineReducers } from "redux";
import friends from "./friendsReducer";

export default combineReducers({
  friends: friends
});

import { connect } from "react-redux";
import { addFriend } from "../actions";
import NewFriend from "../components/NewFriend/index";

const mapDispatchToProps = dispatch => {
  return {
    onAddFriend: friend => {
      dispatch(addFriend(friend));
    }
  };
};

export default connect(null, mapDispatchToProps)(NewFriend);

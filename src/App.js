import React from "react";

import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";

// reducer
import rootReducer from "./reducers";

// Components
import FriendsContainer from "./containers/FriendsContainer";
import { fetchAllFriends } from "./actions";

const store = createStore(rootReducer, applyMiddleware(thunk));

store.dispatch(fetchAllFriends());

function App() {
  return (
    <Provider store={store}>
      <FriendsContainer />
    </Provider>
  );
}

export default App;

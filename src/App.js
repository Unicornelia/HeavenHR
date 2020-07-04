import React from "react";

import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { Router, Route, Switch } from "react-router-dom";
import history from "./history";

// reducer
import rootReducer from "./reducers";

// Components
import FriendsContainer from "./containers/FriendsContainer";
import { fetchAllFriends } from "./actions";
import AddFriend from "./containers/AddFriend";

const store = createStore(rootReducer, applyMiddleware(thunk));

store.dispatch(fetchAllFriends());

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={FriendsContainer} />
          <Route path="/add" component={AddFriend} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;

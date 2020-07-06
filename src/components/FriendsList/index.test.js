import React from "react";
import configureStore from "redux-mock-store";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure, mount } from "enzyme";
import { Provider } from "react-redux";
import faker from "faker";

import FriendsList from "./index";
configure({ adapter: new Adapter() });

describe("<FriendsList/>", () => {
  const mockStore = configureStore();
  const initialState = [
    {
      id: faker.random.uuid(),
      name: faker.name.findName(),
      gender: "male",
      isStarred: false
    },
    {
      id: faker.random.uuid(),
      name: faker.name.findName(),
      gender: "female",
      isStarred: false
    }
  ];
  const store = mockStore(initialState);

  it("should match snapshot", () => {
    const wrapper = shallow(
      <Provider store={store}>
        <FriendsList friends={initialState}/>
      </Provider>
    );

    const component = wrapper.dive();

    expect(component).toMatchSnapshot();
    expect(store.getActions()).toMatchSnapshot();
  });

  it("should find friends table body", () => {
    const wrapper = mount(
      <Provider store={store}>
        <FriendsList friends={initialState}/>
      </Provider>
    );

    expect(wrapper.find('FriendsTableBody')).toHaveLength(1)
  });
});

import React from "react";
import configureStore from "redux-mock-store";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure, mount } from "enzyme";
import { Provider } from "react-redux";
import faker from "faker";

import FriendItem from "./index";
configure({ adapter: new Adapter() });

describe("<FriendItem/>", () => {
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
        <FriendItem />
      </Provider>
    );
    const component = wrapper.dive();

    expect(component).toMatchSnapshot();
    expect(store.getActions()).toMatchSnapshot();
  });

  it("should render the connected friend item", () => {
    const friend = {
      id: faker.random.uuid(),
      name: faker.name.findName(),
      gender: "female",
      isStarred: false
    };
    const wrapper = mount(
      <Provider store={store}>
        <FriendItem friend={friend} />
      </Provider>
    );

    expect(wrapper.find("FriendItem")).toBeDefined();
  });

  it("should find star button", () => {
    const friend = {
      id: "some id",
      name: "Some Name",
      gender: "male",
      isStarred: true
    };
    const wrapper = mount(
      <Provider store={store}>
        <FriendItem friend={friend} />
      </Provider>
    );

    expect(wrapper.find("button#star")).toHaveLength(1);
  });
});

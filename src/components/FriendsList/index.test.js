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
  const friends = [
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
  const store = mockStore(friends);

  it("should match snapshot", () => {
    const wrapper = shallow(
      <Provider store={store}>
        <FriendsList friends={friends}/>
      </Provider>
    );

    const component = wrapper.dive();

    expect(component).toMatchSnapshot();
    expect(store.getActions()).toMatchSnapshot();
  });

  it("should find friends table body with initial props", () => {
    const wrapper = mount(
      <Provider store={store}>
        <FriendsList friends={friends}/>
      </Provider>
    );

    const tableBody = wrapper.find('FriendsTableBody')

    expect(tableBody).toHaveLength(1)
    expect(tableBody.prop('friends')).toEqual(friends)
    expect(tableBody.prop('selectedGender')).toEqual('all')
    expect(tableBody.prop('selectedStatus')).toEqual('all')
    expect(tableBody.prop('filterText')).toEqual('')
  });
});

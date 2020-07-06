import * as actions from "../../actions";
import * as types from "../types";
import faker from "faker";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import fetchMock from "fetch-mock";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("actions", () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it("should create an action to add a friend", () => {
    const newFriend = {
      id: faker.random.uuid(),
      name: faker.name.findName(),
      gender: "male",
      isStarred: false
    };
    const expectedAction = {
      type: types.ADD_FRIEND,
      payload: newFriend
    };

    expect(actions.addFriendSuccess(newFriend)).toEqual(expectedAction);
  });
});

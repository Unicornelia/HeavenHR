import reducer from "../friendsReducer";
import * as actionTypes from "../../actions/types";
import faker from "faker";

describe("friends reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual([]);
  });

  it("should handle FETCH_FRIEND", () => {
    const state = [
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
    expect(reducer(state, actionTypes.FETCH_FRIEND)).toEqual(state);
  });

  it("should handle ADD_FRIEND", () => {
    const friend = {
      id: faker.random.uuid(),
      name: faker.name.findName(),
      gender: "male",
      isStarred: false
    };
    expect(reducer(friend, actionTypes.ADD_FRIEND)).toEqual(friend);
  });

  it("should handle UPDATE_FRIEND", () => {});
});

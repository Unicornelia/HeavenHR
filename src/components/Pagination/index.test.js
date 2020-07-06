import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";

import Pagination from "./index";
configure({ adapter: new Adapter() });

describe("<Pagination/>", () => {
  it("should find pagination nav", () => {
    const wrapper = shallow(<Pagination />);

    const pagination = wrapper.find("nav");
    expect(pagination).toHaveLength(1);
  });
});

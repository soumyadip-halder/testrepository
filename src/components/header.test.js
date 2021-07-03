import React from "react";
import { shallow } from "enzyme";
import Header from "./header";
import { findByTestAttr } from "../../Utils";

const setUp = (props = {}) => {
  const component = shallow(<Header {...props} />);
  return component;
};

describe("Header Component", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it("it should render without errors", () => {
    const wrapper = findByTestAttr(component, "card");
    expect(wrapper.length).toBe(1);
  });

  it("should render button", () => {
    const logo = findByTestAttr(component, "btn");
    expect(logo.length).toBe(1);
  });
});

import React from "react";
import { shallow } from "enzyme";
import Headline from "./headline";

import { findByTestAttr } from "../../Utils";

const setUp = (props = {}) => {
  const component = shallow(<Headline {...props} />);
  return component;
};
describe("Headline Tests", () => {
  describe("Have props", () => {
    let component;
    beforeEach(() => {
      const props = {
        header: "Test header",
        desc: "Test desc",
      };
      component = setUp(props);
    });
    it("should render without errors", () => {
      const comp = findByTestAttr(component, "HeadlineComponent");
      expect(comp.length).toBe(1);
    });
    it("should render the header", () => {
      const h1 = findByTestAttr(component, "header");
      expect(h1.length).toBe(1);
    });
    it("should render the desc", () => {
      const p = findByTestAttr(component, "desc");
      expect(p.length).toBe(1);
    });
  });

  describe("Have no props", () => {
    let component;
    beforeEach(() => {
      component = setUp();
    });
    it("should render without errors", () => {
      const comp = findByTestAttr(component, "HeadlineComponent");
      expect(comp.length).toBe(0);
    });
  });
});

import React from "react";
import { shallow } from "enzyme";
import Filter from "./index";
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe("Filter", () => {
    it("should render correctly", () => {
        const component = shallow(<Filter filterOptions={[{lable:"test",value:""}]} />);
    });
    it("should render correctly", () => {
        const component = shallow(<Filter filterOptions={[{lable:"test",value:"1"}]} filterValue={"1"} />);
    });
});

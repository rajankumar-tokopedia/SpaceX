import React from "react";
import { shallow } from "enzyme";
import SideBar from "./index";
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe("SideBar", () => {
    it("should render correctly", () => {
        const component = shallow(<SideBar/>);
    });
});

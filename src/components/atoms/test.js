import React from "react";
import { shallow } from "enzyme";
import {
    Footer,
    Header,
    FilterOption,
    ClearChips
} from "./index";
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe("Footer,Header,FilterOption,ClearChips", () => {
    it("should render correctly", () => {
        const component = shallow(<Footer/>);
    });
    it("should render correctly", () => {
        const component = shallow(<Header/>);
    });
    it("should render correctly", () => {
        const component = shallow(<FilterOption/>);
    });
    it("should render correctly", () => {
        const component = shallow(<ClearChips/>);
    });
    
});
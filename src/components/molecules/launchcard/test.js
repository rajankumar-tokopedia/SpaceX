import React from "react";
import { shallow } from "enzyme";
import LaunchCard from "./launchcard";
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe("LaunchCard", () => {
    it("should render correctly", () => {
        const component = shallow(<LaunchCard launch={{missionId: [123],
            launchYear: 2001,
            launchSuccess: true,
            landSuccess: true,
            missionName: "testing",
            flightNumber: 1234,
            missionPatch:"123"}}/>);
    });
});

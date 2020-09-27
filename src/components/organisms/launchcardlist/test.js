import React from "react";
import { shallow } from "enzyme";
import LaunchCardList from "./launchcardlist";
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe("LaunchCardList", () => {
    it("should render correctly", () => {
        const component = shallow(<LaunchCardList launches={[{missionId: [123], launchYear: 2001, launchSuccess: true, landSuccess: true, missionName: "testing", flightNumber: 1234, missionPatch:"123"}]}/>);
    });

});

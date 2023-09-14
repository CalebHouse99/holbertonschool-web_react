import React from 'react';
import {shallow} from 'enzyme';
import Notifications from './Notifications';

let wrapper;

afterEach(() => {
    if (wrapper) {
        wrapper.unmount();
    }
});

describe('<Notifications />', () => {
    test('renders without crashing', () => {
        shallow(<Notifications />)
    });
    test('Notifications renders exactly three list items', () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.find('li')).toHaveLength(3);
    });
    test('Renders the text "Here is the list of notifications"', () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.text()).toContain("Here is the list of notifications");
    });
});
import React from 'react';
import {shallow} from 'enzyme';
import App from './App';

let wrapper;

afterEach(() => {
    if (wrapper) {
        wrapper.unmount();
    }
});

describe('<App />', () => {
    test('renders without crashing', () => {
        shallow(<App />);
    });
    test('renders a header with the class App-header', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('header.App-header')).toHaveLength(1);
    })
    test('renders a div with the class App-body', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('div.App-body')).toHaveLength(1);
    })
    test('renders a footer with the class App-footer', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('footer.App-footer')).toHaveLength(1);
    })
});
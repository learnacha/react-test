import React from 'react';
import { shallow } from 'enzyme';
import '../../setupTests';
import Header from './index';
import {findByTestAttr} from '../../../Utils';

const setUp = (props={}) => {
    const component = shallow(<Header {...props} />);
    return component;
}

describe('testing Header component', () => {
    let component;

    beforeEach(() => {
        component = setUp();
    });

    it('should render header without errors', () => {
        const wrapper = findByTestAttr(component, 'headerComponent');
        expect(wrapper.length).toBe(1);
    });

    it('should render a log', () => {
        const logo = findByTestAttr(component, 'logoIMG');
        expect(logo.length).toBe(1);
    })
})
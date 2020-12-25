import React from 'react';
import { shallow } from 'enzyme';
import '../../setupTests';
import { findByTestAttr, checkProps } from '../../../Utils'
import ListItem from './index';

describe('ListItem Component', () => {
    describe('Checking PropTypes', () => {

        it('should NOT throw a warning', () => {
            const expectedProps = {
                title: 'Example Title',
                desc: 'Some text'
            };

            const propsError = checkProps(ListItem, expectedProps);
            expect(propsError).toBeUndefined();
        })
    })

    describe('Component Renders', () => {
        let wrapper;

        beforeEach(() => {
            const props = {
                title: 'Example Title',
                desc: 'Some text'
            };
            wrapper = shallow(<ListItem {...props} />);
        });

        it('should render without error', () => {
            const comp = findByTestAttr(wrapper, 'listItemComponent');
            expect(comp.length).toBe(1);
        });

        it('should render a title', () => {
            const title = findByTestAttr(wrapper, 'componentTitle');
            expect(title.length).toBe(1);
        });

        it('should render a desc', () => {
            const desc = findByTestAttr(wrapper, 'componentDesc');
            expect(desc.length).toBe(1);
        });
    });

    describe('should NOT render', () => {
        let wrapper;

        beforeEach(() => {
            const props = {
                desc: 'Some text'
            };
            wrapper = shallow(<ListItem {...props} />);
        });

        it('should render without error', () => {
            const comp = findByTestAttr(wrapper, 'listItemComponent');
            expect(comp.length).toBe(0);
        });
    });

});
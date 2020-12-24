import React, { Component } from 'react';
import { shallow } from 'enzyme';
import Headline from './index';
import '../../setupTests';
import { findByTestAttr, checkProps } from '../../../Utils';

const setUp = (props = {}) => {
    const component = shallow(<Headline {...props} />);
    return component;
}

describe('Headline component', () => {

    describe('verify prop types', () => {

        it('should not throw a warning', () => {
            const expectedProp = {
                header: 'Test Header',
                desc: 'test desc',
                tmpArr: [{
                    fName: 'sri',
                    lName: 'acha',
                    email: 'test@gmail.com',
                    age: 23,
                    onlineStatus: true,
                }]
            };

            const propsErr = checkProps(Headline, expectedProp);
            expect(propsErr).toBeUndefined();
        });

    });

    describe('Have props', () => {

        let wrapper;

        beforeEach(() => {
            const myprop = {
                header: 'Test Header',
                desc: 'Test desc'
            };

            wrapper = setUp(myprop);
        });

        it('should render without errors', () => {
            const component = findByTestAttr(wrapper, 'HeadlineComponent');
            expect(component.length).toBe(1); 
        });

        it('should render a H1', () => {
            const h1 = findByTestAttr(wrapper, 'header');
            expect(h1.length).toBe(1);
        });

        it('should render a Description', () => {
            const desc = findByTestAttr(wrapper, 'desc');
            expect(desc.length).toBe(1);
        })
    });

    describe('Have NO props', () => {
        let wrapper;

        beforeEach(() => {
            wrapper = setUp();
        })
        
        it('should not render', () => {
            const component = findByTestAttr(wrapper, 'HeadlineComponent');
            expect(component.length).toBe(0);
        })

    });
})


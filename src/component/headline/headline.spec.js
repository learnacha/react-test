import React, { Component } from 'react';
import { shallow } from 'enzyme';
import Headline from './index';
import '../../setupTests';
import { findByTestAttr } from '../../../Utils';

const setUp = (props = {}) => {
    const component = shallow(<Headline {...props} />);
    return component;
}

describe('Headline component', () => {

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


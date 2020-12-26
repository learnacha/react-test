import React, { Component} from 'react';
import { shallow } from 'enzyme';
import '../../setupTests';
import SharedButton from './index';
import {findByTestAttr, checkProps} from '../../../Utils';


describe('SharedButton Component', () => {
    it('should not throw warnings', () => {
        const expectedProps = {
            buttonText: 'Example Button text',
            emitEvent: () => {

            }
        };

        const propsError = checkProps(SharedButton, expectedProps);
        expect(propsError).toBeUndefined();
    });
});


describe('Renders', () => {
    let wrapper;
    let mockFunc;

    beforeEach(() => {
        mockFunc = jest.fn();
        const props = {
            buttonText: 'Example Button text',
            emitEvent: mockFunc,
        }
        wrapper = shallow(<SharedButton {...props} />);
    });

    it('should Render a button', () => {
        const btn = findByTestAttr(wrapper, 'buttonComponent');
        expect(btn.length).toBe(1);
    })

    it('should emit callback on click event', () => {
        const btn = findByTestAttr(wrapper, 'buttonComponent');
        btn.simulate('click');
        const callback = mockFunc.mock.calls.length;
        expect(callback).toBe(1);
    })
})
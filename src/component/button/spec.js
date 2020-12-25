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

    beforeEach(() => {
        const props = {
            buttonText: 'Example Button text',
            emitEvent: () => {

            }
        }
        wrapper = shallow(<SharedButton />);
    });

    it('should Render a button', () => {
        const btn = findByTestAttr(wrapper, 'buttonComponent');
        expect(btn.length).toBe(1);
    })
})
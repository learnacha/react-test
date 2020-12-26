import React from 'react';
import App from './App';
import './setupTests';
import {shallow} from 'enzyme';
import { findByTestAttr, testStore } from './../Utils';

const setUp = (initialProps={}) => {
    const store = testStore(initialProps);
    const wrapper = shallow(<App store={store} />).childAt(0).dive();
    return wrapper;
};


describe('App Component', () => {

    let wrapper;

    beforeEach(() => {
        const initialState = {
            posts: [{
                title: 'Example 1',
                body: 'Some text',
            },{
                title: 'Example 2',
                body: 'Some text',
            },{
                title: 'Example 3',
                body: 'Some text',
            },{
                title: 'Example 4',
                body: 'Some text',
            }]
        };

        wrapper=setUp(initialState);
    });

    it('should render without errors', () => {
        const comp = findByTestAttr(wrapper, 'appComponent');
        expect(comp.length).toBe(1);
    })

});
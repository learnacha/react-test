import moxios from 'moxios';
import { testStore } from './../../Utils';
import { fetchPosts } from './../actions';
import '../setupTests';

describe('fetchPosts action', () => {
    beforeEach(() => {
        moxios.install();
    });

    afterEach(() => {
        moxios.uninstall();
    });

    test('Store is updated correctly', () => {
        const expectedState = [{
            title: 'Example',
            body: 'text',
        }, {
            title: 'Example 2',
            body: 'text',
        }, {
            title: 'Example 3',
            body: 'text',
        }];

        const store = testStore();

        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: expectedState
            })
        });

        return store.dispatch(fetchPosts())
            .then(() => {
                const newState = store.getState();
                expect(newState.posts).toBe(expectedState);
            })
    })
})
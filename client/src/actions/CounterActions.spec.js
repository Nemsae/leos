import expect from 'expect';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import * as types from '../constants';

const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);

import { increment, decrement, incrementCounter, decrementCounter } from './CounterActions';

describe('ACTIONS:CounterActions', () => {
  it('increment action should dispatch incrementCounter', () => {
    const expectedActions = [
      incrementCounter(),
    ];

    const store = mockStore();

    store.dispatch(increment());
    expect(store.getActions()).toEqual(expectedActions);
  });
});

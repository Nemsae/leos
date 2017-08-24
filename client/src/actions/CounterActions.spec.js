import expect from 'expect';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import * as types from '../constants';

const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);

import { increment, decrement, incrementCounter, decrementCounter } from './CounterActions';

describe('ACTIONS:CounterActions', () => {
  it('increment action should dispatch incrementCounter action', () => {
    const expectedActions = [
      incrementCounter(),
    ];

    const store = mockStore();

    store.dispatch(increment());
    expect(store.getActions()).toEqual(expectedActions);
  });
  it('decrement action should dispatch decrementCounter action', () => {
    const expectedActions = [
      decrementCounter(),
    ];

    const store = mockStore();

    store.dispatch(decrement());
    expect(store.getActions()).toEqual(expectedActions);
  });
  it('incrementCounter action should return correct type', () => {
    const expected = {
      type: types.INCREMENT,
    };

    expect(incrementCounter()).toEqual(expected);
  });
  it('decrementCounter action should return correct type', () => {
    const expected = {
      type: types.DECREMENT,
    };

    expect(decrementCounter()).toEqual(expected);
  });
});

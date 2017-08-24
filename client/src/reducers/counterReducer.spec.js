import expect from 'expect';

import { counterReducer } from './counterReducer';
import * as types from '../constants';

describe('REDUCER: counterReducer', () => {
  it('should default to initialState with unknown action type', () => {
    const state = { count: 1 };
    const actual = counterReducer(state, { type: 'RANDOM_ACTION' });
    const expected = state;
    expect(actual).toBe(expected);
  });
  it('should increment state from 0 to 1 with \'INCREMENT\' action type', () => {
    const actual = counterReducer(undefined, { type: types.INCREMENT });
    const expected = {
      count: 1,
    };
    expect(actual).toEqual(expected);
  });
  it('should decrement state from 0 to -1 with \'DECREMENT\' action type', () => {
    const actual = counterReducer(undefined, { type: types.DECREMENT });
    const expected = {
      count: -1,
    };
    expect(actual).toEqual(expected);
  });
});

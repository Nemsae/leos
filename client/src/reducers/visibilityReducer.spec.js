import expect from 'expect';
import deepfreeze from 'deepfreeze';

import * as types from '../constants';
import { visibilityReducer } from './visibilityReducer';

describe('REDUCER: visibilityReducer', () => {
  it('should set the filter given the action.type', () => {
    const action = {
      type: types.SET_VISIBILITY_FILTER,
      filter: types.SHOW_ALL,
    };
    const actual = visibilityReducer(undefined, action)
    const expected = {
      filter: types.SHOW_ALL,
    };
    expect(actual).toEqual(expected);
  });

  it('should set default given unknown action.type', () => {
    const stateBefore = {
      filter: types.SHOW_ACTIVE,
    };
    const action = {
      type: 'UNKNOWN_ACTION_TYPE',
      filter: types.SHOW_COMPLETED,
    };
    const actual = visibilityReducer(stateBefore, action);
    const expected = {
      filter: types.SHOW_ACTIVE,
    };

    deepfreeze(stateBefore);

    expect(actual).toEqual(expected);
  });
});

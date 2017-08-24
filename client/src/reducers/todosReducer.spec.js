import expect from 'expect';
import deepfreeze from 'deepfreeze';

import { todosReducer, initialState } from './todosReducer';
import * as types from '../constants';

describe('REDUCER: todosReducer', () => {
  it('should add a todo with action type ADD_TODO', () => {
    const stateBefore = initialState;
    const action = {
      type: types.ADD_TODO,
      id: 0,
      text: 'Test my todosReducer',
    };
    const stateAfter = [
      {
        id: 0,
        isCompleted: false,
        text: 'Test my todosReducer',
      },
    ];

    deepfreeze(stateBefore);
    deepfreeze(action);

    const actual = todosReducer(stateBefore, action);
    expect(actual).toEqual(stateAfter);
  });
});

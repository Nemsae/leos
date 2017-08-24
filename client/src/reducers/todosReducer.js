import * as types from '../constants';

export const initialState = [];

export const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_TODO:
      const { id, text } = action;
      return [ ...state, {
        id,
        isCompleted: false,
        text,
      } ];
    default:
      return state;
  }
};

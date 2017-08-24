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
    case types.REMOVE_TODO:
      const indexToDelete = action.id;
      return state.filter(item => item.id !== indexToDelete);
      // return [
      //   ...state.slice(0, indexToDelete),
      //   ...state.slice(indexToDelete + 1),
      // ];
    default:
      return state;
  }
};

import * as types from '../constants';

export const todo = (state, action) => {
  switch (action.type) {
    case types.ADD_TODO:
      return {
        id: action.id,
        isCompleted: false,
        text: action.text,
      };
    case types.UPDATE_TODO:
      return Object.assign({}, state, {
        isCompleted: !state.isCompleted,
      });
    default:
      return state;
  }
};

export const initialState = [];

export const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_TODO:
      return [ ...state, todo({}, action) ];
    case types.REMOVE_TODO:
      const indexToDelete = action.id;
      return state.filter(item => item.id !== indexToDelete);
    case types.UPDATE_TODO:
      const updatedTodo = todo(state[action.id], action);
      return [
        ...state.slice(0, action.id),
        updatedTodo,
        ...state.slice(action.id + 1),
      ];
    default:
      return state;
  }
};

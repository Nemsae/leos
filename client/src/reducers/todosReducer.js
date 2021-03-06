import * as types from '../constants';

export const todo = (state, action) => {
  switch (action.type) {
    case types.ADD_TODO:
      return {
        id: action.id,
        isCompleted: false,
        text: action.text,
      };
    case types.TOGGLE_TODO:
      if (state.id !== action.item.id) {
        return state;
      }

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
    case types.TOGGLE_TODO:
      return state.map(t => todo(t, action));
      // const todoItem = state.filter((item) => {
      //   if (item.id === action.item.id) {
      //     return item;
      //   }
      // })[0];
      // console.log('todoItem: ', todoItem);
      // const toggledTodo = todo(todoItem, action);
      // console.log('toggledTodo: ', toggledTodo);
      // return state.map((todo) => {
      //   if (todo.id === action.item.id) return toggledTodo;
      //   return todo;
      // });
    default:
      return state;
  }
};

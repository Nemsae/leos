import * as types from '../constants';

export const add = text => ({
  type: types.ADD_TODO,
  text,
});

export const addTodo = (text) => {
  console.log('text: ', text);
  return (dispatch) => {
    dispatch(add(text));
  };
};

// export const toggle = id => {
//   console.log('id: ', id);
//   return {
//     type: types.TOGGLE_TODO,
//     id,
//   }
// };

export const toggle = item => ({
  type: types.TOGGLE_TODO,
  item,
});

export const toggleTodo = todoItem => dispatch => dispatch(toggle(todoItem));

import * as types from '../constants';

export const add = text => ({
  type: types.ADD_TODO,
  text,
});

export const addTodo = (text) => {
  console.log('this: ', this);
  console.log('text: ', text);
  return (dispatch) => {
    dispatch(add(text));
  };
};

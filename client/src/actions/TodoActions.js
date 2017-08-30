import uuid from 'node-uuid'

import * as types from '../constants';

export const add = text => ({
  id: uuid(),
  type: types.ADD_TODO,
  text,
});

export const addTodo = text => dispatch => dispatch(add(text));

export const toggle = item => ({
  type: types.TOGGLE_TODO,
  item,
});

export const toggleTodo = todoItem => dispatch => dispatch(toggle(todoItem));

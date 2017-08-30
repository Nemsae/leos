import expect from 'expect';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { addTodo, add, toggleTodo, toggle } from './TodoActions';
import * as types from '../constants';

const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);

describe('ACTIONS: TodoActions', () => {
  it('addTodo actionCreator should return correct action', () => {
    const text = 'lorem ipsum'
    const store = mockStore();
    const expected = [
      add(text),
    ];

    store.dispatch(addTodo(text));
    expect(store.getActions()[0].text).toEqual(expected[0].text);
    expect(store.getActions()[0].type).toEqual(expected[0].type);
  });

  it('add should return correct action object', () => {
    const text = 'lorem ipsum'
    const actual = add(text);
    const expected = {
      type: types.ADD_TODO,
      text,
    };

    expect(actual.type).toEqual(expected.type);
    expect(actual.text).toEqual(expected.text);
  });

  it('toggleTodo actionCreator should return correct action', () => {
    const todoItem = {
      id: 0,
      text: 'testing',
      isCompleted: false,
    };
    const store = mockStore();
    const expected = [
      toggle(todoItem),
    ];

    store.dispatch(toggleTodo(todoItem));
    expect(store.getActions()).toEqual(expected);
  });

  it('toggle should return correct action object', () => {
    const todoItem = {
      id: 0,
      text: 'testing',
      isCompleted: false,
    };
    const actual = toggle(todoItem);
    const expected = {
      type: types.TOGGLE_TODO,
      item: todoItem,
    };

    expect(actual).toEqual(expected);
    // expect(actual.type).toEqual(expected.type);
    // expect(actual.text).toEqual(expected.text);
  });
});

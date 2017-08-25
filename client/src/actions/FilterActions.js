import * as types from '../constants';

export const set = filter => ({
  type: types.SET_VISIBILITY_FILTER,
  filter,
});

export const setFilteredTodos = (filter, todos) => {
  let filteredTodos;
  switch (filter) {
    case types.SHOW_ALL:
      filteredTodos = todos;
      return filteredTodos;
    case types.SHOW_ACTIVE:
      filteredTodos = todos.filter((todo) => {
        if (!todo.isCompleted) return todo;
      });
      return filteredTodos;
    case types.SHOW_COMPLETED:
      filteredTodos = todos.filter((todo) => {
        if (todo.isCompleted) return todo;
      });
      return filteredTodos;
    default:
      filteredTodos = todos;
      return filteredTodos;
  }
}

export const setFilter = filter => set(filter);

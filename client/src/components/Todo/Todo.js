import React from 'react';

import FilterLink from '../FilterLink';
import * as types from '../../constants';
import './styles.css';

const Todo = props => (
  <div className='todo'>
    <div className='todo-input'>
      <input
        type='text'
        placeholder='Add a todo...'
        value={props.todoText}
        onChange={props.handleTextChange}
      />
      <button onClick={props.addTodo}>Add</button>
    </div>
    <div className='todo-filter'>
      <FilterLink filterType={types.SHOW_ALL} setFilter={props.setFilter}>
        ALL
      </FilterLink>
      <FilterLink filterType={types.SHOW_ACTIVE} setFilter={props.setFilter}>
        ACTIVE
      </FilterLink>
      <FilterLink filterType={types.SHOW_COMPLETED} setFilter={props.setFilter}>
        COMPLETED
      </FilterLink>
    </div>
    <ul>
      {
        props.todos.map(todo => (
          <li
            key={todo.id}
            onClick={() => props.toggleTodo(todo)}
            style={{ textDecoration: todo.isCompleted ? 'line-through' : 'none' }}
          >
            {todo.text}
          </li>
        ))
      }
    </ul>
  </div>
);

export default Todo;

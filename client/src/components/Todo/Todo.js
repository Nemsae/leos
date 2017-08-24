import React from 'react';

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
      <a id='SHOW_ALL' className='link' href='' onClick={props.setFilter}>ALL</a>
      <a id='SHOW_ACTIVE' className='link' href='' onClick={props.setFilter}>ACTIVE</a>
      <a id='SHOW_COMPLETED' className='link' href='' onClick={props.setFilter}>COMPLETED</a>
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

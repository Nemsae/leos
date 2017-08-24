import React from 'react';

import './styles.css';

const Todo = props => (
  <div className='todo'>
    <input
      type='text'
      placeholder='Add a todo...'
      value={props.todoText}
      onChange={props.handleTextChange}
    />
    <button onClick={props.addTodo}>Add</button>
    <ul>
      {
        props.todos.map(todo => (
          <li key={todo.id}>
            {todo.text}
          </li>
        ))
      }
    </ul>
  </div>
);

export default Todo;

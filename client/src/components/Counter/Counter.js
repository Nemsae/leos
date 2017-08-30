import React from 'react';

import './styles.css';

const Counter = props => (
  <div className='counter'>
    <div>{props.count}</div>
    <div className='buttons'>
      <button onClick={props.increment}>+</button>
      <button onClick={props.decrement}>-</button>
    </div>
  </div>
);

export default Counter;

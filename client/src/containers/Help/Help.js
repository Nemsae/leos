import React from 'react';
import { connect } from 'react-redux';

/* Components */
import Counter from '../../components/Counter';
import FilterLink from '../../components/FilterLink';
// import Todo from '../../components/Todo';

import { increment, decrement } from '../../actions/CounterActions';
import { addTodo, toggleTodo } from '../../actions/TodoActions';
import { setFilter, setFilteredTodos } from '../../actions/FilterActions';
import * as types from '../../constants';
import './styles.css';

export class Help extends React.Component {
  state = {
    todoText: '',
  }

  // shouldComponentUpdate(nextProps) {
  //   if (nextProps.filter !== this.props.filter) {
  //     this.forceUpdate();
  //     return true;
  //   }
  // }

  setFilter = (e) => {
    e.preventDefault();
    const filter = e.target.id;
    this.props.setFilter(filter);
  }

  toggleTodo = (id) => {
    this.props.toggleTodo(id);
  }

  addTodo = () => {
    this.props.addTodo(this.state.todoText);
    this.setState({
      todoText: '',
    });
  }

  handleTextChange = (e) => {
    const value = e.target.value;
    this.setState({
      todoText: value,
    });
  }

  render() {
    const { filter, todos } = this.props;
    console.log('filter:Help.js ', filter);
    const filteredTodos = setFilteredTodos(filter, todos);

    return (
      <div className='home-container'>
        <h1>Help</h1>
        <Counter
          count={this.props.count}
          increment={this.props.increment}
          decrement={this.props.decrement}
        />
        <div className='todo'>
          <div className='todo-input'>
            <input
              type='text'
              placeholder='Add a todo...'
              value={this.state.todoText}
              onChange={this.handleTextChange}
            />
            <button onClick={this.addTodo}>Add</button>
          </div>
          <div className='todo-filter'>
            <FilterLink filterType={types.SHOW_ALL} filter={filter} setFilter={this.setFilter}>
              ALL
            </FilterLink>
            <FilterLink filterType={types.SHOW_ACTIVE} filter={filter} setFilter={this.setFilter}>
              ACTIVE
            </FilterLink>
            <FilterLink filterType={types.SHOW_COMPLETED} filter={filter} setFilter={this.setFilter}>
              COMPLETED
            </FilterLink>
          </div>
          <ul>
            {
              filteredTodos.map(todo => (
                <li
                  key={todo.id}
                  onClick={() => this.toggleTodo(todo)}
                  style={{ textDecoration: todo.isCompleted ? 'line-through' : 'none' }}
                >
                  {todo.text}
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    );
    // return (
    //   <div className='home-container'>
    //     <h1>Help</h1>
    //     <Counter
    //       count={this.props.count}
    //       increment={this.props.increment}
    //       decrement={this.props.decrement}
    //     />
    //     <Todo
    //       todoText={this.state.todoText}
    //       todos={filteredTodos}
    //       addTodo={this.addTodo}
    //       toggleTodo={this.toggleTodo}
    //       handleTextChange={this.handleTextChange}
    //       currentFilter={filter}
    //       setFilter={this.setFilter}
    //     />
    //   </div>
    // );
  }
}

const mapStateToProps = state => ({
  count: state.testCounter.count,
  todos: state.todos,
  filter: state.visibilityFilter.filter,
});

const mapDispatchToProps = dispatch => ({
  increment: () => {
    dispatch(increment());
  },
  decrement: () => {
    dispatch(decrement());
  },
  addTodo: (text) => {
    dispatch(addTodo(text));
  },
  toggleTodo: (id) => {
    dispatch(toggleTodo(id));
  },
  setFilter: (filter) => {
    dispatch(setFilter(filter));
  },
});

const HelpRedux = connect(mapStateToProps, mapDispatchToProps)(Help);

export default HelpRedux;

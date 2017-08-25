import React from 'react';
import { connect } from 'react-redux';

import Counter from '../../components/Counter';
import Todo from '../../components/Todo';
import { increment, decrement } from '../../actions/CounterActions';
import { addTodo, toggleTodo } from '../../actions/TodoActions';
import { setFilter, setFilteredTodos } from '../../actions/FilterActions';
import * as types from '../../constants';
import './styles.css';

export class Help extends React.Component {
  state = {
    todoText: '',
  }

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
    const filteredTodos = setFilteredTodos(filter, todos);
    // switch (this.props.filter) {
    //   case types.SHOW_ALL:
    //     filteredTodos = this.props.todos;
    //     break;
    //   case types.SHOW_ACTIVE:
    //     console.log('Sanity:SHOW_ACTIVE');
    //     filteredTodos = this.props.todos.filter((todo) => {
    //       if (!todo.isCompleted) return todo;
    //     });
    //     console.log('filteredTodos:ACTIVE ', filteredTodos);
    //     break;
    //   case types.SHOW_COMPLETED:
    //     filteredTodos = this.props.todos.filter((todo) => {
    //       if (todo.isCompleted) return todo;
    //     });
    //     console.log('filteredTodos:COMPLETED ', filteredTodos);
    //     break;
    //   default:
    //     filteredTodos = this.props.todos;
    // }

    return (
      <div className='home-container'>
        <h1>Help</h1>
        <Counter
          count={this.props.count}
          increment={this.props.increment}
          decrement={this.props.decrement}
        />
        <Todo
          todoText={this.state.todoText}
          todos={filteredTodos}
          addTodo={this.addTodo}
          toggleTodo={this.toggleTodo}
          handleTextChange={this.handleTextChange}
          filter={filter}
          setFilter={this.setFilter}
        />
      </div>
    );
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

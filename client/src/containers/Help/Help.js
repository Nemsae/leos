import React from 'react';
import { connect } from 'react-redux';

import Counter from '../../components/Counter';
import Todo from '../../components/Todo';
import { increment, decrement } from '../../actions/CounterActions';
import { addTodo } from '../../actions/TodoActions';
import './styles.css';

export class Help extends React.Component {
  state = {
    todoText: '',
  }

  handleTextChange = (e) => {
    const value = e.target.value;
    this.setState({
      todoText: value,
    });
  }

  addTodo = () => {
    this.props.addTodo(this.state.todoText);
  }

  render() {
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
          todos={this.props.todos}
          addTodo={this.addTodo}
          handleTextChange={this.handleTextChange}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  count: state.testCounter.count,
  todos: state.todos,
});

const mapDispatchToProps = dispatch => ({
  increment: () => {
    dispatch(increment());
  },
  decrement: () => {
    dispatch(decrement());
  },
  addTodo: (text) => {
    console.log('text:mapDispatchToProps ', text);
    dispatch(addTodo(text));
  },
});

const HelpRedux = connect(mapStateToProps, mapDispatchToProps)(Help);

export default HelpRedux;

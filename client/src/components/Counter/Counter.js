import React from 'react';
import { connect } from 'redux';

export class Counter extends React.Component {
  render() {
    return (
      <div>{this.props.counter}</div>
    )
  }
}

const mapStateToProps = state => ({
  counter: state.testCounter,
});

const CounterRedux = connect(mapStateToProps)(Counter);

export default CounterRedux;

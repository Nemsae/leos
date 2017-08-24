import React from 'react';
import { connect } from 'react-redux';

import Counter from '../../components/Counter';
import { increment, decrement } from '../../actions/CounterActions';
import './styles.css';

export class Help extends React.Component {
  render() {
    return (
      <div className='home-container'>
        <h1>Help</h1>
        <Counter
          count={this.props.count}
          increment={this.props.increment}
          decrement={this.props.decrement}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  count: state.testCounter.count,
});

const mapDispatchToProps = dispatch => ({
  increment: () => {
    increment(dispatch);
  },
  decrement: () => {
    decrement(dispatch);
  },
});

const HelpRedux = connect(mapStateToProps, mapDispatchToProps)(Help);

export default HelpRedux;

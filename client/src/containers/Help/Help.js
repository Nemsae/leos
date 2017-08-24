import React from 'react';
import { connect } from 'react-redux';

import Counter from '../../components/Counter';

import './styles.css';

export class Help extends React.Component {
  render() {
    return (
      <div className='home-container'>
        <h1>Help</h1>
        <Counter
          count={this.props.count}
          increment={this.props.incrementCounter}
          decrement={this.props.decrementCounter}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  count: state.testCounter.count,
});

const mapDispatchToProps = dispatch => ({
  incrementCounter: () => {
    dispatch({
      type: 'INCREMENT',
    });
  },
  decrementCounter: () => {
    dispatch({
      type: 'DECREMENT',
    });
  },
});

const HelpRedux = connect(mapStateToProps, mapDispatchToProps)(Help);

export default HelpRedux;

import React from 'react';
import { Link } from 'react-router-dom';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';

import './styles.css';

export default class Trades extends React.Component {
  constructor () {
    super();
  }

  render() {
    return (
      <Paper className='trades-container'>
        <h1>Payout</h1>
        <RaisedButton label='Default' />
        <Link className='button' to='/help'>
          Will Go to Records of Payout
        </Link>
        <div className='computation-container'>
          <Paper className='benchmark-container'>
            <h1>Benchmark</h1>
          </Paper>
          <Paper className='payout-container'>
            <h1>Payout</h1>
          </Paper>
          <Paper className='currency-container'>
            <h1>Current Rate</h1>
          </Paper>
        </div>
      </Paper>
    );
  }
}

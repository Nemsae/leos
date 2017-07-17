import React from 'react';
import { Link } from 'react-router-dom';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';

import './styles.css';

export default class Payout extends React.Component {
  constructor () {
    super();
  }

  render() {
    return(
      <Paper className='payout-container'>
        <h1>Payout</h1>
        <RaisedButton label='Default' />
        <Link className='button' to='/help'>
          Will Go to Records of Payout
        </Link>
      </Paper>
    )
  }
}

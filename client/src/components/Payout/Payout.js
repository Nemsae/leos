import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

export default class Home extends React.Component {
  constructor () {
    super();
  }

  render() {
    return(
      <div className='payout-container'>
        <h1>Payout</h1>
        <Link className='button' to='/help'>
          Will Go to Records of Payout
        </Link>
      </div>
    )
  }
}

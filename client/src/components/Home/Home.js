import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

export default class Home extends React.Component {
  constructor () {
    super();
  }

  render() {
    return(
      <div className='home-container'>
        <h1>Leos EOS Computation</h1>
        <Link className='button' to='/help'>
          Help
        </Link>
      </div>
    )
  }
}

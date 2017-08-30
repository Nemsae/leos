import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';

import './styles.css';

const CurrencyLoader = props => (
  <div className='currency-rate'>
    {
      props.isFetching ?
        <CircularProgress
          color='white'
          size={30}
        />
      :
        <p className='rate-text'>
          {props.rate}
        </p>
    }
  </div>
);

export default CurrencyLoader;

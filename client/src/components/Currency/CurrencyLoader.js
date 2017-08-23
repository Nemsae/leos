import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';

export const CurrencyLoader = props => (
  <div className='currency-rate'>
    {
      props.isFetching ?
        <CircularProgress
          color='white'
          size={30}
        />
      :
        <p className='currency-rate__text'>
          {props.rate}
        </p>
    }
  </div>
);

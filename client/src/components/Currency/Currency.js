import React from 'react';

import Paper from 'material-ui/Paper';

/* Components */
import { CurrencyLoader } from '../CurrencyLoader';
import { CurrencyFooter } from '../CurrencyFooter';
import CurrencySelector from '../CurrencySelector';

import './styles.css';

const Currency = props => (
  <Paper className='currency-container'>
    <h1>Current Rate</h1>
    <CurrencySelector
      symbol={props.symbol}
      handleCurrencyChange={props.handleCurrencyChange}
    />
    <CurrencyLoader
      isFetching={props.isFetching}
      rate={props.rate}
    />
    <CurrencyFooter
      refreshCurrencyRate={props.refreshCurrencyRate}
    />
  </Paper>
);

export default Currency;

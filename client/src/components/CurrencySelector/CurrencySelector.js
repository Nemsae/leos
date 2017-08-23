import React from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

export const CurrencySelector = props => (
  <SelectField
    floatingLabelText='CURRENCY'
    value={props.symbol}
    onChange={props.handleCurrencyChange}
  >
    <MenuItem value='EOSETH' primaryText='EOSETH' />
    <MenuItem value='EOSUSD' primaryText='EOSUSD' />
    <MenuItem value='ETHUSD' primaryText='ETHUSD' />
    <MenuItem value='ETHBTC' primaryText='ETHBTC' />
  </SelectField>
);

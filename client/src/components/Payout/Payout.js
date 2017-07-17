import React from 'react';
import { Link } from 'react-router-dom';

import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

import './styles.css';

export default class Trades extends React.Component {
  constructor() {
    super();

    this.state = {
      // value: 1,
      symbol: 'EOSETH',
    };
  }

  handleCurrencyChange = (event, index, value) => {
    console.log('value: ', value);
    this.setState({ symbol: value });
  }

  render() {
    return (
      <Paper className='trades-container'>
        <h1>Trades</h1>
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
            <SelectField
              floatingLabelText='CURRENCY'
              value={this.state.symbol}
              onChange={this.handleCurrencyChange}
            >
              <MenuItem value='EOSETH' primaryText='EOSETH' />
              <MenuItem value='EOSUSD' primaryText='EOSUSD' />
              <MenuItem value='ETHUSD' primaryText='ETHUSD' />
              <MenuItem value='ETHBTC' primaryText='ETHBTC' />
            </SelectField>
            <h3>.00XXXXXX</h3>
            <h3>REFRESH</h3>
          </Paper>
        </div>
      </Paper>
    );
  }
}

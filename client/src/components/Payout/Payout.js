import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

/*  MATERIAL UI  */
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import RefreshIcon from 'material-ui/svg-icons/action/autorenew';
import CircularProgress from 'material-ui/CircularProgress';

import { fetchCurrentRate } from '../../actions/APIactions';

import './styles.css';

class Trades extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      symbol: props.currency.symbol,
      rate: props.currency.rate,
    };
  }

  componentWillMount() {
    this.props.getCurrentRate(this.state.symbol);
  }

  handleCurrencyChange = (event, index, value) => {
    this.props.getCurrentRate(value);
    this.setState({ symbol: value });
  }

  refreshCurrencyRate = () => {
    this.props.getCurrentRate(this.state.symbol);
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
            <p className='currency-rate'>
              {this.props.currency.isFetching ? <CircularProgress /> : this.props.currency.rate}
            </p>
            <h3>REFRESH</h3>
            <IconButton
              tooltip='REFRESH'
              tooltipPosition='top-center'
              tooltipStyles={{ fontSize: '18px' }}
              onClick={this.refreshCurrencyRate}
            >
              <RefreshIcon />
            </IconButton>
          </Paper>
        </div>
      </Paper>
    );
  }
}

function mapStateToProps(state) {
  return {
    currency: state.currencyRate,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    // fetchOCRText: (url) => dispatch(fetchOCRText(url)),
    getCurrentRate: symbol => dispatch(fetchCurrentRate(symbol)),
  };
}
//
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Trades);

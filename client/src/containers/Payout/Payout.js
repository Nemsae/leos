import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

/*  MATERIAL UI  */
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';

import { fetchCurrentRate } from '../../actions/APIactions';

import './styles.css';

/* Components */
import Icon from '../../components/Icon';
import { CurrencyLoader } from '../../components/CurrencyLoader';
import { CurrencyFooter } from '../../components/CurrencyFooter';
import { CurrencySelector } from '../../components/CurrencySelector';

export class Payout extends React.Component {
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
        {/* <Icon name={'facebook'} /> */}
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
            <CurrencySelector
              symbol={this.state.symbol}
              handleCurrencyChange={this.handleCurrencyChange}
            />
            <CurrencyLoader
              isFetching={this.props.currency.isFetching}
              rate={this.props.currency.rate}
            />
            <CurrencyFooter
              refreshCurrencyRate={this.refreshCurrencyRate}
            />
          </Paper>
        </div>
      </Paper>
    );
  }
}

const mapStateToProps = state => ({
  currency: state.currencyRate,
});

const mapDispatchToProps = dispatch => ({
  getCurrentRate(symbol) {
    dispatch(fetchCurrentRate(symbol));
  },
  // getCurrentRate: (symbol) => {
  //   dispatch(fetchCurrentRate(symbol));
  // },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Payout);

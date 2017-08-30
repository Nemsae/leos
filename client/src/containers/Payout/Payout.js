import React from 'react';
import { connect } from 'react-redux';

/*  MATERIAL UI  */
import Paper from 'material-ui/Paper';
// import RaisedButton from 'material-ui/RaisedButton';

/*  Actions */
import { fetchCurrentRate } from '../../actions/APIactions';

import './styles.css';

/*  Components  */
import NavLink from '../../components/NavLink';
import Benchmark from '../../components/Benchmark';
import Returns from '../../components/Returns';
import Currency from '../../components/Currency';
// import Icon from '../../components/Icon';

export class Payout extends React.Component {
  static contextTypes = {
    store: React.PropTypes.object,
  }

  constructor(props) {
    super(props);
    // console.log('props: ', props);   //  for testing
    // console.log('this.props: ', this.props);   //  for testing
    // console.log('this.context: ', this.context);   //  for testing
    this.state = {
      symbol: props.currency.symbol,
      rate: props.currency.rate,
    };

    this.refreshCurrencyRate = this.refreshCurrencyRate.bind(this);
  }

  state = {
  };

  componentWillMount() {
    this.props.getCurrentRate(this.state.symbol);
  }

  handleCurrencyChange = (event, index, value) => {
    this.props.getCurrentRate(value);
    this.setState({ symbol: value });
  }

  refreshCurrencyRate() {
    this.props.getCurrentRate(this.state.symbol);
  }
  // refreshCurrencyRate = () => {
  //   this.props.getCurrentRate(this.state.symbol);
  // }

  render() {
    return (
      <Paper className='trades-container'>
        <h1>Payout</h1>
        {/* <NavLink to={'/help'}>
          Will Go to Records of Payout
        </NavLink> */}
        <div className='computation-container'>
          <Benchmark />
          <Returns />
          <Currency
            symbol={this.state.symbol}
            handleCurrencyChange={this.handleCurrencyChange}
            isFetching={this.props.currency.isFetching}
            rate={this.props.currency.rate}
            refreshCurrencyRate={this.refreshCurrencyRate}
          />
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

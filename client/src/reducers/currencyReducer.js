const initialState = {
  symbol: 'EOSETH',
  rate: 0,
  isFetching: false,
};

const currencyReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'REQUEST_RATE':
      return Object.assign({}, state, {
        isFetching: true,
      });
    case 'RECEIVE_RATE':
      return Object.assign({}, state, {
        symbol: action.payload.symbol,
        rate: action.payload.rate,
      });
    default:
      return initialState;
  }
};

export default currencyReducer;

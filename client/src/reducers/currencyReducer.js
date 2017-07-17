const initialState = {
  symbol: 'EOSETH',
  rate: 0,
};

export const currencyReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'REQUEST_RATE':
      return Object.assign({}, state, {
        symbol: action.payload.symbol,
        rate: action.payload.rate,
      });
    default:
      return initialState;
  }
};

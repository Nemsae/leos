import * as types from '../constants';

const initialState = {
  symbol: 'EOSETH',
  rate: null,
  isFetching: false,
};

const currencyReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.TEST_SPINNER:
      return Object.assign({}, state, {
        isFetching: true,
      });
    case types.REQUEST_RATE:
      return Object.assign({}, state, {
        isFetching: true,
        symbol: action.payload,
      });
    case types.RECEIVE_RATE:
      return Object.assign({}, state, {
        isFetching: false,
        rate: action.payload,
      });
    default:
      return initialState;
  }
};

export default currencyReducer;

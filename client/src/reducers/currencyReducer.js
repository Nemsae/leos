import { REQUEST_RATE, RECEIVE_RATE } from '../actions/APIactions';

const initialState = {
  symbol: 'EOSETH',
  rate: 0,
  isFetching: false,
};

const currencyReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_RATE:
      return Object.assign({}, state, {
        isFetching: true,
        symbol: action.payload,
      });
    case RECEIVE_RATE:
      return Object.assign({}, state, {
        isFetching: false,
        rate: action.payload,
      });
    default:
      return initialState;
  }
};

export default currencyReducer;

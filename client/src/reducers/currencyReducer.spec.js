import expect from 'expect';
import currencyReducer from './currencyReducer';
import * as types from '../constants';

describe('REDUCER: currencyReducer', () => {
  it('should render initial state with no/wrong case', () => {
    const actual = currencyReducer(undefined, {});
    const expected = {
      symbol: 'EOSETH',
      rate: null,
      isFetching: false,
    };
    expect(actual).toEqual(expected);
  });

  it('should update isFetching for action type TEST_SPINNER', () => {
    const action = {
      type: types.TEST_SPINNER,
    };
    const actual = currencyReducer(undefined, action);
    const expected = {
      symbol: 'EOSETH',
      rate: null,
      isFetching: true,
    };
    expect(actual).toEqual(expected);
  });

  it('should update isFetching and symbol for action type REQUEST_RATE', () => {
    const action = {
      type: types.REQUEST_RATE,
      payload: 'EOSETH',
    };
    const actual = currencyReducer(undefined, action);
    const expected = {
      symbol: 'EOSETH',
      rate: null,
      isFetching: true,
    };
    expect(actual).toEqual(expected);
  });

  it('should update isFetching and rate for action type RECEIVE_RATE', () => {
    const action = {
      type: types.RECEIVE_RATE,
      payload: 0.0045,
    };
    const actual = currencyReducer(undefined, action);
    const expected = {
      symbol: 'EOSETH',
      rate: 0.0045,
      isFetching: false,
    };
    expect(actual).toEqual(expected);
  });
});
//
// const initialState = {
//   symbol: 'EOSETH',
//   rate: 0,
//   isFetching: false,
// };
//
// const currencyReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'TEST_SPINNER':
//       return Object.assign({}, state, {
//         isFetching: true,
//       });
//     case types.REQUEST_RATE:
//       return Object.assign({}, state, {
//         isFetching: true,
//         symbol: action.payload,
//       });
//     case types.RECEIVE_RATE:
//       return Object.assign({}, state, {
//         isFetching: false,
//         rate: action.payload,
//       });
//     default:
//       return initialState;
//   }
// };

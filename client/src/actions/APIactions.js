import axios from 'axios';
import * as types from '../constants';

// export const REQUEST_RATE = 'REQUEST_RATE';
export function requestRate(symbol) {
  return {
    type: types.REQUEST_RATE,
    payload: symbol,
  };
}

// export const RECEIVE_RATE = 'RECEIVE_RATE';
export function receiveRate(data) {
  return {
    type: types.RECEIVE_RATE,
    payload: data.lastPrice,
  };
}

//  Testing spinner
// function testSpinner() {
//   return {
//     type: 'TEST_SPINNER',
//   };
// }

export function fetchCurrentRate(symbol) {
  return (dispatch) => {
    // if (symbol === 'spinner') {
    //   dispatch(testSpinner());
    //   return;
    // }
    //
    // else
    dispatch(requestRate(symbol));
    return axios.get(`http://localhost:3001/api/leos/exchangeRate?symbol=${symbol}`)
      .then((res) => {
        dispatch(receiveRate(res.data));
      })
      .catch((err) => {
        console.log('err: ', err);
      });
  };
}

export default fetchCurrentRate;

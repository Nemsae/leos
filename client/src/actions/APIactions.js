import axios from 'axios';

export const REQUEST_RATE = 'REQUEST_RATE';
export function requestRate(symbol) {
  return {
    type: REQUEST_RATE,
    payload: symbol,
  };
}

export const RECEIVE_RATE = 'RECEIVE_RATE';
export function receiveRate(data) {
  return {
    type: RECEIVE_RATE,
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
    axios.get(`/api/leos/exchangeRate?symbol=${symbol}`)
    .then((res) => {
      dispatch(receiveRate(res.data));
    })
    .catch((err) => {
      console.log('err: ', err);
    });
  };
}

export default fetchCurrentRate;

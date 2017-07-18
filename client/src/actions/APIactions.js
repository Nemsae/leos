import axios from 'axios';

// const fetchCurrentRate = (symbol) => {
//   console.log('symbol: ', symbol);
// };
export const REQUEST_RATE = 'REQUEST_RATE';
function requestRate(symbol) {
  return {
    type: REQUEST_RATE,
    payload: symbol,
  };
}

export const RECEIVE_RATE = 'RECEIVE_RATE';
function receiveRate(data) {
  return {
    type: RECEIVE_RATE,
    payload: data.lastPrice,
  };
}

export function fetchCurrentRate(symbol) {
  return (dispatch) => {
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

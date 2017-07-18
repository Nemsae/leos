import axios from 'axios';

// const fetchCurrentRate = (symbol) => {
//   console.log('symbol: ', symbol);
// };
export const REQUEST_RATE = 'REQUEST_RATE';
function requestRate() {
  return {
    type: REQUEST_RATE,
  };
}

export const RECEIVE_RATE = 'RECEIVE_RATE';
function receiveRate(data) {
  console.log('data: ', data);
  return {
    type: RECEIVE_RATE,
    symbol: data.symbol,
    rate: data.rate,
  };
}

export function fetchCurrentRate(symbol) {
  return (dispatch) => {
    dispatch(requestRate());
    axios.get(`/api/leos/exchangeRate?symbol=${symbol}`)
    .then((res) => {
      console.log('res.data: ', res.data);
      dispatch(receiveRate(res.data));
    })
    .catch((err) => {
      console.log('err: ', err);
    });
  };
}

export default fetchCurrentRate;
// import API from '../API';
//
// const APIActions = {
//   encryptMessage(encryptionPackage) {
//     API.sendEncryption(encryptionPackage);
//   },
//   decryptMessage(decryptionPackage) {
//     API.sendDecryption(decryptionPackage);
//   },
// };
//
// export default APIActions;

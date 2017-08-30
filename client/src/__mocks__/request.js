const fs = require('fs')

export const request = (url) => new Promise((resolve, reject) => {
  // Get userID from supplied url string
  const lastSlash = url.lastIndexOf('/');
  const userID = url.substring(lastSlash + 1);
  // Load user json data from a file in de subfolder for mock data
  // fs.readFile(`./data/${userID}.json`, 'utf8', (err, data) => {
  fs.readFile(`/Users/Jcompsta/temp/leos/client/src/__mocks__/data/${userID}.json`, 'utf8', (err, data) => {
  // fs.readFile(`./client/src/__mocks__/data/${userID}.json`, 'utf8', (err, data) => {
    if (err) reject(err)
    // Parse the data as JSON and put in the key entity (just like the request library does)
    resolve({ entity: JSON.parse(data) })
  });
});

//  mock API call for currency rate
export const getCurrencyRate = (url) => new Promise((resolve, reject) => {
  // setTimeout(() => {
  console.log('Sanity:1');
  resolve({ message: 'Current exchange rate of EOSETH is 0.004057', lastPrice: 0.004057 });
  // }, 200);
});

export const fetchCurrentRate = (symbol) => {
  console.log('Sanity:0');
  return () => {
    // dispatch(requestRate(symbol));
    getCurrencyRate(`/api/leos/exchangeRate?symbol=${symbol}`)
    .then((res) => {
      console.log('Sanity:2');
      console.log('res: ', res);
      return res;
      // dispatch(receiveRate(res.data));
    })
    .catch((err) => {
      console.log('err: ', err);
    });
  };
}

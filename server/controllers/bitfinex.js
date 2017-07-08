const axios = require('axios');

//  Caclulating payout
//  1. Grab user inputs
//  2. Get current ticker for EOS
//  3. Compute using helper functions
//  4. response.send(profit)

exports.compute = (request, response) => {
  const symbol = 'eoseth';  //  eosusd, eosbtc
  //  GET: grab ticker info for the symbol
  const tickerUrl = `https://api.bitfinex.com/v1/pubticker/${symbol}`;
  //  GET: grab symbols
  const symbolsUrl = 'https://api.bitfinex.com/v1/symbols';
  //  1. Grab user inputs from request
  const { myEther } = request.body;
  const actualTotalEth = 19948.92;
  let targetBenchmark = 0;
  let ethPayout = 0;
  let eosPayout = 0;

  //  2. use api to grab current price of EOS
  axios.get(tickerUrl)
    .then(res => +res.data.last_price)
    .then((currExchangeRate) => {
      const benchmark = calculateBenchmark(currExchangeRate, myEther);
      targetBenchmark = benchmark;
      // response.send(`Your benchmark is ${benchmark}.`);
      return currExchangeRate;
    })
    .then((currExchangeRate) => {
      eosPayout = calculateEOSPayout(actualTotalEth, myEther);
      ethPayout = calculateETHPayout(currExchangeRate, eosPayout);
      return currExchangeRate;
    })
    .then((currExchangeRate) => {
      response.send(`Exchange rate of ${symbol} is currently ${currExchangeRate}.
        \nYour Contribution: ${myEther} ETH.
        \nYour target benchmark of total ETH contributed is ${targetBenchmark}.
        \nYour actual payout in EOS would have been ${eosPayout} EOS.
        \nYour actual payout in ETH would have been ${ethPayout} ETH.
        \nPotential profit in this window would be ${ethPayout - myEther} ETH.`);
    })
    .catch((err) => {
      console.log('err: ', err);
    });
};
function calculateBenchmark(exchangeRate, ether) {
  const txFee = 0.01;
  const myEther = ether - txFee;
  const myTokens = myEther / exchangeRate;
  const ethBenchmark = (2000000 * myEther) / myTokens;
  // console.log('ethBenchmark: ', ethBenchmark, 'myTokens: ', myTokens,  'myEther: ', myEther,  'exchangeRate: ', exchangeRate);  // eslint-disable-line no-console
  return ethBenchmark;
}

function calculateEOSPayout(totalEth, myEther) {
  const txFee = 0.01;
  const myTotalEther = myEther - txFee;
  const myTokens = (2000000 * myTotalEther) / (totalEth + myTotalEther);
  return myTokens;
}

function calculateETHPayout(exchangeRate, myTokens) {
  const myPayout = myTokens * exchangeRate;
  return myPayout;
}

/*  Window #7 *//*  Window #7 *//*  Window #7 *//*  Window #7 *//*  Window #7 *//*  Window #7 */
/*  Window #7 *//*  Window #7 *//*  Window #7 *//*  Window #7 *//*  Window #7 *//*  Window #7 */
/*  Window #7 *//*  Window #7 *//*  Window #7 *//*  Window #7 *//*  Window #7 *//*  Window #7 */
const exchangeRate_07_07_17 = .010500;
const myEther_07_07_17 = 6.74947130;  //  Mine
// const myEther_07_07_17 = 21.31020580;
const actualTotalEth_07_07_17 = 19948.92;

//  Calculating the limit for total eth contributed
const maxLimitEth_07_07_17 = calculateBenchmark(exchangeRate_07_07_17, myEther_07_07_17);
console.log('maxLimitEth_07_07_17: ', maxLimitEth_07_07_17);

//  Actual payout
const actualPayout_07_07_17 = calculatePayout(exchangeRate_07_07_17, actualTotalEth_07_07_17, myEther_07_07_17);
console.log('actualPayout_07_07_17: ', actualPayout_07_07_17);

const ethProfit_07_07_17 = actualPayout_07_07_17 - myEther_07_07_17;
console.log('ethProfit_07_07_17: ', ethProfit_07_07_17);

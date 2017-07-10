const axios = require('axios');
//  Caclulating payout
//  1. Grab user inputs
//  2. Get current ticker for EOS
//  3. Compute using helper functions
//  4. response.send(profit)
exports.exchangeRate = (request, response) => {
  const { symbol } = request.query;
  const tickerUrl = `https://api.bitfinex.com/v1/pubticker/${symbol}`;

  axios.get(tickerUrl)
    .then(res => res.send(+res.data.last_price));
};

exports.compute = (request, response) => {
  const symbol = 'eoseth';  //  eosusd, eosbtc
  //  GET: grab ticker info for the symbol
  const tickerUrl = `https://api.bitfinex.com/v1/pubticker/${symbol}`;
  //  GET: grab symbols
  const symbolsUrl = 'https://api.bitfinex.com/v1/symbols';
  //  1. Grab user inputs from request
  const { myEther, projectedEth, actualEth } = request.body;
  console.log('projectedEth: ', projectedEth);
  console.log('actualEth: ', actualEth);
  let targetBenchmark = 0;
  let ethPayout = 'Not defined.';
  let eosPayout = 'Not defined.';
  let projectedEosPayout = 0;
  let projectedEthPayout = 0;

  //  2. use api to grab current price of EOS
  axios.get(tickerUrl)
    .then(res => +res.data.last_price)
    .then((currExchangeRate) => {
      const benchmark = calculateBenchmark(currExchangeRate, myEther);
      targetBenchmark = benchmark;
      return currExchangeRate;
    })
    .then((currExchangeRate) => {
      projectedEosPayout = calculateEOSPayout(+projectedEth, myEther);
      projectedEthPayout = calculateETHPayout(currExchangeRate, projectedEosPayout);
      eosPayout = calculateEOSPayout(+actualEth, myEther);
      ethPayout = calculateETHPayout(currExchangeRate, eosPayout);
      return currExchangeRate;
    })
    .then((currExchangeRate) => {
      response.send(`Exchange rate of ${symbol} is currently ${currExchangeRate}.
        \nYour Contribution: ${myEther} ETH.
        \nYour target benchmark of total ETH contributed is ${targetBenchmark}.
        \nYour projected payout would have been ${projectedEosPayout} EOS, or ${projectedEthPayout} ETH.
        \nYour actual payout would have been ${eosPayout} EOS, or ${ethPayout} ETH.
        \nPotential profit in this window would be ${ethPayout - myEther} ETH.
        \nProfit ${((ethPayout - myEther) / myEther) * 100} %.`);
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

const axios = require('axios');

exports.exchangeRate = (request, response) => {
  const { symbol } = request.query;
  const tickerUrl = `https://api.bitfinex.com/v1/pubticker/${symbol}`;

  axios.get(tickerUrl)
    .then((res) => {
      response.send(+res.data.last_price);
    })
    .catch((err) => {
      console.log('err: ', err);
    });
};

exports.computeBenchmark = (request, response) => {
  //  computing benchmark given a profit percentage
  const { profitPercent } = request.query;
  let { startEther } = request.query;
  const tickerUrl = 'https://api.bitfinex.com/v1/pubticker/eoseth';
  startEther = +startEther;
  console.log('profitPercent: ', profitPercent, 'startEther: ', startEther);

  const etherProfit = (profitPercent / 100) * startEther;
  const targetEther = startEther + etherProfit;
  console.log('etherProfit: ', etherProfit, 'targetEther: ', targetEther);

  let targetTokens = 0;
  let targetBenchmark = 0;

  axios.get(tickerUrl)
    .then(res => +res.data.last_price)
    .then((currExchangeRate) => {
      targetTokens = targetEther / currExchangeRate;
      console.log('targetTokens: ', targetTokens);
      return targetTokens;
    })
    .then((targetTokens) => {
      targetBenchmark = (2000000 * startEther) / targetTokens;
      console.log('targetBenchmark: ', targetBenchmark);
      response.send(`For a ${profitPercent} % profit,` +
        ` total ETH for this window should be ${targetBenchmark}.`);
    })
    .catch((err) => {
      console.log('err: ', err);
    });
};

exports.compute = (request, response) => {
  const symbol = 'eoseth';  //  eosusd, eosbtc
  const tickerUrl = `https://api.bitfinex.com/v1/pubticker/${symbol}`;
  const symbolsUrl = 'https://api.bitfinex.com/v1/symbols';
  const { myEther, projectedEth, actualEth } = request.body;

  let targetBenchmark = 0;
  let ethPayout = 'Not defined.';
  let eosPayout = 'Not defined.';
  let projectedEosPayout = 0;
  let projectedEthPayout = 0;

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
  const txFee = 0.00;
  // const txFee = 0.01;
  const myEther = ether - txFee;
  const myTokens = myEther / exchangeRate;
  const ethBenchmark = (2000000 * myEther) / myTokens;
  return ethBenchmark;
}

function calculateEOSPayout(totalEth, myEther) {
  const txFee = 0.00;
  // const txFee = 0.01;
  const myTotalEther = myEther - txFee;
  const myTokens = (2000000 * myTotalEther) / (totalEth + myTotalEther);
  return myTokens;
}

function calculateETHPayout(exchangeRate, myTokens) {
  const myPayout = myTokens * exchangeRate;
  return myPayout;
}

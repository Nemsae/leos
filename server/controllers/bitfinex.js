//  Sending a simple message
exports.compute = (request, response) => {
  const { myEther, actualTotalEth } = request.body;
  // client.messages.create({
  //   body: messageReq.body,
  //   to: messageReq.receiver,  // Text this number ex. "+16506782956"
  //   from: messageReq.sender, // From a valid Twilio number ex. "+16504259920"
  // })
  // .then((message) => {
  //   response.send(message.sid);
  // })
  // .catch((err) => {
  //   console.log('ERROR:POST:/api/twilio ', err);  // eslint-disable-line no-console
  //   response.status(400).send(err);
  // });
};

function calculateBenchmark(exchangeRate, myEther) {
  const myTokens = myEther / exchangeRate;
  console.log('myTokens:benchmark ', myTokens);
  const ethBenchmark = (2000000 * myEther) / myTokens;

  return ethBenchmark;
}

function calculatePayout(exchangeRate, totalEth, myEther) {
  const txFee = .01;
  const myTokens = (2000000 * myEther - txFee) / totalEth;
  console.log('myTokens: ', myTokens, 'exchangeRate: ', exchangeRate);
  const payout = myTokens * exchangeRate;

  return payout;
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

//  GET: grab ticker info for the symbol
const tickerUrl = `https://api.bitfinex.com/v1/pubticker/${symbol}`;

//  GET: grab symbols
const symbolsUrl = 'https://api.bitfinex.com/v1/symbols';

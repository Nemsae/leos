const payout = {
  calculateBenchmark(exchangeRate, ether) {
    const txFee = 0.00;
    // const txFee = 0.01;
    const myEther = ether - txFee;
    const myTokens = myEther / exchangeRate;
    const ethBenchmark = (2000000 * myEther) / myTokens;
    return ethBenchmark;
  },

  calculateEOSPayout(totalEth, myEther) {
    const txFee = 0.00;
    // const txFee = 0.01;
    const myTotalEther = myEther - txFee;
    const myTokens = (2000000 * myTotalEther) / (totalEth + myTotalEther);
    return myTokens;
  },

  calculateETHPayout(exchangeRate, myTokens) {
    const myPayout = myTokens * exchangeRate;
    return myPayout;
  },
};

module.exports = payout;

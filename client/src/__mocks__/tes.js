const getCurrencyRate = () => new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ message: 'Current exchange rate of EOSETH is 0.004057', lastPrice: 0.004057 });
  }, 500);
});

// let x = getCurrencyRate()

console.log('getCurrencyRate(): ', getCurrencyRate().then(res => console.log(res)));

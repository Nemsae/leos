const express = require('express');
const bitfinex = require('../controllers/bitfinex');

const router = express.Router();

router.route('/exchangeRate')
.get(bitfinex.currentRate);

router.route('/payout')
.post(bitfinex.computePayout);

router.route('/benchmark')
.get(bitfinex.benchmarkForProfit);

module.exports = router;

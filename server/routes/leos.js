const express = require('express');
const bitfinex = require('../controllers/bitfinex');

const router = express.Router();

router.route('/exchangeRate')
.get(bitfinex.exchangeRate);

router.route('/')
.post(bitfinex.compute);

router.route('/benchmark')
.get(bitfinex.computeBenchmark);

module.exports = router;

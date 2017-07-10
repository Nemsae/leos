const express = require('express');
const bitfinex = require('../controllers/bitfinex');

const router = express.Router();

router.route('/exchangeRate')
.get(bitfinex.exchangeRate);

router.route('/')
.post(bitfinex.compute);

module.exports = router;

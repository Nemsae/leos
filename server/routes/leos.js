const express = require('express');
const bitfinex = require('../controllers/bitfinex');

const router = express.Router();

router.route('/')
.get(bitfinex.compute);

module.exports = router;

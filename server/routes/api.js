const express = require('express');

const router = express.Router();

router.use('/leos', require('./leos'));

module.exports = router;

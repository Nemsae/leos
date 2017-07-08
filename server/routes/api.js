const express = require('express');
const router = express.Router();

router.use('/enigma', require('./enigma'));
router.use('/leos', require('./leos'));

module.exports = router;

const express = require('express')
const router = express.Router()

/* GET raw transaction listing. */
router.get('/', function(req, res, next) {
  res.send('getrawtransaction')
});

module.exports = router
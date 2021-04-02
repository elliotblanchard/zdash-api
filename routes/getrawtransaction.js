var express = require('express');
var router = express.Router();

/* GET raw transaction listing. */
router.get('/', function(req, res, next) {
  res.send('getrawtransaction');
});

module.exports = router;
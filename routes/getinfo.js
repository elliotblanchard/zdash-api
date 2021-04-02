var express = require('express');
var router = express.Router();

/* GET network info listing. */
router.get('/', function(req, res, next) {
  res.send('getinfo');
});

module.exports = router;
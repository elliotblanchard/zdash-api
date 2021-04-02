var express = require('express');
var router = express.Router();

/* GET block info. */
router.get('/', function(req, res, next) {
  res.send('getblock');
});

module.exports = router;

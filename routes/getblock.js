const express = require('express')
const router = express.Router()

/* GET block info. */
router.get('/', function(req, res, next) {
  res.send('getblock')
});

module.exports = router

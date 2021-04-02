const express = require('express')
const router = express.Router()

/* GET network info listing. */
router.get('/', function(req, res, next) {
  res.send('getinfo')
});

module.exports = router
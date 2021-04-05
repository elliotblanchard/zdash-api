const express = require('express')
const router = express.Router()
const rpcCall = require('../modules/rpcCall.js')

/* GET network info listing. */
router.get('/', function(req, res, next) {
  rpcCall("getinfo",[])
  res.send('getinfo')
});

module.exports = router


//curl --user samwellhouston:silversandyblocks --data-binary '{"jsonrpc": "1.0", "id":"curltest", "method": "getinfo", "params": [] }' -H 'content-type: text/plain;' http://192.168.1.158:8232


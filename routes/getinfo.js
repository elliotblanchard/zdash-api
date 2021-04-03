const express = require('express')
const router = express.Router()
const rpc = require('json-rpc2')

debugger

/* GET network info listing. */
router.get('/', function(req, res, next) {
  const client = rpc.Client.$create(8232, 'http://192.168.1.158', 'samwellhouston', 'silversandyblocks')

  client.call('getinfo', [], function (err, result){
    if (err) {
      console.error('RPC Error: ' + err.toString())
    }
    console.log('Result: ' + result)
  });

  res.send('getinfo')
});

module.exports = router
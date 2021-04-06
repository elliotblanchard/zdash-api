const express = require('express')
const router = express.Router()
const request = require('request')
let rpcOptions = require('../modules/rpcOptions.js')

/* GET raw transaction listing. */
router.get('/', function(req, res, next) {
  const txid = req.query.txid

  rpcOptions["body"] = JSON.stringify( {"jsonrpc": "1.0", "id": "api_request", "method": "getrawtransaction", "params": [txid, 1] })

  request(rpcOptions, (error, response, body) => {
    if (error) {
        res.send(`An error has occurred: ${error}`)
    } else {
        const jsonResponse = JSON.parse(body) 
        res.json(jsonResponse)
    }
  })
});

module.exports = router

// zc.getrawtransaction(tx_hash.to_s, 1)
// 7605b5cb54f4c4134e53ee3d45637a50ac18bc31b737cb73c033f80cc88f6ffb
// 8daf402263d0ef504ed2808635980944aec38c0f6638ef5dd58e13a26e3d4a88
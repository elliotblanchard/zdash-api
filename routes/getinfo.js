const express = require('express')
const router = express.Router()
const request = require('request')
let rpcOptions = require('../modules/rpcOptions.js')

/* GET network info listing. */
router.get('/', function(req, res, next) {
  rpcOptions["body"] = JSON.stringify( {"jsonrpc": "1.0", "id": "api_request", "method": "getinfo", "params": [] })

  request(rpcOptions, (error, response, body) => {
    if (error) {
        res.send(`An error has occurred: ${error}`)
    } else {
        const jsonResponse = JSON.parse(body) 
        res.json(jsonResponse)
    }
  })
})

module.exports = router


//curl --user samwellhouston:silversandyblocks --data-binary '{"jsonrpc": "1.0", "id":"curltest", "method": "getinfo", "params": [] }' -H 'content-type: text/plain;' http://192.168.1.158:8232


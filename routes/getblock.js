const express = require('express')
const router = express.Router()
const request = require('request')
let rpcOptions = require('../modules/rpcOptions.js')

/* GET block info. */
router.get('/', function(req, res, next) {
  const height = req.query.height

  rpcOptions["body"] = JSON.stringify( {"jsonrpc": "1.0", "id": "api_request", "method": "getblock", "params": [height, 1] })

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

// current_block = zc.getblock(i.to_s, 1)
// 1172000

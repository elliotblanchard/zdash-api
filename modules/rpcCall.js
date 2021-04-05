module.exports = function (method,params) { 
    const request = require('request')

    let options = {
        url: "http://192.168.1.158:8232",
        method: "post",
        headers:
        { 
        "content-type": "text/plain"
        },
        auth: {
            user: "samwellhouston",
            pass: "silversandyblocks"
        },
        body: JSON.stringify( {"jsonrpc": "1.0", "id": "curltest", "method": method, "params": params })
    };

    request(options, (error, response, body) => {
        if (error) {
            console.log(`An error has occurred: ${error}`)
        } else {
            console.log(body)
        }
    });

    // Consider instead making this module only contain the OPTIONS object (with the method and params empty) instead of a function - 
    // that can then be imported into each route, the method and params updated, and the request made there, 
    // thus solving the problem of passing the results of the request back
    
};


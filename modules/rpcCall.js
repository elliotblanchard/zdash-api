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
    
};


const request = require('request');

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
    body: JSON.stringify( {"jsonrpc": "1.0", "id": "curltest", "method": "getinfo", "params": [] })
};

request(options, (error, response, body) => {
    if (error) {
        console.error('An error has occurred: ', error);
    } else {
        console.log('Post successful: response: ', body);
    }
});

//curl --user samwellhouston:silversandyblocks --data-binary '{"jsonrpc": "1.0", "id":"curltest", "method": "getinfo", "params": [] }' -H 'content-type: text/plain;' http://192.168.1.158:8232

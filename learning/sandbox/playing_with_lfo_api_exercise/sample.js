/*jslint node: true */

'use strict';

var http = require('http');

var request = require('request');

var app = http.createServer(function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(
        {
            a : 1
        }
    ));
})

app.listen(3000);

// request('http://127.0.0.1', function(err, resp, body) {
//     if (!err && response.statusCode == 200) {
//         console.log(body);
//     }
// })
/*jslint node: true */

'use strict';

var http = require('http');

var request = require('request');

var server = http.createServer(function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ a : 1 }));
});

server.listen(3000);

request('http://127.0.0.1:3000', function(err, res, body) {
    if (!err && res.statusCode == 200) {
        console.log(body);
    }
})

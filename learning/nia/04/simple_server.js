/*jslint node: true */

'use strict';

var http = require('http');

var server = http.createServer(function(req, res) {
    var body = 'Hello World';
    res.setHeader('Content-Length', body.length);
    res.setHeader('Content-Type', 'text/plain');
    res.end(body);
});

server.listen(3000);

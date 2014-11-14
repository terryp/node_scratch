/*jslint node: true */

'use strict';

var http = require('http');
var through = require('through');

var tr = through(function(buffer) {
    buffer = buffer.toString().toUpperCase();
    this.queue(buffer);
});

var server = http.createServer(function(req, res) {
    if (req.method === 'POST') {
        req.pipe(tr).pipe(res);
    }
});

server.listen(process.argv[2]);

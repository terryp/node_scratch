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
        var msg = tr(req.body);
    }
    res.end(msg);
});

server.listen(process.argv[2]);

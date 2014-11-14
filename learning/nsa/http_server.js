/*jslint node: true */

'use strict';

var http = require('http');
var net = require('net');
var through = require('through');

var server = http.createServer(function(req, res) {
    if (req.method === 'POST') {
        req.pipe(through(function(buffer) {
            buffer = buffer.toString().toUpperCase();
            this.queue(buffer);
        })).pipe(res);
    }
});

server.listen(process.argv[2]);

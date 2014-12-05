/*jslint node: true */

'use strict';

var http = require('http');
var through = require('through');

var server = http.createServer(function (req, res) {
    if (req.method === 'POST') {
        req.pipe(through(function (buf) {
            this.queue(buf.toString().toUpperCase());
        })).pipe(res);
        res.end();
    }
});
server.listen(parseInt(process.argv[2]));


'use strict';

var http = require('http');
var util = require('util');

var server = http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text-plain'});
    res.end(util.inspect(req.headers));
});

server.listen(4000);

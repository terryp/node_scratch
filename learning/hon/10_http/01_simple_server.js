
'use strict';

var http = require('http');

var server = http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text-plain'});
    res.end('Hello simple server, I have written you at least 100x');

});

server.listen(4000);

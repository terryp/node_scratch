
'use strict';

/*

Make an HTTP server that saves the request body into a file.

*/

var fs = require('fs');
var http = require('http');
var path = require('path');
var util = require('util');

var sequence = 0

var server = http.createServer(function(req, res) {
    var requestFile = path.resolve('../../data/requests.txt');
    console.log('Writing request to the following location: %s', requestFile);
    var writeSteam = fs.createWriteStream(requestFile);
    req.pipe(writeSteam);
    req.on('end', function() {
        res.writeHead(200);
        res.end()
    });
    sequence++
});

server.listen(7001);

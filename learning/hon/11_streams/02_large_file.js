

'use strict';

var fs = require('fs');
var http = require('http');
var path = require('path');

var server = http.createServer(function(req, res) {
    var file = path.resolve('../../data/lewbowski.txt');
    var rs = fs.createReadStream(file);
    
    rs.on('data', function(data) {
        if (!res.write(data)) {
            rs.pause()
        }
    });

    res.on('drain', function() {
        rs.resume();
    });

    res.on('end', function(data) {
        res.end();
    });
});

server.listen(2001);

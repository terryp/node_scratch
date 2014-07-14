

'use strict';

var fs = require('fs');
var http = require('http');
var path = require('path');

var server = http.createServer(function(req, res) {
    var file = path.resolve('../../data/lewbowski.txt');
    var rs = fs.createReadStream(file);
    rs.pipe(res, {end: 'false'});
    rs.once('end', function() {
        res.end('And that is all folks!');
    })
});

server.listen(3001);

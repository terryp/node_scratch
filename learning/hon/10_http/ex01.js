
'use strict';

/*

Make an HTTP server that serves files. The file path is provided in the URL
like this: http://127.0.0.1/ex01/

*/

var fs = require('fs');
var http = require('http');
var path = require('path');

var file = path.resolve('../../data/adjusted_scratch.txt');
var fileContents = fs.readFileSync(file);

console.log('File: %s', file);
console.log('File Contents: %s', fileContents);

var server = http.createServer(function(req, res) {
    if (req.url == '/ex01/') {
        res.writeHead(200, {'Content-Type': 'text-plain'});
        res.write(req.url);
        res.end(fileContents);    
    } else {
        res.writeHead(404, {'Content-Type': 'text-plain'});
        res.end('Error: PATH not defined');
    }    
});

server.listen(4000);

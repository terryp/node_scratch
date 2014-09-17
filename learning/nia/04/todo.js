/*jslint node: true */

'use strict';

var http = require('http');
var url = require('url');

var items = [];

// This is a 'Node in Action' exercise. The goal is to create a small web server
// that leverages RESTful technology to create a simple TODO list. 
// 
// The commands that you can use to look @ stuff are the following:
//

//  - GET / curl http://127.0.0.1:3000
//  - POST / curl -i -x POST 'TODO LIST ITEM' http://127.0.0.1:3000
//  - or - 
//  - POST / curl -d 'TODO LIST ITEM' http://127.0.0.1:3000
//  - DELETE / curl -i -x DELETE http://127.0.0.1:3000/<TODO LIST ITEM ID>

var server = http.createServer(function(req, res) {
    var path = url.parse(req.url).pathname;
    var i = parseInt(path.slice(1), 10);
    
    function checkRequest(item) {
        if (isNaN(item)) {
            res.statusCode = 400;
            res.end('Invalid item id.\n' + i + ' is not a valid ID.\n');
        } else if (!items[i]) {
            res.statusCode = 404;
            res.end('Item not found.\n' + i + ' does not exist.\n');
        } else {
            return true;
        }
    }

    switch (req.method) {
        case 'POST':
            var item = '';
            req.setEncoding('utf8');
            req.on('data', function(chunk) {
                item += chunk;
            });
            req.on('end', function() {
                items.push(item);
                res.end('OK\n');
            });
            break;
        case 'GET':
            var body = items.map(function(item, i) {
                return i + ' -- ' + item;
            }).join('\n');
            res.setHeader('Content-Length', Buffer.byteLength(body));
            res.setHeader('Content-Type', 'text/plain; charset="utf-8"');
            res.end(body + '\n');
            break;
        case 'DELETE':
            if (checkRequest(i)) {
                items.splice(i, 1);
                res.end('OK\n');
            }
            break;
        case 'PUT':
            if (checkRequest(i)) {
                // something about byte codes
                // see GET
                items[i] = i;
                res.end('OK\n');
            }
            break;
    }
});

server.listen(3000);

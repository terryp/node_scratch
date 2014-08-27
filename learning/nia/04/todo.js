/*jslint node: true */

'use strict';

var http = require('http');
var url = require('url');

var items = [];

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
                items[i] = i;
                res.end('OK\n');
            }
            break;
    }
});

server.listen(3000);

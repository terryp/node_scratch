/*jslint node: true */

'use strict';

var fs = require('fs'),
    http = require('http'), 
    path = require('path'), 
    url = require('url');

var request = require('request');

var testServer = http.createServer(function(req, res) {
    var uri = url.parse(req.url).pathname;
    var filename = path.join(process.cwd(), 'static', uri)

    // DEBUG
    console.log(uri);
    console.log(filename);

    fs.exists(filename, function(exists) {
        if(!exists) {
            res.writeHead(404, {'Content-Type': 'text/plain'});
            res.write('404 Not Found, Captain.');
            res.end();
            return;
        } else {
            res.writeHead(200, {'Content-Type': 'application/json'});

            // Hard coding for now
            var payload = {
                'propensity' : 0.26532,
                'ranking' : 'C'
            };

            res.end(JSON.stringify(payload));
        }
    })
});

testServer.listen(3000);

request('http://127.0.0.1:3000/200.html', function(err, res, body) {
    if (!err && res.statusCode == 200) {
        console.log(body);
    }
});  


// Use cases
// Don't get all fancy ... https://github.com/caolan/nodeunit
// 
//  - 200 / Standard Response, we're good. 
//  - 300 / We end up in some other location, we're maybe not good. 
//  - 400 / We get some kind of missing file or resource, we're maybe not good. 
//  - 500 / We get some kind of server error, not good
//  - Panic / We get zilcho

// Older Scratch

// var http = require('http'), 
//     path = require('path'), 
//     url = require('url');

// var server; 

// exports.start = function(port, callback) {
//     server = http.createServer();
//     server.on('request', function(req, res) {
//         res.writeHead(200);
//         res.write('200: Success\n');
//         res.end();
//     });
// };

// exports.stop = function(callback) {
//     server.close(callback);
// }

// var firstServer = http.createServer(function(req, res) {
//     var uri = url.parse(req.url, true).pathname;
//     var query = url.parse(req.url, true);
//     var filename = path.join(process.cwd(), 'static', uri);

//     //DEBUG
//     console.info('INFO - uri: ', uri);
//     console.info('INFO - querystring: ', query.query);
//     console.info('INFO - path or filename: ', filename);
//     console.info('--------- ');

//     if (uri === '/customer_scoring' && query) {
//         res.writeHead(200, {'Content-Type': 'application/json'});
//         res.write('200: Success\n');
//         var payload = { 'propensity' : 0.26532, 'ranking' : 'C'};
//         res.write(JSON.stringify(payload));
//         res.end();
//         return;
//     } else {
//         res.writeHead(404, {'Content-Type': 'text/plain'});
//         res.write('404: File Not Found\n');
//         res.end();
//         return;
//     }
// });



// YAKS!

// var server = http.createServer();

// exports.start = function(port, callback) {
//     if (!port) {
//         throw new Error('ERROR: Port is required');
//     }

//     server.on('request', function(req, res) {
//         //DEBUG
//         console.info('INFO - uri: ', uri);
//         console.info('INFO - querystring: ', query.query);
//         console.info('INFO - path or filename: ', filename);
//         console.info('--------- ');

//         if (uri === '/customer_scoring' && query) {
//             res.writeHead(200, {'Content-Type': 'application/json'});
//             res.write('200: Success\n');
//             var payload = { 'propensity' : 0.26532, 'ranking' : 'C'};
//             res.write(JSON.stringify(payload));
//             res.end();
//             return;
//         } else {
//             res.writeHead(404, {'Content-Type': 'text/plain'});
//             res.write('404: File Not Found\n');
//             res.end();
//             return;
//         }        
//     })

//     server.listen(port);

//     if (callback) {
//         callback();
//     }
// };

// exports.stop = function(callback) {
//     server.close(callback);
// }



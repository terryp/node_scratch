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

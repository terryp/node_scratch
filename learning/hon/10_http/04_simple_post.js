
'use strict';

var options = {
    host: 'www.google.com',
    port: 80,
    path: '/upload',
    method: 'POST',
}

var req = require('http').request(options, function(res) {
    console.log('STATUS: %j', res.statusCode);
    console.log('HEADERS: %s', JSON.stringify(res.headers));
    res.setEncoding('utf8');
    res.on('data', function(chunk) {
        console.log('BODY: %s', chunk);
    });
});

req.write('data\n');
req.write('data\n');
req.end();

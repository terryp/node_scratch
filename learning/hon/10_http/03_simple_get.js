
'use strict';

var http = require('http');

var options = {
    host: 'www.google.com',
    port: 80,
    path: 'index.html',
};

http.get(options, function(res) {
    console.log('Got response: %j', res.statusCode);
}).on('error', function(err) {
        console.log('Got error: %j', err.message);
});

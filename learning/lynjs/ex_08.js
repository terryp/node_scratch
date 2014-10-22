/*jslint node: true */

'use strict';

var http = require('http');
var url = require('url');

var targetUrl = url.parse(process.argv[2]);

var result = [];

http.get(targetUrl, function(response) {
    response.setEncoding('utf8');
    
    response.on('data', function(chunk) {
        result.push(chunk);
    });
    
    response.on('error', console.error);

    response.on('end', function() {
        result = result.join('');
        console.log(result.length);     // 1 - Characters received
        console.log(result);            // 2 - Complete string of characters
    });
});

/*jslint node: true */

'use strict';

var http = require('http');
var url = require('url');

var targetUrl = url.parse(process.argv[2]);

http.get(targetUrl, function(response) {
    response.setEncoding('utf8');
    response.on('data', console.log);
    response.on('error', console.error);
});


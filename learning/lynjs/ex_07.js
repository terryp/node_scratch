/*jslint node: true */

// 'use strict';

var http = require('http');

http.get(process.argv[2], function (response) {
  response.setEncoding('utf8');
  response.on('data', console.log);
}).on('error', function(e) {
    console.log('error ' + e.message);
});

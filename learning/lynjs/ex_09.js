/*jslint node: true */

'use strict';

var http = require('http');
var url = require('url');

var _ = require('underscore');

var urls = [process.argv[2], process.argv[3], process.argv[4]];

urls = _.each(urls, function(u) {
    url.parse(u).href;
});

var results = [];
var count = 0;

function showReport() {
    _.each(results, function(r) {
        console.log(results[r]);
    });
}

function downloadAndReport(url) {
    http.get(url, function(response) {
        response.setEncoding('utf8');

        response.on('data', function(chunk) {
            results[url] = chunk;
            count++;
        });

        response.on('error', console.error);

        response.on('end', function() {
            console.log(count);
            console.log(results[url]);
            // if (count == '3') {
            //     showReport();
            // }
        });
    });
}

_.each(urls, downloadAndReport);


'use strict';

var http = require('http');
var url = require('url');

var _ = require('underscore');

var one = url.parse(process.argv[2]);
var two = url.parse(process.argv[3]);
var three = url.parse(process.argv[4]);

var urls = [one.href, two.href, three.href];

var downloadAndReport = function(url) {
    var results = {}
    var result = [];

    http.get(url, function(response) {
        response.setEncoding('utf8');
        
        response.on('data', function(chunk) {
            result.push(chunk);
        });
        
        response.on('error', console.error);

        response.on('end', function() {
            result = result.join('');
            results[url] = result;
            console.log(results);
        });
    });
};

_.each(urls, downloadAndReport);

// async.eachSeries(urls, downloadAndReport, function(err) {
//     console.log(err);
// })

// for (var i=0; i < urls.length; i++) {
//     downloadAndReport(urls[i].href);
// }

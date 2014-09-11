/*jslint node: true */

'use strict';

var fs = require('fs');
var path = require('path');

var jsdom = require('jsdom');
var request = require('request');

var url = 'http://qa.get-started.devry.edu/non-brand?cb[xp]=nonbrand';

var here = path.resolve(__dirname);
var file = 'index.html';

var r = request.get(url, function(err, res, body) {
    if (err) throw err;

    jsdom.env(
        body, 
        ['http//ajax.googleapis.com/ajax/libs/angularjs/1.2.7/angular.min.js',
         'http://code.jquery.com/jquery.js'],
        {
          FetchExternalResources: ['script', 'img', 'css', 'link'],
          ProcessExternalResources : ['script'],
        },
        function (err, window) {
            var $ = window.$;
        }
    );
});

r.pipe(fs.createWriteStream(file));

/*jslint node: true */

'use strict';

var fs = require('fs');
var path = require('path');

var jsdom = require('jsdom');
var request = require('request');

var url = 'http://qa.get-started.devry.edu/non-brand';

var here = path.resolve(__dirname);
var file = 'index.html';

request.get(url, function(err, res, body) {
    if (err) throw err;

    jsdom.env(body, function(err, window) {
        if (err) throw err;

        
    });

    var window = jsdom.jsdom(body).createWindow();
    console.log(window.document.innerHtml);
    window.close();
});

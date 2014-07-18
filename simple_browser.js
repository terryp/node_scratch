/*jslint node: true */

'use strict';

var request = require('request');
var util = require('util');

var Browser = function(browserName) {
    this.browserName = browserName;
    this.userAgent = 'request.js 2.36.0';
};

Browser.prototype.get = function(url) {
    request(url, function(err, response, body) {
        if (err) throw err;
        this.statusCode = response.StatusCode;
    });
};

var url = 'http://www.yahoo.com';
var b = new Browser();

b.get(url);

console.log(b.statusCode);


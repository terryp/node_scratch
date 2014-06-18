
'use strict';

var request = require('request');
var util = require('util');

function Browser() {
    this.name = 'Scratch Browser';
}

Browser.prototype = {
    constructor: Browser,
    get: function (url) {
        request(url, function(err, res, body) {
            if (err) throw err; 
            // FIXME: How do I take this response
            // and shoot it back to the Browser object?
            // This is async ... so when I try to do it in a 
            // Pythonic linear fashion ... status code returns
            // undefined. 
            // The async nature of this function means that
            // you can't do this ...
            // See - http://bit.ly/1lCGZL2
            // getStatusCode(res);
        });
    },
    getStatusCode: function (err, res, body) {
        if (err) throw err;
        var statusCode = res.statusCode;
        console.log(statusCode);
    },
}

var url = 'http://www.yahoo.com';
var b = new Browser();
console.log(util.inspect(b));

b.get(url);



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
    getStatusCode: function (res) {
        var statusCode = res.statusCode;
        console.log(statusCode)
    }

}

var b = new Browser();
console.log(util.inspect(b));

var url = 'http://www.yahoo.com';
console.log(statusCode);



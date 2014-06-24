
'use strict';

var async = require('async');
var request = require('request');

// FIXME: This object needs to be built along the lines of what comes back
// in the actual response from request.js. 

var Page = function(res, body) {
    var self = this;
    self.response = res;
    self.statusCode = res.statusCode;
}

Page.prototype.getTitle = function() {
    
}

function get(url) {
    console.log("\nGoing to " + url);
    request(url, function (err, res, body) {
        if (err) throw err; 

        var testPage = new Page(res,body);
        console.log(testPage.statusCode);
    });
}

var urls = [
    "http://www.google.com",
    "http://www.yahoo.com",
    "http://www.espn.com",
    "http://www.chicagotribune.com",
]

async.each(urls, get, function(err) {
    console.log("\n");
})


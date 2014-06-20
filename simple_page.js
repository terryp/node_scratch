
'use strict';

var async = require('async');
var request = require('request');

var Page = function(res, body) {
    this.response = res;
    this.statusCode = res.statusCode;
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


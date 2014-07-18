/*jslint node: true */

'use strict';

var fs = require('fs');

var async = require('async');
var cheerio = require('cheerio');
var request = require('request');

var url = 'http://www.google.com';

var openAndSearch = function(url, callback) {
    console.log('Starting.');

    // Open up a URL
    function get(url) {
        console.log("Going to " + url);
        request(url, function(err, res, body) {

        });
    }

    request(url, function (err, res, body) {
        if (err) throw err;

        var testPage = new Page('dynamic', res, body);

        if (testPage.statusCode == 200) {
            console.log(testPage.getSummary());
        }
    });

    console.log(url);

    callback();
};

openAndSearch(url, function() {
    console.log('Done.');
});

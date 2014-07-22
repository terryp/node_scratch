/*jslint node: true */

'use strict';

/*
http://stackoverflow.com/questions/6158933/how-to-make-an-http-post-request-in-node-js
*/

var util = require('util');
var request = require('request');
var cheerio = require('cheerio');

request.post(
    'http://www.imdb.com',
    { 'navbar-form' : { 'q': 'Top Secret' } },
    function(err, res, body) {
        var html = cheerio.load(body)
        console.log(html('title').text());
     }
);

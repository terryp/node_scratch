/*jslint node: true */

'use strict';

/*
http://stackoverflow.com/questions/6158933/how-to-make-an-http-post-request-in-node-js
*/

var util = require('util');
var request = require('request');
var cheerio = require('cheerio');

request.post(
    'http://www.imdb.com/find',
    { form : { 'q': 'Top Secret' } },
    function(err, res, body) {
        if (err) throw err;
        var html = cheerio.load(body);
        console.log(res.statusCode);
        console.log(html('title').text());
     }
);

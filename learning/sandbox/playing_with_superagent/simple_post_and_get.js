/*jslint node: true */

'use strict';

var cheerio = require('cheerio');
var request = require('superagent');

request
    .get('http://www.imdb.com/find')
    .query({ 'q' : 'Top Secret' })
    .end(function(res) {
        console.log(res.statusCode);
        var html = cheerio.load(res.text);
        console.log(html('title').text());
        console.log(html('.findSearchTerm').text());
    });

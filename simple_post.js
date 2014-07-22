/*jslint node: true */

'use strict';

/*
Dear god this shoudn't be so fucking HARD!

http://stackoverflow.com/questions/6158933/how-to-make-an-http-post-request-in-node-js

http://stackoverflow.com/questions/16687618/how-do-i-get-the-redirected-url-from-the-nodejs-request-module
*/

var util = require('util');
var request = require('request');
var cheerio = require('cheerio');

// var attemptOne = request.post(
//     'http://www.imdb.com/find',
//     { form : { 'q': 'Top+Secret' } },
//     function(err, res, body) {
//         //if (err) throw err;
//         var html = cheerio.load(body);
//         console.log(res.statusCode);
//         // OK ... where in the fuck, am I?!
//         console.log(res.request.uri);
//         console.log(res.request.response.headers.location);
//         // OK, I think I should be where I am at ... and yet ... 
//         console.log(html('title').text());
//      }
// );

var attemptTwo = request.post('http://www.imdb.com/find').form(
    { 'q': 'Top+Secret!'}
);

console.log(util.inspect(attemptTwo));
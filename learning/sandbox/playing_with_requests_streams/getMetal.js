/*jslint node: true */

'use strict';

var fs = require('fs');

var request = require('request');

var targetGif = 'http://38.media.tumblr.com/0f8acee33d3db35354af8e50f4347051/tumblr_mxej9zYkrw1swgho7o1_400.gif';
var fileName = targetGif.split('/').slice(-1)[0];

console.log(fileName);


// OK this works, but how would I do this in the parlance of request?
//
// request.get(targetGif).pipe(fs.createWriteStream(fileName));

request.get(targetGif, function(err, res, body) {
    if (err) throw err;
    req.pipe(fs.createWriteStream(fileName));
});

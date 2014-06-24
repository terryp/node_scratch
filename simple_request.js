
'use strict';

var request = require('request');
var util = require('util');

var options = {
    headers: {
        'User-Agent': 'request 0.26.0'
    }
}

var url = 'http://www.yahoo.com';

request(url, options, function(err, res, body) {
    if (err) throw err;
    console.log(util.inspect(res, {depth: 0}));
    // console.log("HEADERS!");
    // console.log(res.headers);
    // console.log("URI OBJECT!");
    // console.log(request.uri);
    // console.log("HTTP STATUS CODE!");
    // console.log(res.StatusCode);
    // FIXME: What about the URL that was accessed if there was a redirect. 
    // FIXME: What about SSL or no SSL?
    // FIXME: What about default user agent?
});


'use strict';

var request = require('request');

var url = 'http://www.yahoo.com';

request(url, function(err, res, body) {
    if (err) throw err;
    console.log(res);
});

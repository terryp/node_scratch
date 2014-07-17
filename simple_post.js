
'use strict';

var util = require('util');
var request = require('request');

var url = 'http://www.google.com';

var r = request.get(url, function(err, res, body) {
    if (err) throw err;

    console.log('Success!');
    console.log(res.statusCode);
    console.log(body);
});

var form = r.form();
form.append('gbqfq', 'Filling Out Forms in Node.js');

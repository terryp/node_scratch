/*jslint node: true */

'use strict';

var fs = require('fs');

fs.readFile(process.argv[2], 'utf8', function(err, data) {
    if (err) throw err;
    var results = data.toString().split('\n').length - 1;
    console.log(results);
})

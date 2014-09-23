/*jslint node: true */

'use strict';

var util = require('util');

var filter = require('./filter');

var directory = process.argv[2];
var extension = process.argv[3];

// console.log(typeof(directory));
// console.log(typeof(filter));

filter(directory, extension, function(err, files) {
    if (err) throw err;
    files.forEach(function(f) {
        console.log(f);
    }) 
});

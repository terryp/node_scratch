/*jslint node: true */

'use strict';

var fs = require('fs');
var path = require('path');

var directory = path.resolve(process.argv[2]);
var filter = process.argv[3];

fs.readdir(directory, function(err, files) {
    if (err) throw err;
    files.forEach(function(f) {
        if (path.extname(f).match(filter)) {
            console.log(f);
        }
    });
});

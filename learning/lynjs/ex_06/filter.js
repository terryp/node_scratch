/*jslint node: true */

'use strict';

var fs = require('fs');
var path = require('path');

var filter = function(directory, filter, callback) {
    var results = [];
    fs.readdir(path.resolve(directory), function(err, files) {
        if (err) {
            return callback(err);
        } else {
            for (var i = 0; i < files.length; i++) {
                if (path.extname(files[i]).match(filter)) {
                    results.push(files[i]);
                }
            }
        }
        callback(null, results);
    });
};

module.exports = filter;

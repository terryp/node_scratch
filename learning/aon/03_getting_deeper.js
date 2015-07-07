
/*jslint node: true */

'use strict';

var fs = require('fs');
var util = require('util');

var data = '/Users/terryp/Movies/BANTHIS.m4v';

fs.readFile(data, finishedReading);

function finishedReading(err, fileData) {
    if (err) {
        throw new Error('Wow. Something went wrong.');
    }

    console.log('Done.');
}

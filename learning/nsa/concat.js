/*jslint node: true */

'use strict';

var concat = require('concat-stream');

var reverse = concat(function(data) {
    data = data.toString();
    data = data.split('').reverse().join('');
    console.log(data);
});

process.stdin.pipe(reverse);

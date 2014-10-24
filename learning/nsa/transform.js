/*jslint node: true */

'use strict';

var through = require('through');

var tr = through(function(buffer) {
    buffer = buffer.toString().toUpperCase();
    this.queue(buffer);
});

process.stdin.pipe(tr).pipe(process.stdout);

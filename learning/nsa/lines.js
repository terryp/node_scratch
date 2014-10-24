/*jslint node: true */

'use strict';

var split = require('split');
var through = require('through');

var count = 0;
var tr = through(function(buffer) {
    var line = buffer.toString();
    this.queue(count % 2 === 0 
        ? line.toLowerCase() + '\n' 
        : line.toUpperCase() + '\n'
    );
    count++;
});

process.stdin.pipe(split()).pipe(tr).pipe(process.stdout);

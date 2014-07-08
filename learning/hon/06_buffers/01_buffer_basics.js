
'use strict';

var buffer = new Buffer('Hello World!');

var anotherBuffer = new Buffer('8b76fde713ce', 'base64');

var emptyBuffer = new Buffer(1024);

var str = buffer.toString()

console.log(str);

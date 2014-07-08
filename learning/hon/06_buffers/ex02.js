
'use strict';

var buffer = new Buffer(100);

for (var i = 0; i < 100; i++) {
    buffer[i] = i;
}

var slice = buffer.slice(40, 60);

console.log(slice);

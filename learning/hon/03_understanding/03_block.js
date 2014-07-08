
'use strict';

var open = false;

setTimeout(function() {
    open = true;
}, 1000);

while (!open) {
    // wait
}

console.log('Opened');

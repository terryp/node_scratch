
'use strict';

var timeoutA = setTimeout(function() {
    console.log('Hi I am timeoutA');
}, 999);

var timeoutB = setTimeout(function() {
    console.log('Hi I am timeoutB');
    clearTimeout(timeoutA);
}, 1000);

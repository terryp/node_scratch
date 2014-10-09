
/*jslint node: true */

'use strict';

/* 

    From the following SlideShare presentation:
    - 7 JavaScript Hacks for Hipsters
    - http://www.slideshare.net/berzniz/javascript-40065817

*/

var a = 10000;

console.time('testing_forward');
for (var i; i < a; i++);
console.timeEnd('testing_forward');

console.time('testing_backward');
for (var i = a - 1; i >= 0; i--);
console.timeEnd('testing_backward');

/*jslint node: true */

'use strict';

var a = 2;

(function IIFE() {
    var a = 3;
    console.log(a);
})();

console.log(a)

/*jslint node: true */

'use strict';

var a = 2; 

(function IIFE(g) {
    var a = 3; 
    console.log(a);
    console.log(g.a);
})(global);

console.log(a);

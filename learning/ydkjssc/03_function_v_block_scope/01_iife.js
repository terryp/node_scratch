/*jslint node: true */

'use strict';

var a = 2; 

(function foo() {
    var a = 3;
    console.log(a);
})();

console.log(a);

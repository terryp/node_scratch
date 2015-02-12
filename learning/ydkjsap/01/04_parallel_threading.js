/*jslint node: true */

'use strict';

var a = 20;

function foo() {
    a = a + 1; 
}

function bar() {
    a = a * 2; 
}

// arbitrary ajax-y like function named, ironically, ajax()
ajax("http://www.foo.com", foo);
ajax("http://www.bar.com", bar);

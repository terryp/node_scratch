/*jslint node: true */

'use strict';

function sayHello (name) {
    var response = 'Hello ' + name;
    var saySomething = function() {
        console.log(response);
    }
    saySomething();
}

sayHello('Terry');

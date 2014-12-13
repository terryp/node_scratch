/*jslint node: true */

'use strict';

function sayHelloAgain(name) {
    var response = 'Hello ' + name; 
    var saySomething = function() {
        console.log(response);
    }
    return saySomething;
}

var anotherResponse = sayHelloAgain('Terry');
anotherResponse();

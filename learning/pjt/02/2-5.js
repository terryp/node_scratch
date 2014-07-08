
'use strict';

var assert = require('assert');
var util = require('util');

function sendMessage(msg, obj) {
    if (arguments.length == 2) {
        obj.handleMsg(msg);
    } else {
        console.log(msg);
    }
}

// Doesn't pass in two arguments. Just shows the message. 
sendMessage('Hello World!');

// Does pass in two arguments. 
sendMessage('Hi, how are you?', {
    handleMsg: function(msg) {
        console.log('This is a custom msg: ' + msg);
    }
})

function makeArray() {
    var arr = [];
    for (var i = 0; i < arguments.length; i++) {
        arr.push(arguments[i])
    }
    return arr;
}

var list = makeArray(1, 2, 'x', 'u');

console.log(typeof(list));
console.log(util.inspect(list));

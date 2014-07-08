
'use strict';

var EventEmitter = require('events').EventEmitter;
var util = require('util');

var MyClass = function(option1, option2) {
    this.option1 = option1;
    this.option2 = option2;
}

util.inherits(MyClass, EventEmitter);

MyClass.prototype.on = function() {
    this.emit('custom event', 'some arguments');
}

var myInstance = new MyClass(1,2);
myInstance.on('custom event', function() {
    console.log('got a custom event!');
})

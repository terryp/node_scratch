/*jslint node: true */

'use strict';

var util = require('util');
var events = require('events');

function MyEmitter() {
    events.EventEmitter.call(this);
}

util.inherits(MyEmitter, events.EventEmitter);

MyEmitter.prototype.doStuff = function doStuff() {
    console.log('before');
    console.log('fire');
    console.log('after');
};

var me = new MyEmitter();
me.on('fire', function() {
    console.log('emit fired');
})

me.doStuff();

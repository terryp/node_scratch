
'use strict';

var EventEmitter = require('events').EventEmitter;
var util = require('util');

var Ticker = function() {
    var self = this;
    setInterval(function() {
        self.emit('tick');
    }, 1000);
}

util.inherits(Ticker, EventEmitter);

var myTicker = new Ticker();

myTicker.on('tick', function() {
    console.log('TOCK');
})


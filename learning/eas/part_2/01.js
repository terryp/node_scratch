/*jslint node: true */

'use strict';

var EventEmitter = require('events').EventEmitter;

function Clock() {
    this.emitter = new EventEmitter();
}

Clock.prototype.start = function() {
    var self = this;
    this.interval = setInterval(function() {
        self.emitter.emit('tick', new Date());
    }, 1000);
};

Clock.prototype.stop = function() {
    if (this.interval) {
        clearInterval(this.interval);
        this.interval = null;
    }
};

Clock.prototype.onTick = function(callback) {
    this.emitter.on('tick', callback);
}

var clock = new Clock(); 

clock.onTick(function(date) {
    console.log(date);
})

clock.start();

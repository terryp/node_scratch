/*jslint node: true */

'use strict';

var events = require('events');
var util = require('util');

var LightSwitch = function(state) {
    var self = this;
    self.state = typeof state !== 'undefined' ? state : 'off';
};

util.inherits(LightSwitch, events.EventEmitter);

LightSwitch.prototype.changeState = function() {
    var self = this;
    // FIXME use if else
    if (self.state == 'on') {
        self.state = 'off';
        self.emit('off');
    } else if (self.state == 'off') {
        self.state = 'on';
        self.emit('on');
    }
};

var LightBulb = function(LightSwitch) {
    var self = this;
    self.state = 'off';
    self.switch = LightSwitch;

    self.switch.on('on', function() {
        self.state = 'on';
    });
    
    self.switch.on('off', function() {
        self.state = 'off';
    });
};

LightBulb.prototype.currentState = function() {
    var self = this;
    console.log('The switch is ' + self.switch.state);
    console.log('The light bulb is ' + self.state);
    console.log('\n');
}

var hallwayLightSwitch = new LightSwitch();

var hallwayLightBulb = new LightBulb(hallwayLightSwitch);

// Default!
console.log('--------- EVERYTHING IS OFF --------------');
console.log('Switch is ' + hallwayLightBulb.switch.state);
console.log('Bulb is ' + hallwayLightBulb.state);
console.log('\n');

// Flick it!
console.log('------------ LIGHTS ON! ------------------');
hallwayLightSwitch.changeState();
hallwayLightBulb.currentState();

// Flick it - again!
console.log('------------ LIGHTS OFF! -----------------');
hallwayLightSwitch.changeState();
hallwayLightBulb.currentState();

// And, flick it - again!
console.log('------------ LIGHTS ON! -----------------');
hallwayLightSwitch.changeState();
hallwayLightBulb.currentState();

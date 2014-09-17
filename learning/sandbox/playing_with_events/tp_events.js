/*jslint node: true */

'use strict';

var events = require('events');

var ee = new events.EventEmitter();

ee.on('myEvent', function() {
    console.log('myEvent just happened.');
});

ee.emit('myEvent');

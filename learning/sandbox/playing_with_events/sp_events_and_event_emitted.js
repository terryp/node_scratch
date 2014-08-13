/*jslint node: true */

'use strict';

var events = require('events');             // Load the events module. 

var doorBell = new events.EventEmitter();   // Make a 'doorbell' that inherits
                                            // from events.EventEmitter.

var ringBell = function() {                 // Create a variable that does
    console.log(' < ding dong > ');         // something ... in this case
};                                          // says < ding dong > when
                                            // called.

doorBell.on('doorOpen', ringBell);          // Tell the 'doorbell' to 'listen'
                                            // for a event called 'doorOpen.'
                                            // When 'dooropen' happens (ON)
                                            // the 'doorbell' should ringBell.

doorBell.emit('doorOpen');                  // Emit an event simulating a door
                                            // opening. Hopefully the bell
                                            // will ring. 

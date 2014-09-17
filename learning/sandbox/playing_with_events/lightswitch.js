/*jslint node: true */

'use strict';

function LightSwitch(state) {                               // Very simple
    this.state = state;                                     // LightSwitch
}                                                           // object. 

function LightBulb(lightSwitchState) {                      // Very simple
    this.light = lightSwitchState.state;                    // LightBulb
}                                                           // object. 

var hallwayLightswitch = new LightSwitch();                 // Let's make a 
                                                            // specific kind
                                                            // of LightSwitch

hallwayLightswitch.state = 'on';                            // Let's change the
                                                            // the attribute
                                                            // 'state' to 'on.'

var hallwayLightBulb = new Lightbulb(hallwayLightswitch);   // Let's also make
                                                            // a specific kind
                                                            // of LightBulb that
                                                            // is tied to a 
                                                            // LightSwitch.

console.log(hallwayLightBulb.light);                        // hallwayLightBulb
                                                            // should be 'on.'
                                                            // IT IS!

hallwayLightswitch.state = 'off';                           // OK, now let's
                                                            // turn the switch
                                                            // to an 'off' state.

console.log(hallwayLightBulb.light);                        // Crap, the light
                                                            // is still on!

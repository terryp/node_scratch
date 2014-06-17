'use strict';

/*

You're not going to understand callbacks, if you don't understand functions!

All we've done is examine the notion of declaring and invoking functions, 
what does this have to do with the notion of callbacks? Well two things, 
(1) callbacks are just functions and (2) callbacks themselves are a big
part of Node. 

FIXME / SHELLY POWERS HISTORY OF CALLBACKS.

*/

function function_with_a_callback(string, callback) {   // Accepts two 
    console.log("< cue music >")                        // arguments, a string
    console.log("I'm a little function.");              // and a callback
    console.log("Here's my string: " + string);         // function. We do some
    console.log("< /cue music >");                      // normal string-y shit
    callback();                                         // but we also call the
}                                                       // callback here. 

function_with_a_callback('CALLBACK', function() {
    console.log("We interupt the function to say, we are IN the callback!");
    console.log("MIND BLOWN!");
})

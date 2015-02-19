/*jslint node: true */

'use strict';

function now() {                                // NOW
    return 21;                                  // NOW
}                                               // NOW

function later() {                              // NOW
    answer = answer * 2;                        // LATER
    console.log('Meaning of life: ', answer);   // LATER
}                                               // NOW

var answer = now()                              // NOW
setTimeout(later, 1000);                        // NOW 
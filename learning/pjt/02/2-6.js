
'use strict';

function displayError(msg) {
    if (typeof msg == 'undefined') {
        msg = 'An error occurred';
    }
    console.log(msg)
}

// Error case
displayError();

// How it's meant to be used
displayError('You done fucked up, Peppers!');

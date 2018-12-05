'use strict;'

function getValue(condition) {
    if (condition) {
        var value = 'blue';
        console.log(`In the IF - ${value}`);
    } else {
        console.log(`In the ELSE - ${value}`);
    }
    console.log(`In the BLOCK - ${value}`);
}

// getValue("something");
// getValue("");

// This is the notion of 'hositing' in effect. 
// You think that `value` is only going to get created in the IF block
// of our function. 
// Wrong. 
// JavaScript hoists that var declaration and provides access to it
// everywhere in the function. 

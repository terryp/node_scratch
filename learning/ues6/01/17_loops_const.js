'use strict';

var funcs = [];

// Errors out ... you can't modify the value of i since it's already been 
// declared. 

for(const i = 0; i < 10; i++) {
    funcs.push(function() {
        console.log(i);
    })
}

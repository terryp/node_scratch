'use strict';

for (var i = 0; i < 10; i++) {
    console.log(`In the loop: ${i}`)
}

// Surprise! The variable i is still hanging around here. 
console.log(`Outside of the loop: ${i}`);

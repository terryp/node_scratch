'use strict';

for (let i = 0; i < 10; i++) {
    console.log(`In the loop: ${i}`)
}

// Leveraging let means that i can't escape the block. 
// This will toss an error. 
console.log(`Outside of the loop: ${i}`);

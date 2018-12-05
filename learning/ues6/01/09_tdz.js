'use strict';

var bunk = "foo";
const condition = 1; 

if (condition) {
    console.log(typeof value);
    let value = 'blue';
}


// 1. JavaScript is going to look at all of this code. 
// 2. JavaScript is going to see that there are variables to be handled. 
//      a. bunk is using var ... so bunk is in the global scope. 
//      b. condition is using const ... for now, it's going in the TDZ
//      c. value is using let ... for now, it's going in the TDZ
// 3. JavaScript is done looking at variables ... time to run the code. 
// 4. JavaScript hits the IF clause ... 
//      a. condition comes out of the TDZ
// 5. JavaScript hits a call to value ... the problem is that it's still in the TDZ
// 
// If you moved the let above the call to typeof problem solved. 
// let will pull value out of the TDZ and make it accessible in the block. 

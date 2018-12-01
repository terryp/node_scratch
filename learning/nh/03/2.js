// 
// 03/2.js
//

'use strict';

const numbers = [2, 4, 1, 5, 4];

function isBiggerThanTwo(n) {
    return n > 2;
}

console.log(numbers.filter(isBiggerThanTwo));

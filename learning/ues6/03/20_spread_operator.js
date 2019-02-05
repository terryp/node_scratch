
let value1 = 25, 
    value2 = 50;

console.log(Math.max(value1, value2));

// This works fine for two variables, but what happens when we increase
// the number of variables?

// Apply was the only was to work on this in ECMAScript 5

let values = [25, 50, 75, 100];

console.log(Math.max.apply(Math, values));

// In ECMAScript 6, however, you can pass in those values like this:

let newValues = [7, 12, 42, 44];
console.log(Math.max(...newValues));

// You can mix and match with the spread operator, as well. 

let newestValues = [-2, -100, -19];
console.log(Math.max(...newestValues, 0))

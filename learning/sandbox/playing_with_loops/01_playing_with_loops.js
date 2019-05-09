/*

A remedial examination of how to loop over a container. In this case it's an
array. I wanted to take a peek at all the ways that I think I know how
to do this.

See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration

*/

// Here's the target array that I'll be looping over.
let items = [1, 2, 3, 4];

console.log(`What Am I Looping Over?!\t${items}`);

let standardLoop =
  'Standard Looping: Typical way of looping using a C style counter';
console.log(`\n${standardLoop}`);
for (let i = 0; i < items.length; i++) {
  console.log(items[i]);
}

/*

Although it may be tempting to use this as a way to iterate over Array elements, the for...in statement will return the name of your user-defined properties in addition to the numeric indexes. Thus it is better to use a traditional for loop with a numeric index when iterating over arrays, because the for...in statement iterates over user-defined properties in addition to the array elements, if you modify the Array object, such as adding custom properties or methods.

*/

let forInLoop = 'For In Looping: Similar to the Python way of looping.';
console.log(`\n${forInLoop}`);
for (let i in items) {
  console.log(items[i]);
}

console.log('\nFor Each Looping');
console.log('And yet another way! This is a for-each loop which is block like');
items.forEach(function(i) {
  console.log(i);
});

// async/await

// lodash

// underscore

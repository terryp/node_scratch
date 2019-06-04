// Function declaration
function add(x, y) {
  return x + y;
}

// Function assignment
const me = add;
const you = add;
const someoneElse = add;

// Calling the function
console.log(me(2, 3));
console.log(you(3, 3));
console.log(someoneElse(5, 5));

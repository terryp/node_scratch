// Function declaration
function add(x, y) {
  return x + y;
}

// Function declaration but also a higher order function
function higherOrderFunction(x, callback) {
  return callback(x, 5);
}

// Invoke the functions!
console.log(higherOrderFunction(10, add));

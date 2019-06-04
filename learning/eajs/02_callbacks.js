// Function declaration
function add(x, y) {
  return x + y;
}

function addFive(x, addReference) {
  // This is saying ... when you get the function addReference ... call it.
  return addReference(x, 5);
}

console.log(addFive(10, add));

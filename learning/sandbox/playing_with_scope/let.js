function processArray(array) {
  for (var i = 0; i < array.length; i++) {
    console.log('Element ', array[i]);
  }

  console.log(`I can see the variable i (${i}), but really should I?`);
}

// throws 3 the last value of i in the loop
processArray([1, 2, 3]);

function otherProcessArray(array) {
  for (let i = 0; i < array.length; i++) {
    console.log('Element ', array[i]);
  }

  console.log(`I can see the variable i (${i}), but really should I?`);
}

// throws ReferenceError: i is not defined
otherProcessArray([1, 2, 3]);

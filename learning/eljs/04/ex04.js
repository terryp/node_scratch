const deepEqual = (a, b) => {
  if (a != null && b != null) {
    if (Object.keys(a).length != Object.keys(b).length) {
      if (Object.keys(a) == )
      return false;
    } else {

    }
  } else {
    throw 'Parameters are null.';
  }
};

// If you're not null
// If you're keys length matches
// If you're values match

let obj = { here: { is: 'an' }, object: 2 };
console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, { here: 1, object: 2 }));

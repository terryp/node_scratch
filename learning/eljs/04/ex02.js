const reverseArray = array => {
  result = [];
  for (let i = array.length - 1; i >= 0; i--) {
    result.push(array[i]);
  }
  return result;
};

const reverseInPlace = arr => {
  for (let i = 0; i < Math.floor((arr.length - 1) / 2); i++) {
    let el = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = el;
  }
  return arr;
};

console.log(reverseArray(['A', 'B', 'C']));
console.log(reverseInPlace([1, 2, 3, 4, 5, 6]));

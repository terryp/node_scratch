const range = (start, end) => {
  let result = [];
  for (let i = start; i < end + 1; i++) {
    result.push(i);
  }
  return result;
};

console.log(range(1, 10));

const sum = arr => {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
  }
  return result;
};

console.log(sum(range(1, 10)));

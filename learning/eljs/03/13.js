const minus = (x, y) => {
  if (y == undefined) {
    return -x;
  } else {
    return x - y;
  }
};

console.log(minus(10));
console.log(minus(4, 3));

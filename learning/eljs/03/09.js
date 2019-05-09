const power = (base, exponent) => {
  let result = 1;
  for (let count = 0; count < exponent; count++) {
    result *= base;
  }
  return result;
};

console.log(power(2, 4));

const square1 = x => {
  return x * x;
};

console.log(square1(2));

const square2 = x => x * x;

console.log(square2(3));

const horn = () => {
  console.log('Beep Beep!');
};

horn();

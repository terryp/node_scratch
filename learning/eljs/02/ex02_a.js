for (let x = 0; x <= 100; x++) {
  output = '';
  if (x % 3 == 0) output += 'Fizz';
  if (x % 5 == 0) output += 'Fizz';
  console.log(output || x);
}

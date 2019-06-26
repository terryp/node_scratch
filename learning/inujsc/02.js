let val1 = 2;
function multiplyThis(n) {
  let ret = n * val1;
  return ret;
}
let multiplied = multiplyThis(6);
console.log('example of scope:', multiplied);


var add = new Function("first", "second = first", "return first + second");

console.log(add(1, 1));
console.log(add(1));

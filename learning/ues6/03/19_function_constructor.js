
var pickFirst = new Function("...args", "return args[0]");

console.log(pickFirst(1, 2));
console.log(pickFirst(100, 99, 18));

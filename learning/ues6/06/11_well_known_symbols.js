
obj = new Array();

expOne = obj instanceof Array;
expTwo = Array[Symbol.hasInstance](obj);

console.log(expOne);
console.log(expTwo);



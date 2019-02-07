
let a = 1, 
    b = 2, 
    tmp;

tmp = a;        // 1
a = b;          // 2
b = tmp;        // 1

console.log(a);
console.log(b);
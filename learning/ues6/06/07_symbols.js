
let uid = Symbol.for('uid');
console.log(Symbol.keyFor(uid));

let uid2 = Symbol.for('uid');
console.log(Symbol.keyFor(uid2));

let uid3 = Symbol('uid');
console.log(Symbol.keyFor(uid3));

let uid = Symbol.for('uid');
let object = {}

object[uid] = '12345';

console.log(object[uid]);
console.log(uid);
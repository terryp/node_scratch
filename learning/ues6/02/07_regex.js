'use strict';

let re1 = /ab/i,
    re2 = new RegExp(re1, 'g');

console.log(re1.toString());    // \ab\i    -> this is case insensitive
console.log(re2.toString());    // \ab\g    -> 

console.log(re1.test('ab'));
console.log(re2.test('ab'));

console.log(re1.test('AB'));
console.log(re2.test('AB'));

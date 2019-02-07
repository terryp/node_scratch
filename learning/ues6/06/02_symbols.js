
/* eslint-disable */

const firstName = Symbol('first name');
const person = {};

person[firstName] = 'Terry';

console.log('first name' in person); 
console.log(person[firstName]); 
console.log(firstName); 

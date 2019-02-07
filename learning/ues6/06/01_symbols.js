
/* eslint-disable */

const firstName = Symbol('first name');
const person = {};

person[firstName] = 'Terry';

Object.defineProperty(person, firstName, {writable: false});

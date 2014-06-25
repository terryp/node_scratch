
'use strict';

/*

You aren't going to understand Node if you don't understand scope. 

A little more hoisting but with functions. 

*/

var myName;

function myName() {
    console.log('Terry');
}
console.log(typeof myName);

var anotherName = 'Peppers';

function anotherName() {
    console.log('Peps');
}

console.log(typeof anotherName);

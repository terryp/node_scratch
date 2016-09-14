'use strict';

/*

Via ... https://www.oreilly.com/learning/how-do-javascript-closures-work

Closure / A local variable that is kept in memory after the calling function 
is returned.

Closures allow privacy and privacy is a scope kind of thing. 

*/

function count(initialValue) {
    return function() {
        return initialValue++;                         
    }                                       
}

function createPerson(firstName, lastName) {
    return {
        greet: function() {
            console.log("Hello, " + firstName + " " + lastName)
        }
    }
}

var counter = count(-5);                      // returns a function()

console.log(counter());                     // 0
console.log(counter());                     // 1
console.log(counter());                     // 2

var johnDoe = createPerson("John", "Doe")

johnDoe.greet();

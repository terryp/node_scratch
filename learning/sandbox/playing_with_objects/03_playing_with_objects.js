
'use strict'

/*

You aren't going to understand Node if you don't understand objects. 

The old notion of reference and value. Admittedly, this used to confuse the 
crap out of me when I was learning how to program with Perl.

*/


var person = 'Tom';                             // These are all string 
var anotherPerson = 'Terry';                    // primatives.
person = 'Mike';

[person, anotherPerson].forEach(function(x) {   // Prove it!
    console.log(typeof(x));
})

console.log(anotherPerson);                     // The variables are saving
console.log(person);                            // by value in this case
                                                // because they are primative
                                                // strings. What happens if
                                                // we use objects?

var personTwo = {name: 'Brian'};                // There are objects now.
var personThree = personTwo;                    // Copy one object into
personTwo.name = 'Debbie';                      // another object.
                                                // Change the value of the name
                                                // property in the original
                                                // object.

[personTwo, personThree].forEach(function(x) {  // Prove it!
    console.log(typeof(x));
})

console.log(personThree.name);
console.log(personTwo.name);

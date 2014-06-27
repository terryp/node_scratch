
'use strict';

// Using an object literal to create a plain vanilla object.

var simplePerson = {
    name: 'Terry',
    age: 39,
}

console.log(simplePerson.name);
console.log(simplePerson.age);

var complexPerson = {
    name: 'Terry',
    age: 30,
    describe: function() {
        return 'Hi, my name is ' + this.name + '!';
    }
}

console.log(complexPerson.name);            // Show the value of the 'name'
                                            // property in the complexPerson
                                            // object.

console.log(complexPerson.describe);        // This only tells me that the 
                                            // value of the 'describe' 
                                            // property is a [Function].

console.log(complexPerson.describe());      // Invoke the 'describe' function
                                            // in the complexPerson object.

complexPerson.name = 'Ian';                 // Change the value of the name
                                            // property in the complexPerson
                                            // object. 

console.log(complexPerson.name);
console.log(complexPerson.describe());

complexPerson.favColor = 'Blue';            // If a propety doesn't exist
                                            // attempting to assign something
                                            // automatically creates that 
                                            // property.

console.log(JSON.stringify(complexPerson)); // See! There's a new 'favColor'
                                            // property now!

delete complexPerson.favColor;              // 'delete' will remove that
                                            // property!

console.log(JSON.stringify(complexPerson)); // Adios 'favColors!'

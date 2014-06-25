
'use strict';

/*

You aren't going to understand Node if you don't understand objects. 

On 'own' and 'inherited' properties.

*/

var school = {
    schoolName: 'Loyola University'
};

// This property exists and is "in" so the expression evaluates to 'true.'
console.log("schoolName" in school);

// This property, however, isn't a part of the school object. 
console.log("mascotName" in school);

// What about this one? Yep, this is true since this is part of the Prototype.
console.log("toString" in school);

// To get more fine-grained, let's try 'hasOwn' and see.

console.log(school.hasOwnProperty('schoolName'));
console.log(school.hasOwnProperty('toString'));

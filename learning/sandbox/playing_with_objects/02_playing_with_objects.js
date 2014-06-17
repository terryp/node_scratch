
'use strict';

/*

You aren't going to understand Node if you don't understand objects. 

Object declaration with the notion of properties and values - a basic 
anatomy lesson.

*/

var secondObject = {                        // Declaration of an object.
    baseName : "Still an object",           // Setting properties - and values 
    favoriteColor : "Blue"                  // for the properties.
};

console.log(secondObject.favoriteColor);    // Accessing a particular property
                                            // and value of a JavaScript 
                                            // object.

var thirdObject = {                         // Declaration of an object.
    1: "Some arbitrary value",              // Here the property names are
    100: "Another arbitrary value"          // integers and not strings.
}

console.log(thirdObject[100]);              // Accessing this property's value
                                            // means that we need to use
                                            // index notation. 

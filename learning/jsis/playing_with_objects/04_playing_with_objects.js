'use strict'

/*

You aren't going to understand Node if you don't understand objects. 

Similar to the idea of functions, there are two different ways to write objects.

1. Object Literal
2. Object Constructor

Clearly TMTOWDI!

*/

var objectOne = {};                     // Creating a new object using object
                                        // literal.

var objectTwo = {                       // Creating another new object using
    name: 'Terry',                      // literal notaion. Here, though, 
    age: 39,                            // we're also setting properties and
    favColor: 'Blue',                   // values. Properties can also be
    nameTag: function() {               // functions though, like we do here.
        console.log('My name is '       
        + this.name)
    }
};

objectTwo.nameTag();

var objectThree = new Object();         // Creating another new object using
                                        // the object constructor.

objectThree.color = 'red';              // Setting properties and values.
objectThree.name = 'Just an object';    
objectThree.nameTag = function() {      // Like before values can be functions.
    console.log('My name is ' 
    + this.name)
}

objectThree.nameTag();

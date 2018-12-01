
/*jslint node: true */

/*

So here's the thing that none of the Node texts I've read have been able to 
get across - if you don't grok callbacks you aren't going to get very far
in node. 

So let's try this ... https://github.com/maxogden/art-of-node#callbacks

*/ 

'use strict';

var myNumber = 1;           // declare a variable called myNumber, assign it
                            // the value of 1

function addOne() {         // declare a function called addOne, increment
	myNumber++;             // the value of the variable myNumber by 1
}                           // when the function is called

addOne();                   // call the function
                            // behind the scenes we just added '1' to the
                            // variable '1'
        
console.log(myNumber);      // print the result of myNumber which has been 
                            // incremented by 1 per the function 'addOne().'

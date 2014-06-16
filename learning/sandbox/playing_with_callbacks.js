
/*

So here's the thing that none of the Node texts I've read have been able to 
get across - if you don't grok callbacks you aren't going to get very far
in node. 

So let's try this ... https://github.com/maxogden/art-of-node#callbacks

*/ 


var myNumber = 1;           // declare a variable called myNumber, assign it
                            // the value of 1

function addOne() {         // declare a function call addOne, increment
	myNumber++;             // the value of the variable myNumber by 1
}

addOne();                   // call the function
        
console.log(myNumber);      // print the result of myNumber which has been 
                            // incremented by 1 per the function

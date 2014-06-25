
'use strict';

/*

You aren't going to understand Node if you don't understand scope. 

setTimeout works in the global scope. 

*/

var highValue = 200; 
var constantValue = 2;

var myObj = {
    highValue: 20,
    constantValue: 5,
    calculateIt: function () {
        setTimeout(
            function () { 
                console.log(constantValue * highValue);
            }, 
        2000);
    }
}

myObj.calculateIt();

'use strict';

/*

You aren't going to understand Node if you don't understand objects. 

Serialization/deserialization.

*/

var shitList = { projectManager: "Joe", testEngineer: "Guy" }

var printed = JSON.stringify(shitList);
var printedAgain = JSON.stringify(shitList, null, 4);

console.log(printed);
console.log(printedAgain);


'use strict';

/*

You aren't going to understand Node if you don't understand objects. 

Deleting properties.

*/

var shitList = { projectManager: "Joe", testEngineer: "Guy" }

// Before delete
for (var people in shitList) {
    console.log(people);
}

// Oh, whacking day. Oh, whacking day.clear
delete shitList.testEngineer;

// After delete
console.log('\n');
for (var people in shitList) {
    console.log(people);
}

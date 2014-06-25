
//'use strict';

/*

You aren't going to understand Node if you don't understand closures. 

Closures rules and side effects. Closures can get you into trouble when
you are in a looping situation.

*/

function celebrityIDCreator (theCelebrities) {
    var i;
    var uniqueID = 100;
    for (i = 0; i < theCelebrities.length; i++) {
        theCelebrities[i]["id"] = function ()  {
        return uniqueID + i;
      }
    }
    return theCelebrities;
}

var actionCelebs = [
    {name:"Stallone", id:0}, {name:"Cruise", id:0}, {name:"Willis", id:0}
];

var createIdForActionCelebs = celebrityIDCreator (actionCelebs);

var stalloneID = createIdForActionCelebs [0];  console.log(stalloneID.id()); // 103

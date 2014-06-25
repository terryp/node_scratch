
'use strict';

/*

You aren't going to understand Node if you don't understand closures. 

Closures rules and side effects. Closures store references of outer scope
variables.

*/

function celebrityID() {
    var celebrityID = 99;
    return {
        getID: function() {
            return celebrityID;
        },
        setID: function(newID) {
            celebrityID = newID;
        }
    }
}

var myID = celebrityID();

console.log(myID.getID());
myID.setID(351);
console.log(myID.getID());

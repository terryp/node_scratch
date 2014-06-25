
'use strict';

/*

You aren't going to understand Node if you don't understand closures. 

Closures rules and side effects. Closures can get you into trouble when
you are in a looping situation.

*/

function personIDCreaator(people) {
    var i;
    var uniqueID = 100;
    for (i = 0; i < people.length; i++) {
        people[i]["id"] = function() {
            return uniqueID + 1;
        }
    }

    return people;
}

var normalPeople = [
    {name: 'Terry', id: 10},
    {name: 'Laura', id: 20},
    {name: 'Ian', id: 30},
    {name: 'Owen', id: 40}
];

var makeIDs = personIDCreaator(normalPeople);

var terryID = makeIDs[0];

console.log(terryID);

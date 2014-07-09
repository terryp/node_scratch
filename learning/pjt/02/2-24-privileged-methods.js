
'use strict';

function User(name, age) {
    var year = (new Date()).getFullYear() - age;

    this.getYearBorn = function() {
        return year;
    }
}

var user = new User('Terry', 39);

console.log(user.getYearBorn());


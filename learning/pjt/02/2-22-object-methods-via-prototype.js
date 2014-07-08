
'use strict';

function User(name, age) {
    this.name = name;
    this.age = age;
}

User.prototype.getName = function() {
    return this.name;
}

User.prototype.getAge = function() {
    return this.age;
}

var user = new User('Terry', 39);

console.log(user.getName());
console.log(user.getAge());

console.assert(user.getName() == 'Terry');
console.assert(user.getAge() == 39);

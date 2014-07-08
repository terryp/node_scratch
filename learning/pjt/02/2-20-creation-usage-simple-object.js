
'use strict';

function User(name) {
    this.name = name;
}

var me = new User('Terry');
console.log(me.name);
console.log(me.constructor);

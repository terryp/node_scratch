
'use strict';

function User() {};

function OtherUser() {};

var me = new User();
var you = new me.constructor();
var robot = new OtherUser();

console.log(me.constructor, you.constructor);

console.assert(me.constructor == you.constructor);

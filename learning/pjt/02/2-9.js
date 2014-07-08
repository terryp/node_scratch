
'use strict';

// Be very particular - strict, even - about variable types.
function strict(types, args) {
    if (types.length != args.length) {
        throw 'Invalid number of arguments. Expected ' + types.length + 
        ', received ' + args.length + ' instead';
    }

    for (var i = 0; i < args.length; i++) {
        if (args[i].constructor != types[i]) {
            throw 'Invalid argument type. Expected ' + types[i].name +
            ', received ' + args[i].constructor.name + ' instead';
        }
    }
}

var types = [String, Array, Object]

var args = [
    'I am a string', 
    ['I', 'am', 'a', 'array'],
    {'desc': 'I am an object'},
];

strict(types, args);

function userList(prefix, num, users) {
    strict([String, Number, Array], arguments);
    for (var i = 0; i < num.length; i++) {
        console.log(prefix + ': ' + users[i]);
    }
}

userList('meep', 2, ['tp', 'ip']);

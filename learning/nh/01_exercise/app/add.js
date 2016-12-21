
// app/add.js
//
// The guts of the application, does the addition.

function add(input) {
    const [a, b] = input.split(' ');
    return Number(a) + Number(b);
};

module.exports.add = add;

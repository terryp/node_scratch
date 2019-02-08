
let firstName = Symbol('first name');

let person = {
    [firstName]: "Terry"
}

Object.defineProperty(person, firstName, {writable: false});

let lastName = Symbol('last name');

Object.defineProperties(person, {
    [lastName]: {
        value: 'Peppers',
        writable: false
    }
});

console.log(person[firstName]);
console.log(person[lastName]);
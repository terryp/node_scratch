

// ECMAScript 6 approach to the object literal. 
// The duplication is removed with comma notation and short-hand

function createPerson(name, age) {
    return {
        name, 
        age
    };
}

let me = new createPerson("Terry Peppers", 44);
console.log(me)
console.log(me.name)
console.log(me.age)

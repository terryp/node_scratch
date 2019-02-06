
// ECMAScript 5 approach to the object literal. 
// There's a little duplication in there with the parameters. 

function createPerson(name, age) {
    return {
        name: name, 
        age: age
    };
}

let me = new createPerson("Terry Peppers", 44);
console.log(me)
console.log(me.name)
console.log(me.age)

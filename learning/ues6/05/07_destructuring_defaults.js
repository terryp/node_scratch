
let node = {
    type: "Identifier",
    name: "Foo",
};

let {type, name, value = true} = node;

console.log(type);
console.log(name);
console.log(value);
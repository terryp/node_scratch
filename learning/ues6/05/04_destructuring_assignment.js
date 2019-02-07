
let node = {
    type: "Identifier",
    name: "Foo",
},

type = "Literal", 
name = 5;

({type, name} = node);

console.log(type);
console.log(name);
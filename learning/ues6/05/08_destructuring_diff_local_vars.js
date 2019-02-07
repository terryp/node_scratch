
let node = {
    type: "Identifier",
    name: "Foo",
};

let {type: localType, name: localName} = node;

console.log(localType);
console.log(localName);
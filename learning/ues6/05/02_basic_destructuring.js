
let node = {
    type: "Identifer",
    name: "Foo"
};

let {type, name} = node;

console.log("Here's the node object and the type and name properties:");
console.log(node.type);
console.log(node.name);

console.log("Here's the local variables type and name from the node object:");
console.log(type);
console.log(name);
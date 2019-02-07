
let node = {
    type: "Identifier"
};

let {type: localType, name: localName = "bar"} = node;

console.log(localType);
console.log(localName);
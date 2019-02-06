
var receiver = {};

Object.assign(receiver, 
{
    type: "js",
    name: "file.js"
}, 
{
    type: "css"
}
);

console.log(receiver.type);
console.log(receiver.name);


let node = {
    type: "Identifier", 
    name: "foo",
    loc: {
        start: {
            line: 1, 
            column: 1
        },
        end: {
            line: 1, 
            column: 4
        }
    }
};

let {loc: {start: localStart}} = node;

console.log(localStart.line);
console.log(localStart.column);
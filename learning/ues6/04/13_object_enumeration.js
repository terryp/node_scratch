
var obj = {
    a: 1, 
    0: 1, 
    c: 1, 
    2: 1, 
    b: 1,
    1: 1
};

obj.d = 1;

console.log(Object.getOwnPropertyNames(obj).join(""));

/*
    0
    1
    2
    a
    c
    b
    d
*/

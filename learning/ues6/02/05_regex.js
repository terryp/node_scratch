'use strict';

let text = 'hello1 hello2 hello3', 
    // hello + any digit + any space + any char or nothing
    // pattern has "no regex flags"
    pattern = /hello\d\s?/,                     
    result = pattern.exec(text),
    // globalPattern has the "g" flag
    globalPattern = /hello\d\s?/g,
    globalResult = globalPattern.exec(text),
    // stickyPattern has the "y" flag
    stickyPattern = /hello\d\s?/y,
    stickyResult = stickyPattern.exec(text);

console.log(result[0]);
console.log(globalResult[0]);
console.log(stickyResult[0]);

console.log('\n');

console.log(pattern.lastIndex);
console.log(globalPattern.lastIndex);
console.log(stickyPattern.lastIndex);

console.log('\n');

result = pattern.exec(text);
globalResult = globalPattern.exec(text);
stickyResult = stickyPattern.exec(text);

console.log(result[0]);
console.log(globalResult[0]);
console.log(stickyResult[0]);

console.log('\n');

console.log(pattern.lastIndex);
console.log(globalPattern.lastIndex);
console.log(stickyPattern.lastIndex);


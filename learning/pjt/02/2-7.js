
'use strict';

var num = 'Foo';

if (typeof num == 'string') {
    num = parseInt(num);
}

console.log(num);

var arr = 'This, is, a, string';

if (typeof arr == 'string') {
    arr = arr.split(",");
}

console.log(arr);

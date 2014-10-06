/*jslint node: true */

'use strict';

function Foo() {
    this.bar = 'baz';
    console.log(this);
}

var f = new Foo();
console.log(f.bar);

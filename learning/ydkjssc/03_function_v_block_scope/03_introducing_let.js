/*jslint node: true */

'use strict';

function withLet() {
    for (let i = 0; i < 10; i++) {
        console.log(i);
    }
    console.log(i);
}

// withLet();

function withoutLet() {
    for (var i = 0; i < 10; i++) {
        console.log(i);
    }
    console.log(i);
}

withoutLet()

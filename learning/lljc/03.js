
var x = 10;

function foo(a) {
    var b = 20;

    function bar(c) {
        var d = 30;
        return boop(x + a + b + c + d);
    }

    function boop(e) {
        return e * -1;
    }

    return bar;
}

var moar = foo(5); // Closure

// 10 + 5 + 20

moar(15);


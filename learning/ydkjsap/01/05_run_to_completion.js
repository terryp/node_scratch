var a = 1;
var b = 2;

function foo() {
  a++;
  b = b * a;
  a = b + 3;
  // in a "now" like thinking the result is:
  // a = 5
  // b = 4
}

function bar() {
  b--;
  a = 8 + b;
  b = a * 2;
  // in a "now" like thinking the result is:
  // a = 9
  // b = 18
}

// arbitrary ajax-y like function named, ironically, ajax()
ajax('http://www.foo.com', foo);
ajax('http://www.bar.com', bar);

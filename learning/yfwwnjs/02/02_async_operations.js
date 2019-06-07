function doSomething(asyncCallback) {
  asyncCallback();
}

doSomething(() => console.log('This runs synchronously'));

function doSomethingElse(asyncCallback) {
  setTimeout(asyncCallback, Math.random() + 1000);
}

doSomethingElse(() => console.log('This runs asynchronously'));

const promise = Promise.resolve('Hello World!');

promise instanceof Promise;

//console.log(promise);

promise.then(res => console.log(res));

/*
 * If promise changes state from pending to fulfilled, Node.js
 * will call your onFulfilled function.
 */

promise.then(function onFulfilled(res) {
  console.log(res);
});

promise.then(
  function onFulfilled(res) {
    console.log(res);
  },
  function onRejected(err) {
    console.log(err);
  }
);

# I Never Understood JavaScript Closures Until ...

- https://medium.com/dailyjs/i-never-understood-javascript-closures-9663703368e8

## Notes

- Execution Contexnt / The environment or scope the current code is being evaluated in.

- Global / The default environment where code is executed in JavaScript.

- Function / The environment when you enter the flow of a function.

## Example

```js
const foo = 'hello'; // EC -- Global
const bar = 'world'; // EC -- Global

function hello() {
  // EC -- Global ... since you're only
  // defining the function here.
  console.log(foo + bar);
}

hello(); // EC - Function
```

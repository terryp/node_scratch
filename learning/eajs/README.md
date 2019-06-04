# Evolution of Asynchronous JavaScrip

## Overview

- Sometimes you need something, and getting it isn't as straightforward as just getting in.

- To go to hockey practice, or to not go to hockey practice.
  - Synchronous
    - I go to practice.
    - I watch him.
    - I pick him up.
  - Asynchronous
    - I go to practice.
    - I drop him off.
    - I do some other things.
    - I pick him up.

## Callbacks

- JavaScript as a language allows you to define a function, and then call it later on in the process.

- Function expression:

  ```js
  // function definition
  function sayHello() {
    console.log('Hello, World!');
  }

  // function call
  sayHello();
  ```

## Promises

- Promises are a way to avoid Callbacks.

- Promises take a single argument - it's a callback.

- This callback takes two parameters, resolve and reject.

async function test() {
  await new Promise(resolve => setTimeout(() => resolve(), 1000));
  console.log('Hello World!');
}

test();

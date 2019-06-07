const p1 = Promise.resolve('p1');

const p2 = p1.then(() => Promise.resolve('p2'));

p2.then(res => console.log(res));

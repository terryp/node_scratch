function add(a, b, callback) {
  let result = a + b;
  callback(result);
}

add(2, 3, c => console.log(`2 + 3 = ${c}`));
add(1, 1, c => console.log(`Is 1 + 1 = 3? ${c === 3}`));

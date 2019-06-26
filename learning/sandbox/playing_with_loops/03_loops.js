let items = [1, 2, 3, 4];

for (let i = 0; i < items.length; i++) {
  console.log(items[i]);
}

for (let i in items) {
  console.log(items[i]);
}

for (let i of items) {
  console.log(i);
}

for each (let i in items) {
  console.log(i);
}
